<template>
  <div class="lin">
    <!--箭头-->
    <div class="arrow"></div>
    <!--安德曼-->
    <div class="adm">
      安德曼精品店
    </div>
    <div class="one-seven">1.7km</div>
    <!--滚动文字-->
    <div class="move">
      <vue-seamless-scroll :data="newsList" :class-option="optionLeft" class="seamless-warp2">
        <ul class="item">
          <li v-for="item in newsList" v-text="item.title"></li>
        </ul>
      </vue-seamless-scroll>
    </div>
    <!--1Km-->
    <div class="one">
        1Km
    </div>
    <!--灵隐寺-->
    <div class="linTemple">
      <h1>灵隐寺</h1>
      <h2>Linyin  Temple</h2>
    </div>
    <!--当前人数-->
    <div class="nowNumber">
      <h3>当前灵隐寺游客量</h3>
      <div :class="{number: true,
          little: tempData.type ===0,
          middle: tempData.type ===1,
          more: tempData.type ===2
          }">
        <span>{{tempData.number[0]}}</span>
        <span>{{tempData.number[1]}}</span>
        <span>{{tempData.number[2]}}</span>
        <i>,</i>
        <span>{{tempData.number[3]}}</span>
        <span>{{tempData.number[4]}}</span>
        <span>{{tempData.number[5]}}</span>
        <i>人</i></div>
    </div>
    <!--2Km-->
    <div class="two">
      2Km
    </div>
  </div>

</template>

