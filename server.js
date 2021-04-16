const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/api');

const app = express();

app.use(bodyParser.json());

// connection to the DB -------------------------------------------------
const DBconnection =
  "mongodb+srv://ahmed:boats1105@cluster0.opieo.mongodb.net/HAMSTERSWARS?retryWrites=true&w=majority";
mongoose
  .connect(DBconnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Seccessfully connected to the DB");
    app.listen(process.env.port || 5000, () => {
      console.log("listening ok");
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.use(router);
