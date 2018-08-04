<template>
  <div>
    <el-button  @click="handleOne">下一步</el-button>
  </div>
</template>

<script>
    export default {
        name: "Button1",
        methods:{
          handleOne(){
            this.$store.commit('one');
          },
        }
    }
</script>

<style scoped>

</style>
