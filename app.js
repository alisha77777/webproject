// require("dotenv").config();
// require("./config/database").connect();
// const express = require("express");

// const app = express();

// app.use(express.json());

// // Logic goes here
// //Handling Errors
// app.use((err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.message = err.message || "Internal Server Error";
//     res.status(err.statusCode).json({
//       message: err.message,
//     });
//   });

// module.exports = app;