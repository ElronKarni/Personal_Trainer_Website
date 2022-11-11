const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
require("dotenv").config();

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

const programsRoute = require("./routes/programs");
app.use("/programs", programsRoute);

const optionsRoute = require("./routes/options");
app.use("/options", optionsRoute);

//Connect to MongoDB
try {
  mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to DB !");
  });
} catch (error) {
  console.log(error);
}

//Start the Server
app.listen(5000, () => console.log(`Server Running on port 5000`));
