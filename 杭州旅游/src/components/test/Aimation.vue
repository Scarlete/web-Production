<template>
      <div class='circle'>
        <div :class='{circle1:true,
          "little": selectColor===0,
          "middle": selectColor===1,
          "more": selectColor===2,
         circle1Move: isShow}'>&nbsp;</div>

        <div :class='{circle2:true,
          "little": selectColor===0,
          "middle": selectColor===1,
          "more": selectColor===2,
         circle2Move: isShow}'>&nbsp;</div>

        <div :class='{circle3:true,
          "little": selectColor===0,
          "middle": selectColor===1,
          "more": selectColor===2,
         circle3Move: isShow}'>&nbsp;</div>

        <div :class='{center: true,
         "little": selectColor===0,
          "middle": selectColor===1,
          "more": selectColor===2
}'></div>
      </div>
</template>
<script>
    export default {
      data() {
        return {

        }
      },
      props: {
        isShow: Boolean,
        selectColor: Number
      }
    }
</script>

<style lang="less" scoped>
  .circle {
  /*  width: 60px;
    height: 60px;*/
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .circle1,
  .circle2,
  .circle3,
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -18px 0 0 -18px;
    width: 36px;
    height: 36px;
    border-radius: 30px;
    background-color: #00d227;
    /*测试*/
    &.little {
      background-color: #00d227;
    }
    &.middle {
      background-color: #f0ad4e;
    }
    &.more {
      background-color: red;
    }
  }

  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    /*一起改,要对应*/
    margin: -20px 0 0 -20px;
    width: 40px;
    height: 40px;
    border-radius: 35px;
    /*background: #00ff00;*/
    text-align: center;
    line-height: 70px;
    color: #EAEAEA;
    font-size: 16px;
  }

  .circle1Move {
    -webkit-animation: circle 3s linear infinite;
    animation: circle 3s linear infinite;
  }

  .circle2Move {
    -webkit-animation: circle 3s linear 0.8s infinite;
    animation: circle 3s linear 0.8s infinite;
  }

  .circle3Move {
    -webkit-animation: circle 3s linear 1.6s infinite;
    /* Safari and Chrome */
    animation: circle 3s linear 1.6s infinite;
  }

  @-webkit-keyframes circle {
    /* Safari and Chrome */
    from {
      opacity: 1;
      -webkit-transform: scale(0);
    }
    to {
      opacity: 0;
      -webkit-transform: scale(3);
    }
  }

</style>
