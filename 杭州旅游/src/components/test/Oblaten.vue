<template>
    <div id="Oblaten">
    	<div class="oblaten-top">
    		<h3>省内外游客占比</h3>
    	</div>
      <div id="Oblaten-myChart"  class="oblaten-bottom"></div>
    </div>
</template>

<script>
	import {Type} from "../../api";
    export default {
        name: "Oblaten",

         data() {
      return {
      	one: '0',
      	two: '0'
      	 };
   },
      mounted(){
        this.drawLine();
        this.myProvince();
      },
      methods: {
      	async myProvince() {
       let data = await Type();
       this.one = parseFloat(data[0].type_percent);
       this.two = parseFloat(data[1].type_percent);
       this.drawLine();
      },
        drawLine() {
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('Oblaten-myChart'))
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
                {name:'省内', icon:'circle'},
                {name:'省外', icon:'circle'}
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
                    value:this.two,
//					value:82.5,
                    name:'省外',
                    itemStyle: {
                      color: '#2CC4C5'
                    }
                  },
                  {
                    value:this.one,
//					value:17.5,
                    name:'省内',
                    selected:true,
                    itemStyle: {
                      color: '#118584'
                    }
                  },
                ],
              }
            ]
          })
        }
      }
    }
</script>

<style scoped>

#Oblaten {
    width: 100%;
    height: 100%;
  }
  .oblaten-top {
    height: 10%;
    }
 .oblaten-top h3{
    height: 20px;
    font-size: 14px;
    color: #49baf5;
    text-align: center;
    bottom: 5%;
    width: 80%;
    margin: 0 10%;
    border: 1px solid #13bad2;
    font-weight: 400;
  }

@media screen and (max-width: 1280px) {
  .oblaten-bottom {
    width: 300px;
    height: 250px;
    margin-top: -25%;
    margin-left: 5%;
    transform: scale(0.7);
  }
}

/*1280到1600*/
@media screen and (min-width: 1281px) and (max-width:1600px) {
  .oblaten-bottom {
   width: 300px;
   height: 250px;
   margin-top: -15%;
   margin-left: 10%;
   transform: scale(0.8);
 }
}

@media screen and (min-width: 1601px) {
  .oblaten-bottom {
    width: 300px;
    height: 250px;
    margin-top: -5%;
    margin-left: 15%;
    transform: scale(0.9);
  }
}




</style>
