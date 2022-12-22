import { defineStore } from 'pinia';
import { IProducto } from '../interfaces/producto';

interface AppState {
    counter:     number;
    numberOfChanges: number;
    productos:  IProducto[];
}

export const useAppStore = defineStore('aplicacion', {

    state: ():AppState => ({
        counter: 0,
        numberOfChanges: 0,
        productos: [],
    }),

    actions: {
        incrementBy( value: number ) {
            this.counter += value;
            this.numberOfChanges += 1;
        },
        loadProductos( productos: IProducto[] ) {
            this.productos = productos;
        },
        createProduct(producto:IProducto)
        {
            this.productos.push(producto);
        },
        updateProduct(id:string,producto:IProducto)
        {
            
            this.productos=this.productos.map(valor=>{
                return valor._id===id?producto:valor
            })
            console.log(this.productos)
        },
        deleteProduct(id:string){
            this.productos=this.productos.filter(ele=>{
                return ele._id!==id
            })
        },
        clearState() {
            this.productos = [];
        }

    }
})