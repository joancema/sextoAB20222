const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createCategory,
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory
} = require('../controllers').Category;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getCategories );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getCategory );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createCategory);


 router.put('/:id', updateCategory);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteCategory);



module.exports = router;