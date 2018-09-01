import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import {jsonPost, Get,formPost} from '../common/request'
// const Index = resolve => require(['@/components/routerComponents/customerindex'], resolve);
import Index from '@/components/routerComponents/customer/index';
const Login =  resolve => require(['@/components/login'], resolve)      
const RaiseCheck =  resolve => require(['@/components/routerComponents/customer/RaiseCheck'], resolve)                   //募集说明书合规性检查
const RaiseResult =  resolve => require(['@/components/routerComponents/customer/RaiseResult'], resolve)                   //募集说明书合规性检查结果
const IAADCheck =  resolve => require(['@/components/routerComponents/customer/IAADCheck'], resolve)                   //募集说明书合规性检查结果
const IAADResult =  resolve => require(['@/components/routerComponents/customer/IAADResult'], resolve)                   //募集说明书合规性检查结果
const Upload =  resolve => require(['@/components/routerComponents/customer/upload'], resolve)       
const Report = resolve => require(['@/components/routerComponents/customer/report'], resolve)   
const Admin = resolve => require(['@/components/routerComponents/admin/Admin'], resolve)
const IAADUpload = resolve => require(['@/components/routerComponents/customer/IAADUpload'], resolve)
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
      component:Index,
      beforeEnter: (to, from, next) => {
        // alert(JSON.stringify(to,from,next))
        // https://www.sojson.com/open/api/weather/json.shtml?city=北京
        Get("weather/json.shtml?city=北京").then(function(res){
          console.log(res)
          next();
        })
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      redirect: '/RaiseCheck',
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
      },{
        path:'/Admin',
        name:'Admin',
        component:Admin
      },{
        path:'/IAADUpload',
        name:'IAADUpload',
        component:IAADUpload
      }]
    }
  ]
})
