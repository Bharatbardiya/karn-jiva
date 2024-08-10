const crypto = require("crypto");
const User = require("../models/user");
const {ErrorHandler, BaseService} = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const APIError = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const HttpStatusCode = require("../utils/constants");

exports.testing = async (req, res, next) =>{

    res.status(200).json({
        success:true,
        message:"everything working fine."
    })
}

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        console.log(req.body ,"hello");
        const isUserExist = await User.findOne({email:email});
        if(isUserExist){
            return res.status(400).json({
                success: false,
                error: "User already exists",
            });
        }
        const user = await User.create({
            name,
            email,
            password,
        });

        sendToken(user, 200, res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

// Login User => /api/v1/login

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next(new BaseService().get_400_bad_request(res, false, "Email or Password is missing"))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new BaseService().get_401_unauthorized(res, false, "user not found with given email"));
    }

    //checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        return next(new BaseService().get_401_unauthorized(res, false, "Invalid Password"));
    }

    sendToken(user, 200, res);
};

// get currently logged in user details => /api/v1/me

exports.getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

// logout the user  /api/v1/logout
exports.logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });
        return (new BaseService().get_200_success(res, true, "Logout Successfully"))
    } catch (error) {
        return new BaseService().get_500_internal_server_error(res, false, error.message);
    }
};

exports.UserCount = async (req, res, next) => {
    try {
        const user = await User.countDocuments();
        res.status(200).json({
            success: true,
            count: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
exports.forgetPassword = async (req, res, next) => {
    console.log('Forget Password')
    const user = await User.findOne({email : req.body.email});

    if(!user) {
        return next(new ErrorHandler("user not found with this email", 404));
    }
    const resetToken = await user.resetPassword();
    // console.log("reset token" , resetToken);
    await user.save({validateBeforeSave : false});
    // console.log(process.env.FRONT_URL)
    const resetUrl = `${process.env.FRONT_URL}/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\nPlease click on the following link to reset your password: \n\n${resetUrl}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.\n`;
    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Reset Request',
            message
        })
        res.status(200).json({
            success : true,
            message : "An email has been sent to you with further instructions."
        })
    }
    catch(err) {
            user.resetPasswordExpire = undefined;
            user.resetPassword = undefined;
            await user.save({validateBeforeSave: false});

            return next(new ErrorHandler(err.message, 500));

        }

}
exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');
    console.log("reset password token")
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire : { $gt : Date.now() }
    });

    if(!user) {
        return next(new ErrorHandler("Invalid Token", 400));
    }
    if(req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Passwords do not match", 400));
    }
    console.log("user reset")
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user , 200 , res);

}
