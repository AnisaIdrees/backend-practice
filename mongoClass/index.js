const express = require('express');
const app = express();
const Port = 8000;

// // step no 1 
// const { MongoClient } = require("mongodb")

// // step no 2 url lgana he 
// const url = `mongodb+srv://AneesaPractice:abc12345@practice.rdw3fgs.mongodb.net/?retryWrites=true&w=majority&appName=practice`


// // step no 3 me hmen database name likhna he 
// const databaseName = 'e-com'

// //step n0 4 me ek instance banana he MongoClient(url)ka 
// const client = new MongoClient(url)



// // step no 5 me connection func bnana he 

// const dbConnection = async () => {

//     const connection = await client.connect();
//     const db = connection.db(databaseName);
//     const collectionRef = db.collection('products');

//     const result = await connectionRef.insertOne({
//         name: 'aneesa',
//         age: 10
//     })
//     console.log(result);

// }


// dbConnection()


const { MongoClient } = ('mongodb');
const url = `mongodb+srv://AneesaPractice:abc12345@practice.rdw3fgs.mongodb.net/?retryWrites=true&w=majority&appName=practice``mongodb+srv://AneesaPractice:abc12345@practice.rdw3fgs.mongodb.net/?retryWrites=true&w=majority&appName=practice`
const databaseName= 'e-com'

const client = new MongoClient(url)

const dbConnection = async()=>{
    const connection = await client.connect();
    const db = connection.db(databaseName);
    const collectionRef = db.collection('users')

    const result = await connectionRef.inserOne({
        name:'alishba',
        age:20,

    })
    console.log(result);
    
}
dbConnection()





app.get('/', (req, res) => {
    res.send('hello products')
})


app.listen(Port, () => console.log(`server is runnning on ${Port}`));
