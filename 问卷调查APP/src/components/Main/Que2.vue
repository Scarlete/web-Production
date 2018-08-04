<template>
  <div>
    <p class="question">2.<span>请选择您的兴趣爱好：</span>?</p>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  const cityOptions = ['看书', '游泳', '跑步', '看电影','听音乐'];
    export default {
        name: "Que2",
      data() {
        return {
          checkedCities: ['看书', '看电影'],
          checkAll: false,
          cities: cityOptions,
          isIndeterminate: true
        };
      },
      methods: {
        handleCheckAllChange(val) {
          this.checkedCities = val ? cityOptions : [];
          this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.cities.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
      }
    }
</script>

<style scoped>
  .question{
    text-align: left;
  }
  .check{
    width: 100%;
    margin-left: 0;
  }
</style>
