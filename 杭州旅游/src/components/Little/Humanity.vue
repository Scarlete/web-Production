<template>
    <div class="my-mian">
      <div class="main-top">
        <div class="title">
          <h1>
            <slot name="title">人文景观推荐</slot>
          </h1>
          <div class="air">
            <span>陕西西安</span>
            <span>{{highTemp}}℃/{{lowTemp}}℃</span>
          </div>
        </div>
        <div class="spots">
          <ul class="font-blue">
            <li class="alignLeft">景区名称</li>
            <li>车程</li>
            <li>时间</li>
            <li>实时人流量监测</li>
          </ul>
          <ul v-for="(item, index) in spotData" :key="index">
            <li class="alignLeft">{{item.scen_name}}</li>
            <li>{{item.scen_dis}}Km</li>
            <li>{{item.scen_time}}min</li>
            <li><span
                      :class ="{'number':true,'little': item.type===0,
                        'middle': item.type===1,
                        'more': item.type===2}"
            >{{item.play_num}} </span> 人</li>
          </ul>
        </div>
      </div>
      <div class="main-bottom">
        <Carousel :Imgs="imgArr"></Carousel>
      </div>
    </div>

</template>
<script>
    import Carousel from "../test/Carousel.vue";
//    获取天气温度
    import {getWeather} from "../../api";
    export default {
      created() {
        this.getWeatherData();
      },
        data() {
            return {
              highTemp: 13,
              lowTemp: 14
            }
        },
        props: {
          imgArr: Array,
          spotData: Array,
        },
        methods: {
          async getWeatherData() {
            let data = await getWeather();
            let weatherData=data.forecast[0];
            this.highTemp = weatherData.high.slice(3,5);
            this.lowTemp = weatherData.low.slice(3,5);
          }
        },
        components: {
          Carousel
        }
    }
</script>

<style lang="less" scoped>
    .my-mian {
      height: 100%;
    }
    .main-top {
      height: 70%;
      background: #002c63;
      .title {
        position: relative;
        display: flex;
        height: 17%;
        align-items: center;
        justify-content: center;
        h1 {
          color: #fff;
          font-size: 40px;
        }
        .air {
          position: absolute;
          right: 1%;
          top: 50%;
          transform: translate(0, -20%);
          color: #ffcc2a;
          font-size: 22px;
        }
      }
      .spots {
        height: 83%;
        ul {
          padding-left: 5%;
          height: 14.28%;
          list-style: none;
          display: flex;
          &:nth-child(even) {
            background: #084f94;
          }
          &.font-blue {
            li {
              color: #4dc2fe;
            }
          }
          &:last-child {
            border-bottom: 3px solid #13bad2;
          }
        }
        li {
          font-size: 20px;
          color: #fff;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          &.alignLeft {
            justify-content: flex-start;
          }
          &:nth-child(1) {
            flex: 2;

          }
          &:nth-child(4) {
            flex: 2;
          }
          &:nth-child(2),&:nth-child(3),&:nth-child(4) {
            text-align: center;
          }

          span.number {
            font-weight: bold;
            margin-right: 8px;
            &.little {
              color: #4cd61e;
            }
            &.middle {
              color: #f0ad4e;
            }
            &.more {
              color: #dd524d;
            }
          }
        }
      }

    }
    .main-bottom {
      height: 30%;
      box-sizing: border-box;
      padding-top: 20px;
      /*轮播图部分*/
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }
    }


</style>
