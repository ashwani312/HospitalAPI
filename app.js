const express = require('express');
const database = require("./database/mongoose");
const router = require("./HospitalRoutes/router");
const bodyParser = require("body-parser");
const passport = require('passport');
const passportStrategy = require("./configrations/passport-jwt");



const app = express();


app.use(bodyParser.urlencoded({extended : true}));

app.use(router);

//app is lisning on port 3000
app.listen(3000, (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running");
})

