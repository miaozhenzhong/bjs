<template>
    <div class="Upload">
        <transition name="fade">
            <div class="center" v-show="1==NowIndex"> 
                <el-upload
                ref="Upload"
                class="upload-demo"
                drag
                :on-error='UploadError'
                :on-success='UploadSuccess'
                :on-progress='UploadProgress'
                name="fileName"
                :show-file-list="true"
                action="/api/iras/file/upload"
                :multiple='false'
                accept="application/pdf"
                >
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
                <div class="content">
                    <div>
                        {{radio}}
                    </div>
                    <div>
                      {{(fadeType == true ?"公募" : "私募")|| '暂无数据'}}
                    </div>
                    <div v-for="(ele,index) in checkListThree" :key="index">
                        {{ele}}
                    </div>
                    <div>
                        {{radio2}}
                    </div>
                    <div v-for="(ele,index) in checkListFive" :key="index">
                        {{ele}}
                    </div>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(5)">上一步</span>
                    <span @click.stop="newxtStap(7,1)">下一步</span>
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
            TEMP:true,
            NowIndex:2,
            falg :true,
            checkList:[],
            checkListThree:[],
            checkListFive:[],
            chackTable:["架构完整性检查","信息一致性检查","内容合理性检查","常识性检查"],
            sonTable:["M.1表（涉及安全生产的信息披露表）","M.1表（涉及安全生产的信息披露表）","M.1表（涉及安全生产的信息披露表）","M.1表（涉及安全生产的信息披露表）","M.1表（涉及安全生产的信息披露表）","M.2表（涉及非标准无保留意见审计报告的信息披露表）","m.3（表涉及关联交易的信息披露表）","m.4表（涉及重大资产重组的信息披露表）"],
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
        UploadSuccess(err, file, fileList){
            console.log(fileList);
            fileList = [];
            this.$refs.Upload.clearFiles();
            this.oneshow = false;
            this.twoshow  = true;
        },
        preStap(type){
            if(this.falg&&this.TEMP){ console.log(1)
                    this.falg = false;
                    this.NowIndex = type;
                    this.falg = true;
            }else{
                
            }
        },
        newxtStap(type,temp){
            if(type==7){
                this.$message({
                    type:"success",
                     message: "提交成功！",
                })
                  this.NowIndex = 1;
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
       height:450px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: relative;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-225px;
       .content{
          margin-left: 30px;
           overflow-y: auto;
            height:325px;
            /deep/.el-checkbox{
                margin-top: 10px;
            }
       }
       .footer{
           text-align: center;
           margin-top:25px;
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
       .content{
          text-align: center;
            height:120px;
            line-height: 120px;
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
   .checkItem{
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
           text-align: center;
           padding-top: 10px;
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
           margin-top:20px;
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
       height:300px;
       background: #fff;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       border-radius:5px;
       position: absolute;
       left:50%;
       top:50%;
       margin-left: -200px;
       margin-top:-200px;
       .content{
           height: 230px;
            margin-left: 30px;
           overflow-y: auto;
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
