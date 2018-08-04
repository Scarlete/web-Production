<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in Imgs" :key="index">
      <h3>
        <img :src="item">
      </h3>
    </el-carousel-item>

  </el-carousel>
</template>
<script>

    export default {
        data() {
            return {

            }
        },
        props: ['Imgs'],
        computed: {},
        methods: {},
        components: {}
    }
</script>

<style lang="less" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
