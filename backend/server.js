const express= require("express");
const cors = require("cors");
const bodyParser=require("body-parser");
const FizzRouter=require('./routes/calculate')
const app=express();

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(FizzRouter)

app.listen(3000);