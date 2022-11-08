<template>
  <div id="app">
    <Nav/>
    <div class="main">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>
import Nav from './views/Nav';
export default {
  name:'App',
  components:{Nav},
  data() {
    return {
      
    }
  },
}
</script>

<style>
#app {
  height: 100%; 
}

.main {
  height: 100%;
  box-sizing: border-box;
  margin-top: 64px;
}

</style>