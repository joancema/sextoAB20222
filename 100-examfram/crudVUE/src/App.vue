<template>

      <router-link to="/">CRUD</router-link>
      {{ ' ' }}
      <router-link to="/counter">Prueba</router-link>
      {{' '}}
      <router-link to="/vuetify">Vuetify</router-link>
      <router-view/>

</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>