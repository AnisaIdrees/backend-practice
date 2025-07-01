const express = require('express');
const app= express()
const Port = 8000;
const db = require('./db')




app.get('/', (req , res)=>{
    res.send('hello world')
})
app.listen(Port , ()=>console.log('server is running on port '));



const createUser = async()=>{
try {
 const userRef =(await db()).collection('products');
    const result =await userRef.insertOne({
        name:'pizza',
        quantity:5,
        price:'3998'
    })
    console.log('user inserted >>>>>>>>>' ,result);
    
} catch (error) {
   console.log('database error', error);
    
} 
}
createUser()