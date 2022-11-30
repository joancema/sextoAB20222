const express = require("express");
const app = express()

const response={
    data:[],
    services:"User service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/users", (req,res)=>{
    response.data.push("Dustin","Anthony", "Alex");
    console.log(`Get user data`)
    return res.send(response);
})




module.exports= app;