<template>
  <div class="hello">
    <div>
      <el-header>
      </el-header>
      <el-main >
        <div v-show="count===1">
          <Que1></Que1>
        </div>
        <div v-show="count===2">
          <Que2></Que2>
        </div>
        <div v-show="count===3">
          <Que3></Que3>
        </div>
      </el-main>
    </div>
     <div>
       <el-footer >
         <el-row type="flex" justify="space-around">
             <el-col :span="2" v-if="count===2|count===3">
               <Button2></Button2>
             </el-col>
           <el-col :span="2">
             <Button1 ></Button1>
           </el-col>
           <el-col :span="5">
             <Button3 @reload="zon"></Button3>
           </el-col>
         </el-row>
       </el-footer>
     </div>
  </div>
</template>

<script>
  import Button1 from './pages/Button1'
  import Button2 from './pages/Button2'
  import Button3 from './pages/Button3'
  import Que1 from './Main/Que1'
  import Que2 from './Main/Que2'
  import Que3 from './Main/Que3'


export default {
    //注入依赖
    inject:['reload'],
    name: 'HelloWorld',
    data () {
      return {
      }
    },
    components: {
      Button1,
      Button2,
      Button3,
      Que1,
      Que2,
      Que3,
    },
    computed:{
      count(){
        return this.$store.state.count;
      }
    },
    methods:{
       zon(){
         this.reload()
       },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .el-header, .el-footer {
    text-align: center;
    height: 190px;
    border: solid 1px red;
  }
  .el-main {
    background-color: #E9EEF3;
    height: 590px;
    border: solid 1px red;
  }

</style>
