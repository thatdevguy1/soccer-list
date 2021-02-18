require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3001;

let teamsRoute = require("./server/routes/team");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname, "client/build/index.html"));
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/api", teamsRoute);

/* MONGOOSE CONNECT */
const db = process.env.DB_HOST;
mongoose.Promise = global.Promise;

const startServer = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    //If a connection to the database is made we can start our server
    app.listen(port, () => console.log(`app listening on port ${port}!`));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
