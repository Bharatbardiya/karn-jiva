const mongoose = require("mongoose");
const validator = require("validator");

const blogSchema = new mongoose.Schema({
  blogTitle: {
    type: String,
    required: [true, "blog title is required"],
    max: 30,
  },
  blogContent: {
    type: String,
    required: [true, "content is required"],
  },
  category: {
    type: String,
    required: [true, "Please select kind of blog"],
    enum: {
      values: ["Hearing Assessment & Hearing Aids", "Speech Therapy", "Occupational Therapy", "Vestibular Evaluation & Rehabilitation", "ABA Therapy / Behavioral Therapy", "Psychological Evaluation", "Physiotherapy", "Special Education"],
      message: "Please select correct category for product",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imagePath: {
    type: String,
    required: [true, "Please upload image"],
  },
});

module.exports = mongoose.model("createBlog", blogSchema);
