const User = require("../models/user");
const Contact = require("../models/addContact");
const Blog = require("../models/blog");
const Appointment = require("../models/appointments");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const multer = require("multer");
const path = require('path');
const fs = require('fs');
// api/v1/addReview
exports.addBlog = async (req, res, next) => {
    try {
        const { blogTitle,blogContent, category } = req.body;
        const comment = await Blog.create({
            blogTitle,
            blogContent,
            category,
        });
        // console.log(req.body);
        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
exports.showBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        return res.status(200).json({
            success: true,
            blogs
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
    
};
exports.addContact = async (req, res, next) => {
    try {
        const { name, email, phoneNo, message } = req.body;
        const comment = await Contact.create({
            name,
            email,
            phoneNo,
            message,
        });
        // console.log(req.body);
        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
exports.findContact = async (req, res, next) => {
    try {
        console.log("hello");
        const contact = await Contact.find();
        console.log(contact);
        return res.status(200).json({
            success: true,
            contact,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
exports.deleteContact = async (req, res, next) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return next(new ErrorHandler("No Order found with this ID", 404));
        }
        console.log(contact);
        res.status(200).json({
            success: true,
        });
    } catch (e) {
        return next(new ErrorHandler(e.message, 500));
    }
};
exports.bookAppointment = async (req, res, next) => {
    try {
        const { user, formData } = req.body;
        // console.log("appointment: "+ formData)

        const appointment = await Appointment.create({
            loginUser: user.name,
            loginEmail: user.email,
            name: formData.Name,
            email: formData.Email,
            phoneNo: formData.PhoneNo,
            fromDate: formData.Date1,
            toDate: formData.Date2,
            serviceType: formData.Service,
            message: formData.Message,
        });
        const message = `Appointment is booked with name ${formData.Name} and email ${formData.Email} and phone ${formData.PhoneNo} and from ${formData.Date1} to ${formData.Date2}`;
        await sendEmail({
            email: 'rachitgupta52774@gmail.com',
            subject: 'Appointment Book',
            message
        })
        res.status(200).json({
            success : true,
            message : "An email has been sent to you with further instructions."
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
exports.findAppointment = async (req, res, next) => {
    try {
        console.log("findAppointment called");
        const appointment = await Appointment.find();
        console.log(appointment);
        return res.status(200).json({
            success: true,
            appointment,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
exports.deleteAppointment = async (req, res, next) => {
    try {
        const contact = await Appointment.findByIdAndDelete(req.params.id);

        if (!contact) {
            return next(new ErrorHandler("No Order found with this ID", 404));
        }
        console.log(contact);
        res.status(200).json({
            success: true,
        });
    } catch (e) {
        return next(new ErrorHandler(e.message, 500));
    }
};
exports.CountBlogs = async (req, res, next) => {
    try {
        const count = await Blog.countDocuments();
        return res.status(200).json({
            success: true,
            count,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message,500));
    }
}

exports.storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'frontend/public/uploads');
    },
    filename: function (req, file, cb) {
        console.log(file.originalname);
      cb(null, Date.now() + path.extname(file.originalname));
    }
});

exports.createBlog =async (req, res) => {
    const { title, description, category } = req.body;
    const imagePath = req.file.path;
    image_name = imagePath.split('\\').slice(-1)[0]
    console.log(req.file.path)
    console.log(req.body)
    try {
      const post = await Blog.create({
        blogTitle: title,
        blogContent: description,
        category: category,
        imagePath: image_name,
      });
      console.log(post);
      await post.save();
      res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
      res.status(500).json({ message: 'Error creating post', error });
    }
}

exports.deleteBlog = async(req, res) => {
    const id = req.params.id;
    try{
        console.log(id, typeof id);
        const item = await Blog.findById(id);
        image_name = item.imagePath;
        let image_path = 'frontend/public/uploads/'+image_name;

        fs.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting image: ${JSON.stringify(err)}`);
            }
        });

        const response = await Blog.findByIdAndDelete(item._id);
        return res.status(200).json({message: 'Post deleted successfully', data : response});
    } catch(error){
        return res.status(500).json({message: `Error deleting post: ${error}`});
    }
}