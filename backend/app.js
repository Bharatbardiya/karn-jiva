const express = require("express")

const app = express();
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
// app.use(cors())
// app.use(
//     cors({
//         credentials: true,
//         origin: "http://127.0.0.1:3000",
//     })
// );

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(express.json({limit:"50mb"}));
app.use(bodyparser.urlencoded({limit:"50mb", extended:true}));
app.use(cookieParser());

const auth = require("./routes/auth");
const blog = require("./routes/blog");


app.use("/api/v1", auth);
app.use("/api/v1", blog);


module.exports = app;
