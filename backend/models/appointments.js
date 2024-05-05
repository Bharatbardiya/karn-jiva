const mongoose = require("mongoose");
const validator = require("validator");


const appointmentSchema = new mongoose.Schema({
    loginUser:{
      type: String,
    },
    loginEmail:{
      type:String,
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [30, "Your name cannot exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    
    phoneNo:{
      type: String,
    },
    fromDate:{
      type: Date,
    },
    toDate:{
      type: Date,
    },
    serviceType:{
      type: String,
      required: [true, "please select a service type"],
    },
    message:{
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
  },
});


module.exports = mongoose.model("bookAppointment", appointmentSchema);