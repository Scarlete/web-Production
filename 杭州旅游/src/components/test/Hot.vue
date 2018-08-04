<template>
  <div class="recommend">
    <div class="recommend-top">
      <h3>
        <!--插入标题部分-->
        <slot name="title"></slot>
      </h3>
    </div>

    <table class="recommend-bottom" cellspacing="0">
      <!--父组件渲染好的内容在此处插入-->
      <slot></slot>
    </table>
  </div>
</template>
<script>
  export default {
    data() {
      return {


      }
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
    h3 {
      position: absolute;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
      color: #49baf5;
      text-align: center;
      bottom: 5%;
      width: 80%;
      margin: 0 10%;
      border: 1px solid #13bad2;
    }
  }

  .recommend-bottom {
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
      width: 22px;
      height: 22px;
      line-height: 22px;
      border-radius: 50%;
      background: #d37fca;
    }
  }

  td i {
    display: inline-block;
    background: #eb6100;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
