<template>
  <div class="home themea">
    <div class="header">
      <!-- <el-color-picker v-model="color1" @change="changeSkin"></el-color-picker> -->
      <span class="logo">
        <img src="../assets/logo.gif"/><span>智能注册评议系统</span>
      </span>
      <ul class="ctrl">
        <span>欢迎，{{userName}}，访问本系统！</span>
        <span @click="home"><icon class="ICON" name="home"></icon>主页</span>
        <router-link tag="li" to="/SetUp">
          <span><icon  class="ICON" name="cog"></icon>设置</span>
        </router-link>
        <span @click="exit"><icon class="ICON" name="sign-out-alt"></icon>退出</span>
      </ul>
    </div>
    <div class="content" >
      <transition name="fade">
      <router-view class="routerView"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
const version = require('element-ui/package.json').version // element-ui version from node_modules
const ORIGINAL_THEME = '#409EFF' // default color
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      userName:localStorage.name,
      ActiveIndex:'',
      color1: '#409EFF',
      id:'0',
      styleObject:{
        height:'0px'
      },
      IAADCheck:'IAADCheck',
      normallHeight:'35px',
      noneHeight:"0px",
      NowIndex:null,
      msg: 'Welcome to Your Vue.js App',
      AsideWidth:200,
      asideIndex:null,
      asideData:[
        {
          title:'募集说明书检查',
          children:[
            {
              title:"合规性检查"
            },
            {
              title:"结果查询"
            }
          ]
        }
      ],
      theme: "#409EFF",
      chalk:''
    }
  },
  created(){
    this.asideData[0].item = {"sd":"888"}
    console.log(this.asideData)
    this.refresh();
    
  },
  methods: {
    ...mapActions([
            'sendMessage',
            'sendLoginMessage' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    home(){
        this.$router.replace("Index")
    },
    exit(){
      var _this = this;
      this.$Get('/api/iras/management/user/logout').then(function (res) {
          _this.$router.replace("login")
      })
    },
    refresh(){
      console.log(this.$route)
      this.openeds = ['1']
    },
    openAside(out){
      if(out=="out"){
        this.AsideWidth = 50
      }else{
        this.AsideWidth = 200
      }
    }
  }
}
</script>
<style scoped lang="less">
  .home{
    .logo{
      display: inline-block;
      height: 100%;
      img{
        height: 100%;
        vertical-align: top;
        display: inline-block;
      }
      span{
        margin-left:20px;
        font-size: 20px;
      }
    }
    .ICON{
      vertical-align: sub;
      color:#999c9e;
      font-size: 14px;
      padding-right: 10px;
    }
    .header{
        width:100%;
        height:35px;
        position: fixed;
        top:0px;
        line-height: 35px;
        background: #f3f3f4;//#20a0ff;
        color: #606266;
        
        .ctrl{
          float: right;
          margin-top: -1px;
          padding-right: 10px;
          list-style: none;
          
          li{
            display: inline-block;
          }
          span{
            cursor:default;
            position: relative;
            display: inline-block;
            line-height: 35px;
            padding-right: 10px;
            color: #999c9e;
            .MessNum{
              position: absolute;
              top:6px;
              left:0px;
              display: inline-block;
              background: #f8ac59;
           
              border-radius: 3px;
            
                 line-height: 12px;
    padding: 2px 8px;
              color:#fff;
              font-size: 10px;
                  font-family: 'Open Sans';
                  font-weight: 600;
              text-align: center;
            }
          }
        }
    }
    .content{
        position: absolute;
        left:0px;
        right:0px;
        top:35px;
        bottom:0px;
        overflow-x: hidden;
        overflow-y: auto;
        background:#ecf0f1;
    .routerView{
      position: absolute;
      width: 100%;
      height: 100%;
    }
.fade-enter-active{
    // -ms-transition: all 0.15s cubic-bezier(0, 0.64, 0.25, 0.81);
    // transition: all 0.15s cubic-bezier(0, 0.64, 0.25, 0.81);
     transition: all 0.3s cubic-bezier(0, 0.81, 0.25, 0.81);
}
.fade-leave-active{
     transition: all 0.3s cubic-bezier(0, 0.81, 0.25, 0.81);
  opacity: 0;
  //  -ms-transition: all 0.15s cubic-bezier(0, 0.64, 0.25, 0.81);
  //  transition: all 0.15s cubic-bezier(0, 0.64, 0.25, 0.81)
}
/* 进入开始 */
.fade-enter{
  transform: translateX(-10px);
   -ms-transform: translateX(-10px);
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  transform: translateX(10px);
   -ms-transform: translateX(10px);
  opacity: 0;
}
.fade-leave{
  opacity:1;
}

.content-enter {
  opacity:0;
}
.content-leave{
  opacity:1;
}
.content-enter-active{
  transition:opacity 5s;
  -ms-transition:opacity 5s;
}
.content-leave-active{
  opacity:0;
  -ms-transition:opacity 5s;
  transition:opacity 5s;
}




















//         .fade-enter {
//   opacity:0;
//    transform: translateX(0px);
  
// }
// .fade-leave{
//   opacity:1;
//    transform: translateX(200px);
// }
// .fade-enter-active{
//   transition:opacity .5s;
//   transform: translateX(0px);
//      transform: translateX(0px);
// }
// .fade-leave-active{
//   opacity:0;
//      transform: translateX(0px);
//   transition:opacity .5s;
// }
//        .transitionRouter-enter-active{
//          transition: all 0.8s;
//        }
// .transitionRouter-leave-active {
//     transition: all 0.8s;
// }

// .transitionRouter-enter,
// .transitionRouter-leave{
//     transform: translate3d(100%, 0, 0);
// }
// .transitionRouter-leave-to{
//           opacity: 0;
//         }
//        .transitionRouter-enter-to{
//           opacity: 1;
//         } 
    }
  }
</style>
