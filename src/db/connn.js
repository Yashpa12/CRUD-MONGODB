const mongoose = require("mongoose");

// mongo Compass url

const mongoURL = "mongodb://localhost:27017/olymics";

// mngoose connection :- ising by promise
mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch((err) => {
    console.log("no connection ");
  });
