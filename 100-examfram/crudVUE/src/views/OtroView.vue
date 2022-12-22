<template>
    <h1>
        Otro page
        <button @click="counterStore.incrementBy(1)" >Incrementar</button>
        <button @click="counterStore.incrementBy(2)" >Incrementar 2</button>
    </h1>
</template>


<script lang="ts" setup>
    import { onMounted } from 'vue';
import { useAppStore } from '../stores/sistema'
    const counterStore = useAppStore()

    onMounted(()=>{
        console.log('Hola mundo');
        
    })


</script>