<template>
    <div id="app">

        <h2>Map 1</h2>
        zoom: 10<br>
        dragable: false<br>
        scrollZoom: false<br>
        <yandex-map
            @created="mapCreated"
            @boundschange="boundschange"
            :center="[55.681576, 37.488467]"
            :zoom="10"
            :dragable="false"
            :scrollZoom="false">
            <region-select
                button-text="Please..."
                :region="[[55.68933431346611, 37.393709919921854],[55.642761241410994, 37.54477193164061],[55.727327709751215, 37.5392787675781]]"
                @changed="regionChanged"></region-select>
        </yandex-map>
        <br>
        <br>
        <h2>Map 2</h2>
        dragable: true<br>
        scrollZoom: true<br>
        <button @click="showMap = !showMap">{{showMap ? 'hide map' : 'show map'}}</button>
        <yandex-map
            :zoom="10"
            @created="mapCreated2"
            @destroy="mapDestroy2"
            @boundschange="boundschange"
            v-if="showMap === true">
            <region-select
                @changed="regionChanged"
                :region="[[55.68933431346611, 37.393709919921854],[55.642761241410994, 37.54477193164061],[55.727327709751215, 37.5392787675781]]">
            </region-select>
        </yandex-map>


    </div>
</template>

<script>
    import Vue from 'vue'
    import YandexMap from 'plugin'

    Vue.use(YandexMap, {
      version: '2.1'
    })

    export default {
      name: 'app',
      components: {},
      data () {
        return {
          showMap: false,
          map: null,
          map_data: [],
          mapObjectManager: null
        }
      },
      created () {
        // console.log('app created', this.$yandexmap)
      },
      mounted: function () {
        // console.log('app mounted', this.$yandexmap)
      },
      methods: {
        boundschange: function ($map, bounds) {
          console.log(bounds)
        },
        mapCreated: function ($map) {

          console.info('APP: mapCreated')

          let vm = this
          this.map = $map

          this.mapObjectManager = new ymaps.ObjectManager({
            clusterize: false,
            gridSize: 60,
            clusterMinClusterSize: 5,
            clusterHasBalloon: true, // Опции кластеров задаются с префиксом cluster.
            geoObjectOpenBalloonOnClick: false // Опции геообъектов задаются с префиксом geoObject
          })

          // map click event
          this.map.events.add(['click'], function(){
            vm.mapObjectManager.objects.balloon.close()
            // this.mapObjectManager.objects.options.set('preset', icon_pointer);
          })

          // mapObjectManager click event
          this.mapObjectManager.objects.events.add('click', function (e) {
            let objectId = e.get('objectId');
            vm.mapObjectManager.objects.balloon.open(objectId);
            // MapObjectManager.objects.setObjectOptions(objectId, {preset: 'islands#redDotIcon'});
            // if(typeof options.onMapPointClick == 'function') {options.onMapPointClick(objectId)}
            });

          // disable drag
          this.map.behaviors.disable('drag')

            // set ObjectManager events
          this.map.events.add(['click'], function () {
            vm.mapObjectManager.objects.balloon.close()
          }.bind(this))

            var point = {
                type: 'Feature',
                id: 777,
                //preset: icon_pointer,
                preset: 'islands#darkGreenDotIcon',
            geometry: {
              type: 'Point',
              coordinates: [55.681576, 37.488467]
            },
            properties: {
              hintContent: 'test point',
              balloonContent: 'test'
            },
            options: {
              // balloonLayout: controller.LayoutClass
            }
          }

          /*let point = new ymaps.Placemark([55.681576, 37.488467], {
            id: 111,
            hintContent: 'test point'
            //balloonContent: content
          },
          {
            // iconLayout: 'default#image',
            // iconImageHref: '/assets/img/map_point.png',
            // iconImageSize: [28, 34],
            // iconImageOffset: [-28, -34]
          })*/

          this.mapObjectManager.add(point)
          this.map.geoObjects.add(this.mapObjectManager)
        },
        mapDestroy2: function ($map) {
          console.info('APP: mapDestroy2')
        },
        mapCreated2: function ($map) {
          console.info('APP: mapCreated2')

            var point = {
                type: 'Feature',
                id: 777,
                //preset: icon_pointer,
                preset: 'islands#darkGreenDotIcon',
                geometry: {
                    type: 'Point',
                    coordinates: [55.681576, 37.488467]
                },
                properties: {
                    hintContent: 'test point',
                    balloonContent: 'test'
                },
                options: {
                    // balloonLayout: controller.LayoutClass
                }
            }

            this.mapObjectManager = new ymaps.ObjectManager({
                clusterize: false,
                gridSize: 60,
                clusterMinClusterSize: 5,
                clusterHasBalloon: true, // Опции кластеров задаются с префиксом cluster.
                geoObjectOpenBalloonOnClick: false // Опции геообъектов задаются с префиксом geoObject
            })

            this.mapObjectManager.add(point)
            $map.geoObjects.add(this.mapObjectManager)
        },
        regionChanged: function ($coordinates, $polygon) {
          console.info('APP: regionChanged, coord=', $coordinates)

          let visibleID = [];

          if (typeof $polygon === 'undefined') {
            $polygon = null;
          }

          this.map.behaviors.disable('drag');

          // check points in region
          this.mapObjectManager.setFilter(function (object) {

            let in_poligon = $polygon === null ? false : $polygon.geometry.contains(object.geometry.coordinates);
            let visible = $polygon === null ? true :  in_poligon;

            if($polygon !== null && in_poligon) {
              visibleID.push(object.id)
            }

            return visible
          })

          console.log('APP: selected point ID on map: ', visibleID)
        }
      }
    }
</script>
