<template>
    <div class="yandex-map_region" v-if="map !== true">
        <a @click="buttonClick" :class="computedButtonClass">{{computedButtonText}}</a>
    </div>
</template>
<script>
import YandexMapBus from './../yandex-map-bus'

export default {
  name: 'RegionSelect',
  data () {
    return {
      map: null,
      drag: false,
      selected: false,
      mapInit: false,
      dragger: null,
      dragger_polygon: null,
      dragger_polyline: null
    }
  },
  props: {
    region: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Select region'
    },
    buttonSelectedText: {
      type: String,
      required: false,
      default: 'Clear selection'
    },
    buttonCancelText: {
      type: String,
      required: false,
      default: 'Cancel'
    },
    buttonClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    buttonClick: function (e) {
      e.preventDefault()
      e.stopPropagation()
      if (this.selected === false && this.drag === false) {
        this.initDragger()
        this.$emit('status', 'init')
      } else if (this.selected === false && this.drag === true) {
        this.stopDragger()
        this.$emit('status', 'cancel')
      } else if (this.selected === true) {
        this.removeDragger()
        this.$emit('status', 'selected')
      }
    },
    init: function ($map) {

      this.map = $map

      // init preset region
      if (Array.isArray(this.region) && this.region.length > 0) {

        this.dragger_polygon = new ymaps.Polygon([this.region.slice()], {
             hintContent: ""
        },
        {
          fillColor: '#6699ff',
          interactivityModel: 'default#transparent',
          strokeWidth: 1,
          opacity: 0.2
        })

        this.selected = true
        this.map.geoObjects.add(this.dragger_polygon)
        this.$emit('changed', this.region)

      }
    },
    stopDragger: function(){
      console.log('stopDragger')

      let listeners = this.dragger.events.group()
      listeners.removeAll()
      this.drag = false;
    },
    initDragger: function () {

      if(!this.map) {
        console.warn('yandexmap: map not ready');
        return null;
      }

      let vm = this
      this.drag = true;

      let cursor = this.map.cursors.push('crosshair')
      this.map.behaviors.disable('drag')
      this.map.events.add('mousedown', (e) => {

        let coordinates = [this.convert(e.get('position'))]
        let listeners = this.dragger.events.group()

        listeners.add('move', (e) => {

          coordinates.push(this.convert(e.get('position')));

          if (this.dragger_polyline) {
            // add coordinates
            this.dragger_polyline.geometry.setCoordinates(coordinates.slice())
          } else {
            // create poligon
            this.dragger_polyline = new ymaps.Polyline(coordinates.slice(),{},{
              strokeColor: '#e4300e',
              strokeWidth: 2,
              strokeStyle: '0 0' // Первой цифрой задаем длину штриха. Второй цифрой задаем длину разрыва.
            })

            this.map.geoObjects.add(vm.dragger_polyline)
          }
        })
        .add('stop', (e) => {

          // console.log('map stop event');
          this.drag = false;

          cursor.remove();
          this.map.behaviors.enable('drag');

          if (this.dragger_polyline) {
            this.map.geoObjects.remove(vm.dragger_polyline)
            this.dragger_polyline = null
          }

          if (coordinates.length > 2) {

            if (this.dragger_polygon) {
              this.map.geoObjects.remove(vm.dragger_polygon);
            }

            this.dragger_polygon = new ymaps.Polygon([coordinates.slice()], {
              hintContent: ""
            }, {
              fillColor: '#6699ff',
              interactivityModel: 'default#transparent',
              strokeWidth: 1,
              opacity: 0.2
            })

            this.map.geoObjects.add(vm.dragger_polygon);
            this.$emit('changed', coordinates, vm.dragger_polygon)
            this.selected = true;

          } else {
            this.selected = false;
            this.$emit('changed', [], vm.dragger_polygon)
          }

          listeners.removeAll()

        }) // add

        this.dragger.start(e)
      })
    },
    removeDragger: function () {

      if(!this.map) {
        console.warn('yandexmap: map not ready');
        return null;
      }

      // TODO chech preset drag status !!!
      this.map.behaviors.enable('drag')
      this.map.events.remove('mousedown')

      this.map.geoObjects.remove(this.dragger_polyline)
      this.map.geoObjects.remove(this.dragger_polygon)

      let cursors = this.map.cursors.push('crosshair')
      cursors.remove()

      this.dragger_polyline = null
      this.dragger_polygon = null

      this.$emit('changed', [])

      this.drag = false
      this.selected = false
    },
    convert: function (position) {
      if(!this.map) {
        console.warn('yandexmap: map not ready');
        return [];
      }

      return this.map.options
        .get('projection')
        .fromGlobalPixels(this.map.converter.pageToGlobal(position), this.map.getZoom())
    }

  },
  mounted: function () {

    if (YandexMapBus.ymapReady) {
      this.dragger = new ymaps.util.Dragger()
      this.mapInit = true
    }

    YandexMapBus.$on('yandexmap-ready', () => {
      //create dragger
      this.dragger = new ymaps.util.Dragger()
      this.mapInit = true
    })

    this.$parent.$on('created', ($map) => {
      // console.log('map created')
      this.init($map)
    })

  },
  computed: {
    computedButtonText: function () {
      return this.drag === true ? this.buttonCancelText : (this.selected  === true ? this.buttonSelectedText : this.buttonText)
    },
    computedButtonClass: function () {
      return [this.buttonClass, (this.drag === true ? 'processing' : (this.selected  === true ? 'active' : ''))]
    }
  }
}
</script>

<style lang="less" scope>
    .yandex-map_region{

        position: relative;
        text-align: right;

        a{
            z-index: 120;
            display: inline-block;
            position: absolute;
            padding: 4px 10px;
            top: 10px; right: 10px;
            background-color: #30b9e8;
            color: white;
            cursor: pointer;
            text-decoration: none;

            &.processing{
                background-color: #7fc54e;
            }

            &.active{
                background-color: #cc242b;
            }
        }
    }
</style>