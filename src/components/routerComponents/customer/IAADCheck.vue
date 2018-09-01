<template>
    <div class="IAADUpload">
        <div class="title">
            <router-link tag="div" class="up" to="/IAADUpload" >
                <span class="uploadBtn" type="primary"><icon name="upload"></icon>上传</span>
            </router-link>
            <div class="search">
                <input type="text" placeholder="用户名" v-model="user"/><span class="serarchFile"><icon class="ICON" name="search"></icon>搜索文档</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IAADCheck',
  data () {
    return {
        user:""
    }
  },
  created(){

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
        .search{
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
}
</style>

