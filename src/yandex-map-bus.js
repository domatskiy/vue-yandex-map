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
  created: function () {},
  methods: {
    attachScript: function () {
      if (this.scriptAttached) {
        return
      }
      let yandexMapScript = document.createElement('SCRIPT')
      yandexMapScript.setAttribute('src', '//api-maps.yandex.ru/' + Vue.yandexMapOptions.version + '/?lang=' + Vue.yandexMapOptions.lang)
      yandexMapScript.setAttribute('async', '')
      yandexMapScript.setAttribute('defer', '')

      yandexMapScript.onload = () => {
        this.$emit('yandexmap-loaded')
        window.ymaps.ready(() => {
          this.ymapReady = true
          this.$emit('yandexmap-ready')
        })
      }
      document.body.appendChild(yandexMapScript)
      this.scriptAttached = true
      this.$emit('yandexmap-attached')
    },
    init: function (options) {
      console.log('init ========', options)
    },
    isReady: function () {
      return this.ymapReady
    }
  }
})

export default YandexMapBus
