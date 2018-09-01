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
    
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  font-size:13px; 
  height: 100%;
  overflow: hidden;
}
*{
  font-size: 13px;
  user-select:none;
  margin:0;
  padding: 0;
}
#app{
  height: 100%;
}
.fade-enter-active{
    transition: all 0.3s cubic-bezier(0, 1.27, 0.58, 1);
}
.fade-leave-active{
  opacity: 0;
  transition: all 0.3s cubic-bezier(0, 1.27, 0.58, 1);
}
.fade-enter{
  width: 0px;
  opacity: 0;
}
.fade-leave-active{
  opacity: 0;
}
.fade-leave{
  opacity:1;
}
</style>