<template>
  <div>
    <ol-map :view='mapView' v-on:view-change='updateMapView' :interaction='interaction'>
      <ol-tile-layer :source='daumImgSource'/>
      <ol-vector-layer :features='features' :layer-style='vectorStyle'/>
    </ol-map>
  </div>
</template>

<script>
/* eslint-disable */

import OlMap from '../components/OlMap.vue'
import OlTileLayer from '../components/OlTileLayer.vue'
import OlVectorLayer from '../components/OlVectorLayer.vue'

import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'
import GeoJSON from 'ol/format/GeoJSON'

import Draw from 'ol/interaction/Draw'

import DaumImg from '../ol-daum'


let style = [
  new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 3
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.3)'
    })
  })
]

export default {
  components: {
    OlMap, OlTileLayer, OlVectorLayer
  },
  mounted(){
  },
  data(){
    let draw = new Draw({
      //features: this.features,
      type: 'Polygon'
    })
    draw.on('drawend', this.onDraw)

    return {
      mapView: {
        level: 13,
        center: [195063,242898]
      },
      interaction: draw,
      daumImgSource: new DaumImg(),
      //vectorSource: new VectorSource({features}),
      features: [],
      vectorStyle: style,
    }
  },
  methods: {
    updateMapView: function(view){
      this.mapView = view
    },
    onDraw: function(event){
      this.features = [event.feature]
    },
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
  }
}
</script>

<style scoped>

</style>
