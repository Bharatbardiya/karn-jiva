const mongoose = require("mongoose");
const validator = require("validator");


const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [30, "Your name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    
  },
  phoneNo: {
    type: Number,
    minlength: [10, "Your password must be at 10 characters"],
  },
  message: {
    type: String,
  },

 
});


module.exports = mongoose.model("addContact", contactSchema);
