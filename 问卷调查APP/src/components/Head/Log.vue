<template>
  <div>
    <div class="one">
      <el-row :gutter="20">
        <el-col :span="4" :offset="6">
          <p >用户：</p>
        </el-col>
        <el-col :span="6" >
          <el-input v-model="input" placeholder="用户名称" ></el-input>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="4" :offset="6">
          <p >密码：</p>
        </el-col>
        <el-col :span="6" >
         <el-input v-model="inputl" placeholder="密码" ></el-input>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="6" :offset="10">
          <!--<el-button >注册</el-button>-->
          <el-button @click="handleClick">登录</el-button>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Log",
        data() {
        return {
          input: '',
          inputl: ''
        }
      },
        methods:{
          handleClick(){
            this.$router.push(
              // {name: 'HelloWorld'},
                 { path: '/HelloWorld'}
              )
          }
        },

    }
</script>

<style scoped>
.one{


  border: solid 1px red;
}
</style>
