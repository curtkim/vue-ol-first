<template>
  <div class="map" tabindex="0"></div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/map'
import View from 'ol/view'
import Tile from 'ol/layer/tile'
import Zoom from 'ol/control/zoom'
import DaumImg from '../ol-daum'

export default {
  name: 'BasicMap',
  props: [
    'view',
    'layer'
  ],
  mounted: function(){
    var daumImgLayer = new Tile({
      source: new DaumImg()
    })

    let layers = [daumImgLayer]
    if( this.layer )
      layers.push(this.layer)

    this.map = new Map({
      layers,
      target: this.$el,
      view: new View({
        center: this.view.center,
        zoom: 14 - this.view.level,
        maxZoom: 14,
        maxResolution: 2048 // 14level(zoom=0)에서 1px은 2048m와 같다
      }),
      controls: [
        new Zoom()
      ]
    })

    let _self = this
    this.map.getView().on('change', function(e){
      //console.log('changed', e.target.getCenter(), 14 - e.target.getZoom())
      _self.viewChange({
        center: e.target.getCenter(),
        level: 14 - e.target.getZoom()
      })
    })
  },
  methods: {
    viewChange: function(view){
      this.$emit('view-change', view)
    }
  }
}
</script>

<style scoped>
</style>
