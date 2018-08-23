<template>
    <div class="Upload">
        <div class="center"> 
            <el-upload
            class="upload-demo"
            drag
            accept="application/pdf"
            :show-file-list="false"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传PDF文件，且不超过80M</div>
            </el-upload>
        </div>
    </div>
</template>
<script>
export default {
    name:"upload",
    data(){
        return{

        }
    },
    created(){

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
   }
}
    
</style>
