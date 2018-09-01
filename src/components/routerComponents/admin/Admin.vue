<template>
    <div class="admin">
        <div class="user">
            <div class="left"><icon class="icon" name="users"> </icon><div>用户管理</div></div>
        </div>
        <div class="repaire">
            <div class="right"><icon class="icon"  name="gavel"></icon><div>指标维护</div></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .admin{
        display: flex;
        justify-content: space-around;
        align-items: center;
        color:#fff;
        .icon{
            width:100px;
            height: 100px;
            color:#fff;
        }
        .user{
            width:300px;
            height: 300px;
            border-radius: 50%;
            background: #37C6C0;
            position: relative;
            .left{
                position: absolute;
                left:50%;
                top:50%;
                transform: translate(-50%,-50%);
                text-align: center;
                div{
                    font-size: 25px;
                }
            }
        }
        .repaire{
            background: #99CCFF;
            width:300px;
            height: 300px;
            position: relative;
            border-radius: 50%;
            .right{
                text-align: center;
                position: absolute;
                left:50%;
                top:50%;
                transform: translate(-50%,-50%);
                div{
                    font-size: 25px;
                }
            }
        }
    }
</style>


