<template>
<div class="doughnut">
	<div class="doughnut-top">
      <h3>西湖风景名胜区各业态游客占比</h3>
  </div>

  <div class="doughnut-bot">
    <div id="myChar"></div>
  </div>

 </div>
</template>

<script>
  import {business} from "../../api";
    export default {
        name: "doughnut",
        data() {
          return {
            one:''
          }
      },
        mounted(){
        this.Province();
      },
        methods: {
          /*async*/ Province() {

            /*let data = await business();
            console.log(data);
            this.one=parseFloat(data[0].tourist_percent).toString();*/
            this.drawLine();
          },
          drawLine() {
          let myChar = this.$echarts.
          init(document.getElementById('myChar'));
          myChar.setOption({
            series: [
              { name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [198, 200],
              center: ['50%', '50%'],
              hoverAnimation: false,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              lableLine: {
                normal: {
                  show: true
                },
                emphasis: {
                  show: true
                }
              },
              data: [{
                value: 100,
                name: '',
                itemStyle: {
                  color: '#21A5A9'
                }
              },
                {
                  value: 0,
                  name: '',
                  itemStyle: {
                    color: '#21A5A9'
                  }
                },
                {
                  value: 0,
                  name: '',
                  itemStyle: {
                    color: '#21A5A9'
                  }
                },
              ]
            },
              {
                name: 'Line 2',
                type: 'pie',
                clockWise: false,
                radius: [170, 198],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                },
                lableLine: {
                  normal: {
                    show: true
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: [{
                  value: 5,
                  name: this.one+'%\n文物保护单位、\n博物馆、建筑',
                  itemStyle: {
                    color: '#FDFFB6'
                  }
                },
                  {
                    value: 100,
                    name: '',
                    itemStyle: {
                      color: 'transparent'
                    }
                  },
                ]
              },
              {
                name: 'Line 3',
                type: 'pie',
                clockWise: false,
                radius: [145, 160],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                itemStyle: {
                  normal: {
                    labelLine: {
                      lineStyle: {
                      },
                      show: true //隐藏标示线
                    }
                  }
                },
                data: [{
                  value: 100,
                  name: '',
                  itemStyle: {
                    color: 'transparent',
                    labelLine: {
                      lineStyle: {
                        color: 'transparent'
                      }
                    },
                  }
                },
                  {
                    value: 15,
                    name: '10.5%\n酒店住宿',
                    itemStyle: {
                      color: '#B1A3D7',

                    }
                  }
                ]
              },
              {
                name: 'Line 4',
                type: 'pie',
                clockWise: false,
                radius: [132, 155],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                data: [{
                  value: 94,
                  name: '',
                  itemStyle: {
                    color: 'transparent'
                  }
                },
                  {
                    value: 18,
                    name: '11.3%\n旅游文创商贸',
                    itemStyle: {
                      color: '#03A85C'
                    }
                  },
                  {
                    value: 17,
                    name: '',
                    itemStyle: {
                      color: 'transparent'
                    }
                  },
                ]
              },
              {
                name: 'Line 5',
                type: 'pie',
                clockWise: false,
                radius: [175, 180],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                data: [{
                  value: 92,
                  name: '',
                  itemStyle: {
                    color: 'transparent'
                  }
                },
                  {
                    value: 43,
                    name: '19.9%\n公园休闲',
                    itemStyle: {
                      color: '#5CF4F0'
                    }
                  },
                  {
                    value: 51,
                    name: '',
                    itemStyle: {
                      color: 'transparent'
                    }
                  },
                ]
              },
              {
                name: 'Line 6',
                type: 'pie',
                clockWise: false,
                radius: [169, 180],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                data: [{
                  value: 92,
                  name: '',
                  itemStyle: {
                    color: 'transparent'
                    //                     color:'red'
                  }
                },
                  {
                    value: 18,
                    name: '8.4%\n演出娱乐',
                    itemStyle: {
                      color: '#FEFFFD'
                    }
                  },
                  {
                    value: 112,
                    name: '',
                    itemStyle: {
                      color: 'transparent'
                      //                      color:'blue'
                    }
                  },
                ]
              },
              {
                name: 'Line 7',
                type: 'pie',
                clockWise: false,
                radius: [150, 163],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                data: [{
                  value: 92,
                  name: '',
                  itemStyle: {
                    color: 'transparent'

                  }
                },
                  {
                    value: 18,
                    name: '5.2%\n寺院、庙宇',
                    itemStyle: {
                      color: '#0A69BF'
                    }
                  },
                  {
                    value: 156,
                    name: '',
                    itemStyle: {
                      color: 'transparent'

                    }
                  },
                ]
              },
              {
                name: 'Line 8',
                type: 'pie',
                clockWise: false,
                radius: [150, 180],
                center: ['50%', '50%'],
                hoverAnimation: false,

                label: {
                  normal: {
                    formatter: '{a|{b}}',
                    rich: {
                      a: {
                        color: 'white',
                        fontSize: 13,
                        lineHeight: 20,
                        align: 'left'
                      },
                      show: true
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  show: true //隐藏标示文字
                },
                data: [{
                  value: 9,
                  name: '',
                  itemStyle: {
                    color: 'transparent'
                  }
                },
                  {
                    value: 56,
                    name: '37.4%\n餐饮',
                    itemStyle: {
                      color: '#FDC100'
                    }
                  },
                  {
                    value: 123,
                    name: '',
                    itemStyle: {
                      color: 'transparent'
                      //                      color:'blue'
                    }
                  },
                ]
              },
            ]

          });

        },
        },
    };

</script>

<style scoped>
  @media screen and (max-width: 1280px) {
    #myChar {
      width: 600px;
      height: 600px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(.5);
    }
  }
  @media screen and (min-width: 1281px) and (max-width:1600px) {
     #myChar {
       width: 600px;
       height: 600px;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%) scale(0.65);
    }
  }
  @media screen and (min-width: 1601px) {
     #myChar {
          width: 600px;
          height: 600px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) scale(0.85);
      }
  }
  .doughnut{
    height: 100%;
    position: relative;
  }
  .doughnut-top {
    height: 13%;
    }
  .doughnut-bot {
    height: 87%;
    position: relative;
  }
  .doughnut-top h3{
    position: absolute;
    top: 20px;
    height: 20px;
    font-size: 18px;
    line-height: 20px;
    color: #49baf5;
    text-align: center;
    bottom: 5%;
    width: 80%;
    margin: 0 10%;
    border: 1px solid #13bad2;
    font-weight: 400;
  }
</style>
