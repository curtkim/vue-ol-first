<script>
import VectorLayer from 'ol/layer/Vector'

export default {
  name: 'OlVectorLayer',
  props: [
    'source',
    'layerStyle',
  ],
  mounted: function(){
    /* eslint-disable */
    console.log('OlVectorLayer mounted')

    let layer = new VectorLayer({
        title: 'vector',
        source: this.source,
        style: this.layerStyle,
        opacity: 0.3,
      })
    this.$parent.map.addLayer(layer)
  },

  beforeCreate: function(){
    /* eslint-disable */
    console.log('OlVectorLayer beforeCreate')
  },

  render: function(){
    /* eslint-disable */
    console.log('OlVectorLayer render')
  },

  methods: {
  }
}
</script>