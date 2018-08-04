<template>
  <div class="myAir">
          <span>{{highTemp}}/{{lowTemp}}℃</span>
          <span>{{weather}}</span>
          <span> 空气质量实时指数</span>
          <span class="last">{{rank}}优</span>
  </div>
</template>

<script>
  import {getWeather} from "../../api";
  export default {
    name: "Air",
    created(){
      this.myGetWeather();
    },
    data() {
      return {
        highTemp: 19,
        lowTemp: 14,
        weather: "",
        rank: ""
      }
    },
    methods:{
      async myGetWeather() {
        let data= await getWeather();
        let weatherData=data.forecast[0];
        this.highTemp = weatherData.high.slice(3,5);
        this.lowTemp = weatherData.low.slice(3,5);
        this.weather = weatherData.type;
        this.rank = parseInt(weatherData.high.slice(3,5)) + 15;
      }
    }
  }
</script>

<style scoped>
  span {
    font-size: 14px;
    margin-right: 10px;
  }
  .last {
    display: inline-block;
    text-align: center;
    width: 80px;
    height: 40px;
    line-height: 40px;
    border: 1px solid green;
    border-radius: 5px;
    color: green;
    margin-left: 15px;
    font-size: 20px;
  }
</style>
