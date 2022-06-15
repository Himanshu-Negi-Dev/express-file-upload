const express = require('express');
const app = express();
require('dotenv').config();
const cloudinary = require('cloudinary').v2
const fileUpload = require('express-fileupload');
const { connectDB } = require('./db/connect');
const { errorHandler } = require('./middleware/errorHandler');
const productRoutes = require('./routes/productRoutes');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(express.json());
app.use(fileUpload({'useTempFiles': true}));

app.use('/file-uploads/v1', productRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server running at PORT: ${port}`))
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();
