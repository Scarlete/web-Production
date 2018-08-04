<template>
      <div class="baidumap" id="allmap1">

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
      longitude: Number,
      latitude: Number,
      mapScale: Number
    },
    methods: {
      baiduMap () {
        let map = new BMap.Map('allmap1');
        const {longitude, latitude, mapScale} = this;
        let point = new BMap.Point(longitude,latitude);
        map.centerAndZoom(point, mapScale);
        let marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();/*禁止用户拖拽*/
        map.disableDoubleClickZoom();/*禁止双击放大*/
        map.setMapStyle({
          styleJson:[
            {
              "featureType": "land",
              "elementType": "all",
              "stylers": {
                "color": "#00419cff"
              }
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": {
                "color": "#00ffffff"
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

