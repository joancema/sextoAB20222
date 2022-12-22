<template>
    <div>
        <!-- <button class="btn btn-primary" @click="ProductosArray(5 ,currentPage*5)">Consultar</button> -->
        <button class="btn btn-primary" @click="nuevoProducto" >Nuevo</button>
    </div>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" @click="anteriorPagina"><a class="page-link" href="#">Anterior</a></li>
            <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li> -->
            <li class="page-item" @click="siguientePagina" ><a class="page-link" href="#">Siguiente</a></li>
        </ul>
    </nav>
<table class="table">
  <thead>
    <tr >
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="producto in productos" :key="producto._id">
      <td>{{producto.nombre}}</td>
      <td>{{producto.precio}}</td>
      <td>
        <button class="btn btn-primary" @click="llamarFormulario(producto)">Actualizar</button>
        <!-- <button class="btn btn-primary" @click="consultaIndividual(producto)">Consultar</button> -->
      </td>
    </tr>
  </tbody>
</table>
    
    <!-- <b-button variant="danger">Prueba</b-button> -->
    
    <h2> Número de cambios: {{counterStore.numberOfChanges}} </h2>
    <h3>
        Contador: {{ counterStore.counter }}
        Current: {{current}}
    </h3>
    
    
    <modal v-if="isOpen"
            title=""
            @on:close="closeModal">
        <template v-slot:body>
            <form @submit.prevent="onSubmit">
                <input 
                    type="text"
                    placeholder="Nombre del producto"
                    v-model="producto.nombre"
                >
                <br/>
                <input 
                    type="number"
                    placeholder="Precio del producto"
                    v-model="producto.precio"
                >
                <input 
                    type="number"
                    placeholder="Costo del producto"
                    v-model="producto.costo"
                >
                <input 
                    type="number"
                    placeholder="Mínimo"
                    v-model="producto.minimo"
                >
                <input 
                    type="number"
                    placeholder="Existencia del producto"
                    v-model="producto.stock"
                >
                    <!-- ref="txtSearchId" -->
            </form>
        </template>

        <template v-slot:footer>
            <button class="btn btn-primary" @click="grabarProducto">Grabar</button>
            <button class="btn btn-primary" @click="eliminarProducto">Eliminar</button>
        </template>

        <template v-slot:header>
            <h2>{{ producto._id?"Editar":"Crear" }} Producto</h2>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>

        </template>

    </modal>

</template>

<script lang="ts" setup>
    import {  Ref, ref, onMounted } from 'vue';
    import { useAppStore } from '../stores/sistema'
    import { useProductos } from '../composables/useProductos'
    import Modal from '../components/Modal.vue'
    import { IProducto } from '../interfaces/producto';
    
    const isOpen = ref(false)
    const current= ref(100);
    const currentPage= ref(0);
    
    const producto:Ref<IProducto> = ref({
        nombre:"",
        precio:0,
        costo:0,
        minimo:0,
        stock:0
    })
    const counterStore =  useAppStore();
    
    const nuevoProducto= ()=>{ 
        producto.value.nombre="" 
        producto.value.precio=0;
        producto.value.costo=0;
        producto.value.minimo=0;
        producto.value.stock=0;
        producto.value._id=undefined;
        openModal();
    }
    const grabarProducto= ()=>{
        if (producto.value._id)
        {
            
            updateProducto(producto.value._id??"",producto.value)
        }
        else
        {
            addProducto(producto.value);
        }
    }
    const eliminarProducto=()=>{
        // deleteProduct(producto.value._id??"")
    }
    const llamarFormulario=(productox:IProducto)=>{
        consultaIndividual(productox);
        openModal();
    }
    const closeModal = ()=> isOpen.value  = false
    const openModal  = () => isOpen.value = true
    const { ProductosArray, productos, addProducto, updateProducto  } = useProductos();
    // ProductosArray(5 ,currentPage.value*5)

    const onSubmit = ()=>{}
    const siguientePagina=()=>{
        currentPage.value++;
        ProductosArray(5 ,currentPage.value*5)
    }
    const anteriorPagina=()=>{
        if (currentPage.value<1) return;
        currentPage.value--
        ProductosArray(5 ,currentPage.value*5)
    }
    const consultaIndividual= (productox:IProducto)=>{
        producto.value= {...productox};
    }
    onMounted(() => {
        console.log(`ok`)
        ProductosArray(5 ,currentPage.value*5)
    })
</script>