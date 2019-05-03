<template>
    <div class="login">
      <div class="container">
          <div class="row">
              <div class="col-md-6 offset-md-3">
                  <h1>{{system.title}}</h1>
                  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="username">
                        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <p class="copy">{{system.copyRight}}</p>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"login",
    data(){
        let checkUserName = (rule,value,callback)=>{
            if(!value){
                return callback(new Error('登录账号不能为空'))
            }else{
                return callback()
            }
        };
        let checkPassWord = (rule,value,callback)=>{
            if(!value){
                return callback(new Error('请您输入密码'))
            }else{
                return callback()
            }
        }
        return {
            ruleForm:{
                username:'lcfa',
                password:11,
                send:true
            },
            rules:{
                username:[{validator:checkUserName,trigger:"blur"}],
                password:[{validator:checkPassWord,trigger:"blur"}]
            }
        }
        },
        methods:{
            submitForm(form){
                this.$refs[form].validate((valid)=>{
                    if(valid){
                        let formdata = "Login="+JSON.stringify(this.ruleForm)
                        // console.log(formdata)
                        this.axios.post('http://localhost/myvue/admin/api/loginSave.php',formdata)
                        .then(text=>{
                            console.log(text.data)
                           if(text.data.valid){
                            //    console.log(text)
                               this.$cookies.set('username',this.ruleForm.username)
                               
                               this.success(text.data.msg+'即将自动调整',1000,'/Admin/Index')
                           }else{
                               this.error(text.data.msg)
                           }
                        })
                        .catch(err=>{
                            // this.error(err)
                            //  console.log(err)
                        })
                    }else{
                        return false
                    }
                })
            },
            success(text,duration,path){
                this.$message({
                    message:text,
                    type:'success',
                    duration:duration,
                    showClose:true,
                    onClose:()=>{
                        this.$router.push({
                            path:path
                        })
                    }
                })
            },
            error(msg){
                this.$ontify.error({
                    title:'信息有误',
                    message:msg
                })
            }

        },
        computed:{
            system(){
                return this.$store.state.system
            }
        }
}
</script>
<style scoped>
    .login{
        padding-top: 140px;

    }
    h1{
        margin-bottom: 30px;
    }
    .copy{
        text-align: center;
    }
</style>
