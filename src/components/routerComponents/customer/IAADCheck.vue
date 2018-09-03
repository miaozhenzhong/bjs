<template>
    <div class="IAADUpload">
        <div class="title">
           
            <div class="search">
                 <router-link tag="div" class="up" to="/IAADUpload" >
                    <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
                </router-link>
                <input type="text" placeholder="用户名" v-model="user"/><span class="serarchFile"><icon class="ICON" name="search"></icon>搜索文档</span>
            </div>
            <div class="condition">
                <div class="insruty">
                    <span>行业：</span> 
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <span>状态：</span> 
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="(item,index) in options2" :key="index" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </div>
                
                <div class="time">
                    <span>开始时间：</span><el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                    <span>结束时间：</span><el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
                </div>
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
                <tr >
                <td></td>   
                <td>20018-2-6 12:12:12</td>
                <td>20018-2-9 13:13::13</td>
                <td>计算中</td>
                <td>
                    <el-button  type="danger" size="mini">处理中</el-button>
                    <el-button  type="success" size="mini" >重新分析</el-button>
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
        value:'',
        value1:'',
        value2:'',
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
            text-align: center;
            .insruty{
                 
            }
            span{
                font-size: 16px;
                width:120px;
                display: inline-block;
            }
           
            .time{
                margin-top: 20px;
               .el-date-editor:nth-of-type(1){
                    margin-left:3px;
                }
               .el-date-editor:nth-of-type(2){
                    margin-left:6px;
                }
            }
        }
        .search{
                .up{
                    float: left;
                }
                height: 65px;
                line-height: 65px;
                text-align:center; 
                position: relative;
            input{
                border:1px solid #fff;
                outline: none;
                padding:0px 15px;
                background: #fff;
                width:500px;
                height:40px;
                box-shadow: 0px 0px 1px 1px #e5e1ef;
                &::-ms-clear {
                    width : 0;
                    height: 0;
                }
                margin-bottom: 30px;
            }
            .serarchFile{
            position: absolute;
            display: block;
            cursor: default;
            background: #fff;
            color: #606266;
            text-align: center;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            outline: 0;
            margin: 0;
            font-weight: 500;
            /* padding: 13px 0px; */
            font-size: 12px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            left: 956px;
            top: 12px;
                .ICON{
                    vertical-align: text-top;
                    padding-right: 5px;
                }
            }
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
        }
        .el-pagination{
            position: absolute;
            bottom: 52px;
            right: 62px;
        }
        
    }
}
</style>

