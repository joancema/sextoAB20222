// npm i express
// npm i cors
// npm i nodemon -D

const express  = require("express");
const cors = require("cors");

const app =  express();
const PUERTO =  3000;

let students = [];

app.use('/public', express.static(__dirname+'/public') )
app.use(cors()).use(express.json())


app.get('/', (req,res)=>{
    res.status(200).send(
        students
    )
})
app.get('/:identification', (req,res)=>{
    const {identification} =  req.params;
    let result = students.filter(p => p.identification === identification);
    if (result.length>0)
    {
        res.status(200).send(result[0]);
    }
    res.status(404).send({
        "message":"No se puede encontrar el elemento con esa identificación!"
    });
})
app.post('/', (req,res)=>{
    const {body} = req;
    students.push(body);
    res.status(200).send({
        message:"Dato insertado correctamente",
        response: body
    })
})
app.put('/', (req,res)=>{
    const {identification, name, course} = req.body;
    let student =  students.filter(p=> p.identification === identification)[0]||{}
    if (student.length)
    {
        student.name = name;
        student.course = course;
    }
    res.status(200).send(
        {
            message:"dato modificado correctamente",
            response: student
        }
    )

})
app.delete('/:identification', (req,res)=>{
    const {identification} =  req.params;
    students = students.filter(p => p.identification !== identification);
    res.status(200).send({
        response:"Se eliminó el estudiante con éxito!"
    })
})


app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, acceda a http://localhost:${PUERTO}`)
})

// http://localhost:3000/apifacci/v1/students/indivitual&identification=1231233333
// http://localhost:3000/   GET , POST, PATCH,  PUT, DELETE
