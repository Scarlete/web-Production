<template>
    <div class="little clearfix">

      <div class="little-left">
        <div class="left-top">
            <h2>您当前所在的位置</h2>
            <h1>2F</h1>
        </div>
        <div class="left-center">

        </div>
       <!--left-bottom时间部分-->
        <LittleTime></LittleTime>
      </div>
      <div class="little-right">
        <!--人文景观-->
        <!--测试轮播-->
        <div class="main">
          <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
              <Humanity :imgArr = "imgArr" :spotData="humanity">
                <template slot="title">
                  自然景观推荐
                </template>
              </Humanity>
            </swiper-slide>
            <swiper-slide>
            <Humanity :imgArr = "imgArr" :spotData="nature">
              <template slot="title">
                人文景观推荐
              </template>
            </Humanity>
          </swiper-slide>
            <swiper-slide>
              <Humanity :imgArr = "imgArr" :spotData="humanity">
                <template slot="title">
                  山河景观推荐
                </template>
              </Humanity>
            </swiper-slide>

          </swiper>
          <!--轮播图的分页-->
          <div class="my-page">
            <div class="swiper-pagination"  slot="pagination"></div>
          </div>
        </div>


      </div>


    </div>
</template>
<script>

    import LittleTime from "./test/LittleTime.vue";
    import Humanity from "./Little/Humanity.vue";
    /*获取数据*/
    import {xianLift} from "../api";
    export default {
      mounted() {
        this.getData();
        /*下方定时轮询,不建议时间太短*/
       this.lun();
      },
        data() {
            return {
              test:[],
              timer: null,
              swiperOption: {
                pagination: {
                  el: '.swiper-pagination'
                },
                autoplay: {
                  delay: 8000,
                },
              },
              /*人文景观数据*/
              humanity: [],
              nature: [],
             imgArr: ["../../static/lun/lun1.jpg",
               "../../static/lun/lun2.jpg",
               "../../static/lun/lun3.jpg",
               "../../static/lun/lun4.jpg"
             ]
            }
        },
        props: [''],
        computed: {},
        methods: {
          /*处理数据函数*/
          /*参数,需要加标志的当前对象,人数标准一,人数标准二*/
           handleData(obj, littleNum, middleNum) {
               let num = obj.play_num;
               if(num < littleNum) {
                 obj.type = 0;
               } else if(num <= middleNum) {
                 obj.type = 1;
               } else {
                 obj.type = 2;
               }
             return obj;
           },

          async getData() {
            let data = await xianLift(0);
            const humanity = data.slice(0,6);
            const nature = data.slice(4);

            /*临时存储*/
            let humanityTemp = [];
            let natureTemp = [];
            /*自定义人数饱和标准,每个景点人数标准不一样,
           * 只能分开写
           * */
            humanityTemp.push
            (this.handleData(humanity[0],500,1000));
            humanityTemp.push
            (this.handleData(humanity[1],200,1200));
            humanityTemp.push
            (this.handleData(humanity[2],5,6));
            humanityTemp.push
            (this.handleData(humanity[3],2,6));
            humanityTemp.push
            (this.handleData(humanity[4],3,8));
            humanityTemp.push
            (this.handleData(humanity[5],6,10));

            natureTemp.push
            (this.handleData(nature[0],3,6));
            natureTemp.push
            (this.handleData(nature[1],4,10));
            natureTemp.push
            (this.handleData(nature[2],5,6));
            natureTemp.push
            (this.handleData(nature[3],2,6));
            natureTemp.push
            (this.handleData(nature[4],3,8));
            natureTemp.push
            (this.handleData(nature[5],6,10));
            this.humanity = humanityTemp;
            this.nature = natureTemp;
          },
          lun() {
            this.timer=setInterval(this.getData, 3000);
          }
        },
        components: {
          LittleTime,
          Humanity
        },
      beforeDestroy() {
        clearInterval(this.timer);
      }
    }
</script>

<style lang="less" scoped>
  .little {
    width: 100%;
    height: 100%;
  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    .little-left {
      width: 22%;
      height: 100%;
      float: left;
      .left-top {
        height: 30%;
        background: #5a42eb;
        h2 {
          padding-top: 10%;
          color: #fff;
          text-align: center;
          font-size: 25px;
        }
        h1 {
          color: #fefefe;
          font-size: 100px;
          text-align: center;
        }

      }
      .left-center {
        height: 45%;
        background: url("../../static/timg.jpg")  no-repeat;
        background-size: 100% 100%;
      }
    }
  }

    /*1366及以上*/
  @media screen and (min-width: 1367px) {
    .little-left {
      width: 22%;
      height: 100%;
      float: left;
      .left-top {
        height: 30%;
        background: #5a42eb;
        h2 {
          padding-top: 10%;
          color: #fff;
          text-align: center;
          font-size: 32px;
        }
        h1 {
          color: #fefefe;
          font-size: 120px;
          text-align: center;
        }

      }
      .left-center {
        height: 45%;
        background: url("../../static/timg.jpg")  no-repeat;
        background-size: 100% 100%;
      }
      /**/
    }
  }


  .little-right {
    width: 78%;
    height: 100%;
    float: left;
    background: #002559;
    padding: 1.5%;
    box-sizing: border-box;
    .main {
      height: 100%;
      border: 2px solid #13bad2;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .my-page {
      display: flex;
      justify-content: center;
    }

  }

</style>
