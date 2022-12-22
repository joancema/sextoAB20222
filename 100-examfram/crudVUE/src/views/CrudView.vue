<template>
     <!-- <v-btn 
    color="primary"
    elevation="7"
    small
    >Abrir</v-btn> -->
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
        <button class="btn btn-primary" >Actualizar</button>
        <!-- <button class="btn btn-primary" @click="consultaIndividual(producto)">Consultar</button> -->
      </td>
    </tr>
  </tbody>
</table>

</template>

<script lang="ts" setup>
import { useProductos } from '../composables/useProductos';

const { productos  } = useProductos();


        
</script>