<template>
    <div class="RaiseCheck">
        <li >
           <span class="serarchFile"><icon class="ICON" name="search"></icon>搜索文档</span>
           <!-- <el-button icon="el-icon-search">搜索文档</el-button> -->
        </li>
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
            <el-button  type="danger" size="mini">查看分析报告</el-button>
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
    return {}
  },
  created(){
    console.log("1233")
    //  this.$Get("rt/ui/lib/query").then(function(res) {
    //     console.log(res.data)
    // });
  },
  beforeRouteEnter (to, from, next) {
    console.log(to)
   
    // next();
    console.log(this)
    next(vm => {
        // 通过 `vm` 访问组件实例
        console.log(78999)
    })

  },
  beforeRouteUpdate (to, from, next) {
    console.log("------------------")
  },
}
</script>
<style lang="scss" scoped>
.RaiseCheck{
  .serarchFile{
            display: inline-block;
            cursor: default;
            background: #fff;
            border: 1px solid #dcdfe6;
            color: #606266;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            font-weight: 500;
            /* padding: 13px 0px; */
            font-size: 12px;
            border-radius: 4px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            padding-left: 5px;
            margin-right: 15px;
          }
  table{
    width: 100%;
    tr:nth-of-type(1){
      background:#f5f7fa;
    }
    // tr td:nth-of-type(1){
    //   width: 300px;
    // }
    // tr td:nth-of-type(2){
    //   width: 250px;
    // }
    // tr td:nth-of-type(3){
    //   width: 250px;
    // }
    //  tr td:nth-of-type(4){
    //   width: 100px;
    // }
    //  tr td:nth-of-type(5){
    //   width: 450px;
    // }
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

