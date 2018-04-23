<template>
    <div :id="mapId" :style="style" :class="mapClass"></div>
</template>
<script>
import YandexMapBus from './../yandex-map-bus'

export default {
  name: 'yandexMap',
  data () {
    return {
      YandexMapBus: YandexMapBus,
      mapId: 'yandex-map-' + Math.round(Math.random() * 1000000),
      style: this.ymapClass ? '' : 'width: 100%; height: 100%;',
      mapClass: 'yandex-map'
    }
  },
  props: {
    center: {
      type: Array,
      validator (val) {
        return !val.filter(item => isNaN(item)).length
      },
      required: false
    },
    controls: {
      type: Array,
      validator (val) {
        return !val.filter(item => isNaN(item)).length
      },
      required: false,
      default: function () {
        return []
      }
    },
    zoom: {
      validator (val) {
        return !isNaN(val)
      },
      default: 15
    },
    dragable: {
      type: Boolean,
      default: true
    },
    scrollZoom: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    init: function () {
      // console.log('on yandexmap-ready')
      let center = this.center ? this.center : [55.753215, 37.622504]

      let $map = new window.ymaps.Map(this.mapId, {
        center: center,
        zoom: this.zoom,
        controls: this.controls, // 'zoomControl' , 'typeSelector',  'fullscreenControl'
        type: 'yandex#map'
      }, {})

      if (!this.dragable) {
        $map.behaviors.disable('drag')
      }

      if (!this.scrollZoom) {
        $map.behaviors.disable('scrollZoom')
      }

      this.$emit('created', $map)
    }
  },
  created: function () {

  },
  mounted: function () {

    this.YandexMapBus.$on('yandexmap-attached', () => {})
    this.YandexMapBus.$on('yandexmap-loaded', () => {})
    this.YandexMapBus.$on('yandexmap-ready', () => {
      this.init()
    })

    if (this.YandexMapBus.ymapReady) {
      this.init()
    }
  },
  watch: {

  },
  beforeDestroy () {}
}
</script>