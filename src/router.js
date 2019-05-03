import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Index/Home";
import Admin from "./components/Admin/AdminIndex";

Vue.use(Router);
 const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Admin",
    name: "Admin",
    component:Admin,
    meta:{
      title:'0107后台管理系统'
    },
    redirect:{
      path:'/Admin/Index'
    },
    children:[
      {
        path:"/Admin/Index",
        name:"AdminIndex",
        component:()=>import('./components/Admin/Index'),
        meta:{
          title:'0107后台管理系统'
        }
      },
      
      {
        path:'/Admin/Register',
        name:'Register',
        meta:{
          title:'后台管理员注册'
        },
        component:function(){
          return import('./components/Admin/Register')
        }
      },
      {
        path:'/Admin/Inquire',
        name:'Inquire',
        meta:{
          title:'后台管理员注册'
        },
        component:()=>{
          return import('./components/Admin/Inquire')
        }
      }
    ]

  },
  {
    path:'/Login',
    name:'Login',
    meta:{
      title:'后台管理员登录'
    },
    component:function(){
      return import('./components/Admin/Login')
    },
  }
]
const router = new Router({
  mode: "history",
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title =to.meta.title
  }
  next()
})

export default router
