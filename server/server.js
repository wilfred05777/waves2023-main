const express = require("express");
const app = express();
const mongoose = require("mongoose");
const xss = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");

// // sanitize
app.use(xss());
app.use(mongoSanitize());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// https://www.udemy.com/course/the-react-practice-course-learn-by-building-projects/learn/lecture/25818592#notes

// 62. Creating the server
