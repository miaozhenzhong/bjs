<template>
    <div class="IAADUpload">
        <div class="title">
            <div class="condition">
                <div class="insruty">
                     <router-link tag="span" class="up" to="/IAADUpload" >
                    <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
                </router-link>
                    <span>行业：</span> 
                    <el-select v-model="valueInstruty" placeholder="请选择">
                        <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <span>状态：</span> 
                    <el-select v-model="valueStatus" placeholder="请选择">
                        <el-option v-for="(item,index) in options2" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                      <span>开始时间：</span><el-date-picker v-model="timeStart" type="date" placeholder="选择日期"></el-date-picker>
                    <span>结束时间：</span><el-date-picker v-model="timeEnd" type="date" placeholder="选择日期"></el-date-picker>
                     
                    <input type="text" placeholder="文档名称" v-model="user"/><span class="serarchFile"><icon class="ICON" name="search"></icon>搜索文档</span>
                </div>
                
                <div class="time">
                  
                </div>
            </div>
             <div class="search">
               
            </div>
        </div>
        <div class="content">
            <table cellspacing="0">
                <tr>
                <td>文档名称</td>   
                <td>上传时间</td>
                <td>最后更新时间</td>
                <td>任务转态</td>
                <td>操作</td>
                </tr>
                <tr v-for="(ele,index) in tableData" :key="index" >
                <td>{{ele.name}}</td>   
                <td>{{ele.time}}</td>
                <td>{{ele.lasttime}}</td>
                <td>{{ele.status}}</td>
                <td>
                    <router-link tag="span" :to="{ path: 'IAADResult', query: { id: 'private' }}">
                        <button :disabled="ele.click" :class="{'disabledCss':ele.click}" class="baseCss result"><icon name="file-contract"></icon><span>查看分析结果</span></button>
                    </router-link>
                    <router-link :to="{ path: 'IAADUpload', query: { step:'true' }}">
                        <button  class="baseCss reset" @click="resetCheck(ele)"><icon name="undo-alt"></icon><span>重新分析</span></button>
                    </router-link>
                </td>
                </tr>
            </table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IAADCheck',
  data () {
    return { 
        tableData:[
            {
                name:"123.pdf",
                time:"2018-02-07 12:12:23",
                lasttime:"2018-02-08 10:12:23",
                status:"抽取中"
            },{
                name:"456.pdf",
                time:"2018-02-04 12:12:23",
                lasttime:"2018-02-05 08:12:23",
                status:"已完成"
            }
        ],
        valueInstruty:'',
        valueStatus:'',
        timeStart:'',
        timeEnd:'',
        currentPage3: 5,
        user:"",
        options:[{"value":"房地产","label":"房地产"},{"value":"城建","label":"城建"},{"value":"钢铁","label":"钢铁"},{"value":"高速公路","label":"高速公路"},{"value":"火电","label":"火电"},{"value":"水泥","label":"水泥"}],
        options2:[{"value":"全部","label":"全部"},{"value":"成功","label":"成功"},{"value":"失败","label":"失败"}]
    }
  },
  created(){
     
  },
  methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
  }
}
</script>
<style lang="scss" scoped>
.IAADUpload{
    .title{
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
        .condition{
            margin-top: 16px;
            .insruty{
                span{
                    font-size: 16px;
                    width:auto;
                    display: inline-block;
                }
                .el-select{
                    width:150px;
                    margin-right:5px;
                }
                .el-date-editor{
                    width:150px;
                    margin-right:5px;
                }
                 .up{
                  
                }
                height: 65px;
                line-height: 65px;
                position: relative;
            input{
                border:1px solid #fff;
                outline: none;
                padding:0px 15px;
                background: #fff;
                width:200px;
                height:40px;
                box-shadow: 0px 0px 1px 1px #e5e1ef;
                &::-ms-clear {
                    width : 0;
                    height: 0;
                }
                margin-bottom: 30px;
            }
            .serarchFile{
            // position: absolute;
            display: inline-block;
                box-shadow: 0px 0px 1px 1px #e5e1ef;
            cursor: default;
            background: #409eff;
            color: #fff;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: 0;
            margin-left: 0px;
            font-weight: 500;
            /* padding: 13px 0px; */
            font-size: 12px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            left: 1000px;
            top: 12px;
            padding:0px 5px;
                .ICON{
                    vertical-align: text-top;
                    padding-right: 5px;
                }
            }
            .serachBox{
                position: relative;
            }
            }
        }
        .search{
               
        }
    }
    .content{
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
            .baseCss{
                appearance: none;
                border: none;
                outline: none;
                cursor: pointer;
                background: none;
                color:#fff;
                border-radius: 5px;
                padding: 10px 10px;
                svg{
                    vertical-align: sub;
                }
                span{
                display: inline-block;
                margin-left: 10px;
                }
            }
            .result{
                background: #409eff;
            }
            .reset{
                background:#f56c6c;
            }
            .disabledCss{
                cursor: not-allowed;
                background: #606266;
            }
        }
        .el-pagination{
            position: absolute;
            bottom: 52px;
            right: 62px;
        }
        
    }
}
</style>

