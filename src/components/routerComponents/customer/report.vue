<template>
    <div class="report">
        <div class="aside">
            <ul>
                <li  @click="check('one')" :class="{active:'one'==NowNav}">架构完整性检查</li>
                <li  @click="check('two')" :class="{active:'two'==NowNav}">一致性检查</li>
                <li  @click="check('three')" :class="{active:'three'==NowNav}">内容合理性检查</li>
                <li  @click="check('four')" :class="{ active:'four'==NowNav}">常识性检查</li>
                <li @click="getWord">获取选中的文字</li>
            </ul>
        </div>
        <div class="content">
            <ul class="tapbox">
                <li @click="tapClick('first')" :class="{TapActive:'first'==NowTap}">错误</li>
                <li @click="tapClick('second')" :class="{TapActive:'second'==NowTap}">疑似正确</li>
                <li :class="{TapActive:'three'==NowTap}" @click="tapClick('three')">正确</li>
                <li>  </li>
            </ul>
            <div class="tapContent" :style="{'opacity':showHTML}" :class="{zIndex:'first'==NowTap}">
                <iframe  scrolling="yes" id="iFrm1" frameborder="0"  src="../../../static/12345/123.html" @load="overLoad(1)" name="ifr"></iframe>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>

                </el-collapse>
            </div>


            <!-- <div class="tapContent" :style="{'opacity':showHTML2}" :class="{zIndex:'second'==NowTap}">
                <iframe  scrolling="yes" id="iFrm1" frameborder="0"  src="../../static/红石.html" @load="overLoad(1)" name="ifr"></iframe>
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="一致性 Consistency" name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
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
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>

                </el-collapse>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'report',
    data(){
        return{
            NowTap:'first',
            showHTML:1,
            showHTML2:0,
            TapShow:false,
            activeName2: '1',
            activeName:'first',
            NowNav:'one',
            data:[
                {
                    "body/div[2]/div[1]/div[1]/div[1]": {
                        "txt": "红狮控股集团有限公司2018年度第五期超短期融资券募集说明书",
                        "page_number": 1
                    },
                }
            ],
            showiframe:true,
            MdId:[]
        }
    },
    mounted(){
        
    },
    methods:{
        getWord(){
             var word =document.getElementById("iFrm1").contentWindow.getSelection();
            alert( word )
        },
        tapClick(type){
            this.NowTap = type;
            if(type=="first"){
                this.showHTML = 1
                this.showHTML2 = 0;
            }else{
                  this.showHTML2 = 1
                  this.showHTML = 0;
            }
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
        check(type){
            this.NowNav = type;
        },
        overLoad(page){
          var ifrm1 = document.getElementById('iFrm1');
        console.log( ifrm1.contentWindow.document.getElementById("page-container").style)
        ifrm1.contentWindow.document.getElementById("page-container").style.overflowX="hidden";
            var parent  = 0;
            var son = 0; 
            var num = 0;
            for(var i in this.data){
                this.MdId.push(i)
                    for(var j in this.data[i]){
                        num = j.split(']')
                        parent = num[2].split('[')[1];
                        son = num[3].split('[')[1]
                            console.log(j)
                            console.log(ifrm1.contentWindow.document.getElementById('pf'+(Number(i+1)).toString(16)).children[parent-1].children[son].style.background="red")
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
            background:#ecf1f6;
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
               
                color:#409eff;
            }
            
        }
        .content{
            position:absolute;
            left:150px;
            top:0px;
            right:0px;
            bottom:12px;
            background:#fff;
            .tapbox{
                position: absolute;
                z-index: 555;
                list-style: none;
                width:100%;
                float: left;
                background: #fff;
                li{
                    border-bottom: 1px solid #dcdfe6;
                    box-sizing: border-box;
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    width:25%;
                    text-align: center;
                    color:#909399;//#909399 409eff
                    
                }
                .TapActive{
                    border-bottom:none;
                    box-shadow: 0px 0px 0px 0px #666;
                    border-top: 1px solid #dcdfe6;
                    border-left: 1px solid #dcdfe6;
                    border-right: 1px solid #dcdfe6;
                    background: #fff;
                    color:#409eff;
                }
            }
            .tapContent{
               position: absolute;
               top:35px;
               width: 100%;
               bottom: 0px;
               
            }
            .zIndex{
                   z-index: 2;
               }
            .el-collapse{
                display: inline-block;
                width: 50%;
                height: 100%;
                overflow-y: auto;
                overflow-x: hidden;
            }
            #iFrm1{
                width: 50%;
                border: none;
                height: 100%;
                display: inline-block;
                overflow-x: hidden;
                float: left;
            }
        }
    }
</style>

