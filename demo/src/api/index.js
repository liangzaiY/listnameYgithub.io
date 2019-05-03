import Vue from 'vue'
import axios from 'axios'
Vue.prototype.APPI2='/hs'
Vue.use(axios)
// 企业修改状态
export let modifyCompany =(id)=>{
    return axios.put("http://47.106.220.143:8080/admin/modifyCompany",{
        params:{
            id
        }
    })
}
// 工作室修改状态
export let modifyWorker =(id)=>{
    return axios.get("http://47.106.220.143:8080/admin/modifyWorker",{
        params:{
           id
        }
    })
}
// 企业分页
export let companyAudit =(page,size)=>{
    return axios.get("http://47.106.220.143:8080/admin/findCompanys",{
        params:{
            page,size
        }
    })
}
// 工作室分页
export let  workRoom =(page,size)=>{
    return axios.get("http://47.106.220.143:8080/admin/findWorkers",{
        params:{
            page,size
        }
    })

}
export let projetP= (page,size)=>{
    return axios.get('http://47.106.220.143:8080/admin/findProjects',{
       params:{
           page,
           size
       }
   })
 }
