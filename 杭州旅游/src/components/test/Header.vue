<template>
    <div :class="{myHeader:true, clearfix:true,
    flyBg: flyBg, wake: wake, wake1: wake1
    }">
          <div class="header-left">
               <Time class="time">
                </Time>

          </div>
          <div class="header-right">
                <Air class="air"></Air>
          </div>
    </div>
</template>
<script>
    import Time from "./Time.vue";
    import Air from "./Air.vue";
    export default {
        data() {
            return {}
        },
        props: {
          flyBg: Boolean,
          wake: Boolean,
          wake1: Boolean
        },
        computed: {},
        methods: {},
        components: {
          Time,
          Air,
        }
    }
</script>

<style lang="less" scoped>
  .myHeader {
    height: 12%;
    /*根据传入的值显示不同的背景*/
   &.flyBg {
     background: url("../../../static/flyBg.jpg") no-repeat;
     background-size: 100% 100%;
   }
    &.wake {
      background: url("../../../static/wake.jpg") no-repeat;
      background-size: 100% 100%;
    }
    /*西湖一背景*/
    &.wake1 {
      background: url("../../../static/title2.png") no-repeat;
      background-size: 100% 100%;
    }

    border-bottom: 1px solid #16A2BF;
    .header-left, .header-right {
      position: relative;
      float: left;
      width: 50%;
      height: 100%;
    }

    .time, .air {
      color: #fff;
      font-size: 24px;
      position: absolute;
    }
    .air {
      right: 5%;
      top: 40%;
    }
    .time {
      left: 2%;
      top: 48%;
    }
  }

</style>
