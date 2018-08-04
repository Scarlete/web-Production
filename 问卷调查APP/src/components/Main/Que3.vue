<template>
  <div>
    <p class="question">3.<span></span>请介绍一下自己</p>
    <textarea  v-model="text" placeholder="输入。。。" class="one"></textarea>
    <p>输入的内容是：</p>
    <p style="white-space:pre">{{text}}</p>
  </div>
</template>

<script>
    export default {
        name: "Que3",
        data () {
        return {
          text:''
        }
      },
    }
</script>

<style scoped>
  .question{
    text-align: left;
  }
.one{
  width:100%;
  height: 100px;
}
</style>
