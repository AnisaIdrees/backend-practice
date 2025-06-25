
const express = require('express');
const app = express();

function authMiddleware(req, res, next) {
     const token = req.headers['authorization'];
     if (token === 'secret-token') {
          next();
     } else {
          res.status(401).send('Unauthorized');
     }
}

app.use(authMiddleware);

app.get('/', (req, res) => {
     res.send('Welcome to protected route');
});

app.listen(5000, () => {
     console.log('Server is  running on 5000 port...')});



// const express = require('express');
// const app = express();
// const users = require('./MOCK_DATA.json')
// const fs = require('fs');

// const PORT = 8000;


// // potsman
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))

// app.get('/api/users', (req, res) => {
//      res.json(users)
// })


// app.route('/api/user/:id')
//      .get((req, res) => {

//           const id = Number(req.params.id);
//           const user = users.find((user => user.id === id))
//           res.json(user)
//      })
//      .patch((req, res) => {

//           const id = Number(req.params.id);
//           const data = req.body;
//           let user = users.find((user => user.id === id))

//           // update in user

//           for (let key in data) {
//                if (Object.prototype.hasOwnProperty.call(user, key)) {
//                     user = { ...user, [key]: data[key] }
//                }
//           }


//           users[user.id - 1] = user


//           fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => { })
//           return res.json({
//                message: `update user succuessfully`, user
//           })
//      })
//      //delete
//      .delete((req, res) => {

//           const id = Number(req.params.id);
//           let index = users.findIndex((user => user.id === id))
//           users.splice(index, 1);

//           fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => { })
//           return res.json({
//                message: `delte hogya`
//           })

//      })

// app.post('/users', (req, res) => {
//      users.push({ ...req.body, id: users.length + 1 })
//      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => { })
//      return res.json({
//           message: `add succuss`,
//           userId: users.length + 1
//      })
// })
// app.listen(8000, () => console.log("server is running on port 8000"));




// app.get('/' , (req , res )=>{
// res.send(`<h1>Home Page </h1>`)
// })


// // json form me res
// app.get('/users', (req , res)=>{
//     res.json(users).stringify()
// })

// // html form me res
// // app.get('/allUsers',(req , res)=>{


// // const html = `${users.map((user =>{
// //      return `<li>${user.first_name}</li>`
// // })).join('')}`
// //   res.send(html)
// // })













// app.get('/allUsers', (req , res)=>{

//     const html = `${users.map((user =>{
//      return `<li>${user.first_name}</li>
//      <h1>${user.last_name}</h1>`
//     })).join("")}`

//    res.send(html)
// })
// app.listen(`${PORT}` , console.log('server is running on 8000port'));



// //postman
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))



// app.get('/api/users', (req, res) => {
//     res.json(users)
// })


// app.get('/users', (req, res) => {
//     const html = ` ${users.map((user => {
//         return `<li>${user.email}</li>`
//     })).join('')}`

//     res.send(html)
// })


// //rest api
// // 0 get all users
// app.get('/api/allUsers', (req, res) => {
//     res.json(users)
// })

// //1 get single user

// app.get('/api/user/:id', (req, res) => {
//     const user = users.find((user => user.id === Number(req.params.id)))
//     res.json(user)
// })

// //2 patch
// app.patch('/api/user/:id', (req, res) => {

//     const data = req.body;
//     const id = Number(req.params.id)
//     res.json({
//         message: `updated Patched user with id ${id}`,
//         recieve: data,
//     })
// })


// //3 put
// app.put('/api/user/:id', (req, res) => {
//     res.json({})
// })


// //4 delete

// app.delete('/api/user/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const data = req.body;
//     res.json({
//         recieve: data,
//         message: `deleted ${id}`
//     })
// })



// app.route('/api/user/:id')
// .get((req,res)=>{
//     const user= users.find((user=> user.id === Number(req.params.id)))
//     res.json(user)

// .patch((req , res )=>{
// const id = Number(req.params.id);
// const data = req.body;
// const  user = users.find((user)=> user.id === id)// find user

// // update user

// for( let key in data ){
// if(Object.prototype.hasOwnProperty.call(user , key)){
// user={...user , [key]:data[key]}
// }
// }

// // update user in users
// users[user.id-1]=user


// res.json({
//     message:`update user successfully`
// })
// })


// })
// app.listen(`${PORT}`, console.log('server is running on 8000'));

// app.route("/api/user/:id")
//      .get((req, res) => {
//           const user = users.find((user) => user.id === Number(req.params.id));
//           return res.json(user);
//      })
//      .patch(
//           (req, res) => {
//                const id = req.params.id;
//                const data = req.body;
//                let user = users.find((user) => user.id === Number(id)); // find user


//                ////// update user
//                for (const key in data) {
//                     if (Object.prototype.hasOwnProperty.call(user, key)) {
//                          user = { ...user, [key]: data[key] }

//                     }
//                }

//                //// update user in users
//                users[user.id-1] = user;

//                /// update data in file
//                fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//                      return res.json({ message: "User Updated Successfully!", user })
//                })


//           }
//      )


