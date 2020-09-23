import Vue from 'vue'

class yandexMap {
  constructor (options) {

  }
  getOptions () {
    return this.options
  }
}

const YandexMapPlugin = {
  install (VueInstance, options) {
    let opts = {}
    Object.assign(opts, {
      version: '2.1',
      lang: 'ru_RU',
      apiKey: ''
    }, options)
    Vue.yandexMapOptions = opts

    // console.log('install, merge options', Vue.yandexMapOptions)
    const $yandexMap = new yandexMap (Vue.yandexMapOptions)
    VueInstance.prototype.$yandexmap = $yandexMap
    VueInstance.component('yandex-map', require('./Components/YandexMapContainer.vue'))
    VueInstance.component('region-select', require('./Components/RegionSelect.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YandexMapPlugin)
}

export default YandexMapPlugin
