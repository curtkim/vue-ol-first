<template>
  <div>
    <basic-map :view='mapView' v-on:view-change='updateMapView'></basic-map>
  </div>
</template>

<script>
import BasicMap from '../components/BasicMap.vue'

export default {
  components: {
    BasicMap
  },
  data(){
    return {
      mapView: {
        level: 5,
        center: [195063,442898]
      }
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
