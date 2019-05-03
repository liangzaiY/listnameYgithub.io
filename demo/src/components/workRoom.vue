<template>
     <div class="com-table">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="用户名" width="180"></el-table-column>
            <el-table-column prop="address" label="邮箱"></el-table-column>
            <el-table-column label="审核" width="260">
                <template slot-scope="scope">
                    <el-button size="mini" :plain="true" type="success" @click="handleDelete(scope.$index, scope.row)">审核通过</el-button>
               </template>
            </el-table-column>
        </el-table>
     </div>
</template>
<style scoped>
    .cell{
        text-align: center    
    }
    .com-table{
        padding: 40px 30px;
        background: #fff;
    }
</style>

<script>
import axios from 'axios'
import {workRoom} from '../api/index'
    export default {
         data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '674706564@qq.com'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
     methods: {
         handleDelete(index, row) {
           this.$message({
          message: '审核通过',
          type: 'success'
        });
       this.tableData.splice(index,1)
      }
    },
    created(){
    //   workRoom().then(data=>{
    //     console.log(data.data)
    //   })
      
    }
    }
</script>