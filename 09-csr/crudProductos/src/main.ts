import './style.css'
import axios from 'axios'
import { IResProducto, Producto } from './interfaces/IProducto';
const httpAxios =  axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="name">Name</label><input id="name"/>
<label for ="price">Price</label><input id="price"/>
<label for ="cost">Cost</label><input id="cost"/>
<label for ="minimum">Minimum</label><input id="minimum"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!
const name = document.querySelector<HTMLInputElement>('#name')!



const status = document.querySelector<HTMLInputElement>('#status')!
const price = document.querySelector<HTMLInputElement>('#price')!
const cost = document.querySelector<HTMLInputElement>('#cost')!
const minimum = document.querySelector<HTMLInputElement>('#minimum')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  name.value=""
  price.value=""
  cost.value=""
  minimum.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respproductos:IResProducto 
  =  await (await httpAxios.get<IResProducto>('products')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { products } = respproductos;

    for (const product of products)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${product._id}" >${product.name}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${product.price}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const producto:Producto 
          =  await (await httpAxios.get<Producto>(`products/${idx}`)).data;
          name.value= producto.name;          
          price.value= producto.price.toString();  
          cost.value= producto.cost.toString();  
          minimum.value= producto.minimum.toString();  
          id.value= producto._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Producto = {
    name:name.value,
    cost: Number( cost.value),
    price: Number( price.value),
    minimum: Number( minimum.value),
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Producto = await (await httpAxios.put<Producto>(`products/${id.value}`, data)).data
    console.log(resp)
    console.log(`El prducto ${resp.name} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Producto =  await (await httpAxios.post<Producto>(`products`, data)).data
    console.log(`El producto ${resp.name} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})