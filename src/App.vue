<template>
  <div id="app">
    <h1>employee List</h1>

    <Addtodos />
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Addtodos from "./components/Addtodos.vue";
export default {
  name: "App",
  components: {
    Home,
    Addtodos,
  },
};
</script>

<style>
</style>
