<template>
  <div id="Oblaten1">
  	<div class="oblaten1-top">
    		<h3>散客占比</h3>
    	</div>
    <div id="Oblaten1-myChart"  class="oblaten1-bottom"></div>
  </div>
</template>

<script>
	import {Type} from "../../api";
  export default {
    name: "Oblaten1",
    data() {
      return {
      	one: 0,
      	two: 0
      	 };
   },

    mounted(){
      this.drawLine();
      this.myProvince();
    },
    methods: {
    	async myProvince() {
       let data = await Type();
       this.one = parseFloat(data[2].type_percent);
       this.two = parseFloat(data[3].type_percent);
       this.drawLine();
      },

      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('Oblaten1-myChart'));
        // 绘制图表
        myChart.setOption({
          backgroundColor: 'transparent',
          legend: {
            orient: 'vertical',
            itemGap:14,
            itemWidth:9,
            left: "0",
            top: " 50%",
            textStyle:{
              fontSize: 13,
              color:'white'
            },
            data: [
              {name:'团队', icon:'circle'},
              {name:'散客', icon:'circle'}
            ]
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              // hoverAnimation: true,
              selectedMode: 'single',
              label: {
                normal: {
                  position:'inside',
                  formatter: '{d}%',
                  textStyle:{
                    fontSize: 18,
                  },
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true
                }
              },
              data:[
                {
                  value:this.one,
                  name:'散客',
                  itemStyle: {
                    color: '#AFA0D7'
                  }
                },
                {
                  value:this.two,
                  name:'团队',
                  selected:true,
                  itemStyle: {
                    color: '#5B5378'
                  }
                },
              ],
              // itemStyle: {
              //   emphasis: {
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: 'rgba(0, 0, 0, 0.5)'
              //   }
              // }
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

#Oblaten1 {

    height: 100%;
  }
  .oblaten1-top {
    height: 10%;
    position: relative;
    }
 .oblaten1-top h3{
    position: absolute;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #49baf5;
    text-align: center;
    bottom: 5%;
    width: 80%;
    margin: 0 10%;
    border: 1px solid #13bad2;
    font-weight: 400;
  }

@media screen and (max-width: 1280px) {
  .oblaten1-bottom {
    width: 300px;
    height: 250px;
    margin-top: -25%;
    margin-left: 5%;
    transform: scale(0.7);
  }
}
/*1280到1600*/
@media screen and (min-width: 1281px) and (max-width:1600px) {
  .oblaten1-bottom {
    width: 300px;
    height: 250px;
    margin-top: -15%;
    margin-left: 10%;
    transform: scale(0.8);
  }
}
/*1600以上*/
@media screen and (min-width: 1601px) {
  .oblaten1-bottom {
    width: 300px;
    height: 250px;
    margin-top: -5%;
    margin-left: 15%;
    transform: scale(0.9);
  }
}

</style>
