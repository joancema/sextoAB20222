const express = require("express");
const app = express()

const response={
    data:[],
    services:"Book service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/books", (req,res)=>{
    response.data.push("HTML en 24 horas","Javascript Patrones Solid", "Microservicios patrones");
    console.log(`Get book data`)
    return res.send(response);
})




module.exports= app;