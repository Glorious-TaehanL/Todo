const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');


app.use(express.json());
app.use('/api/v1/tasks',require('./routes/task'));

const port = 8080;
const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port,console.log("Sever Listening ..."));
  } catch (error) {
    console.log(error);
  }
};

start();

