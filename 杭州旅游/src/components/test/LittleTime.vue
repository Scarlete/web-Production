<template>
  <div class="left-bottom">
    <div class="week">{{week}}</div>
    <div class="time">{{time}}</div>
    <div class="day">{{day}}</div>
  </div>
</template>
<script>
  let  moment = require('moment');
  export default {
    data() {
      return {
        time: "",
        day: "",
        week: "",
        timer: null
      }
    },
    mounted() {
      clearInterval(this.timer);
      this.change();
    },
    props: [''],
    computed: {},
    methods: {
      upTime()
      {
        let week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
//        获取2017-12-24 格式的年月日
        this.day = moment().format('YYYY-MM-DD');
//        获取16:31:55  格式的时间
        this.time = moment().format('HH:mm:ss');
//        获取星期几 0~6 再次利用一下week换成星期几
        this.week = week[moment().format('d')];
      },
      change() {
        setInterval(this.upTime, 1000);
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .left-bottom {
    height: 25%;
    background: #5a42eb;
    .week,.time, .day {
      text-align: center;
      font-size: 30px;
      color: #fff;
      margin-bottom: 1%;
    }
    .week {
      padding-top: 10%;
    }
  }
  }

  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .left-bottom {
      height: 25%;
      background: #5a42eb;
      .week,.time, .day {
        text-align: center;
        font-size: 40px;
        color: #fff;
        margin-bottom: 1%;
      }
      .week {
        padding-top: 10%;
      }
    }
  }




</style>
