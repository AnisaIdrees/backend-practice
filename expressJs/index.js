const express= require('express');
const { log } = require('util');
const path = require('path')
const app = express();



//---- simple create server with express js----//

// app.get( '/home' , (req,res)=>{

// res.send('home page')

// }).listen(5000 , ()=>console.log('server chl gya '));




//  with nodemon
// app.get('/' , (req , res)=>{
// res.send('home page he ye ')
// }).listen(5000, ()=>console.log('server chl gya'));

// console.log('helooooooooooooojekff');




const publicPath = path.join(__dirname , "public")
// app.use(express.static(publicPath))


app.get("/home", (req , res)=>{
// res.send(`${publicPath}/about.html`)
res.sendFile(`${publicPath}/index.html`)
});


app.get('/', (req,res)=>{

 res.send(`<h1>heloo home</h1>`)

});




app.get("/products", (req,res)=>{
res.send(`<h1>hello products ${req.query.prize}</h1>`)
})
app.get('/*any', (req, res)=>{
res.send(`<h1>page not found</h1>`)
})
app.listen(5000, ()=>console.log('chl gya hon bhaiaa'));
