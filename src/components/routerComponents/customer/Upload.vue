<template>
    <div class="Upload">
        <transition name="fade">
            <div class="center" v-show="1==NowIndex"> 
                <el-upload
                ref="Upload"
                class="upload-demo"
                drag
                :data="obj"
                :on-error='UploadError'
                :on-success='UploadSuccess'
                :on-progress='UploadProgress'
                :before-upload="beforeUpload"
                name="fileName"
                :show-file-list="true"
                action="/api/iras/file/upload"
                :multiple='false'
                accept="application/pdf"
                > 
                <!-- accept="application/pdf" -->
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传PDF文件，且不超过80M</div>
                </el-upload>
            </div>
        </transition>
        <transition  name="fade">
            <div class="RaiseCheck" v-show="2==NowIndex">
                <div class="description">文档分类</div>
                <div class="title">
                   <span></span><span :class="{activeTypeLeft: fadeType}" @click.stop="fadeType = true"><div>公募</div></span><span :class="{activeTypeLeft: !fadeType}"  @click.stop="fadeType = false"><div>私募</div></span><span></span>
                </div>
                <div class="content">
                    <el-radio-group v-model="radio">
                        <el-radio label="M" v-if="fadeType">M</el-radio>
                        <el-radio label="BM" v-if="fadeType">BM</el-radio>
                        <el-radio label="DM" v-if="!fadeType">DM</el-radio>
                        <el-radio label="DBM" v-if="!fadeType">DBM</el-radio>
                    </el-radio-group>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(1)">上一步</span>
                    <span @click.stop="newxtStap(3,1)">下一步</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="sonTable" v-show="3==NowIndex">
                <div class="title">
                    子表及其他类型标准选择
                </div>
                <div class="content">
                    <el-checkbox-group v-model="checkListThree">
                        <div  v-for="(ele,index) in sonTable" :key="index"> <el-checkbox :label="ele"></el-checkbox></div>
                    </el-checkbox-group>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(2)">上一步</span>
                    <span @click.stop="newxtStap(4,1)">下一步</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="stap" v-show="4==NowIndex">
                <div class="title">阶段选择</div>
                <div class="content">
                    <el-radio v-model="radio2" label="预评阶段">预评阶段</el-radio>
                    <el-radio v-model="radio2" label="发行阶段">发行阶段</el-radio>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(3)">上一步</span>
                    <span @click.stop="newxtStap(5,1)">下一步</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="checkItem" v-show="5==NowIndex">
                <div class="title">合规性检查类型选择</div>
                <div class="content">
                    <el-checkbox-group v-model="checkListFive">
                        <div class="top"><el-checkbox label="架构完整性检查"></el-checkbox><el-checkbox label="信息一致性检查"></el-checkbox></div>
                         <div class="bottom"><el-checkbox label="常识性检查"></el-checkbox><el-checkbox label="内容合理性检查"></el-checkbox></div>
                    </el-checkbox-group>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(4)">上一步</span>
                    <span @click.stop="newxtStap(6,1)">下一步</span>
                </div>
            </div>
        </transition>

        <transition  name="fade">
            <div class="verifyResult" v-show="6==NowIndex">
                <div class="title">确认结果选择</div>
                <div class="content">
                    <div class="one" v-show="radio">
                        {{radio}}
                    </div>
                    <div  class="two">
                      {{(fadeType == true ?"公募" : "私募")|| '暂无数据'}}
                    </div>
                    <div v-for="(ele,num) in checkListThree" :key="num" class="three">
                        {{ele}}
                    </div>
                    <div  class="four" v-show="radio2">
                        {{radio2}}
                    </div>
                    <div v-for="(item) in checkListFive" :key="item" class="five" v-show="item">
                        {{item}}
                    </div>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(5)">上一步</span>
                    <span @click.stop="newxtStap(7,1)">提交</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="SubmitSuccess" v-show="7==NowIndex">
                <div class="title">提交成功！</div>
                <div class="content">
                    <icon class="ICON" name="check-circle"></icon>
                </div>
                <div class="footer">
                    <span @click.stop="lastTap('GoOn')">继续上传</span>
                    <span @click.stop="lastTap('seeResult')">查看结果</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name:"upload",
    data(){
        return{
            sondata:["M.1","M.2"],
            obj:{'documentType':'pdf'},
            TEMP:true,
            NowIndex:1,
            falg :true,
            checkList:[],
            checkListThree:[],
            checkListFive:[],
            chackTable:["架构完整性检查","信息一致性检查","内容合理性检查","常识性检查"],
            sonTable:["M.1","M.2"],
            fadeType:true,
            threeshow:false,
            fourshow:false,
            sixshow:false,
            showGong:true,
            showSi:false,
            fiveshow:false,
            radio2:'',
            radio:'',
            oneshow:true,
            twoshow:true,
            editableTabsValue2: '2',
            editableTabs2: [{
                title: 'Tab 1',
                name: '1',
                content: 'Tab 1 content'
            },{
                title: 'Tab 2',
                name: '2',
                content: 'Tab 2 content'
            }],
            tabIndex: 2
        }
    },
    created(){
        this.oneshow = true;
    },
    methods:{
        lastTap(type){
            if(type=="GoOn"){
                    this.NowIndex = 1
            }else{
                this.$router.push({path:"RaiseCheck"})
            }
        },
        beforeUpload(file,list){
            console.log(file,list)
            var _this = this;
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
            if(!reg.test(file.name.split('.')[0])){
                this.$notify({
                    title: '警告',
                    duration: 1500,
                    type: 'error',
                    dangerouslyUseHTMLString: true,
                    message: "<strong>文件名称不能含有特殊字符 <br/>如：`~!@#$^&*()%=|{}'</strong>"
                });
                if((file.size/1024)<=81920){

                }else{
                    setTimeout(function(){
                        _this.$notify({
                            title: '警告',
                            duration: 1500,
                            type: 'error',
                            dangerouslyUseHTMLString: true,
                            message: "<strong>文件不能大于80M</strong>"
                        });
                    },150)
                }
                return false;
            }else{
                if((file.size/1024)<=81920){
                    return true;
                }else{
                    this.$notify({
                        title: '警告',
                        duration: 1500,
                        type: 'error',
                        dangerouslyUseHTMLString: true,
                        message: "<strong>文件不能大于80M</strong>"
                    });
                    return false;
                }  
            }
        },
        changeTap(type){
            if(type){
                this.showGong = true;
                this.showSi = false;
               
            }else{
                this.showGong = false;
                this.showSi = true;
            }
        },
        UploadError(err, file, fileList){
            console.log(file,fileList)
            this.$refs.Upload.clearFiles();
            this.oneshow = true;
            this.twoshow = false;
            this.$message({
                message: "文件上传失败",
                type: "warning"
            });
        },
        UploadSuccess(res, file, fileList){
            console.log(fileList,res);
            // res :code:0,documentId:"500c8ce068812c926888eecc85171085",message:"文件上传成功"
            this.documentId = res.documentId;
            fileList = [];
            this.$refs.Upload.clearFiles();
            this.NowIndex = 2; 
        },
        preStap(type){
            if(this.falg&&this.TEMP){
                    this.falg = false;
                    this.NowIndex = type;
                    this.falg = true;
            }else{
                
            }
        },
        newxtStap(type,temp){
            var data = {};
            var _this = this;
            data.commonsenseFlag=0;
            data.consistencyFlag=0;
            data.rationalityFlag=0;
            data.integrityFlag=0;
            for(var i in this.checkListFive){
                if(this.checkListFive[i]=="常识性检查"){
                    data.commonsenseFlag=1;
                }
                if(this.checkListFive[i]=="信息一致性检查"){
                    data.consistencyFlag=1;
                }
                if(this.checkListFive[i]=="内容合理性检查"){
                    data.rationalityFlag=1
                }
                if(this.checkListFive[i]=="架构完整性检查"){
                    data.integrityFlag=1
                }
            }
            data.documentId = this.documentId;
            data.offeringTableType = this.radio;
            data.offeringType = this.fadeType?'M':'D';
            data.stage = this.radio2=='预评阶段'?2:1;
            data.subTableCheckFlag = this.checkListFive.length?1:0;
            data.subTables = [];
            for(var i in this.sonTable){
                for(var j in this.checkListThree){
                    if(this.sonTable[i]==this.checkListThree[j]){
                         data.subTables[i] = 1;
                    }else{
                        data.subTables[i] = 0;
                    }
                }
            }
            if(type==7){
                this.$jsonPost("/api/iras/spec/file/check",data).then(function(res){
                    console.log(res)
                    _this.NowIndex = 7;
                    if(res.code=='-1'){
                        _this.NowIndex = 1;
                        _this.$message({
                            message: "文件上传失败",
                            type: "warning"
                        });
                    }
                })
            }else{
                if(this.falg&&this.TEMP){
                    this.TEMP = false;
                    this.NowIndex = type;
                    this.TEMP = true;
                }else{
                
                }
            }
        },
        UploadProgress(e,file,fileList){
            console.log(e)
        },
        showElement(type,temp){
                this.oneshow = false;
                this.twoshow = false;
                this.threeshow = false;
                this.fourshow = false;
                this.fiveshow = false;
                this.sixshow = false;
                this[type+'show'] = true;
                this.falg = true;
        }
    }
}
</script>
<style scoped lang="less">
.Upload{
    position: relative;
   .center{
       display: flex;
       align-items: center;
       justify-content: center;
        margin-top:200px;
        width:400px;
        height:400px;
        position: absolute;
        left:50%;
        top:50%;
        margin-top:-200px;
        margin-left: -200px;
        /deep/.upload-demo{
            height: 400px;
            .el-upload-list .el-upload-list__item-name{
                width:300px;overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
          
        }
   }
   .RaiseCheck{
       position: absolute;
       width:400px;
       height: 220px;
       background: #fff;
       margin-left: -200px;
       margin-top: -140px;
       left:50%;
       top:35%;
       border-radius: 15px;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       padding: 20px 20px;
       .description{
           font-weight: 900;
           font-size: 15px;
       }
       .title{
           display: flex;
           justify-content: center;
           margin-top:5px;
           margin-bottom:5px;
           height: 45px;
           span{
                height: 45px;
                line-height: 45px;
                display: block;
                text-align: center;
                width:25%;
                border-bottom: 1px solid #dfe7ef;
           }
           .activeTypeLeft{
               border: 1px solid #dfe7ef;
               border-bottom:none;
           }
       }
       .content{
           padding-top: 20px;
           text-align: center;
           border-bottom: 1px solid #dfe7ef;
           padding-bottom: 20px;
       }
       .footer{
           text-align: center;
           margin-top:25px;
           display: flex;
           justify-content: space-around;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
       }
   }   
   .sonTable{
       width:450px;
       height:430px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: relative;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-225px;
       .title{
             font-size: 20px;
           padding:5px 20px;
       }
       .content{
          margin-left: 30px;
           overflow-y: auto;
            height:300px;
            /deep/.el-checkbox{
                margin-top: 10px;
            }
       }
       .footer{
           text-align: center;
           margin-top:5px;
           display: flex;
           justify-content: space-around;
           margin-top:50px;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
       }
   }
   .stap{
        width:400px;
       height:200px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: absolute;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-100px;
       .title{
             font-size: 20px;
           padding:5px 20px;
       }
       .content{
          text-align: center;
            height:120px;
            line-height: 120px;
       }
       .footer{
           text-align: center;
           margin-top:0px;
           display: flex;
           justify-content: space-around;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
       }
   }
   .checkItem{
          width:400px;
       height:210px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: absolute;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-100px;
       .title{
            font-size: 20px;
           padding:5px 20px;
       }
       .content{
           margin-top: 20px;
            height:100px;
            text-align: center;
            /deep/.el-checkbox{
                margin:0;
            }
              .el-checkbox-group {
                .top{
                    text-align: left;
                    .el-checkbox{
                        margin-right: 50px;
                    }
                    padding-left: 50px;
                    padding-bottom: 30px
                }
                .bottom{
                    text-align: left;
                    .el-checkbox{
                        margin-right: 50px;
                    }
                    .el-checkbox:nth-of-type(1){
                        margin-right: 78px;
                    }
                     padding-left: 50px;
                }
            }
       }
       .footer{
           text-align: center;
           margin-top:5px;
           display: flex;
           justify-content: space-around;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
       }
   }
   .verifyResult{
        width:400px;
       height:340px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: absolute;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-200px;
       .title{
           font-size: 20px;
           padding:5px 20px;
       }
       .content{
           height: 230px;
            padding:10px 20px;
           overflow-y: auto;
           div{
               padding: 10px 10px;
               border-bottom: 1px solid #e7e9f1;
           }
       }
       .footer{
           text-align: center;
           margin-top:5px;
           display: flex;
           justify-content: space-around;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
       }
   }
   .SubmitSuccess{
         width:400px;
       height:340px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: absolute;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-200px;
       .title{
           font-size: 20px;
            text-align: center;
            margin-top:40px;
       }
       .content{
           height: 200px;
            padding:10px 20px;
            .ICON{
                color: #67c23a;
                font-size: 30px;
                width: 100px;
                height: 100px;
                position: absolute;
                left:50%;
                top:50%;
                margin-left: -50px;
                margin-top: -50px;
            }
       }
       .footer{
           text-align: center;
           margin-top:0px;
           display: flex;
           justify-content: space-around;
           span{
                width: 120px;
                height: 35px;
                line-height: 35px;
                display: inline-block;
                text-align: center;
                background: #409EFF;
                color:#fff;
                border-radius: 45px;
           }
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
</style>
