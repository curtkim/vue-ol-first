<template>
  <div>
    <basic-map :view='mapView' v-on:view-change='updateMapView' :layer='layer'></basic-map>
  </div>
</template>

<script>
import BasicMap from '../components/BasicMap.vue'


import proj4 from 'proj4'

import proj from 'ol/proj'
import VectorLayer from 'ol/layer/vector'
import VectorSource from 'ol/source/vector'
import TopoJSON from 'ol/format/topojson'
import Style from 'ol/style/style'
import Stroke from 'ol/style/stroke'
import Fill from 'ol/style/fill'

import koeaRegionTopo from '../korea-region-topo.json'

proj4.defs("EPSG:5181","+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");

let topoJson = new TopoJSON({
  defaultDataProjection: proj.get('EPSG:5181')
})

let customStyleFunction = function(feature, resolution) {
  return [
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 2
      }),
      fill: new Fill({
        color: '#'+Math.floor(Math.random()*16777215).toString(16)
      })
    })
  ]
}

/*
[
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
*/

export default {
  components: {
    BasicMap
  },
  mounted(){
  },
  data(){
    return {
      mapView: {
        level: 5,
        center: [195063,442898]
      },
      layer: new VectorLayer({
        title: 'vector',
        source: new VectorSource({features : topoJson.readFeaturesFromObject(koeaRegionTopo)}),
        style: customStyleFunction,
        opacity: 0.3,
      })
    }
  },
  methods: {
    updateMapView: function(view){
      this.mapView = view
    }
  }
}
</script>

<style scoped>

</style>
