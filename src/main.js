import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../css/initialize.css'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false;
Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(ElementUI)


Vue.directive('height',{
      bind(el,binding){
      let mainHeight = document.documentElement.clientHeight-binding.value+"px";
      el.style.height = mainHeight
      window.onresize=function(){
        let mainHeight = document.documentElement.clientHeight-binding.value+"px";
        el.style.height = mainHeight
      }
      },  
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
