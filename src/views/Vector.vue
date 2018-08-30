<template>
  <div>
    <basic-map :view='mapView' v-on:view-change='updateMapView' :layer='layer'
    :interaction='interaction'></basic-map>
  </div>
</template>

<script>
/* eslint-disable */

import BasicMap from '../components/BasicMap.vue'

import proj4 from 'proj4'

import {get} from 'ol/proj'
import {register} from 'ol/proj/proj4'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import TopoJSON from 'ol/format/TopoJSON'
import GeoJSON from 'ol/format/GeoJSON'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'
import Select from 'ol/interaction/Select'

import koreaRegionTopo from '../korea-region-topo.json'
import geoJson from '../geo.json'

proj4.defs("EPSG:5181","+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
register(proj4)

const features = new TopoJSON({
  dataProjection: get('EPSG:5181')
}).readFeaturesFromObject(koreaRegionTopo)


// eslint-disable-next-line
let customStyleFunction = function(feature, resolution) {
  //console.log(feature.get('HCODE'))
  //console.log(feature.get('geometry'))
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
*/

export default {
  components: {
    BasicMap
  },
  mounted(){
  },
  data(){
    let selectSingleClick = new Select()
    selectSingleClick.on('select', this.onSelect)

    return {
      mapView: {
        level: 5,
        center: [195063,442898]
      },
      layer: new VectorLayer({
        title: 'vector',
        source: new VectorSource({features}),
        style: customStyleFunction,
        opacity: 0.3,
      }),
      interaction: selectSingleClick,
    }
  },
  methods: {
    updateMapView: function(view){
      this.mapView = view
    },
    onSelect: function(e){
      // eslint-disable-next-line
      console.log( e.target.getFeatures().item(0).getKeys() )
      // eslint-disable-next-line
      console.log( e.target.getFeatures().item(0).get('HCODE') )
    }
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
