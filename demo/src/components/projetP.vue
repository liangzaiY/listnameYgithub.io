<template>
  <div class="home">
    <el-table style="width: 100%;" :data="userList" current-row-key='1' >
      <el-table-column type="index" width="100"></el-table-column>
      <el-table-column label="公司名字" prop="id" width="220"></el-table-column>
      <el-table-column label="日期" prop="creationTime" width="220">
       
        
        <template slot-scope="scope">
        <i class="el-icon-time"></i>
       <span>{{scope.row.creationTime}}</span>
      </template>
      </el-table-column>
      <el-table-column label="邮箱" prop="email" width="300"></el-table-column>

        
        <el-table-column type="index" label="状态" width="400">
           <template slot-scope="scope" > 
          
         <el-progress  :percentage="scope.row.userStatus">
          
         </el-progress>
        
         </template>
         
        </el-table-column>
    
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { projetP } from "../api/index.js";
//  import {qqq} from '../api/index.js'
export default {
  data() {
    return {
      currentPage3: 1, //初始页
      n:0,
     
      userList: [],

      search: ""
      // status:'',
    };
  },
  methods: {
    handleEdit(index, row) {

    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
    },
    indexMethod(index) {
      return index * 1 + 1;
    },
    handleCurrentChange(val) {
      let pages = val;
      let size = 10;
      projetP(pages, size).then(res => {
        //这是从本地请求的数据接口，
        this.userList = res.data.data;
        
         for (let i = 0; i < this.userList.length; i++) {
        var oldTime = new Date(this.userList[i].creationTime).getTime();

        var newTime = new Date(this.userList[i].creationTime).getTime();
        oldTime = oldTime + 8 * 60 * 60 * 1000;
        newTime = newTime + 8 * 60 * 60 * 1000;

        // 补上缺少的8小时

        // 重新转换创建时间
        var oldTime_two = new Date(oldTime);

        var the_year = oldTime_two.getFullYear(); //年份
        var the_month = oldTime_two.getMonth() + 1; //月份
        var the_day = oldTime_two.getDate(); //几号

        var the_data = the_year + "/" + the_month + "/" + the_day;
        this.userList[i].creationTime = the_data;
     
        if (this.userList[i].userStatus === 0) {
          
            this.userList[i].userStatus=0
        } else if (this.userList[i].userStatus === 1) {
            this.userList[i].userStatus=50
                
        } else if (this.userList[i].userStatus === 2) {
          // this.percentage = 100;
              this.userList[i].userStatus=100
          this.status = "success";
        }
      }
      });
    },

    handleSizeChange(val) {}
  },
  created() {
    projetP(1, 10).then(res => {
      //这是从本地请求的数据接口，
      this.userList = res.data.data;
      

      for (let i = 0; i < this.userList.length; i++) {
        var oldTime = new Date(this.userList[i].creationTime).getTime();

        var newTime = new Date(this.userList[i].creationTime).getTime();
        oldTime = oldTime + 8 * 60 * 60 * 1000;
        newTime = newTime + 8 * 60 * 60 * 1000;

        // 补上缺少的8小时

        // 重新转换创建时间
        var oldTime_two = new Date(oldTime);

        var the_year = oldTime_two.getFullYear(); //年份
        var the_month = oldTime_two.getMonth() + 1; //月份
        var the_day = oldTime_two.getDate(); //几号

        var the_data = the_year + "/" + the_month + "/" + the_day;
        this.userList[i].creationTime = the_data;
     
        if (this.userList[i].userStatus === 0) {
          
            this.userList[i].userStatus=0
        } else if (this.userList[i].userStatus === 1) {
            this.userList[i].userStatus=50
                
        } else if (this.userList[i].userStatus === 2) {
          // this.percentage = 100;
              this.userList[i].userStatus=100
          this.status = "success";
        }
      }
    });

 
  }
};

</script>
<style scoped>
.right {
  width: 100%;
  height: 500px;
  background: rgb(242, 242, 242);
}
.home {
  background: white;
}
</style>