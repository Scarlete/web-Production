<template>
  <div>
     <span>{{day}}</span>
     <span>{{time}}</span>
     <span>{{week}}</span>
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

  span {
    display: inline-block;
    margin-left: 30px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
  }
</style>
