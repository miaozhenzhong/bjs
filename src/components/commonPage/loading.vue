<template>
  <div>
    <div class="model" v-if="fullscreenLoading" :style="model?{opacity:'1'}:{opacity:'0'}">
      <div class="loding">
        <div class="spinner">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      fullscreenLoading: false,
      model:false,
    };
  },
  created() {
    var _this = this
    this.$bus.$on("showloadingtoast", function(x) {
      _this.modelshow();
    });
    this.$bus.$on("closeLoadingToast", function() {
      _this.modelhide();
    });
    this.$bus.$on("show_remote_msg", function(msg) {
      _this.modelhide();
      _this.$message({
        showClose: true,
        message: msg,
        type: "warning"
      });
    });
    this.$bus.$on("reuesterror", function(msg) {
      _this.modelhide();
      _this.$message({
        showClose: true,
        message: "后台发生异常！",
        type: "error"
      });
    });
    this.$bus.$on("timeout", function() {
      _this.modelhide();
      _this.$message({
        showClose: true,
        message: "请求超时！",
        type: "error"
      });
    });
  },
  methods: {
    modelshow() {
      console.log(this.fullscreenLoading)
      var _this = this;
      this.fullscreenLoading = true;
      setTimeout(function() {
        _this.model = true;
      }, 10);
    },
    modelhide() {
      var path = this.$route.path
      this.model = false;
      this.fullscreenLoading = false;
    }
  }
};
</script>
<style scoped lang="scss">

.model {
    height: 100%;
    width: 100%;
    // background: rgba(255, 255, 255, 0.75);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    transition: all 0.3s;
  .loding{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    .spinner {
        margin: 100px auto;
        width: 70px;
        height: 70px;
        position: relative;
        text-align: center;
        -webkit-animation: rotate 2s infinite linear;
        animation: rotate 2s infinite linear;
        .dot1,
        .dot2 {
            width: 60%;
            height: 60%;
            display: inline-block;
            position: absolute;
            top: 0;
            background-color: #409eff;
            border-radius: 100%;

            -webkit-animation: bounce 2s infinite ease-in-out;
            animation: bounce 2s infinite ease-in-out;
        }
        .dot2 {
          top: auto;
          bottom: 0px;
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
        }
    }
  }
  @-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(360deg);
  }
  }
  @keyframes rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
  }

  @-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
  }

  @keyframes bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
  }
}

</style>


