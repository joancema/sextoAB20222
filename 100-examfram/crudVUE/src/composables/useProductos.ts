// import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { getProductos, addProduct, updateProduct, deleteProduct } from '../helpers/getSetProductos';
import { useAppStore } from '../stores/sistema';
import { IProducto } from '../../../crudTS/src/interfaces/IProducto';

export const useProductos = () => {

    const productoStore = useAppStore();
    const { productos } = storeToRefs( productoStore );

    const ProductosArray = async(limite:number=5, desde:number=0) => {
        const resultado= await (await getProductos(limite,desde)).productos
        productoStore.loadProductos(resultado);
    }
    const addProducto= async(producto:IProducto)=>{
        const resultado =  await addProduct(producto);
        productoStore.createProduct(resultado);
    }
    const updateProducto= async(id:string,producto:IProducto)=>{
        const resultado= await updateProduct(id,producto);
        productoStore.updateProduct(id,resultado);
    }
    const deleteProducto=async(id:string)=>{
        const resultado= await deleteProduct(id);
        productoStore.deleteProduct(id);
    }
    return {
        ProductosArray,
        addProducto,
        updateProducto,
        deleteProducto,
        productos
    }

}
