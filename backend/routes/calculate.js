const express = require("express");

const router=express.Router();

const list=[]

router.post('/fizzbuzz/:number',(req,res)=>{
    const number = req.params.number;
    const input = Array.from({ length: Number(number) }, (_, index) => index);
    for(const value of input){
        if(value % 3 === 0 && value % 5 === 0){
          console.log("Fizz Buzz")
          list.push("Fizz Buzz")
        }else
        if(value % 3 === 0){
            console.log("fizz")
            list.push("Fizz")
        }else if (value % 5 === 0){
            console.log("buzz")
            list.push(" Buzz")
        }else{
           list.push(value)
        }
      }
})


router.get("/fizzbuzz",(req,res)=>{
    res.status(200).json(list);
})

module.exports=router;