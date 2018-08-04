<template>
  <div>
    <el-button  @click="reload">重置</el-button>
  </div>
</template>

<script>
    export default {
        name: "Button3",
      methods:{
        reload(){
          this.$emit('reload');
        }
      }
    }
</script>

<style scoped>

</style>
