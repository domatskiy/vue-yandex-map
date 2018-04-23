<template>
    <div class="yandex-map_region" v-if="map !== true">
        <a @click="buttonClick" :class="buttonClass">{{buttonText}}</a>
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
    }
  },
  methods: {
    buttonClick: function (e) {
      e.preventDefault()
      e.stopPropagation()
      if (this.selected === false && this.drag === false) {
        this.initDragger()
      } else if (this.selected === false && this.drag === true) {
        this.stopDragger()
      } else if (this.selected === true) {
        this.removeDragger()
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
      this.map.events.add('mousedown', function (e) {

        let coordinates = [vm.convert(e.get('position'))]
        let listeners = vm.dragger.events.group()

        listeners.add('move', function (e) {

          coordinates.push(vm.convert(e.get('position')));

          if (vm.dragger_polyline) {
            // add coordinates
            vm.dragger_polyline.geometry.setCoordinates(coordinates.slice())
          } else {
            // create poligon
            vm.dragger_polyline = new ymaps.Polyline(coordinates.slice(),{},{
              strokeColor: '#e4300e',
              strokeWidth: 2,
              strokeStyle: '0 0' // Первой цифрой задаем длину штриха. Второй цифрой задаем длину разрыва.
            })

            vm.map.geoObjects.add(vm.dragger_polyline)
          }
        })
        .add('stop', function (e) {

          vm.drag = false;

          cursor.remove();
          vm.map.behaviors.enable('drag');

          if (vm.dragger_polyline) {
            vm.map.geoObjects.remove(vm.dragger_polyline)
            vm.dragger_polyline = null
          }

          if (coordinates.length > 2) {

            if (vm.dragger_polygon) {
              vm.map.geoObjects.remove(vm.dragger_polygon);
            }

            vm.dragger_polygon = new ymaps.Polygon([coordinates.slice()], {
              hintContent: ""
            }, {
              fillColor: '#6699ff',
              interactivityModel: 'default#transparent',
              strokeWidth: 1,
              opacity: 0.2
            })

            vm.map.geoObjects.add(vm.dragger_polygon);
            vm.$emit('changed', coordinates, vm.dragger_polygon)
            vm.selected = true;

          } else {
            vm.selected = false;
            vm.$emit('changed', [], vm.dragger_polygon)
          }

          listeners.removeAll()

        }) // add

        this.dragger.start(e)
      }.bind(this))
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
      this.init($map)
    })

  },
  computed: {
    buttonText: function () {
      return this.drag === true ? 'Отмена' : (this.selected  === true ? 'Очистить' : 'Выделить')
    },
    buttonClass: function () {
      return this.drag === true ? 'processing' : (this.selected  === true ? 'active' : 'Выделить')
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