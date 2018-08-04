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

        <!--laoding测试-->
          <div id="preloader-4" v-if="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Map1></Map1>
        </div>
      </div>
      <div class="fly-right">
        <div class="hot">
          <Hot1>
            <template slot="title">
              热门旅游城市排行榜
            </template>
            <template >
              <tr>
                <td class="else">排名</td>
                <td class="else">城市名称</td>
                <td class="else">4A及以上景区</td>
                <td class="else ellipsis">游客平均游玩天数</td>
              </tr>
              <tr v-for="(item, index) in
                        provinceHotCity" :key="index">
                <td><span>{{(index+1)}}</span></td>
                <td>{{item.city_name}}</td>
                <td>
                  <!--将item.comment数据传入进去即可-->
                  <vue-seamless-scroll
                    :data="item.scen_name"
                    :class-option="optionLeft"
                    class="seamless-warp2">
                    <ul class="item">
                      <li  v-text="item.scen_name"></li>
                    </ul>
                  </vue-seamless-scroll>
                </td>
                <td>{{item.play_num}}</td>
              </tr>
            </template>
          </Hot1>
        </div>
        <!--轮播区域-->
        <div class="my-silder">
          <swiper :options="swiperOption1">
            <!-- slides -->
            <swiper-slide>
              <div class="my-hot">
                <Hot>
                  <template slot="title">
                    热门景区排行榜---杭州市
                  </template>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">景区名称</td>
                      <td class="else">距离机场</td>
                      <td class="else">门票信息</td>
                      <td class="else">旅游咨询电话</td>
                    </tr>
                    <tr v-for="(item, index) in
                        provinceHotScen" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.scen_name}}</td>
                      <td>{{item.scen_dis}}</td>
                      <td>￥{{item.scen_price}}</td>
                      <td><i>{{item.scen_tel}}</i></td>
                    </tr>
                  </template>
                </Hot>
              </div>
              <div class="my-hot">
                <Hot>
                  <template slot="title">
                    热门旅游礼品排行榜---杭州市
                  </template>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">礼品名称</td>
                      <td class="else">店铺名称</td>
                      <td class="else">人均消费</td>
                      <td rowspan="6" class="gift">
                        <!--礼物轮播-->
                          <swiper :options="swiperOption2">
                            <swiper-slide v-for="(item, index) in
                            provinceGift" :key="index">
                              <img :src="item.gift_url">
                            </swiper-slide>
                          </swiper>
                      </td>
                    </tr>
                    <tr v-for="(item, index) in
                        provinceGift" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.gift_name}}</td>
                      <td>{{item.gift_shop}}</td>
                      <td>{{item.gift_price}}</td>
                    </tr>
                  </template>
                </Hot>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="my-hot">
                <Hot>
                  <template slot="title">
                    热门景区排行榜---杭州市
                  </template>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">景区名称</td>
                      <td class="else">距离机场</td>
                      <td class="else">门票信息</td>
                      <td class="else">旅游咨询电话</td>
                    </tr>
                    <tr v-for="(item, index) in
                        provinceHotScen" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.scen_name}}</td>
                      <td>{{item.scen_dis}}</td>
                      <td>￥{{item.scen_price}}</td>
                      <td><i>{{item.scen_tel}}</i></td>
                    </tr>
                  </template>
                </Hot>
              </div>
              <div class="my-hot">
                <Hot>
                  <template slot="title">
                    热门旅游礼品排行榜---杭州市
                  </template>
                  <template >
                    <tr>
                      <td class="else">排名</td>
                      <td class="else">礼品名称</td>
                      <td class="else">店铺名称</td>
                      <td class="else">人均消费</td>
                      <!--礼物轮播图,占6列-->
                      <td rowspan="6" class="gift">
                        <!--礼物轮播-->
                        <swiper :options="swiperOption2">
                          <swiper-slide v-for="(item, index) in
                            provinceGift" :key="index">
                            <img :src="item.gift_url">
                          </swiper-slide>
                        </swiper>
                      </td>
                    </tr>
                    <tr v-for="(item, index) in
                        provinceGift" :key="index">
                      <td><span>{{(index+1)}}</span></td>
                      <td>{{item.gift_name}}</td>
                      <td>{{item.gift_shop}}</td>
                      <td>{{item.gift_price}}</td>
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
  import Hot1 from "./test/Hot1.vue";
  import Hot from "./test/Hot.vue";
  import Map1 from "./test/Map1.vue";
  /*获取此页面数据*/
  import {provinceHotData} from "../api";
  export default {
    data() {
      return {
        tempData:[],
        myNumber:"052044",
        timer: null,
        /*根据传入的值显示背景*/
        flyBg: true,
        provinceHotScen:[],
        provinceHotCity: [],
        provinceGift: [],
        /*城市切换轮播图swiperOption1*/
        swiperOption1: {
          autoplay: {
            delay: 5000,
          },
        },
        /*礼物切换轮播图2*/
        swiperOption2: {
          autoplay: {
            delay: 2000,
          },
        },
        loading: true
      }
    },
    created() {
         this.getAll();
    },
    mounted() {
        setTimeout(()=>{this.loading = false},7000);
    },
    methods: {
      /*获取本页面所有数据*/
      async getAll() {
        let data = await provinceHotData();
        let [provinceHotScen, provinceHotCity, provinceGift] =data;
        this.provinceHotScen = provinceHotScen;
        this.provinceGift = provinceGift;
        this.provinceHotCity = provinceHotCity.slice(0,5);
      }
    },
    components: {
      Header,
      Hot1,
      Hot,
      Map1
    },
    computed: {
      optionLeft () {
        return {
          direction: 2,
          limitMoveNum: 2
        }
      }
    },
    beforeDestroy() {
      clearInterval(this.timer);
    }
  }
</script>

<style lang="less" scoped>
  /*gift独占6列*/
  .gift {
    color: #000;
    max-width: 100px;
    .swiper-container {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /*动画测试*/
  #preloader-4{
    /*position: relative;*/
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  #preloader-4 span{
    position:absolute;
    width:16px;
    height: 16px;
    border-radius: 999px;
    background: #fff;
    animation: bounce 1s infinite linear;
  }
  #preloader-4 span:nth-child(1){
    left:0;
    animation-delay: 0s;
  }
  #preloader-4 span:nth-child(2){
    left:20px;
    animation-delay: 0.25s;
  }
  #preloader-4 span:nth-child(3){
    left:40px;
    animation-delay: 0.5s;
  }
  #preloader-4 span:nth-child(4){
    left:60px;
    animation-delay: 0.75s;
  }
  #preloader-4 span:nth-child(5){
    left:80px;
    animation-delay: 1.0s;
  }
  @keyframes bounce{
    0%{transform: translateY(0px);opacity: 0.5;}
    50%{transform: translateY(-30px);opacity: 1.0;}
    100%{transform: translateY(0px);opacity: 0.5;}
  }
  /*文字滚动*/
  .seamless-warp2 {
    overflow: hidden;
    height: 25px;
    width: 380px;
    ul.item {
      margin-left: 5px;
      width: 200px;
      li {
        float: left;
        margin-right: 10px;
      }
    }
  }
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
    /*background: pink;*/
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
    position: relative;
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
