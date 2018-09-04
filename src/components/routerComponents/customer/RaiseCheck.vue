<template>
    <div class="RaiseCheck">
        
        <div class="search">
            <router-link tag="div" class="up" to="/Upload" >
            <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
            </router-link>
            <input type="text" placeholder="用户名" v-model="user"/><span class="serarchFile" @click="serarchfile"><icon class="ICON" name="search"></icon>搜索文档</span>
        </div>
        <table cellspacing="0">
        <tr>
          <td>文件名</td>   
          <td>创建时间</td>
          <td>文件状态</td>
          <td>发现冲突</td>
          <td>操作</td>
        </tr>
        <tr v-for="(ele,index) in tableRaiseCheck" :key="index">
          <td>{{ele.documentName}}</td>   
          <td>{{ele.createTime}}</td>
          <td><div class="breathe-btn"></div>{{ele.jobStatus}}</td>
          <td>{{ele.conflictNum}}</td>
          <td>
            <router-link tag="span" :to="{ path: 'RaiseResult', query: { id: 'private' }}">
                <button :disabled="ele.click" :class="{'disabledCss':ele.click}" class="baseCss result"><icon name="file-contract"></icon><span>查看分析结果</span></button>
            </router-link>
            <button  class="baseCss down"><a  href="http://image.baidu.com/search/down?tn=download&ipn=dwnl&word=download&ie=utf8&fr=result&url=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0117e2571b8b246ac72538120dd8a4.jpg%401280w_1l_2o_100sh.jpg&thumburl=http%3A%2F%2Fimg5.imgtn.bdimg.com%2Fit%2Fu%3D415293130%2C2419074865%26fm%3D26%26gp%3D0.jpg" download="w3logo" ><icon name="file-download"></icon><span>下载批注文档</span></a></button>
            <router-link :to="{ path: 'Upload', query: { step:'true' }}"> <button  class="baseCss reset" @click="resetCheck(ele)"><icon name="undo-alt"></icon><span>重新分析</span></button></router-link>
          </td>
        </tr>
      </table>
    </div>
</template>
<script>
export default {
  name: 'RaiseCheck',
  data () {
    return {
      sondata:["M.1","M.2","M.1",],
      checkListFive:[],
      checkListone:[],
      tableRaiseCheck:[],
      user:'',
      message:"<div style='background:red;width:50px;height:50px'></div>",
      documentId:''
    }
  },
  created(){
      console.log("1233")
      var params = {};
      params.from = 1;
      params.size = 8;
      var _this = this;
      this.$jsonPost("/api/iras/spec/file/list",params).then(function(res){
          console.log(res.data)
          _this.tableRaiseCheck = res.data.rows;
      })
  },
  methods:{
    serarchfile(){
      var params = {};
      var _this = this;
      if(this.user){
        params.documentName = this.user;
        params.from=1;
        params.size=8;
        console.log("1222")
        this.$jsonPost("api/iras/spec/file/search",params).then(function(res){
          console.log(res.data)
          _this.tableRaiseCheck = res.data.rows;
        })
      }else{
        this.$notify({
            title: '警告',
            duration: 1500,
            type: 'error',
            dangerouslyUseHTMLString: true,
            message: "搜索内容不能为空！"
        });
      }
      params = null;
    },
    resetCheck(ele){
      this.documentId = ele.documentId;
      this.$router.replace("Upload")
    },
    handleClose(){

    }
  }
  }
</script>
<style lang="scss" scoped>
.RaiseCheck{
  .contentSelect{
    padding-left: 15px;
    max-height: 400px;
    overflow-y: auto;
    .el-checkbox{
      width:120px;
    }
  }
  .up{
    display: inline-block;
    float: left;
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
  }
  
  .search{
    height: 65px;
    line-height: 65px;
    text-align:center; 
    position: relative;
    input{
        border:1px solid #fff;
        outline: none;
        padding:0px 15px;
        background: #fff;
        width:500px;
        height:40px;
        box-shadow: 0px 0px 1px 1px #e5e1ef;
        &::-ms-clear {
            width : 0;
            height: 0;
        }
        margin-bottom: 30px;
    }
    .serarchFile{
      position: absolute;
      display: block;
      cursor: default;
      background: #fff;
      color: #606266;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 0;
      font-weight: 500;
      /* padding: 13px 0px; */
      font-size: 12px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      left: 1000px;
      top: 12px;
        .ICON{
            vertical-align: text-top;
            padding-right: 5px;
        }
    }
  }
 
  table{
    width: 100%;
    tr:nth-of-type(1){
      background:#f5f7fa;
    }
    tr td{
      text-align: center;
      height:45px;
      border: 1px solid #ebeef5;
    }
    tr:hover{
      background:#f5f7fa;
    }
    td{
      .baseCss{
        appearance: none;
        border: none;
        outline: none;
        cursor: pointer;
        background: none;
        color:#fff;
        border-radius: 5px;
        padding: 10px 10px;
        svg{
            vertical-align: sub;
          }
        span{
          display: inline-block;
          margin-left: 10px;
        }
        a{
          text-decoration:none;
          appearance: none;
          display: inline-block;
          width: 100%;
          height: 100%;
          color:#fff;
          &:active {
            color:''; /*鼠标按下的颜色变化*/
          }
        }
      }

      .result{
        background: #409eff;
      }
      .down{
        background:#67c23a;
      }
      .reset{
         background:#f56c6c;
      }
      .disabledCss{
        cursor: not-allowed;
        background: #606266;
      }
      .breathe-btn {
        display: inline-block;
        position:relative;
        width:10px;
        height:10px;
        margin-right: 10px;
         border:1px solid #67c23a;
        border-radius:50%;
        color:#fff;
        font-size:20px;
        text-align:center;
        box-shadow:0 1px 2px rgba(0,0,0,.3);
        overflow:hidden;
        background:#67c23a;
        
        //-webkit-gradient(linear,left top,left bottom,from(#6cc3fe),to(#21a1d0));
        -webkit-animation-timing-function:ease-in-out;
        -webkit-animation-name:breathe;
        -webkit-animation-duration:800ms;
        -webkit-animation-iteration-count:infinite;
        -webkit-animation-direction:alternate;
      }
      @-webkit-keyframes breathe {
        0% {
          // opacity:.45;
          transform: scale(0.75);
          // background: #67c23a;
          // box-shadow:0 1px 2px rgba(255,255,255,0.1);
        }
        100% {
            transform: scale(1);
            // opacity:1;
            // background: #67c23a;
            // border:1px solid #67c23a;
            // box-shadow:0 1px 5px #67c23a
        }
      }
    }
  }
}
</style>

