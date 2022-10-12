// npm init --y
// npm i express
// npm i cors
// npm i nodemon -D




const path = require("path");

const express = require("express");
const cors =  require("cors");

const PUERTO = 8080;
//sdfsdf

const urlIndex = path.join(__dirname,"./index.html")
const urlAbout = path.join(__dirname,"./about.html")
const urlError = path.join(__dirname,"./error.html")

 
const server =  express();

server.use(cors()).use(express.json())


server.get('/', functionIndex )

server.get('/about', (req,res)=>{
    res.status(200).sendFile(urlAbout);
    // res.status(200).send({
    //     response:"Acerca de!!!!!!"
    // })
})
server.get('/test',(req,res)=>{
    res.status(200).json({
        'message':'Problem with application web!!!!!!!!!'
    })
})
server.use((req,res, next)=>{
    res.status(400).sendFile(urlError);
})



function functionIndex (req, res){
    res.status(200).sendFile(urlIndex);
}


server.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo http://localhost:${PUERTO}`);
})



// 
    // const http = require("http");
    // const fs =  require("fs");

    // const index =  fs.readFileSync('./index.html');
    // const about =  fs.readFileSync('./about.html');
    // const error =  fs.readFileSync('./error.html');

    // http.createServer((request,response )=>{
    //     const { url } = request;
    //     if (url==="/")
    //     {
    //         response.writeHead(200, { "Content-Type":"text/html" });
    //         response.write(inicio);
    //     }
    //     else if (url==="/about")
    //     {
    //         response.writeHead(200, { "Content-Type":"text/html" });
    //         response.write(acercade);
    //     }
    //     else
    //     {
    //         response.writeHead(404, { "Content-Type":"text/html" });
    //         response.write(error);
    //     }


    // }).listen(PUERTO, ()=>{
    //     console.log(`Servidor corriendo en puerto http://localhost:${PUERTO}`)
    // })