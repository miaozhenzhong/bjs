<template>
    <div class="RaiseCheck">
       <router-link tag="div" class="up" to="/Upload" >
        <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
      </router-link>
      <div class="search">
          <input type="text" placeholder="用户名" v-model="user"/><span class="serarchFile"><icon class="ICON" name="search"></icon>搜索文档</span>
      </div>
      <table cellspacing="0">
        <tr>
          <td>文件名</td>   
          <td>创建时间</td>
          <td>文件状态</td>
          <td>发现冲突</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>华谊兄弟2016财务报告.PDF</td>   
          <td>20018-2-6 12:12:12</td>
          <td>文件分析中 预计用时15分钟</td>
          <td>计算中</td>
          <td>
            <el-button  type="danger" size="mini">处理中</el-button>
            <el-button  type="success" size="mini" >重新分析</el-button>
          </td>
        </tr>
        <tr>
          <td>开心麻花2016财务报告.PDF</td>   
          <td>20018-2-6 12:12:12</td>
          <td>已完成</td>
          <td>24个</td>
          <td>
            <router-link tag="span" :to="{ path: 'Report', query: { id: 'private' }}">
                <el-button  type="danger" size="mini">查看分析报告</el-button>
            </router-link>
            <el-button  type="primary" size="mini" >下载文档</el-button>
            <el-button  type="success" size="mini" >重新分析</el-button>
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
      user:'',
      message:"<div style='background:red;width:50px;height:50px'></div>"
    }
  },
  created(){
    console.log("1233")
    //  this.$Get("rt/ui/lib/query").then(function(res) {
    //     console.log(res.data)
    // });
  }}
</script>
<style lang="scss" scoped>
.RaiseCheck{
  .up{
    margin-top: 15px;
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
      left: 956px;
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
  }
}
</style>

