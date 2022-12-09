var express = require('express');
var router = express.Router();

const axios = require('axios');

const httpAxios= axios.create({
    baseURL:'http://localhost:2500/v1/inventory/api/'
})


router.post('/producto/operar', ( req,res,next )=>{

    console.log(req.body)
    if (req.body._id==="")
    {
        httpAxios.post(`products`,{
            name: req.body.nombre,
            price: req.body.precio,
            cost: req.body.costo,
            minimum: req.body.minimo,
        }).then(respuesta=>{
            res.redirect('/')
        })
    }
    else
    {
        httpAxios.put(`products/${req.body._id}`,{
            name: req.body.nombre,
            price: req.body.precio,
            cost: req.body.costo,
            minimum: req.body.minimo,
        }).then(respuesta=>{
            res.redirect('/')
        })

    }

})

module.exports = router;