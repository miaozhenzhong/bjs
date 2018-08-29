<template>
    <div class="login">
        <div class="loginWinDow">
            <div class="title">智能评议系统</div>
            <input type="text" placeholder="用户名" v-model="user"/>
            <input type="password" placeholder="密码" v-model="password"/>
            <div class="subMit" @click="subMit">
                登录
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            user:"ooo",
            password:"123"
        }
    },
    created(){
       
    },
    methods:{
        subMit(){
            var _this = this;
            // this.$jsonPost(url,params).then(function(res){
            //     // _this.user = user
            // })
            this.$router.push({path: 'Index'})
        }
    }
}
</script>
<style scoped lang="scss">
   .login{
           position: absolute;
    /* height: auto; */
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
       background: #c8dfef;
       .loginWinDow{
           position: absolute;
           left:70%;
           top:50%;
           border-radius: 5px;
           margin-top: -135px;
           margin-left: -150px;
           width:300px;
           height:270px;
           background: #f5f2f9;
           text-align: center;
            padding:0px 15px;
           .title{ 
               font-size: 17px;
               text-align: center;
               padding: 20px 0px;
           }
           input{
                border:1px solid #fff;
                outline: none;
                padding:0px 15px;
                background: #fff;
                width:200px;
                height:40px;
                border-radius: 5px;
                box-shadow: 0px 0px 1px 1px #e5e1ef;
                &::-ms-clear {
                    width : 0;
                    height: 0;
                }
                margin-bottom: 30px;
           }
           .subMit{
               height:35px;
               text-align: center;
               font-size: 16px;
               line-height: 35px;
               padding: 0px 5px;
               background: #409EFF;
               width: 225px;
                border-radius: 5px;
               display: inline-block;
               color: #fff;
           }
       }
   }
</style>



