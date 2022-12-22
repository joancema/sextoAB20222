const { response } = require('express')
const { Product } = require('../models')


const getProducts= async (req, res = response )=>{

    //GET http://localhost:3000/products   ?limit=100?since=1
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, products ] = await Promise.all([
        Product.countDocuments(query),
        Product.find(query)
        .populate('category','name status')
        .skip(Number(since))
        .limit(Number(limit))
    ])
  
    res.json({
      sum, 
      products
    })
    
}
const getProduct= async (req, res =  response)=>{
    const {id} = req.params
    const product=  await Product.findById(id).populate('category');
    res.json(product);
}
const createProduct= async (req, res = response)=>{
    const { status, user, ...body } =  req.body;
    
    const existProduct =  await Product.findOne({name: body.name})

    if (existProduct)
    {
        return res.status(400).json({
            msg:`El producto ${ existProduct.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const product = new Product(data);

    const newProduct =  await product.save();
    res.status(201).json(newProduct);
}
const updateProduct= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedProduct =  await Product.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedProduct);
}
const deleteProduct= async (req, res = response)=>{
    const {id} = req.params;
    const deletedProduct =  await Product.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedProduct);
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};