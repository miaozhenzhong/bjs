<template>
    <div class="index">
       <router-link tag="div" to="/RaiseCheck" >
            <div class="RaiseCheck" >
                <icon class="icon" name="file-powerpoint"></icon>
                募集说明书检查
            </div>
        </router-link>
         <router-link tag="div" to="/IAADCheck" >
            <div class="IAADCheck">
                <icon class="icon" name="calculator"></icon>
                IAAD指标计算   <div @click="write">写cookie</div>
            </div>
         </router-link>
            
    </div>
</template>
<script>
import  echarts from 'echarts'
// 基于准备好的dom，初始化echarts实例

export default {
    name:"index",
    data(){
        return{
            url:'../../../static/红石.html#',
            data:[
],
            MdId:[]
        }
    },
    created() {
        localStorage.id = "1312313" + new Date();
        sessionStorage.user = "6666" + new Date();
        var days = 30;
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + '123' + "; " + expires;
    },
    mounted(){
        
    },
    methods:{
        overLoad(){

        },
        position(page){
            
        },
        write(){
            var days = 30;
        var d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = user + "=" + '456' + "; " + expires;
        }
    }
}
</script>
<style lang="less" scoped>
.index{
    #main{
        width:200px;
        height: 200px;
    }
    iframe{
        height:500px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    .RaiseCheck{
        display: inline-block;
        width:300px;
        height:300px;
        background: #dcf7a1;
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 400px;
        font-size: 25px;
        color:#fff;
        .icon{
            position: absolute;
            left: 50%;
            top:40%;
            transform: translate(-50%,-50%)  scale(5,5);
            color: #fff;
        }
    }
    .IAADCheck{
         display: inline-block;
        width:300px;
        height:300px;
        background: #83FCD8;
        border-radius: 50%;
        position: relative;
        text-align: center;
        line-height: 400px;
        font-size: 25px;
        color:#fff;
        .icon{
            position: absolute;
            left: 50%;
            top:40%;
            transform: translate(-50%,-50%)  scale(5,5);
            color: #fff;
        }
    }
}
</style>


