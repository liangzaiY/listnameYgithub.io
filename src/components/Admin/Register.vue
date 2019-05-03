<template>
    <div class="register">
      <el-row>
        <el-col :span="6" >
          <h4>添加用户</h4>
          <el-form :model="people" :rules="rules" ref="people" label-width="100px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="people.username"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="truename">
              <el-input v-model="people.truename"></el-input>
            </el-form-item>
            <el-form-item label="初始密码" prop="password">
              <el-input v-model="people.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
              <el-input v-model="people.password2" type="password"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email">
              <el-input v-model="people.email"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-switch v-model="people.sex" active-color="#ff4949" inactive-color="#add"></el-switch>
              {{people.sex?"女":"男"}}
            </el-form-item>
            <el-form-item label="会员权限" prop="status">
               <el-radio-group v-model="people.status">
                 <el-radio :label="0">超级管理员</el-radio>
                 <el-radio :label="1">普通会员</el-radio>
                 <el-radio :label="2">订阅会员</el-radio>
               </el-radio-group>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>
<script>
  export default {
      name:"register",
      data(){
        return{
          people:{
            username:'',
            truename:'',
            password:'',
            password2:'',
            email:'',
            sex:1,
            status:2,
          },
          rules:{

          }
        }
      }
  }
</script>
<style scoped>
    /* .el-form-item>label{
      text-align: left;
    } */
</style>
