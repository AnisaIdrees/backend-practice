// const { default: chalk } = require("chalk");
const fs = require('fs');
// const filePath = require('./text.txt')

// console.log(chalk.red ('hello'));


// write file sync
// const write = fs.writeFileSync('text.txt' , 'hello text file create'); 
// console.log(write);


// // read file sync
// const readFile = fs.readFileSync("text.txt" , 'utf-8')
// console.log(readFile);


// // update file sync
// const updateFile = fs.appendFileSync('text.txt','text file created and update check');
// console.log(updateFile);



// // delete file sync
// const deleteFile = fs.unlinkSync('text.txt');
// console.log('delete>>>',deleteFile);


// // fs.unlinkSync('text.txt')





// //----------- Asynchronously ----------------//
// fs.writeFile('text.txt' , 'create file asynchronously.....' , (err , data)=>{
// if(err) throw new Error(err)
//     console.log(err);
    
// })
// fs.unlink('text.txt',()=>{})



// write file async
fs.writeFile('book.js' , `console.log("hello book.js")`, ()=>{})

fs.readFile('book.js', 'utf-8',()=>{})

