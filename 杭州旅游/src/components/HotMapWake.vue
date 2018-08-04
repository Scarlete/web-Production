<template>
      <div class="baidumap" id="allmap4">

      </div>
</template>
<script>
  import BMap from 'BMap';
  import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT';
  export default {
    mounted() {
      this.baiduMap();
    },
    props: {
    	//经度
      longitude: Number,
      //纬度
      latitude: Number,
      //放大的倍数
      mapScale: Number
    },
    methods: {
      baiduMap () {
        let map = new BMap.Map('allmap4',{minZoom:13,maxZoom:13});
        map.disableDragging();     //禁止拖拽
        const {longitude, latitude, mapScale} = this;
        let point = new BMap.Point(longitude,latitude);
        map.centerAndZoom(point, mapScale);
        // 将标注添加到地图中
        var pt = new BMap.Point(120.165259,30.232892);
				var myIcon = new BMap.Icon("../../static/wei.png", new BMap.Size(100,100));
				var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
				map.addOverlay(marker);// 将标注添加到地图中


        var pt1 = new BMap.Point(120.115259,30.239892);
				var myIcon1 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker1 = new BMap.Marker(pt1,{icon:myIcon1});  // 创建标注
				map.addOverlay(marker1);// 将标注添加到地图中
        var pt2 = new BMap.Point(120.125259,30.245892);
				var myIcon2 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker2 = new BMap.Marker(pt2,{icon:myIcon2});  // 创建标注
				map.addOverlay(marker2);// 将标注添加到地图中
				var pt3 = new BMap.Point(120.109059,30.225892);
				var myIcon3 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker3 = new BMap.Marker(pt3,{icon:myIcon3});  // 创建标注
				map.addOverlay(marker3);// 将标注添加到地图中
				var pt4 = new BMap.Point(120.134059,30.215892);
				var myIcon4 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker4 = new BMap.Marker(pt4,{icon:myIcon4});  // 创建标注
				map.addOverlay(marker4);// 将标注添加到地图中
				var pt5 = new BMap.Point(120.137959,30.202892);
				var myIcon5 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker5 = new BMap.Marker(pt5,{icon:myIcon5});  // 创建标注
				map.addOverlay(marker5);// 将标注添加到地图中

				var pt6 = new BMap.Point(120.145959,30.209892);
				var myIcon6 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker6 = new BMap.Marker(pt6,{icon:myIcon6});  // 创建标注
				map.addOverlay(marker6);// 将标注添加到地图中

				var pt7 = new BMap.Point(120.152959,30.216892);
				var myIcon7 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker7 = new BMap.Marker(pt7,{icon:myIcon7});  // 创建标注
				map.addOverlay(marker7);// 将标注添加到地图中

				var pt8 = new BMap.Point(120.152959,30.204892);
				var myIcon8 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker8 = new BMap.Marker(pt8,{icon:myIcon8});  // 创建标注
				map.addOverlay(marker8);// 将标注添加到地图中

				var pt9 = new BMap.Point(120.155381,30.236795);
				var myIcon9 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker9 = new BMap.Marker(pt9,{icon:myIcon9});  // 创建标注
				map.addOverlay(marker9);// 将标注添加到地图中

				var pt10 = new BMap.Point(120.175381,30.216795);
				var myIcon10 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker10 = new BMap.Marker(pt10,{icon:myIcon10});  // 创建标注
				map.addOverlay(marker10);// 将标注添加到地图中

				var pt11 = new BMap.Point(120.165259,30.227892);
				var myIcon11 = new BMap.Icon("../../static/1.png", new BMap.Size(100,100));
				var marker11 = new BMap.Marker(pt11,{icon:myIcon11});  // 创建标注
				map.addOverlay(marker11);// 将标注添加到地图中

				//餐馆
				var pta1 = new BMap.Point(120.110505, 30.232113);
				var myIcona1 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera1 = new BMap.Marker(pta1,{icon:myIcona1});  // 创建标注
				map.addOverlay(markera1);

				var pta2 = new BMap.Point(120.109428, 30.203841);
				var myIcona2 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera2 = new BMap.Marker(pta2,{icon:myIcona2});  // 创建标注
				map.addOverlay(markera2);

				var pta3 = new BMap.Point(120.105428, 30.193841);
				var myIcona3 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera3 = new BMap.Marker(pta3,{icon:myIcona3});  // 创建标注
				map.addOverlay(markera3);

				var pta4 = new BMap.Point(120.124059, 30.209892);
				var myIcona4 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera4 = new BMap.Marker(pta4,{icon:myIcona4});  // 创建标注
				map.addOverlay(markera4);

				var pta5 = new BMap.Point(120.134059, 30.192092);
				var myIcona5 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera5 = new BMap.Marker(pta5,{icon:myIcona5});  // 创建标注
				map.addOverlay(markera5);


				var pta6 = new BMap.Point(120.158017, 30.24962);
				var myIcona6 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera6 = new BMap.Marker(pta6,{icon:myIcona6});  // 创建标注
				map.addOverlay(markera6);

				var pta7 = new BMap.Point(120.164017, 30.23962);
				var myIcona7 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera7 = new BMap.Marker(pta7,{icon:myIcona7});  // 创建标注
				map.addOverlay(markera7);

				var pta8 = new BMap.Point(120.150421, 30.224064);
				var myIcona8 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera8 = new BMap.Marker(pta8,{icon:myIcona8});  // 创建标注
				map.addOverlay(markera8);

				var pta9 = new BMap.Point(120.162617, 30.219071);
				var myIcona9 = new BMap.Icon("../../static/2.png", new BMap.Size(100,100));
				var markera9 = new BMap.Marker(pta9,{icon:myIcona9});  // 创建标注
				map.addOverlay(markera9);

        //酒店
        var ptb1 = new BMap.Point(120.100259,30.220892);
				var myIconb1 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb1 = new BMap.Marker(ptb1,{icon:myIconb1});  // 创建标注
				map.addOverlay(markerb1);

				var ptb2 = new BMap.Point(120.129241, 30.202003);
				var myIconb2 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb2 = new BMap.Marker(ptb2,{icon:myIconb2});  // 创建标注
				map.addOverlay(markerb2);

				var ptb3 = new BMap.Point(120.132241, 30.257003);
				var myIconb3 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb3 = new BMap.Marker(ptb3,{icon:myIconb3});  // 创建标注
				map.addOverlay(markerb3);

				var ptb4 = new BMap.Point(120.172241, 30.237003);
				var myIconb4 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb4 = new BMap.Marker(ptb4,{icon:myIconb4});  // 创建标注
				map.addOverlay(markerb4);

				var ptb5 = new BMap.Point(120.148241, 30.217003);
				var myIconb5 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb5 = new BMap.Marker(ptb5,{icon:myIconb5});  // 创建标注
				map.addOverlay(markerb5);

				var ptb6 = new BMap.Point(120.153284, 30.244182);
				var myIconb6 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb6 = new BMap.Marker(ptb6,{icon:myIconb6});  // 创建标注
				map.addOverlay(markerb6);

				var ptb7 = new BMap.Point(120.174284, 30.224182);
				var myIconb7 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb7 = new BMap.Marker(ptb7,{icon:myIconb7});  // 创建标注
				map.addOverlay(markerb7);

				var ptb8 = new BMap.Point(120.138284, 30.224182);
				var myIconb8 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb8 = new BMap.Marker(ptb8,{icon:myIconb8});  // 创建标注
				map.addOverlay(markerb8);

				var ptb9 = new BMap.Point(120.156959,30.204892);
				var myIconb9 = new BMap.Icon("../../static/3.png", new BMap.Size(100,100));
				var markerb9 = new BMap.Marker(ptb9,{icon:myIconb9});  // 创建标注
				map.addOverlay(markerb9);

        map.setMapStyle({
          styleJson:[

           {
                    "featureType": "land",
                    "elementType": "all",
                    "stylers": {
                              "color": "#003979ff"
                    }
          },
          {
                    "featureType": "scenicspotslabel",
                    "elementType": "labels.icon",
                    "stylers": {
                              "color": "#00ffffff",
                              "hue": "#d0e0e3"
                    }
          },
          {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                              "color": "#004692ff"
                    }
          },
          {
                    "featureType": "green",
                    "elementType": "all",
                    "stylers": {
                              "color": "#004292ff"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "all",
                    "stylers": {
                              "color": "#4fdb75ff"
                    }
          },
          {
                    "featureType": "local",
                    "elementType": "all",
                    "stylers": {
                              "color": "#4fdb75e0"
                    }
          },
          {
                    "featureType": "arterial",
                    "elementType": "all",
                    "stylers": {
                              "color": "#0a88a5cf"
                    }
          }



          ]
        });
      }
    }
  }
</script>

<style lang="less" scoped>
.baidumap {
  width: 100%;
  height: 100%;

}
</style>

