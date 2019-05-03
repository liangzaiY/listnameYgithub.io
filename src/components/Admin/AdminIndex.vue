<template>
  <div id="admin" v-if="isLogin">
   <el-container>
        <el-header >{{system.name}}</el-header>
      <el-container>
        <el-aside width="200px"><Left/></el-aside>
        <el-main v-height='60'><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
  <div class="admin" v-else>
    <Login/>
  </div>
</template>


<script>

import Login from './Login.vue'
import Left from './Left.vue'
export default {
  name:'admin',
  data(){
    return{
      isLogin:false
    }
  },
  components:{
    Login,
    Left
  },
  computed:{
    system(){
      return this.$store.state.system
    }
  },
   watch:{
    $route(to,from){
      console.log(to.path)
      if(from.path==='/Login'){
        this.isLogin =true
      }
      
    }
  },
 
  created(){


      if(this.$cookies.isKey('username')){
        this.isLogin=true
        console.log(this.$cookies.isKey('username')) 
      }else{
        this.$router.push({
          path:'/Login'
        })
      }
  }

}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: none;
  color: #2c3e50;
}
a:hover{
  color: #2c3e50;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background:rgb(84, 92, 100);
    color: #333;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
