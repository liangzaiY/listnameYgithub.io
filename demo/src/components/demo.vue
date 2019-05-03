<template>
    <div class="left hidden-sm-and-down">
      <el-row class="tac">
        <el-col :span="12" class="nav_width">
          <h5 class="nav-top">小白</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#23354b"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router>
            
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">主页</span>
              </template>
                <el-menu-item index="/Console">控制台</el-menu-item>
                <el-menu-item index="/companyAudit">企业审核</el-menu-item>
                <el-menu-item index="/workRoom">工作室审核</el-menu-item>
                <el-menu-item index="/projetP">项目进度</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">管理页面</span>
              </template>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-printer"></i>
                    <span slot="title">费用管理</span>
                  </template>
                  <el-menu-item index="/projetCots">项目费用</el-menu-item>
                  <el-menu-item index="/adRate">广告位费用</el-menu-item>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-news"></i>
                    <span slot="title">管理员中心</span>
                  </template>
                  <el-menu-item index="/Administrator">角色管理</el-menu-item>
                  <el-menu-item index="/autM">权限管理</el-menu-item>
                </el-submenu>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>


<style scoped>
.left{
    min-width: 220px;
    height: 100%;
    background:#23354b;
}
  .el-menu-vertical-demo{
    border:none;
    text-align: left;
  }
  .nav_width{
    width: 100%;
  }
  .el-aside::-webkit-scrollbar{
      display: none;
    }
  .nav-top{
    font-family: "黑体";
    line-height: 60px;
    font-size: 26px;
    background:#23354b;
    border-bottom: 2px solid rgb(28, 42, 60);
    color: #fff;
  }
</style>

<script>
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {
    data(){
      return {
        give:"",
        radio: '1',
      }
    },
     methods: {
      handleOpen(key, keyPath) {
       
      },
      handleClose(key, keyPath) {
       
      },
      router(index){
        this.$router.push(this.arr[index].path)
      },
      ttt(){
        // this.$router.push('/')
      }
    }
}
</script>




<style>
  html,body{
    width: 100%;
    height: 100%;
  }
  #app {
    height: 100%;
    font-family: "微软雅黑";
    color: #2c3e50;
  }
  .hidden-sm-and-down{
  }
</style>
