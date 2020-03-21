<template>
  <div id="app">
   <router-view/>
   
   <Tabbar v-if='$route.meta.showTab'></Tabbar>
   
  </div>
</template>

<script>
import Tabbar from '../src/components/tabbar'
import Conents from '../src/components/conents'
export default {
  name: 'App',
  components:{
    Tabbar,Conents
  },
  data(){
    return{
      bol:true
    }
  },
  
  beforeCreate(){
    this.$router.push("/home")
  }
}
</script>

<style lang="scss">
$fonts:50px;
*{margin: 0;padding: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
