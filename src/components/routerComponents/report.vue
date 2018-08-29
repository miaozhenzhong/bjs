<template>
    <div class="report">
        <div class="aside">
            <ul>
                <li  @click="check('one')" :class="{active:'one'==NowNav}">架构完整性检查</li>
                <li  @click="check('two')" :class="{active:'two'==NowNav}">一致性检查</li>
                <li  @click="check('three')" :class="{active:'three'==NowNav}">内容合理性检查</li>
                <li  @click="check('four')" :class="{ active:'four'==NowNav}">常识性检查</li>
            </ul>
        </div>
        <div class="content">
            <div @click="tapClick">错误</div><div  @click="tapClick">疑似正确</div><div  @click="tapClick">正确</div>
            <div v-show="TapShow">
                 <iframe  style="width:100%;min-height:600px;border:none;" scrolling="yes" onload="this.height=100" id="iFrm1" frameborder="0" v-if="showiframe"  src="../../static/红石.html" @load="overLoad(1)" name="ifr"></iframe>
            </div>
                <!-- <div class="tableItem">
                    <table cellspacing="0" >
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
                </div> -->
                   
                    <!-- <el-collapse v-model="activeName2" accordion>
                        <el-collapse-item title="一致性 Consistency" name="1">
                           
                        </el-collapse-item>
                        <el-collapse-item title="反馈 Feedback" name="2">
                            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                        </el-collapse-item>
                        <el-collapse-item title="效率 Efficiency" name="3">
                            <div>简化流程：设计简洁直观的操作流程；</div>
                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                        </el-collapse-item>
                        <el-collapse-item title="可控 Controllability" name="4">
                            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                        </el-collapse-item>
                    </el-collapse> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'report',
    data(){
        return{
            TapShow:false,
            activeName2: '1',
            activeName:'first',
            NowNav:'one',
            data:[
            ],
            showiframe:true,
        }
    },
    methods:{
        tapClick(){
            this.TapShow = !this.TapShow;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        check(type){
            this.NowNav = type;
        },
        overLoad(page){
            var ifrm1 = document.getElementById('iFrm1');
            var parent  = 0;
            var son = 0; 
            var num = 0;
            for(var i in this.data){
                this.MdId.push(i)
                if(i = page){
                    for(var j in this.data[i]){
                        num = j.split(']')
                        parent = num[2].split('[')[1];
                        son = num[3].split('[')[1]
                        if(son==1&&parent==1){
                            console.log(j)
                            console.log(ifrm1.contentWindow.document.getElementById('pf'+(Number(i)).toString(16)).children[parent-1].children[son].style.background="red")
                            return;
                        }
                    }
                }
            }
            console.log(this.MdId)
        }
    }
}
</script>
<style lang="less" scoped>
    .report{
        .aside{
            width:150px;
            position:absolute;
            left:0;
            top:0px;
            bottom:0px;
            background:#fff;
            ul{
                list-style:none;
                margin:0;
                padding:0;
                li{
                    height:35px;
                    line-height:35px;
                    text-align:center;
                    font-size:16px;
                    color:#333;
                }
            }
            .active{
                background:yellow;
                color:blue;
            }
            
        }
        .content{
            position:absolute;
            left:150px;
            top:0px;
            right:0px;
            bottom:0px;
            background:#fff;
            .tableItem{
                width:40%;
            }
                #iFrm1{
                    border: none;
                    position: absolute;
                    width: 100%;
                    border: none;
                    width: 50%;
                    height: 100%;
                }
        }
    }
</style>

