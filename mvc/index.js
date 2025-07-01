const express = require('express');
const app= express()
const port = 5000;
require('./config/config')


app.get("/", (req ,res )=>{
res.send('hello world')
})
app.listen(port , ()=>console.log(`server is running on ${port}`));
