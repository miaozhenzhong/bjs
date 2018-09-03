<template>
    <div class="login">
        <div class="loginWinDow">
            <div class="title">智能评议系统</div>
            <input type="text" placeholder="用户名" v-model="user"/>
            <input type="password" placeholder="密码" v-model="password"/>
            <div class="subMit" @click="subMit">
                登录
            </div>
            <!-- <div>{{messages}}</div> -->
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
    name:'Login',
    data(){
        return{
            user:"101",
            password:"101"
        }
    },
    created(){
        this.receiveMessage("456156")
       this.sendMessage("123")
    },
    computed:{
        ...mapState(['messages'])
    },
    methods:{
        ...mapMutations([
            'receiveMessage', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
        ]),
        ...mapActions([
            'sendMessage',
            'sendLoginMessage' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
        ]),
        subMit(){
            var _this = this;
            var params = "userAccountNm="+this.user+"&userPwd="+this.password;
            console.log(params)
            this.$formPost('/api/iras/management/user/login', params).then(function(res){
                console.log(res)
                if(res.data.code==0){
                    if(res.data.user.roleId==1||res.data.user.roleId==2){
                          _this.$router.replace('Index')
                    }else{
                         _this.$router.replace('Admin') 
                    }
                }
            })
        }
    }
}
</script>
<style scoped lang="scss">
   .login{
    position: absolute;
    background-image:url('../assets/bg-login.png');
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
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



