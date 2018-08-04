<template>
  <div>
    <p class="question">1.<span>请问您的性别是</span>?</p>
    <el-radio-group v-model="radio2" class="choice">
      <el-radio :label="3">男</el-radio>
      <el-radio :label="6">女</el-radio>
      <el-radio :label="9">保密</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
    export default {
        name: "Que1",
        data () {
      return {
        radio2: 3
      };
    }
    }
</script>

<style scoped>
  .question{
    text-align: left;
  }
  .choice{
    margin-top: 10%;
  }
</style>
