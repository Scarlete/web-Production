<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
      name: 'App',
      provide(){
        return{
          reload:this.reload
        }
      },
      data(){
        return{
          isRouterAlive:true
        }
      },
      //通过声明reload方法，控制router-view的显示或隐藏
      // 从而控制页面的再次加载
      methods:{
        reload(){
          this.isRouterAlive=false;
          this.$nextTick(function(){
            this.isRouterAlive=true
          })
        }
      },

}
</script>

<style>
#app {
  position: relative;
  width: 100%;
  height: 100%;
  /* width: 1928px;
   height: 1080px;*/
  overflow: hidden;
}
</style>
