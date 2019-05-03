<template>
    <div class="top">
        <div class="top-right">
            <el-row :gutter="20" style="margin:0;padding:0">
                <el-dropdown :hide-on-click="true">
                    <span class="el-dropdown-link">
                        root<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>个人资料</el-dropdown-item>
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
    .top{
        height: 60px;
        background: #fff;
        box-shadow: 2px 1px 2px #ccc;
    }
    .el-row{
        margin: 0;
        padding: 0;
    }
    .top-right{
        padding-top: 21px;
    }
    .el-dropdown-link{
        font-size: 16px;
    }
    .el-dropdown{
        cursor: pointer;
        float: right;
        margin-right: 40px;
    }
</style>
<style>

</style>
<script>
    export default {
        
    }
</script>