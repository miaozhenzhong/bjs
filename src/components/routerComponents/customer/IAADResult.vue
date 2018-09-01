<template>
    <div class="report">
        <div class="content">
          <iframe  scrolling="yes" id="iFrm1" frameborder="0"  src="../../../static/12345/123.html" @load="overLoad(1)" name="ifr"></iframe>
          <div class="tapPage">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="用户管理" name="first">
                <table cellspacing="0">
                  <tr>
                  <td>指标名称</td>   
                  <td>指标值</td>
                  <td>指标得分</td>
                  <td>指标权重</td>
                  <td>阈值</td>
                  <td>操作</td>
                  </tr>
                  <tr>
                  <td>华谊兄弟2016财务报告.PDF</td>   
                  <td>20018-2-6 12:12:12</td>
                  <td>文件分析中 预计用时15分钟</td>
                  <td>计算中</td>
                    <td>123</td>
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
                  <td>123</td>
                  <td>
                  <router-link tag="span" :to="{ path: 'Report', query: { id: 'private' }}">
                      <el-button  type="danger" size="mini">查看分析报告</el-button>
                  </router-link>
                  <el-button  type="primary" size="mini" >下载文档</el-button>
                  <el-button  type="success" size="mini" >重新分析</el-button>
                  </td>
                  </tr>
                </table>
              </el-tab-pane>
              <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            </el-tabs>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'report',
    data(){
        return{
            activeName2: '1',
        }
    },
    mounted(){
        
    },
    methods:{
        overLoad(page){
          var ifrm1 = document.getElementById('iFrm1');
          console.log( ifrm1.contentWindow.document.getElementById("page-container").style)
        }
    }
}
</script>
<style lang="less" scoped>
    .report{
        .content{
            position:absolute;
            left:0px;
            top:0px;
            right:0px;
            bottom:12px;
            background:#fff;
            .tapPage{
              width:55%;
              float: left;
            }
            #iFrm1{
                width: 45%;
                border: none;
                height: 100%;
                display: inline-block;
                overflow-x: hidden;
                float: left;
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
    }
</style>

