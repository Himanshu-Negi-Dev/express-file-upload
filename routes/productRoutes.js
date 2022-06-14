const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  res.send("getAll products");
});

router.post('/', (req,res)=>{
  res.send('hello from createProduct');
});

router.post('/uploads', (req, res)=>{
  res.send("hrllo from uploads");
})

module.exports = router;