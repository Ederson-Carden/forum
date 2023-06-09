<template>
  <div id="app">
    <router-view />
    <bottom></bottom>
  </div>
</template>
  
<script>
import bottom from './components/module/bottom.vue';
export default {
  name: 'App',
}
</script>
  
<style>
html,body,#app {
  height: 100%;
}
</style>
