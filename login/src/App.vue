<template>
  <el-container>
    <el-header class="header" height="100px">
      <h3>我的网站欢迎!
        <b @click="login">登录</b>
        <b @click="register">注册</b>
      </h3>
    </el-header>
    <el-login>
      <router-view/>
    </el-login>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  methods: {
    login () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style>
  .header{
    background-color: #409EFF;
    color: white;

  }
</style>
