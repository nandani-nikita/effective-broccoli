<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Test/> -->
  </div>
</template>

<script>
// import Test from './components/Supplier/Test.vue';
export default {
  name: 'App',
  components : {
    // Test 
}
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
