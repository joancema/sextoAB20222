const { model, Schema } = require('mongoose');

const ProductSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del producto es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        cost:{
            type: Number,
            default:0
        },
        price:{
            type:Number,
            default:0
        },
        minimum:{
            type:Number,
            default:0
        },
        category: {
            type: Schema.Types.ObjectId,
            ref:'Category',
            required:false
        }
    }
);

ProductSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Product', ProductSchema );