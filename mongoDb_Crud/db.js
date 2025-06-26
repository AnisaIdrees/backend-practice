 const {MongoClient} = require('mongodb');
 const connectionString ="mongodb+srv://haider:haider12345@practice.rdw3fgs.mongodb.net/?retryWrites=true&w=majority";

 const databaseName = 'e-com';

 const client = new MongoClient(connectionString);

 const dbConnection = async()=>{
    const clientConnection = client.connect();
    const db= clientConnection.db(databaseName)
    return db;

 }
 module.exports.dbConnection