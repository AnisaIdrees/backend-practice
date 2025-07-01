const express = require('express');
const app= express()
const port = 5000;
require('./config/config')// db connected
const productRoutes= require('./routes/route')






// built-in middleware
app.use(express.json())

app.use('/api/products' , productRoutes)

// app.get("/", (req ,res )=>{
// res.send('hello world')
// })
app.listen(port , ()=>console.log(`server is running on ${port}`));
