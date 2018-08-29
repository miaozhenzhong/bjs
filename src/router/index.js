import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
const Login =  resolve => require(['@/components/login'], resolve)      
const RaiseCheck =  resolve => require(['@/components/routerComponents/RaiseCheck'], resolve)                   //募集说明书合规性检查
const RaiseResult =  resolve => require(['@/components/routerComponents/RaiseResult'], resolve)                   //募集说明书合规性检查结果
const IAADCheck =  resolve => require(['@/components/routerComponents/IAADCheck'], resolve)                   //募集说明书合规性检查结果
const IAADResult =  resolve => require(['@/components/routerComponents/IAADResult'], resolve)                   //募集说明书合规性检查结果
const Upload =  resolve => require(['@/components/routerComponents/upload'], resolve)       
const Report = resolve => require(['@/components/routerComponents/report'], resolve)   
const Index = resolve => require(['@/components/routerComponents/index'], resolve)  
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/RaiseCheck'
    },
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path:'/Index',
      name:'Index',
      component:Index
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/RaiseCheck',
      beforeEnter: (to, from, next) => {
        // alert(JSON.stringify(to,from,next))
        console.log("789")
        next();
      },
      children:[{
        path:'/RaiseCheck',
        name:'RaiseCheck',
        component:RaiseCheck
      },{
        path:'/RaiseResult',
        name:'RaiseResult',
        component:RaiseResult
      },
      {
        path:'/IAADCheck',
        name:'IAADCheck',
        component:IAADCheck
      },
      {
        path:'/IAADResult',
        name:'IAADResult',
        component:IAADResult
      },{
        
        path:'/Upload',
        name:'Upload',
        component:Upload
      },
      {
        path:'/Report',
        name:'Report',
        component:Report
      }]
    }
  ]
})
