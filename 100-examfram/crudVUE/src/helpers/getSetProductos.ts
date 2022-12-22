import productoApi from '../api/sistemaApi'
import { IResProducto } from '../interfaces/producto';
import { IProducto } from '../../../crudTS/src/interfaces/IProducto';


const getProductos = async(limite:number=5, desde:number=0):Promise<IResProducto> => {
    const productos = await (await productoApi.get<IResProducto>(`productos`, {params:{limite, desde}})).data
    return productos;
}
 const addProduct= async(producto:IProducto)=>{
    const resultado = await (await productoApi.post(`productos`,producto)).data
    return resultado;
 }
 const updateProduct= async(id:string,producto:IProducto)=>{
    const resultado = await (await productoApi.put(`productos/${id}`,producto)).data
    return resultado;
 }
 const deleteProduct= async(id:string)=>{
    const resultado = await (await productoApi.delete(`productos/${id}`)).data
    return resultado;
 }

export {
    getProductos,
    addProduct,
    updateProduct,
    deleteProduct
} 
    



