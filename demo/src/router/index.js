import Vue from 'vue'
import Router from 'vue-router'
import projetP from '@/components/projetP'
import Administrator from '@/components/Administrator'
import adRate from '@/components/adRate'
import autM from '@/components/autM'
import companyAudit from '@/components/companyAudit'
import projetCots from '@/components/projetCots'
import workRoom from '@/components/workRoom'
import Console from '@/components/Console'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Console',
      name: 'Console',
      component: Console
    },
    {
      path: '/Administrator',
      name: 'Administrator',
      component: Administrator
    },
    {
      path:'/projetP',
      name:'projetP',
      component:projetP
    },
    {
      path:'/adRate',
      name:'adRate',
      component:adRate
    },
    {
      path:'/autM',
      name:'autM',
      component:autM
    },
    {
      path:'/companyAudit',
      name:'companyAudit',
      component:companyAudit
    },
    {
      path:'/projetCots',
      name:'projetCots',
      component:projetCots
    },
    {
      path:'/workRoom',
      name:'workRoom',
      component:workRoom
    }
  ]
})
