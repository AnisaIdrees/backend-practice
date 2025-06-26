const express = require('express');
const app= express()
const Port = 8000;
const db = require('./db')




app.get('/', (req , res)=>{
    res.send('hello world')
})
app.listen(Port , ()=>console.log('server is running on port '));

