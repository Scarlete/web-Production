<template>
  <div class="recommend">

    <div class="recommend-top">
      <h3>西湖风景名胜区各景点今日收入统计(实时)</h3>
    </div>
<table class="recommend-bot" cellspacing="0">
			<tr>
        <td class="else">序号</td>
        <td class="else">景点名称</td>
        <td class="else">窗口售票额（元）</td>
        <td class="else">互联网平台售票额（元）</td>
        <td class="else">分销商售票额（元）</td>
        <td class="else">实时人流量（人次）</td>
        <td class="else">收入总计（元）</td>
      </tr>
      <tr v-for="(item, index) in
                        flySpots" :key="index+1">
        <td><span>{{(index+1)}}</span></td>
        <td>{{item.scenic_spot_name}}</td>
        <td >{{item.income_internet}}</td>
        <td>{{item.income_internet}}</td>
        <td>{{item.income_window}}</td>
        <td ><P
          :class="{'one': item.type===0,
          'two': item.type===1,
          'three': item.type===2
          }">{{item.income_distributor}}</P></td>
        <td>{{item.income_tralagency}}</td>
      </tr>

	</table>
  </div>
</template>
<script>
  import {province} from "../../../api";
  export default {
    data() {
      return {
        isThree:false,
        isTwo:false,
        isOne:false,
        flySpots:[],
    }
    },
    methods: {
      //这个函数是失效的
      changeCo() {
        for (let i = 0; i < this.flySpots.length; i++) {
          let cur = this.flySpots[i];
          if (cur.income_distributor < 10000) {
            cur.type = 2;
          } else if (cur.income_distributor < 100000) {
            cur.type = 1;
          } else {
            cur.type = 0;
          }
        }


      },
      async Province() {
        let data = await province();
        this.flySpots=data;


      },

    },
    components: {

    },
    computed: {

    },
    created: function () {

    },
    mounted(){
      this.Province();
    }
  }
</script>
<style lang="less" scoped>
  .recommend {
    height: 100%;
  }
  .recommend-top {
    height: 25%;
    position: relative;
    h3{
      position: absolute;
      height: 25px;
      font-size: 18px;
      line-height: 25px;
      color: #49baf5;
      text-align: center;
      bottom: 5%;
      width: 80%;
      margin: 0 10%;
      border: 1px solid #13bad2;
      font-weight: 400;
      letter-spacing: 1px;
      top: 10px;
    }
  }

  .recommend-bot {
    width: 100%;
    height: 75%;
  }
  tr {
    width: 100%;

  }
  tr:nth-child(even) {
    background: #084f94;

  }

  /*1366及以下*/
  @media screen and (max-width: 1366px) {
    td {
      width: 20%;
      text-align: center;
      color: #fff;
      font-size: 12px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;

      &.else {
        color: #4dc2fe;
      }
    }
    td span {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      border-radius: 50%;
      background: #d37fca;
    }
  }

  /*1366及以上*/
  @media screen and (min-width: 1367px) {
    td {
      width: 20%;
      text-align: center;
      color: #fff;
      font-size: 16px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;

      &.else {
        color: #4dc2fe;
      }
    }
    td span {
      display: inline-block;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 50%;
      background: #d37fca;
    }
  }


  td i {
    display: inline-block;
    background: #eb6100;
    width: 100%;
  }
  .recommend-bottom {
    margin-top: -30%;
    margin-left: 80%;
    width: 20%;
    height: 75%;
    border: 1px solid #13bad2;
  }
  .seamless-warp2 {
    margin-top: 5%;
    overflow: hidden;
    width: 200px;
    ul.item {
      width: 580px;
      li {
        float: left;
        margin-right: 10px;
        margin-top:10px ;
        list-style:none;
      }
    }
  }


  .one{
    background-color: #F71A12;

  }
  .two{
    background-color: #FCC200;
  }
  .three{
    background-color: #4BD51D;
  }
</style>
