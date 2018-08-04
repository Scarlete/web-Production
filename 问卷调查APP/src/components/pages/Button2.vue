<template>
  <div>
   <el-button @click="handleOne">上一步 </el-button>
  </div>
</template>
<script>
    export default {
        name: "Button2",
        methods:{
        handleOne(){
          this.$store.commit('two')
        },
      }
    }
</script>

<style scoped>

</style>
