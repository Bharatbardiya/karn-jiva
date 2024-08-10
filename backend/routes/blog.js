const express = require("express");

const router = express.Router();

const {isAuthenticatedUser} = require("../middlewares/auth.js");
const {
    addContact ,
    findContact,
    deleteContact,
    addBlog,
    showBlogs,
    bookAppointment,
    findAppointment,
    deleteAppointment,
    CountBlogs,
    createBlog,
    storage
} = require("../controllers/blogController");

const multer = require("multer");
const upload = multer({storage: storage});

router.route("/admin/findContact").get(findContact);
router.route("/admin/findAppointment").get(findAppointment);
router.route("/addContact").post(addContact);
router.route("/admin/deleteContact/:id").delete(deleteContact);
router.route("/admin/deleteAppointment/:id").delete(deleteAppointment);
router.route("/admin/createBlog").post(addBlog);
router.route("/bookAppointment").post(bookAppointment);
router.route("/getAllBlogs").get(showBlogs);
router.route("/countBlog").get(CountBlogs);
router.route("/createblog").post( upload.single('image'), createBlog);


module.exports = router;