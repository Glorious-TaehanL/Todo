const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api/v1/tasks', require('./routes/task'));
app.use(errorHandlerMiddleware);

const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Sever Listening port number is : ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
