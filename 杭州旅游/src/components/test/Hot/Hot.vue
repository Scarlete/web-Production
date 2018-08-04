<template>
  <div class="recommend">

    <div class="recommend-top">
      <h4>城市热门旅游礼品排行榜--杭州市</h4>
    </div>

    <table class="recommend-bot" cellspacing="0">
      <!--父组件渲染好的内容在此处插入-->
      <tr>
        <td class="else">排名</td>
        <td class="else">美食名称</td>
        <td class="else">大床房均价</td>
        <td class="else">标间房均价</td>
      </tr>
      <tr v-for="(item, index) in
                        flySpots" :key="index">
        <td><span>{{(index+1)}}</span></td>

        <td>{{item.name}}</td>

        <td>￥{{item.price1}}</td>
        <td>￥{{item.price2}}</td>
      </tr>
    </table>

    <div class="recommend-bottom">

    </div>


   </div>

</template>
<script>
  export default {
    data() {
      return {
        flySpots:[
          {"name": "西湖1", "price1": 88,
            "price2": 99,"phone": "888888"},
          {"name": "西湖2", "price1": 88,
            "price2": 99,"phone": "888888"},
          {"name": "西湖3", "price1": 88,
            "price2": 99,"phone": "888888"},
          {"name": "西湖4", "price1": 88,
            "price2": 99,"phone": "888888"},
          {"name": "西湖5", "price1": 88,
            "price2": 99,"phone": "888888"}
        ],

      }
    },
    components: {
    },
  }
</script>
<style lang="less" scoped>
  .recommend {
    height: 100%;
  }
  .recommend-top {
    height: 25%;
    position: relative;
    h4 {
      position: absolute;
      height: 50px;
      font-size: 30px;
      line-height: 50px;
      color: #49baf5;
      text-align: center;
      bottom: 5%;
      width: 80%;
      margin: 0 10%;
      border: 1px solid #13bad2;
    }
  }

  .recommend-bot {
    width: 80%;
    height: 75%;
  }
  tr {
    width: 100%;
  }
  tr:nth-child(even) {
    background: #084f94;
  }
  td {
    width: 20%;
    text-align: center;
    color: #fff;
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
</style>