<script>
  import {linYinTouristNumber} from "../../api";
  export default {
    mounted() {
     this.getNumber();
//     this.lun();
    },
    data() {
      return {
        newsList: [
          {
            'title': '兰轩村庄食坊:0571-12345678'
          },
          {
            'title': '杭州州法云安缦:0571-12345678'
          }
        ],
        tempData:{number: "001131", type: 0},
        timer: null
      }
    },
    props: [''],
    methods: {
      async getNumber() {
        let  personData = await linYinTouristNumber();
        if(!personData) {
          return false;
        }
        personData += "";
        let len = personData.number.length;
        let personNum = personData.number;
        len === 5 ? personNum += "0" : null;
        len === 4 ? personNum += "00" : null;
        len === 3 ? personNum += "000" : null;
        len === 2 ? personNum += "0000" : null;
        len === 1 ? personNum += "00000" : null;
        personNum = parseInt(personNum);
          if( personNum < 1000){
            personData.type = 0;
          }else if(personNum < 2000){
            personData.type = 1;
          }else {
            personData.type = 2;
          }
        this.tempData =  personData;
      },
      lun() {
       this.timer=setInterval(this.getNumber, 3000);
      }
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

  .lin {
    height: 100%;
    position: relative;
    background: url("../../../static/linyin.jpg") no-repeat;
    background-size: 100% 100%;
  }
  @media screen and (min-width: 1281px) and (max-width:1600px) {
     .arrow {
       width: 9%;
       height: 25%;
       position: absolute;
       left: 63%;
       bottom: 6%;
       animation: arrowMove 2s infinite;
       background: url("../../../static/arrow.png") no-repeat;
       background-size: 100% 100%;
     }
     .adm {
       position: absolute;
       left: 9%;
       top: 19.5%;
       color: #fff;
       font-size: 70px;
     }
     .move {
       position: absolute;
       left: 14.7%;
       top: 56%;
       width: 37%;
       height: 24%;
     }
     .one {
       position: absolute;
       left: 14.7%;
       top: 85%;
       color: #fff;
       font-size: 60px;
     }
   .one-seven {
     position: absolute;
     font-size: 60px;
     left: 18%;
     top: 32%;
     color: #fff;
   }
     .linTemple {
       position: absolute;
       right: 3%;
       top: 5%;
       color: #fff;
       h1 {
         font-size: 120px;

       }
       h2 {
         box-sizing: border-box;
         padding-left: 40px;
         font-size: 55px;
       }
     }
     .nowNumber {
       position: absolute;
       right: 3%;
       top: 38%;
       color: #fff;
       width: 600px;
       h3 {
         position: absolute;
         padding-left: 5px;
         box-sizing: border-box;
         font-size: 35px;
         border-left: 4px solid #18aec4;
       }
       .number {
         margin-top: 70px;
         color: #000;
         span {
           display: inline-block;
           width: 60px;
           height: 90px;
           text-align: center;
           line-height: 100px;
           margin-right: 10px;
           font-size: 50px;
         }

         &.little {
           span {
             background: url("../../../static/bg_green.png") no-repeat;
             background-size: 100% 100%;
           }
         }
         &.middle {
           span {
             background: url("../../../static/bg_yellow.png") no-repeat;
             background-size: 100% 100%;
           }
         }
         &.more {
           span {
             background: url("../../../static/bg_red.png") no-repeat;
             background-size: 100% 100%;
           }
         }

       }

       i {
         vertical-align: bottom;
         color: #fff;
         font-size: 40px;
       }
     }
     .two {
       position: absolute;
       right: 4%;
       bottom: 5%;
       color: #fff;
       font-size: 110px;
     }
   .seamless-warp2 {
     overflow: hidden;
     height: 90%;
     width: 100%;
     ul.item {
       width: 1150px;
       list-style: none;
       li {
         float: left;
         width: 100%;
         color: #fff;
         font-size: 65px;
         padding-left: 40px;
         margin: 0 12px 10px  0;
         &:nth-child(odd) {
           background: #60b634;
         }
         &:nth-child(even) {
           background: #f5c531;
         }
       }
     }
   }
   }

  @media screen and (min-width: 1601px) and (max-width:1920px) {
    .arrow {
      width: 8%;
      height: 25%;
      position: absolute;
      left: 69%;
      bottom: 6%;
      animation: arrowMove 2s infinite;
      background: url("../../../static/arrow.png") no-repeat;
      background-size: 100% 100%;
    }
    .adm {
      position: absolute;
      left: 9%;
      top: 19.5%;
      color: #fff;
      font-size: 70px;
    }
    .move {
      position: absolute;
      left: 14.7%;
      top: 56%;
      width: 37%;
      height: 24%;
    }
    .one {
      position: absolute;
      left: 14.7%;
      top: 85%;
      color: #fff;
      font-size: 70px;
    }
  .one-seven {
    position: absolute;
    font-size: 60px;
    left: 18%;
    top: 32%;
    color: #fff;
  }
    .linTemple {
      position: absolute;
      right: 3%;
      top: 5%;
      color: #fff;
      h1 {
        font-size: 130px;

      }
      h2 {
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 60px;
      }
    }
    .nowNumber {
      position: absolute;
      right: 3%;
      top: 38%;
      color: #fff;
      width: 600px;
      h3 {
        position: absolute;
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 30px;
        border-left: 4px solid #18aec4;
      }
      .number {
        margin-top: 50px;
        color: #000;
        span {
          display: inline-block;
          width: 70px;
          height: 90px;
          text-align: center;
          line-height: 100px;
          margin-right: 10px;
          font-size: 50px;
        }

        &.little {
          span {
            background: url("../../../static/bg_green.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.middle {
          span {
            background: url("../../../static/bg_yellow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.more {
          span {
            background: url("../../../static/bg_red.png") no-repeat;
            background-size: 100% 100%;
          }
        }

      }

      i {
        vertical-align: bottom;
        color: #fff;
        font-size: 40px;
      }
    }
    .two {
      position: absolute;
      right: 4%;
      bottom: 5%;
      color: #fff;
      font-size: 100px;
    }
  .seamless-warp2 {
    overflow: hidden;
    height: 90%;
    width: 100%;
    ul.item {
      width: 1150px;
      list-style: none;
      li {
        float: left;
        width: 100%;
        color: #fff;
        font-size: 70px;
        padding-left: 40px;
        margin: 0 12px 10px  0;
        &:nth-child(odd) {
          background: #60b634;
        }
        &:nth-child(even) {
          background: #f5c531;
        }
      }
    }
  }
  }

  @media screen and (max-width: 1280px) {
    .arrow {
      width: 10%;
      height: 25%;
      position: absolute;
      left: 62%;
      bottom: 6%;
      animation: arrowMove 2s infinite;
      background: url("../../../static/arrow.png") no-repeat;
      background-size: 100% 100%;
    }
    .adm {
      position: absolute;
      left: 9%;
      top: 19.5%;
      color: #fff;
      font-size: 50px;
    }
    .move {
      position: absolute;
      left: 14.7%;
      top: 56%;
      width: 37%;
      height: 24%;
    }
    .one {
      position: absolute;
      left: 14.7%;
      top: 85%;
      color: #fff;
      font-size: 60px;
    }
    .one-seven {
      position: absolute;
      font-size: 45px;
      left: 18%;
      top: 32%;
      color: #fff;
    }
    .linTemple {
      position: absolute;
      right: 3%;
      top: 8%;
      color: #fff;
      h1 {
        font-size: 90px;

      }
      h2 {
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 40px;
      }
    }
    .nowNumber {
      position: absolute;
      right: 5%;
      top: 38%;
      width: 400px;
      color: #fff;

      h3 {
        position: absolute;
        padding-left: 5px;
        box-sizing: border-box;
        font-size: 25px;
        border-left: 4px solid #18aec4;
      }
      .number {
        margin-top: 40px;
        color: #000;
        span {
          display: inline-block;
          width: 40px;
          height: 60px;
          text-align: center;
          line-height: 70px;
          margin-right: 6px;
          font-size: 40px;
        }

        &.little {
          span {
            background: url("../../../static/bg_green.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.middle {
          span {
            background: url("../../../static/bg_yellow.png") no-repeat;
            background-size: 100% 100%;
          }
        }
        &.more {
          span {
            background: url("../../../static/bg_red.png") no-repeat;
            background-size: 100% 100%;
          }
        }

      }

      i {
        vertical-align: bottom;
        color: #fff;
        font-size: 40px;
      }
    }
    .two {
      position: absolute;
      right: 4%;
      bottom: 5%;
      color: #fff;
      font-size: 90px;
    }
  }

  .seamless-warp2 {
    overflow: hidden;
    height: 90%;
    width: 100%;
    ul.item {
      /*控制显示的宽度*/
      width: 950px;
      list-style: none;
      li {
        float: left;
        width: 100%;
        color: #fff;
        font-size: 40px;
        padding-left: 40px;
        margin: 0 12px 10px  0;
        &:nth-child(odd) {
          background: #60b634;
        }
        &:nth-child(even) {
          background: #f5c531;
        }
      }
    }
  }

  /*箭头动画*/
  @keyframes arrowMove {
    0% {
      bottom: 6%;
    }
    50% {
      bottom: 12%;
    }
    100% {
      bottom: 6%;
    }
  }
</style>
