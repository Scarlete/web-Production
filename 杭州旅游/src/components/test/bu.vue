<template>

    <baidu-map class="map" :center="{lng: 120.102, lat: 30.229}" :zoom="13.4":mapStyle="mapStyle">
      <bml-heatmap :data="da" :max="100" :radius="30">
      </bml-heatmap>
    </baidu-map>
</template>

<script>
  import {BmlHeatmap} from 'vue-baidu-map'
  import {people} from "../../api";

    export default {
      components: {
        BmlHeatmap
      },
        name: "bu",
      data () {
        return {
          da: [
            {lng: '', lat: '', count: ''}
            // ...此处添加更多的数据集
          ],
          mapStyle: {
            styleJson: [
              {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": {
                  "hue": "#004294",
                  "saturation": 89
                }
              },
              {
                "featureType": "water",
                "elementType": "all",
                "stylers": {
                  "color": "#004296"
                }
              },
              {
                "featureType": "land",
                "elementType": "all",
                "stylers": {
                  "color": "#021a47"
                }
              },
              {
                "featureType": "road",
                "elementType": "all",
                "stylers": {
                  "color": "#4b86a3"
                }
              }

            ]
          }
        }
      },
      methods:{
        async People() {
          let data = await people();
          this.da=data;
        },
      },
      mounted(){
        this.People();
      }
    }
</script>

<style scoped>
  .map {
    width: 100%;
    height: 100%;
  }
</style>
