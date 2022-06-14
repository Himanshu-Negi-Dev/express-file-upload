const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use('/file-uploads/v1', productRoutes);

app.get('/',(req, res)=>{
  res.send("hello from server")
})


app.listen(3001,()=>console.log('server connectrs'));