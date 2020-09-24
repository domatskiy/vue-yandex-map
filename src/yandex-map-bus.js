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

      let yandexMapOptions = {
        version: '2.1',
        lang: 'ru_RU',
        apiKey: '',
      };

      if (typeof Vue.yandexMapOptions === 'object') {
        Object.assign(yandexMapOptions, Vue.yandexMapOptions);
      }

      let src = '//api-maps.yandex.ru/' + yandexMapOptions.version + '/?lang=' + yandexMapOptions.lang
      if (Vue.yandexMapOptions.apiKey.length) {
        src += '&apikey=' + Vue.yandexMapOptions.apiKey
      }
      let yandexMapScript = document.createElement('SCRIPT')
      yandexMapScript.setAttribute('src', src)
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
