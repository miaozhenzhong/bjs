<template>
  <div id="app">
     <transition name="fade">
     <router-view class="box"></router-view>
        </transition>
    <loading></loading>
  </div>
</template>

<script>
import loading from './components/commonPage/loading'
export default {
  name: 'App',
  components: {
    'loading': loading,
  },
  data(){
    return{
      msg:"123"
    }
  },
  created(){
    // this.$Get("rt/ui/lib/query").then(function(res) {
    //     console.log(res.data)
    // });
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  font-size:13px; 
  height: 100%;
}
*{
  font-size: 13px;
  user-select:none;
}
#app{
  height: 100%;
}
.fade-enter-active{
    transition: all 1.5s cubic-bezier(0, 1.27, 0.58, 1);
}
.fade-leave-active{
  opacity: 0;
  transition: all 1.5s cubic-bezier(0, 1.27, 0.58, 1);
}
/* 进入开始 */
.fade-enter{
  /* transform: translateX(130px); */
  width: 0px;
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  /* transform: translateX(-130px); */
  opacity: 0;
}
.fade-leave{
  opacity:1;
}
</style>
px