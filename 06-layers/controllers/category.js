const { response } = require('express');
const { Category } = require('../models');


const getCategories = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, categories ] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      categories
    })
}

const getCategory = async (req, res= response)=>{
    const {id} = req.params
    const category=  await Category.findById(id);
    res.json(category);
}
const createCategory = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existCategory =  await Category.findOne({name: body.name})

    if (existCategory)
    {
        return res.status(400).json({
            msg:`La categoria ${ existeCategoria.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const category = new Category(data);

    const newCategory =  await category.save();
    res.status(201).json(newCategory);
}
const updateCategory = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const categoryUpdated =  await Category.findByIdAndUpdate(id,data, {new: true} )
    res.json(categoryUpdated);
}
const deleteCategory =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedCategory =  await Category.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedCategory);
}

 module.exports ={
    createCategory,
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory
 }