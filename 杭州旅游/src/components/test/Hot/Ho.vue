<template>
  <div class="recommend">
    <div class="recommend-top">
      <h3>2016年--2018年游客量对比</h3>
    </div>

    <div class="recommend-unit"
         style="margin-left: 30px;color:#45B6E0;">游客量(万)
    </div>

    <div id="recommend-myChart"
         class="recommend-bottom">
    </div>
  </div>
</template>

<script>
  import {years} from "../../../api";
  export default {
    data() {
      return {
        dataOne: {},
        dataTwo: {},
        dataThree: {}
      }
    },
    mounted(){
     /* this.drawLine();*/
      this.Province();
    },
    methods: {
      drawLine(){
        const dataOne = this.dataOne;
        const dataTwo = this.dataTwo;
        const dataThree = this.dataThree;
        let myChart = this.$echarts.init(document.getElementById('recommend-myChart'));

        // 绘制图表
        myChart.setOption({
          name: 'a',
          tooltip: {
            trigger: 'axis', //按x轴显示
            show: true,
            axisPointer: {
              lineStyle: {
                color: 'none', //不显示线条
              },
            },
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            textStyle: {
              align: 'left',
              fontSize: 12,
              color: '#333333',
            },
            extraCssText: 'box-shadow: 0 1px 5px 0 rgba( 255, 255, 255)' //添加阴影
          },
//        color: ['#0580f2', '#faa732', '#e1575d'],
					color:['#FFFB00','#00BAF0','#EF3F3B'],
          grid: {
            left: '5%',
            right: '6%',
            top: '14%',
            bottom: '6%',
            containLabel: true,
            show:true,
            backgroundColor: '#0f375f',

          },
          legend: {
            show: true,
//          icon: 'circle',
            right: 20,
            textStyle: {
              fontSize: 12,
              color: '#fff'
            },
            data: ['2016年', '2017年', '2018年实时']
          },
          xAxis: {
            show: true,
            type: 'category',
            axisTick: {
              show: false
            },
            axisLine: {
              show:  true,
              lineStyle: {
                color: '#eeeeee',
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: '#999999'
              }
            },
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11','12']
          },
          yAxis: {
            show: true,
            type: 'value',
            axisTick: {
              show: false
            },
//          #45B6E0
            axisLine: {
              show: true,
              lineStyle: {
                color: '#eeeeee',
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                show: false,
                color: '#f2f3f7'
              }
            },
            axisLabel: {
              textStyle: {
                fontSize: 16,
//              color: '#999999'
							color:'#45B6E0'
              }
            }
          },
          series: [{
            name: '2016年',
            type: 'line',
            symbol: 'circle',
            itemStyle: {
              emphasis: {
                symbol: 'circle',
              }
            },
            symbolSize: [8, 8],
            data:[ dataOne.Jan,dataOne.Feb,dataOne.Mar,dataOne.Apr,
              dataOne.May,dataOne.Jun,dataOne.Jul,dataOne.Aug,
              dataOne.Sept,dataOne.Oct,dataOne.Nov,dataOne.Dece
            ]
          }, {
            name: '2017年',
            type: 'line',
            symbol: 'circle',
            symbolSize: [8, 8],
            data:[ dataTwo.Jan,dataTwo.Feb,dataTwo.Mar,dataTwo.Apr,
              dataTwo.May,dataTwo.Jun,dataTwo.Jul,dataTwo.Aug,
              dataTwo.Sept,dataTwo.Oct,dataTwo.Nov,dataTwo.Dece
            ]
          }, {
            name: '2018年实时',
            type: 'line',
            symbol: 'circle',
            symbolSize: [8, 8],
            data:[ dataThree.Jan,dataThree.Feb,dataThree.Mar,
              dataThree.Apr, dataThree.May,dataThree.Jun,
              dataThree.Jul,dataThree.Aug, dataThree.Sept,
              dataThree.Oct,dataThree.Nov,dataThree.Dece
            ]
          }]

        });

      },
      async Province() {
        let data = await years();
        this.dataOne = data[0];
        this.dataTwo = data[1];
        this.dataThree = data[2];
        this.drawLine();
      },
    }
  }
</script>

<style lang="less" scoped>
  .recommend {
    height: 100%;
    position: relative;
  }
  .recommend-top {
    height: 25%;
    position: relative;
  h3{
    position: absolute;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #49baf5;
    text-align: center;
    bottom: 5%;
    width: 80%;
    margin: 5% 10%;
    border: 1px solid #13bad2;
    font-weight: 400;
  }
  }
  @media screen and (max-width: 1280px) {
    .recommend-bottom {
      width: 500px;
      height: 200px;
      transform: translate(-14%, -35px) scale(.7);
    }
  }
  @media screen and (min-width: 1281px) and (max-width:1366px) {
    .recommend-bottom {
       width: 500px;
       height: 200px;
       transform: translate(-10%, -20px) scale(.75);
     }
  }
  @media screen and (min-width: 1367px) and (max-width:1440px) {
    .recommend-bottom {
        width: 500px;
        height: 200px;
        transform: translate(-6%, 0) scale(.8);
      }
  }
  @media screen and (min-width: 1441px) and (max-width:1600px) {
    .recommend-bottom {
      width: 500px;
      height: 200px;
      transform: translate(0, -10px) scale(.9);
    }
  }
  @media screen and (min-width: 1601px) {
      .recommend-bottom {
        width: 500px;
        height: 200px;
        transform: translate(50px, 0);
      }
  }

</style>
