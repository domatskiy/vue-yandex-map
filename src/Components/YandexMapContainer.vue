<template>
    <div :class="mapClass">
        <slot></slot>
        <div :id="mapId" :style="style" :class="mapClass + '__container'"></div>
    </div>
</template>
<script>
import YandexMapBus from './../yandex-map-bus'
// import RegionSelect from './RegionSelect.vue'

export default {
  name: 'yandexMap',
  data () {
    return {
      map: null,
      YandexMapBus: YandexMapBus,
      mapId: 'yandex-map-' + Math.round(Math.random() * 1000000),
      style: this.ymapClass ? '' : 'width: 100%; height: 100%; min-height: 10px',
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
    getMap: function () {
      return this.map
    },
    init: function () {
      // console.log('on yandexmap-ready')
      let center = this.center ? this.center : [55.753215, 37.622504]

      this.map = new window.ymaps.Map(this.mapId, {
        center: center,
        zoom: this.zoom,
        controls: this.controls, // 'zoomControl' , 'typeSelector',  'fullscreenControl'
        type: 'yandex#map'
      }, {})

      if (!this.dragable) {
        this.map.behaviors.disable('drag')
      }

      if (!this.scrollZoom) {
        this.map.behaviors.disable('scrollZoom')
      }

      this.$emit('created', this.map)
    }
  },
  created: function () {
    // console.log('$refs', this.$refs)
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