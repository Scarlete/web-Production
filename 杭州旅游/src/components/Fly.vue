<template>
    <div class="fly">
      <Header :flyBg="flyBg"></Header>
      <div class="main clearfix">
        <div class="fly-left">
            <div class="tour clearfix">
                <div class="tour-left">
                  <h3 class="tour-number">今日到港客流量</h3>
                  <div class="tour-yesterday">
                    <span>昨日游客总量</span>
                    <br>
                    <span>5201314</span>
                  </div>
                </div>
                <div class="tour-right">
                    <div class="right-number clearfix">
                      <span>{{myNumber[0]}}</span>
                      <span>{{myNumber[1]}}</span>
                      <span>{{myNumber[2]}}</span>
                      <i>，</i>
                      <span>{{myNumber[3]}}</span>
                      <span>{{myNumber[4]}}</span>
                      <span>{{myNumber[5]}}</span>
                      <i>人</i>
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
            <div class="tour-map">
              <Map></Map>
            </div>
        </div>

        <div class="fly-right">
              <div class="hot">
                <Hot>
                  <template slot="title">
                    热门景区排行榜
                  </template>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">景区名称</td>
                      <td class="else">距离机场</td>
                      <td class="else">门票</td>
                      <td class="else">看点</td>
                    </tr>
                    <tr v-for="(item, index) in
                        flySpots" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.scen_name}}</td>
                      <td>{{item.scen_dis}}</td>
                      <td>{{item.scen_price}}</td>
                      <td>{{item.scen_hot}}</td>
                    </tr>
                  </template>
                </Hot>
              </div>
              <!--轮播区域-->
              <div class="my-silder">
                <swiper :options="swiperOption">
                  <!--西湖景区-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---西湖景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---西湖景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                  <!--千岛湖-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---千岛湖景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---千岛湖景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                  <!--中国大竹海景区-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---大竹海景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---大竹海景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                  <!--杭州半山国家森林公园-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---西溪湿地
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---西溪湿地
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                  <!--雷峰塔-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---雷峰塔
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---雷峰塔
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                  <!--大明山风景区-->
                  <swiper-slide>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          周边美食排行榜---瀑布景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">美食名称</td>
                            <td class="else">店铺名称</td>
                            <td class="else">人均价格</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyFood" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.food_name}}</td>
                            <td>{{item.food_rea}}</td>
                            <td>￥{{item.food_price}}</td>
                            <td><i>{{item.food_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                    <div class="my-hot">
                      <Hot>
                        <template slot="title">
                          酒店口碑排行榜---瀑布景区
                        </template>
                        <template >
                          <tr>
                            <td class="else">排名</td>
                            <td class="else">酒店名称</td>
                            <td class="else">大床房均价</td>
                            <td class="else">星级</td>
                            <td class="else">预约电话</td>
                          </tr>
                          <tr v-for="(item, index) in
                        flyHotel" :key="index">
                            <td><span>{{(index+1)}}</span></td>
                            <td>{{item.hotel_name}}</td>
                            <td>￥{{item.hotel_big}}</td>
                            <td>{{item.hotel_sta}}</td>
                            <td><i>{{item.hotel_tel}}</i></td>
                          </tr>
                        </template>
                      </Hot>
                    </div>
                  </swiper-slide>
                </swiper>

              </div>
        </div>
      </div>
    </div>
</template>
<script>
    import Header from "./test/Header.vue";
    import Hot from "./test/Hot.vue";
    import Map from "./test/Map.vue";
    /*获取本页面右侧数据*/
    import {flyDataAll} from "../api";
    export default {
        data() {
          return {
              tempData:[],
              myNumber:"052044", //实时人数
              timer: null,
              flyBg: true, //根据传入的值更换Header背景
              /*loading*/
              loading: false,
              flySpots:[],
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
        this.getAll();
      },
      methods: {
//         获取本页面所有数据
          async getAll() {
            let data = await flyDataAll();
            if(!data) {return false}
            let [flySpots, flyFood, flyHotel] =data;
            this.flySpots = flySpots;
            this.flyFood= flyFood;
            this.flyHotel = flyHotel;
          }
      },
        components: {
          Header,
          Hot,
          Map
        },
      beforeDestroy() {
          /*记得清页面定时器*/
        clearInterval(this.timer);
      }
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
    position: relative;
    width: 31.9%;
    background: url("../../static/fly-right.jpg") no-repeat;
  }
  .fly-left {
    width: 68%;
    box-sizing: border-box;
    padding-left: 2%;
    border-right: 1px solid #16A2BF;
    background: url("../../static/fly-left.jpg") no-repeat;
    background-size: 100% 100%;
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

  }
  .tour-right {
    width: 75%;
    position: relative;
  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .tour-number {
      padding-left: 3%;
      margin-top: 4%;
      font-size: 18px;
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
      margin-top: 4%;
      font-size: 22px;
      color: #ffffb8;
      border-left: 4px solid #13bad2;
    }
    .tour-yesterday {
      color: #fff;
      font-size: 16px;
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


  .tour-map {
    height: 88.43%;
  }

  .hot {
    height: 33.33%;
  }

  .my-silder {
    height: 66.66%;
  }
  .my-hot {
    height: 50%;
  }

  /*轮播图*/
  .swiper-container {
    width: 100%;
    height: 100%;
  }



</style>
