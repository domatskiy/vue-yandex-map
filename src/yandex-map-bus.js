import Vue from 'vue'

const YandexMapBus = new Vue({
  options: {},
  data () {
    return {
      options: this.options,
      events: {},
      ymapReady: false,
      scriptAttached: false
    }
  },
  created: function () {
    var yandexMapScript = document.createElement('SCRIPT')
    yandexMapScript.setAttribute('src', '//api-maps.yandex.ru/' + Vue.yandexMapOptions.version + '/?lang=' + Vue.yandexMapOptions.lang)
    yandexMapScript.setAttribute('async', '')
    yandexMapScript.setAttribute('defer', '')

    // let body = window.document.querySelector('body')

    document.body.appendChild(yandexMapScript)
    this.scriptAttached = true

    this.$emit('yandexmap-attached')

    yandexMapScript.onload = () => {
      this.$emit('yandexmap-loaded')
      window.ymaps.ready(() => {
        this.ymapReady = true
        this.$emit('yandexmap-ready')
      })
    }

    this.$watch(
      () => {
        return Vue.yandexMapOptions
      },
      function (newVal, oldVal) {
        console.info('1111111111111111111111111111')
      },
      {
        deep: true
      }
    )
  },
  methods: {
    init: function (options) {
      console.log('init ========', options)
    },
    isReady: function () {
      return this.ymapReady
    }
  }
})

export default YandexMapBus
