<template>
    <div class="IAADUpload">
         <el-steps :active="active" finish-status="success">
            <el-step title="上传文档"></el-step>
            <el-step title="选择行业"></el-step>
            <el-step title="确认选择"></el-step>
            <el-step title="完成"></el-step>
        </el-steps>
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
            <div class="industrySelect" v-show="2==NowIndex">
                <div class="title">
                   行业选择
                </div>
                <div class="content">
                   <el-radio-group v-model="radio">
                            <el-radio label="ele.NAME" v-for="(ele,index) in commonData.INDUSTRY_TYPE" :key="index">{{ele.VALUE}}</el-radio>
                    </el-radio-group>
                </div>
                <div class="footer">
                    <span @click.stop="preStap(1)" :class="{'notClick':NotClick}">上一步</span>
                    <span @click.stop="newxtStap(3,1)">下一步</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="sonTable" v-show="3==NowIndex">
                <div class="item">
                    <span>行业类型：</span><span>{{radio}}</span>
                </div>
                <div class="filename">
                    <span>文档名称：</span><span>{{filename}}</span>
                </div>
                 <div class="footer">
                    <span @click.stop="preStap(2)" >上一步</span>
                    <span @click.stop="newxtStap(4,1)">确认</span>
                </div>
            </div>
        </transition>
        <transition  name="fade">
            <div class="SubmitSuccess" v-show="4==NowIndex">
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
import { mapState } from 'vuex'
export default {
    name:"upload",
    data(){
        return{
            NotClick:false,
            falg:true,
            active:0,
            obj:{'documentType':'pdf'},
            NowIndex:0,
            checkList:[],
            oneshow:true,
            twoshow:true,
            threeshow:false,
            fourshow:false,
            radio2:'',
            radio:'',
            filename:'',

        }
    },
    created(){
        this.oneshow = true;
        this.NowIndex = this.$route.query.step?2:1;
        this.NotClick = this.$route.query.step?true:false;
        this.active = this.$route.query.step?1:0;
    },
    computed:{
          ...mapState(['messages','commonData'])
    },
    methods:{
        lastTap(type){
            if(type=="GoOn"){
                    this.NowIndex = 1
                    this.active = 0;
            }else{
                this.$router.push({path:"IAADCheck"})
            }
        },
        beforeUpload(file){
            var _this = this;
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
            this.filename = file.name;
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
            this.NowIndex = 2;
            this.active = 1;
        },
        preStap(type){
            if(this.falg&&!this.$route.query.step&&type!=2){
                this.NowIndex = type;
                this.active = type-1;
            }else{
                return;
            }
           
        },
        newxtStap(type,temp){
            var _this = this;
            this.falg = false;
            this.active = type-1;
            if(type==4){
                // this.$jsonPost("",params).then(function(res){
                //     console.log(res.data)
                setTimeout(function(){
                        _this.NowIndex = type;
                        _this.active = type
                        _this.falg = true;
                },10000)
                // })
            }else{
                this.NowIndex = type;
            }
        },
        UploadProgress(e,file,fileList){
            console.log(e)
        },
        showElement(type,temp){
        }
    }
}
</script>
<style scoped lang="less">
.IAADUpload{
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
   .industrySelect{
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
       .title{
           display: flex;
           justify-content: center;
           margin-top:5px;
           height: 35px;
           line-height: 35px;
       }
       .content{
           padding-top: 20px;
           text-align: center;
           border-bottom: 1px solid #dfe7ef;
           padding-bottom: 10px;
           /deep/.el-radio-group{
               padding-left: 40px;
               .el-radio{
                   width:120px;
                   margin-bottom: 10px;
                   margin-left: 0px;
                   .el-radio__input{
                       float: left;
                   }
                   .el-radio__label{
                       float: left;
                   }
               }
           }
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
            .notClick{
               cursor: not-allowed; 
           }
       }
   }
   .sonTable{
        position: absolute;
       width:400px;
       height: 150px;
       background: #fff;
       margin-left: -200px;
       margin-top: -140px;
       left:50%;
       top:35%;
       border-radius: 15px;
       box-shadow: 0px 0px 5px 8px #e7e9f1;
       padding: 20px 20px;
       .item{
           span{
               font-size: 16px;
           }
           margin-bottom: 15px;
       }
       .filename{
            span{
               font-size: 16px;
           }
       }
       .footer{
           text-align: center;
           margin-top:35px;
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
