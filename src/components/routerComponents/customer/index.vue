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
                IAAD指标计算 
            </div>
         </router-link>
    </div>
</template>
<script>
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
      this.$router=[];
    },
    mounted(){
        
    },
    methods:{
        overLoad(){

        },
        position(page){
            
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


