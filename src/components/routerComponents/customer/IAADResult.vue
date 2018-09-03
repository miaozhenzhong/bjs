<template>
    <div class="report">
        <div class="content">
            <transition name="fade">
              <div class="one" v-show="1==nowIndex">
                <iframe  scrolling="yes" id="iFrm1" frameborder="0"  src="../../../static/12345/123.html" @load="overLoad(1)" name="ifr"></iframe>
                <div class="tapPage">
                  <el-button @click="nextStep(2)">下一步</el-button>
                  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="已抽取" name="first">
                      <table cellspacing="0">
                        <tr >
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div>指标权重</div></td>
                          <td><div>阈值</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr v-for="(ele) in oneData" :key="ele">
                          <td ><div>{{ele.name}}</div></td>  
                          <td ><div>{{ele.value}}</div></td>  
                          <td ><div>{{ele.sore}}</div></td>  
                          <td ><div>{{ele.power}}</div></td>
                          <td ><div>{{ele.threshold}}</div></td>    
                          <td>
                            <el-button  type="danger" size="mini">处理中</el-button>
                          </td>
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="待确认" name="second">
                      <div>GDP增速</div>
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
                      <table cellspacing="0">
                        <tr>
                          <td>指标名称</td>   
                          <td>指标值</td>
                          <td>指标得分</td>
                          <td>指标权重</td>
                          <td>阈值</td>
                          <td>操作</td>
                        </tr>
                        <tr v-for="(ele) in tabledataGrop" :key="ele">
                          <td>{{ele.value}}</td>   
                          <td>{{ele.sore}}</td>
                          <td>{{ele.power}}</td>
                          <td>{{ele.threshold}}</td>
                          <td>
                          <el-button  type="danger" size="mini">处理中</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
                      <div></div>
                    </el-tab-pane>
                    <el-tab-pane label="人工录入" name="third">人工录入</el-tab-pane>
                  </el-tabs>
                  </div>
              </div>
            </transition>
            <transition name="fade">
              <div class="one" v-show="2==nowIndex">
                 <el-button @click="nextStep(3)">下一步</el-button>
                  <table cellspacing="0">
                        <tr>
                          <td>指标名称</td>   
                          <td>指标值</td>
                          <td>指标得分</td>
                          <td>指标权重</td>
                          <td>阈值</td>
                          <td>备注</td>
                          <td>操作</td>
                        </tr>
                        <tr>
                          <td>华谊兄弟2016财务报告.PDF</td>   
                          <td>20018-2-6 12:12:12</td>
                          <td>文件分析中 预计用时15分钟</td>
                          <td>计算中</td>
                            <td>123</td>
                             <td>555</td>
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
                          <td>555</td>
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
            </transition>
             <transition name="fade">
              <div class="one" v-show="3==nowIndex">
                  <el-button @click="nextStep(4)">下一步</el-button>
                  <table cellspacing="0">
                        <tr>
                          <td>事项类别</td>   
                          <td>事项内容</td>
                          <td>种类</td>
                          <td>处理措施类别</td>
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
            </transition>
              <transition name="fade">
              <div class="one" v-show="4==nowIndex">
                  <el-button @click="nextStep(5)">下一步</el-button>
                  <table cellspacing="0">
                        <tr>
                          <td>事项类别</td>   
                          <td>事项内容</td>
                          <td>种类</td>
                          <td>处理措施类别</td>
                          <td>得分</td>
                          <td>IAAD工具箱</td>
                          <td>备注</td>
                          <td>操作</td>
                        </tr>
                        <tr>
                          <td>华谊兄弟2016财务报告.PDF</td>   
                          <td>20018-2-6 12:12:12</td>
                          <td>文件分析中 预计用时15分钟</td>
                          <td>计算中</td>
                          <td>计算中</td>
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
                          <td>计算中</td>
                          <td>计算中</td>
                          <td>计算中</td>
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
            </transition>
            <transition>
               <div class="one" v-show="5==nowIndex">
                   <el-button @click="nextStep(6)">下一步</el-button>
                 <table cellspacing="0">
                        <tr>
                          <td>指标名称</td>   
                          <td>指标值</td>
                          <td>指标得分</td>
                          <td>指标权重</td>
                          <td>阈值</td>
                          <td>备注</td>
                          <td>操作</td>
                        </tr>
                        <tr>
                          <td>华谊兄弟2016财务报告.PDF</td>   
                          <td>20018-2-6 12:12:12</td>
                          <td>文件分析中 预计用时15分钟</td>
                          <td>计算中</td>
                            <td>123</td>
                             <td>555</td>
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
                          <td>555</td>
                          <td>
                          <router-link tag="span" :to="{ path: 'Report', query: { id: 'private' }}">
                              <el-button  type="danger" size="mini">查看分析报告</el-button>
                          </router-link>
                          <el-button  type="primary" size="mini" >下载文档</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
                  <table cellspacing="0">
                        <tr>
                          <td>事项类别</td>   
                          <td>事项内容</td>
                          <td>种类</td>
                          <td>处理措施类别</td>
                          <td>得分</td>
                          <td>IAAD工具箱</td>
                          <td>备注</td>
                          <td>操作</td>
                        </tr>
                        <tr>
                          <td>华谊兄弟2016财务报告.PDF</td>   
                          <td>20018-2-6 12:12:12</td>
                          <td>文件分析中 预计用时15分钟</td>
                          <td>计算中</td>
                          <td>计算中</td>
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
                          <td>计算中</td>
                          <td>计算中</td>
                          <td>计算中</td>
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
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'report',
    data(){
        return{
            activeName2: '1',
            nowIndex:'1',
            tabledataGrop:[],
            oneData:[
              {
                name:"GDP增速",
                value:"6%",
                sore:"5分",
                power:"5%",
                threshold:"6"
              },
              {
                name:"GDP增速",
                value:"6%",
                sore:"5分",
                power:"5%",
                threshold:"6"
              }
            ],
            tableArr:[
              {
                data:[
                  {
                    name:"GDP增速",
                    value:"6%",
                    sore:"5分",
                    power:"5%",
                    threshold:"6"
                  },
                  {
                    name:"GDP增速",
                    value:"6%",
                    sore:"5分",
                    power:"5%",
                    threshold:"6"
                  }
                ]
              },
              {
                data:[
                  {
                    name:"公路里程",
                    value:"6%",
                    sore:"5分",
                    power:"5%",
                    threshold:"6"
                  },
                   {
                    name:"公路里程",
                    value:"6%",
                    sore:"5分",
                    power:"5%",
                    threshold:"6"
                  }
                ]
              }
            ]
        }
    },
    mounted(){
        for(var i in this.tableArr){
          this.$set(this.tabledataGrop,i,this.tableArr[i].data)
        }
    },
    methods:{
        overLoad(page){
          var ifrm1 = document.getElementById('iFrm1');
          console.log( ifrm1.contentWindow.document.getElementById("page-container").style)
        },
        handleClick(){
          
        },
        nextStep(index){
          this.nowIndex = index;
        }
    }
}
</script>
<style lang="less" scoped>
    .report{
        .one{
          clear: both;
          width: 100%;
          height: 100%;
        }
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
              overflow-y: auto;
              height: 100%;
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
            .fade-enter{
              transform: translateX(130px);
              opacity: 0;
            }
            .fade-enter-active{
                transition: all 0.8s cubic-bezier(0, 1.27, 0.58, 1);
            }
            .fade-enter-to{
                transform: translateX(0px);
                opacity: 1;
            }
            .fade-leave{
                transform: translateX(0px);
                opacity:1;
            }
            .fade-leave-active{
                transition: all 0.8s cubic-bezier(0, 1.27, 0.58, 1);
            }
            .fade-leave-to{
                transform: translateX(-130px);
                opacity: 0;
            }
        }
    }
</style>

