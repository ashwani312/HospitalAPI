const mongoose = require('mongoose'); //mongoose packege


//In this i am connecting mongodb local database
const database = mongoose.connect("mongodb://localhost:27017/hospitalDataBase").then(()=>{
    console.log("database succesfully connected");
}).catch((err)=>{
    console.log(err);
})

module.exports = database;