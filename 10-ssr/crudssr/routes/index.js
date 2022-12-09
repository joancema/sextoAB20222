var express = require('express');
var router = express.Router();
const axios = require('axios');

const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/',
})


/* GET home page. */
router.get('/', function(req, res, next) {
  httpAxios.get(`products`).then(respuesta=>{
    console.log(respuesta.data.products);
    res.render('index', { productos: respuesta.data.products });
  })
});
router.get('/producto/nuevo',(req,res,next)=>{
  res.render('productoForm', {})
})

router.get('/producto/modificar/:id',(req,res,next)=>{
  httpAxios.get(`products/${req.params.id}`).then(respuesta=>{
    res.render('productoForm', {producto: respuesta.data })
  })
})
router.get('/producto/eliminar/:id', (req,res,next)=>{
  httpAxios.delete(`products/${req.params.id}`).then(respuesta=>{
    res.redirect('/');
  })
})


module.exports = router;
