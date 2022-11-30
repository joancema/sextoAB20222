const express = require('express');
const app = express();

const response={
    data:[],
    services:"All services",
    arquitecture:"Monolithic"
}

app.use((req,res,next)=>{
    response.data=[];
    next();

})

app.get("/api/v1/users", (req,res)=>{
    response.data.push("Victor","Alex","Luis");
    return res.send(response);
})

app.get("/api/v1/cars", (req,res)=>{
    response.data.push("Kia Rio", "Vento", "Picanto");
    return res.send(response);
})

app.get("/api/v1/books", (req,res)=>{
    response.data.push("HTML en 24 horas","Javascript Patrones Solid", "Microservicios patrones");
    return res.send(response);
})



module.exports = app;