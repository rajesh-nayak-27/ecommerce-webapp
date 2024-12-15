const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors=require("cors")


const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "./build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
