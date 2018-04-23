<template>
    <div id="app">

        zoom: 10<br>
        dragable: false<br>
        scrollZoom: false<br>
        <yandex-map @created="mapCreated"
            :center="[55.681576, 37.488467]"
            :zoom="10"
            :dragable="false"
            :scrollZoom="false"></yandex-map>
        <br>
        <br>
        dragable: true<br>
        scrollZoom: true<br>
        <button @click="showMap = !showMap">show Map</button>
        <yandex-map @created="mapCreated2" v-if="showMap === true"></yandex-map>


    </div>
</template>

<script>
    import Vue from 'vue'
    import YandexMap from 'plugin'

    Vue.use(YandexMap, {
      version: '2.1',
    })

    export default {
      name: 'app',
      components: {
        // YandexMap
      },
      data () {
        return {
          showMap: false
        }
      },
      created () {
        // console.log('app created', this.$yandexmap)
      },
      mounted: function () {
        // console.log('app mounted', this.$yandexmap)
      },
      methods: {
        mapCreated: function ($map) {
          console.info('mapCreated, $map', $map)
        },
        mapCreated2: function ($map) {
          console.info('mapCreated2, $map', $map)
        }
      }
    }
</script>