import { FormEvent, useEffect, useState } from 'react';
import  { reqResApi }  from '../api/reqRes';
import { useForm } from '../hooks/useForm';
import { IReqRes, Producto } from '../interfaces/reqRes';

import '../styles/styles.css';

export const ProductoPage = () => {
    const [productos, setproductos] = useState<Producto[]>([]);

    useEffect(() => {
        cargarProductos()
    }, [])
    const cargarProductos = async() => {
        const resp = await reqResApi.get<IReqRes>('productos')
        if( resp.data.total > 0 ){ 
            setproductos( resp.data.productos );
        }
    }
    const { 
        formData, onChange, resetForm, isValidEmail,
        nombre, precio, costo, minimo, stock, 
    } = useForm({
        nombre: '',
        precio: 0,
        costo: 0,
        minimo: 0,
        stock: 0,
    });

    

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log( formData );
        const resp = await reqResApi.post<Producto>('productos', formData);
        console.log(resp)

    }
    const renderItem = ({ _id, nombre, precio, costo }: Producto ) => {
        return (
            <tr key={ _id.toString() }>
                <td>{ nombre }</td>
                <td> { precio } </td>
                <td> { costo }</td>
            </tr>
        )
    }


    return (
        <div>
            <h1>Productos Página</h1>


            <form noValidate onSubmit={ onSubmit }>

                <input 
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={ nombre }
                    onChange={ onChange }
                    className={ `${ nombre.trim().length <= 0 && 'has-error' }` }
                />
                { nombre.trim().length <= 0 && <span>Este campo es necesario</span> }

                <input 
                    type="number"
                    placeholder="Precio"
                    name="precio"
                    value={ precio }
                    onChange={ onChange }
                    className={ `${ (precio<=0) && 'has-error' }` }
                />
                { ( precio<=0 ) && <span>Precio es menor o igual a 0</span> }

                <input 
                    type="number"
                    placeholder="Costo"
                    name="costo"
                    value={ costo }
                    onChange={ onChange }
                    className={ `${ (costo<=0) && 'has-error' }` }
                />
                { ( costo<=0 ) && <span>Costo es menor o igual a 0</span> }

                <input 
                    type="number"
                    placeholder="Mínimo"
                    name="minimo"
                    value={ minimo }
                    onChange={ onChange }
                    className={ `${ (minimo<=0) && 'has-error' }` }
                />
                { ( minimo<=0 ) && <span>Mínimo es menor o igual a 0</span> }

                <input 
                    type="number"
                    placeholder="Stock"
                    name="stock"
                    value={ stock }
                    onChange={ onChange }
                    className={ `${ (stock<=0) && 'has-error' }` }
                />
                { ( stock<=0 ) && <span>Stock es menor o igual a 0</span> }

                

                <button type="submit">Crear</button>
                
                <button type="button" onClick={ resetForm }>Limpiar</button>

            </form>
            
            {
            productos.length>0 &&
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Costo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map( renderItem )
                    }
                </tbody>
            </table>
            
            }

        </div>
    )
}