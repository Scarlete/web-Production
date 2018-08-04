<template>
    <div class="fly">
      <Header :wake = "wake"></Header>
      <div class="main clearfix">
        <div class="fly-left">
            <div class="tour clearfix">
                <div class="tour-left">
                  <h3 class="tour-number">今日客流量</h3>
                  <div class="tour-yesterday" style="position: relative;top: -5px;">
                    <span style="padding-left: 16px;">昨日游客量:</span>
                    <br>
                    <span style="padding-left: 18px;">50183</span>
                  </div>
                </div>
				    <div class="tour-right">
                    <div class="right-number clearfix">
                      <span>{{myNumber[2]}}</span>
                      <span>{{myNumber[3]}}</span>
                      <span>{{myNumber[4]}}</span>
                      <i>，</i>
                      <span>{{myNumber[5]}}</span>
                      <span>{{myNumber[6]}}</span>
                      <span>{{myNumber[7]}}</span>
                      <i style="color:#FFFFBA;">人</i>

                      <div class="today-number">
                        <h4>今日到港:</h4>
                        <b>123456</b>
                      </div>
                      <div class="today-number">
                        <h4>本月到港:</h4>
                        <b>654321</b>
                      </div>
                    </div>
                </div>
            </div>

            <div class="fly-left-bottom clearfix">
              <div class="tour-map-one">
                <bu></bu>
              </div>
              <div class="tour-map-two">
                <div class="tour-map-two-t">
                  <Oblaten></Oblaten>
                </div>
                <div class="tour-map-two-b">
                  <Oblaten1></Oblaten1>
                </div>


              </div>
              <div class="tour-map-three">
                <Hote></Hote>
              </div>
            </div>
        </div>

        <div class="fly-right">
            <div class="hot">
            <Doughnut></Doughnut>
            </div>
            <div class="my-hot">
              <Ho></Ho>
            </div>
        </div>

      </div>
    </div>
</template>

<script>
    import Header from "./test/Header.vue";
    import Hote from "./test/Hot/Hote.vue";
    import Hot from "./test/Hot/Hot.vue";
    import Ho from "./test/Hot/Ho.vue";
    import Map from "./test/Map.vue";
    import Doughnut from "./test/Doughnut.vue";
    import Oblaten from "./test/Oblaten.vue";
    import Oblaten1 from "./test/Oblaten1.vue";
    import bu from "./test/bu.vue";

//    获取实时人流量
    import {touristNumber, flyDataAll} from "../api";
    export default {
        data() {
          return {
              tempData:[],
              myNumber:"00000000",
              wake: true,
              flyFood: [],
              flyHotel: [],
              swiperOption: {
                pagination: {
                el: '.swiper-pagination'
              },
               autoplay: {
                  delay: 5000,
               },
            }
          }
        },
        created() {
        },
      mounted() {

      },
      methods: {
      },
        components: {
          Header,
          Hote,
          Hot,
          Ho,
          Doughnut,
          bu,
          Oblaten,
          Oblaten1,
        },
    }
</script>

<style lang="less" scoped>
  .fly {
    height: 100%;
    background: #003069;
  }
  .main {
    height: 88%;
    background: #003069;

  }
  .fly-left,.fly-right {
      float: left;
      height: 100%;
      background-size: 100% 100%;
  }
  .fly-right {
    width: 31.9%;
    background: url("../../static/fly-right.jpg") no-repeat;
  }
  .fly-left {
    width: 68%;
    box-sizing: border-box;
    padding-left: 2%;
    border-right: 1px solid #16A2BF;
    background: url("../../static/fly-left.jpg") no-repeat;
  }

  .tour {
    height: 11.57%;
  }
  .tour-left,.tour-right {
    float: left;
    height: 100%;
  }
  .tour-left {
    width: 25%;
    /*background: pink;*/
  }
  .tour-right {
    /*background: pink;*/
    width: 75%;
    position: relative;
  }

  .fly-left-bottom {
    height:88.43%;
    border-top: 1px solid #16A2BF;
    border-left: 1px solid #16A2BF;
  }
  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 4%;
      font-size: 16px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .right-number {
      width: 100%;
      position: absolute;
      left: 1%;
      top: 50%;
      transform: translate(0,-50%);
      span {
        text-align: center;
        display: inline-block;
        width: 30px;
        height: 60px;
        color: #002356;
        font-size: 30px;
        line-height: 65px;
        margin-right: 5px;
        background: url("../../static/person.jpg") no-repeat;
        background-size: 100% 100%;
      }
      i {
        font-size: 16px;
        color: #fff;
        vertical-align: bottom;
      }

    }
    .tour-yesterday {
      margin-top: 3px;
      color: #fff;
      font-size: 14px;
      span {
        padding-left: 20px;
      }
    }
    .today-number {
      width: 100px;
      height: 60px;
      background: rgba(0,0,0,.34);
      float: right;
      color: #fff;
      margin-right: 3%;
      text-align: center;
      h4 {
        margin-top: 8px;
        color: #fff;
        font-size: 18px;
        letter-spacing: 2px;
      }
      b {
        color: yellow;
        font-size: 16px;
      }
    }
  }
  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 3%;
      font-size: 22px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .tour-yesterday {
      color: #fff;
      font-size: 18px;
        margin-top: 3px;
      span {
        padding-left: 20px;
      }
    }
    .right-number {
      width: 100%;
      position: absolute;
      left: 4%;
      top: 50%;
      transform: translate(0,-50%);
      span {
        text-align: center;
        display: inline-block;
        width: 40px;
        height: 70px;
        color: #002356;
        font-size: 40px;
        line-height: 75px;
        margin-right: 5px;
        background: url("../../static/person.jpg") no-repeat;
        background-size: 100% 100%;
      }
      i {
        font-size: 16px;
        color: #fff;
        vertical-align: bottom;
      }

    }
    .today-number {
      width: 150px;
      height: 70px;
      background: rgba(0,0,0,.34);
      float: right;
      color: #fff;
      /*margin-left: 20px;*/
      margin-right: 6%;
      text-align: center;
      h4 {
        margin-top: 8px;
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
      }
      b {
        color: yellow;
        font-size: 18px;
      }
    }
  }


  /*左侧中间部分的地图加上*/
  .tour-map-one {
    height: 60%;
    width: 60%;
    float: left;
  }
  .tour-map-two {
    margin-left: 60%;
    margin-top: 2px;
    height: 60%;
    width: 39.9%;
    .tour-map-two-t,.tour-map-two-b {
      width: 100%;
      height: 50%;
    }

  }
  .tour-map-three {
    height: 40%;
    width: 100%;
    border-top: 1px solid #16A2BF;
  }
  .hot {
    height: 62%;
    border-bottom: 1px solid  #16A2BF;
  }
  .my-hot {
    height: 38%;

  }

  /*轮播图*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }


</style>
