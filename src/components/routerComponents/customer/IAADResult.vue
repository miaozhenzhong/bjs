<template>
    <div class="IAADResult">
        <div class="content">
           <el-steps :active="active" finish-status="success">
            <el-step title="基础指标确认"></el-step>
            <el-step title="基础指标评分"></el-step>
            <el-step title="选择调整事项"></el-step>
            <el-step title="调整事项评分"></el-step>
            <el-step title="评分汇总"></el-step>
            <el-step title="完成"></el-step>
        </el-steps>
            <transition name="fade" class="transition">
              <div class="one" v-show="1==nowIndex">
                <iframe  scrolling="yes" id="iFrm1" frameborder="0"  src="../../../static/12345/123.html" @load="overLoad(1)" name="ifr"></iframe>
                <div class="tapPage">
                    <span class="next" @click="nextStep(2)">
                      <!-- <icon name="arrow-right"></icon> -->
                      下一步
                    </span>
                  <!-- <el-button @click="nextStep(2)">下一步</el-button> -->
                  <el-tabs v-model="activeName2" style="clear:both;" type="card" @tab-click="handleClick">
                    <el-tab-pane label="已抽取" name="first">
                      <table cellspacing="0">
                        <tr >
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div>指标权重</div></td>
                          <td><div>阈值</div></td>
                        </tr>
                        <tr v-for="(ele,index) in oneData" :key="index">
                          <td ><div>{{ele.name}}</div></td>  
                          <td ><div>{{ele.value}}</div></td>  
                          <td ><div>{{ele.sore}}</div></td>  
                          <td ><div>{{ele.power}}</div></td>
                          <td ><div>{{ele.threshold}}</div></td>    
                        </tr>
                      </table>
                    </el-tab-pane>
                    <el-tab-pane label="待确认" name="second">
                      <div v-for="(ele,index) in tableArr" :key="index">
                        <h1>增速</h1> 
                        <table cellspacing="0">
                        <tr>
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div>指标权重</div></td>
                          <td><div>阈值</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr v-for="(ele,num) in tableArr[index].data" :key="num">
                          <td><div>{{ele.name}}</div></td>   
                          <td><div>{{ele.value}}</div></td>
                          <td><div>{{ele.sore}}</div></td>
                          <td><div>{{ele.power}}</div></td>
                          <td><div>{{ele.threshold}}</div></td>
                          <td>
                          <el-button  type="success" size="mini" >确认</el-button>
                          </td>
                        </tr>
                      </table>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="人工录入" name="third">
                      <table cellspacing="0">
                        <tr>
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div>指标权重</div></td>
                          <td><div>阈值</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr v-for="(ele,num) in oneData" :key="num">
                          <td><div v-show="read||Num!=num">{{ele.name}}</div><div v-show="edit&&Num==num"><input type="txt" v-model="fileName"/></div></td>   
                          <td><div v-show="read||Num!=num">{{ele.value}}</div><div v-show="edit&&Num==num"><input type="txt" v-model="fileValue"/></div></td>
                          <td><div v-show="read||Num!=num">{{ele.sore}}</div><div v-show="edit&&Num==num"><input type="txt" v-model="fileSore"/></div></td>
                          <td><div v-show="read||Num!=num">{{ele.power}}</div><div v-show="edit&&Num==num"><input type="txt" v-model="filepower"/></div></td>
                          <td><div v-show="read||Num!=num">{{ele.threshold}}</div><div v-show="edit&&Num==num"><input type="txt" v-model="fileThreshold"/></div></td>
                          <td>
                          <el-button  type="danger" size="mini" v-if="read||num!=Num" @click="editTable(num)">修改</el-button>
                          <el-button type="primary" size="mini" v-if="edit&&num==Num" @click="saveTable(num)">保存</el-button>
                          <el-button  type="success" size="mini" >删除</el-button>
                          </td>
                        </tr>
                      </table>
                    </el-tab-pane>
                  </el-tabs>
                  </div>
              </div>
            </transition>
            <transition name="fade" class="transition">
              <div class="one" v-show="2==nowIndex">
                  <span class="back" @click="backStep(1)">
                    上一步
                    <!-- <icon name="arrow-left"></icon> -->
                  </span>
                 <span class="next" @click="nextStep(3)">
                      <!-- <icon name="arrow-right"></icon> -->
                      下一步
                    </span>
                  <table cellspacing="0">
                        <tr>
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div>指标权重</div></td>
                          <td><div>阈值</div></td>
                          <td><div>备注</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr v-for="(ele,NumTwo) in tabledataTwo" :key="NumTwo">
                          <td><div v-show="readTwo||NumTw!=NumTwo">华谊兄弟2016财务报告.PDF</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="fileNameTwo"/></div></td>   
                          <td><div  v-show="readTwo||NumTw!=NumTwo">20018-2-6 12:12:12</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="fileValueTwo"/></div></td>
                          <td><div  v-show="readTwo||NumTw!=NumTwo">文件分析中 预计用时15分钟</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="fileSoreTwo"/></div></td>
                          <td><div  v-show="readTwo||NumTw!=NumTwo">计算中</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="filepowerTwo"/></div></td>
                          <td><div  v-show="readTwo||NumTw!=NumTwo">123</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="fileLimtTwo"/></div></td>
                          <td><div  v-show="readTwo||NumTw!=NumTwo">555</div><div v-show="editTwo&&NumTw==NumTwo"><input type="txt" v-model="fileDescription"/></div></td>
                          <td>
                            <div> 
                              <el-button v-if="readTwo||NumTw!=NumTwo"   type="danger" size="mini" @click="editTableTwo(NumTwo)">修改</el-button>
                              <el-button v-if="editTwo&&NumTw==NumTwo"  type="success" size="mini" @click="saveTableTwo(NumTwo)">保存</el-button></div>
                          </td>
                        </tr>
                      </table>
              </div>
            </transition>
             <transition name="fade" class="transition">
              <div class="one" v-show="3==nowIndex">
                 <span class="back" @click="backStep(2)">
                    上一步
                    <!-- <icon name="arrow-left"></icon> -->
                  </span>
                  <span class="next" @click="nextStep(4)">
                      下一步
                  </span>
                  <table cellspacing="0">
                        <tr>
                          <td><div>事项类别</div></td>   
                          <td><div>事项内容</div></td>
                          <td><div>种类</div></td>
                          <td><div>处理措施类别</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr>
                          <td><div>华谊兄弟2016财务报告.PDF</div></td>   
                          <td><div> 12:12:12</div></td>
                          <td><div>文件分析中 预计用时15分钟</div></td>
                          <td><div>计算中</div></td>
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
                          <el-button  type="primary" size="mini" >下载文档</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
              </div>
            </transition>
            <transition name="fade" class="transition">
              <div class="one" v-show="4==nowIndex">
                 <span class="back" @click="backStep(3)">
                    上一步
                    <!-- <icon name="arrow-left"></icon> -->
                  </span>
                 <span class="next" @click="nextStep(5)">
                      下一步
                  </span>
                  <table cellspacing="0">
                        <tr>
                          <td><div>事项类别</div></td>   
                          <td><div>事项内容</div></td>
                          <td><div>种类</div></td>
                          <td><div>处理措施类别</div></td>
                          <td><div>得分</div></td>
                          <td><div>IAAD工具箱</div></td>
                          <td><div>备注</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr>
                          <td><div>华谊兄弟2016财务报告.PDF</div></td>   
                          <td><div>20018-2-6 12:12:12</div></td>
                          <td><div>文件分析中 预计用时15分钟</div></td>
                          <td><div>计算中</div></td>
                          <td><div>计算中</div></td>
                          <td><div>计算中</div></td>
                          <td>
                          <el-button  type="danger" size="mini">处理中</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
              </div>
            </transition>
            <transition name="fade" class="transition">
               <div class="one" v-show="5==nowIndex">
                  <span class="back" @click="backStep(4)">
                    上一步
                    <!-- <icon name="arrow-left"></icon> -->
                  </span>
                    <span class="next" @click="nextStep(6)">
                      下一步
                  </span>
                 <table cellspacing="0">
                        <tr>
                          <td><div>指标名称</div></td>   
                          <td><div>指标值</div></td>
                          <td><div>指标得分</div></td>
                          <td><div指标权重></div></td>
                          <td><div>阈值</div></td>
                          <td><div>备注</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr>
                          <td><div>华谊兄弟2016财务报告.PDF</div></td>   
                          <td><div>20018-2-6 12:12:12</div></td>
                          <td><div>文件分析中 预计用时15分钟</div></td>
                          <td><div>计算中</div></td>
                            <td><div>123</div></td>
                             <td><div>555</div></td>
                          <td>
                          <el-button  type="danger" size="mini">处理中</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
                  <table cellspacing="0">
                        <tr>
                          <td><div>事项类别</div></td>   
                          <td><div>事项内容</div></td>
                          <td><div>种类</div></td>
                          <td><div>处理措施类别</div></td>
                          <td><div>得分</div></td>
                          <td><div>IAAD工具箱</div></td>
                          <td><div>备注</div></td>
                          <td><div>操作</div></td>
                        </tr>
                        <tr>
                          <td><div>华谊兄弟2016财务报告.PDF</div></td>   
                          <td><div>20018-2-6 12:12:12</div></td>
                          <td><div>文件分析中 预计用时15分钟</div></td>
                          <td><div>计算中</div></td>
                          <td><div>计算中</div></td>
                          <td><div>计算中</div></td>
                          <td>
                          <el-button  type="danger" size="mini">处理中</el-button>
                          <el-button  type="success" size="mini" >重新分析</el-button>
                          </td>
                        </tr>
                      </table>
              </div>
            </transition>
            <transition name="fade" class="transition">
               <div class="one" v-show="6==nowIndex">
                  <div class="centerBox">
                    <icon class="ICON" name="check-circle"></icon>
                    <router-link :to="{ path: 'IAADCheck'}" tag="div">
                      <div class="link">
                      返回IAAD首页
                      </div>
                    </router-link>
                  </div>
              </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'IAADResult',
    data(){
        return{
            fileNameTwo:'',
            fileValueTwo:'',
            fileSoreTwo:'',
            filepowerTwo:'',
            fileLimtTwo:'',
            fileDescription:'',
            editTwo:false,
            readTwo:true,
            NumTw:'',
            Num:'',
            fileName:'',
            fileValue:'',
            fileSore:'',
            filepower:'',
            fileThreshold:'',
            edit:false,
            read:true,
            active:0,
            activeName2: '1',
            nowIndex:'1',
            tabledataGrop:[],
            tabledataTwo:[
               {
                name:"GDP增速",
                value:"6%",
                sore:"5分",
                power:"5%",
                threshold:"6"
              },
            ],
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
        // for(var i in this.tableArr){
        //   this.$set(this.tabledataGrop,i,this.tableArr[i].data)
        // }
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
          this.active = index-1;
          if(index==6){
            this.active = index;
          }
        },
        backStep(index){
           this.nowIndex = index;
           this.active = index-1;
        },
        editTable(num){
          this.Num = num;
          this.edit = true;
          this.read = false;
        },
        saveTable(){
           this.Num = '';
          this.edit = false;
          this.read = true;
        },
        editTableTwo(num){
          this.NumTw = num;
          this.editTwo = true;
          this.readTwo = false;
        },
        saveTableTwo(num){
          this.NumTw = num;
          this.editTwo = false;
          this.readTwo = true;
        }
    }
}
</script>
<style lang="less" scoped>
    .IAADResult{
        .one{
          position: absolute;
          clear: both;
          width: 100%;
          height: 90%;
          table{
            width: 100%;
            tr:nth-of-type(1){
              background:#f5f7fa;
            }
            tr td{
              text-align: center;
              border: 1px solid #ebeef5;
              width:12.5%;
            }
            tr:hover{
              background:#f5f7fa;
            }
            td div{
              text-align: center;
              display: inline-block;
              padding:5px 0px;
              line-height: 35px;
              input{
                width:100%;
                border:1px solid #ebeef5;
                border-radius: 5px;
                outline: none;
                height: 100%;
                background: #fff;
               text-align: center;
               display: block;
               height: 35px;
                box-shadow: 0px 0px 1px 1px #e5e1ef;
                &::-ms-clear {
                    width : 0;
                    height: 0;
                }
              }
            }
          }
          .centerBox{
            position: absolute;
            text-align: center;
            left:50%;
            top:35%;
            transform: translate(-50%,-50%);
            .link{
              color: #339af0;
                font-size: 25px;
                text-decoration: underline #339af0;
                cursor: pointer;
            }
            svg{
              width:200px;
              height:200px;
              color: #67c23a;
              margin-bottom: 25px;
            }
          }
        }
        .content{
            position:absolute;
            left:0px;
            top:0px;
            right:0px;
            bottom:5px;
            background:#fff;
            .el-steps{
              height: 10%;
              padding-top: 5px;
              box-sizing: border-box;
            }
            .back{
                 display: inline-block;
                 width: 50px;
                height: 25px;
                background: #339af0;
                text-align: center;
                line-height: 25px;
                color:#fff;
                border-radius: 5px;
                margin-top: 5px;
                margin-bottom:5px;
            }
            .next{
              display: inline-block;
              margin-right: 5px;
              width: 50px;
              height: 25px;
              background: #339af0;
               margin-bottom:5px;
              text-align: center;
              color:#fff;
              line-height: 25px;
              border-radius: 5px;
              margin-top:5px;
              position: absolute;
              right: 10px;
              z-index: 2;
              svg{
                  color: #fff;
                  position: relative;
                  top: 50%;
                  /* left: 50%; */
                  text-align: center;
                  -webkit-transform: translate(-50%, -50%);
                  transform: translateY(-50%);
              }
            }
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
            .fade-enter{
              transform: translateX(130px);
              opacity: 0;
            }
            .fade-enter-active{
                transition: all .8s cubic-bezier(0, 1.27, 0.58, 1);
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

