const express = require('express');
const app = express();
require('dotenv').config();

const { connectDB } = require('./db/connect');
const { errorHandler } = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/file-uploads/v1', productRoutes);

app.use(errorHandler);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3001, () => console.log("server running"))
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
