<template>
  <div class="home themea">
    <div class="header">
      <!-- <el-color-picker v-model="color1" @change="changeSkin"></el-color-picker> -->
       <router-link tag="span" to="/Upload" >
        <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
        </router-link>
      <ul class="ctrl">
      
        <router-link tag="li" to="/RaiseCheck" >
          <span> <icon class="ICON" name="envelope"></icon><div class="MessNum">16</div></span>
        </router-link>
        <router-link tag="li" to="/IAADResult">
          <span><icon  class="ICON" name="user"></icon>Admin</span>
        </router-link>
        <router-link tag="li" to="/login" replace>
          <span @click="exit"><icon class="ICON" name="sign-out-alt"></icon>退出</span>
        </router-link>
      </ul>
     
    </div>
    <!-- <div class="aside" :style="{width:AsideWidth+'px'}" >
      <el-menu   class="el-menu-vertical-demo" :router='true' :default-active="$route.name" v-bind:id="$route.name">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>募集说明书检查</span>
          </template>
          <el-menu-item index="RaiseCheck">合规性检查</el-menu-item>
          <el-menu-item index="RaiseResult">结果查询</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>IAAD指标计算</span>
          </template>
          <el-menu-item index="IAADCheck">IAAD检查</el-menu-item>
          <el-menu-item index="IAADResult">结果查询</el-menu-item>
        </el-submenu>
      </el-menu>
    </div> -->
   
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
export default {
  name: 'home',
  data () {
    return {
      ActiveIndex:'',
      color1: '#409EFF',
      isShowDiv:false,
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
  watch: {
    theme(val, oldVal) {
      if (typeof val !== 'string') return
      const themeCluster = this.getThemeCluster(val.replace('#', ''))
      const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
      console.log(themeCluster, originalCluster)
      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
          const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)
          let styleTag = document.getElementById(id)
          if (!styleTag) {
            styleTag = document.createElement('style')
            styleTag.setAttribute('id', id)
            document.head.appendChild(styleTag)
          }
          styleTag.innerText = newStyle
        }
      }
      const chalkHandler = getHandler('chalk', 'chalk-style')
      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        this.getCSSString(url, chalkHandler, 'chalk')
      } else {
        chalkHandler()
      }
      const styles = [].slice.call(document.querySelectorAll('style'))
        .filter(style => {
          const text = style.innerText
          return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
        })
      styles.forEach(style => {
        const { innerText } = style
        if (typeof innerText !== 'string') return
        style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
      })
      this.$message({
        message: '换肤成功',
        type: 'success'
      })
    }
  },
  methods: {
    exit(){
      
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
      
    },
    changeSkin(color){
      console.log(color)
      this.theme = color
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style
      oldCluster.forEach((color, index) => {
        console.log(color,newCluster[index])
        newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
      })
      return newStyle
    },
    getCSSString(url, callback, variable) {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
          callback()
        }
      }
      xhr.open('GET', url)
      xhr.send() 
    },
    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
        if (tint === 0) { // when primary color is in its rgb space
          return [red, green, blue].join(',')
        } else {
          red += Math.round(tint * (255 - red))
          green += Math.round(tint * (255 - green))
          blue += Math.round(tint * (255 - blue))
          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)
          return `#${red}${green}${blue}`
        }
      }
      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16)
        let green = parseInt(color.slice(2, 4), 16)
        let blue = parseInt(color.slice(4, 6), 16)
        red = Math.round((1 - shade) * red)
        green = Math.round((1 - shade) * green)
        blue = Math.round((1 - shade) * blue)
        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)
        return `#${red}${green}${blue}`
      }
      const clusters = [theme]
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
      }
      clusters.push(shadeColor(theme, 0.1))
      return clusters
    }
  }
}
</script>
<style scoped lang="less">
  .home{
    .ICON{
      vertical-align: sub;
      color:#999c9e;
      font-size: 14px;
      padding-right: 10px;
    }
    .header{
        width:100%;
        height:50px;
        position: fixed;
        top:0px;
        line-height: 50px;
        background: #f3f3f4;//#20a0ff;
        color: #606266;
        .uploadBtn{
          display: inline-block;
          line-height: 1;
          background: #409EFF;
          border: 1px solid #dcdfe6;
          color: #fff;
          text-align: center;
          box-sizing: border-box;
          -webkit-user-select: none;
          padding: 8px 20px;
          font-size: 14px;
          border-radius: 4px;
          
          svg{
            vertical-align: bottom;
            margin-right: 10px;
          }
        }
        .ctrl{
          float: right;
          margin-top: -1px;
          padding-right: 10px;
          list-style: none;
          
          li{
            float: left;
          }
          span{
            cursor:default;
            position: relative;
            display: inline-block;
            line-height: 50px;
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
    // .aside{
    //     overflow: hidden;
    //     background:#fff;
    //     width:160px;
    //     position: absolute;
    //     left:0px;
    //     bottom:0px;
    //     top:50px;
    //     z-index: 3;
    //     transition: width 0.15s ease-out;
    //     .el-menu{
    //       border:none;
    //       /deep/.el-submenu__title {
    //         font-size: 13px;
    //       }
    //       /deep/ .el-menu-item{
    //         font-size: 13px;
    //       }
    //     }
    // }
    .content{
        position: absolute;
        left:0px;
        right:0px;
        top:50px;
        bottom:0px;
        overflow-y: auto;
        background:#ecf0f1;
        // .slide-fade-enter-active {
        //   transition: all .8s ease;
        // }
        // .slide-fade-leave-active {
        //   transition: all .8s ease;
        // }
        // .slide-fade-enter
        // /* .slide-fade-leave-active for below version 2.1.8 */ {
          
          
        // }
        // .slide-fade-leave-to{
        //   opacity: 0;
        // }
.routerView{
  position: absolute;
  width: 100%;
  height: 100%;
}
.fade-enter-active{
    transition: all 1s cubic-bezier(0, 1.27, 0.58, 1);
}
.fade-leave-active{
  opacity: 0;
  transition: all 0.5s cubic-bezier(0, 1.27, 0.58, 1);
}
/* 进入开始 */
.fade-enter{
  transform: translateX(130px);
  opacity: 0;
}
/* 出去终点 */
.fade-leave-active{
  transform: translateX(-130px);
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
}
.content-leave-active{
  opacity:0;
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
