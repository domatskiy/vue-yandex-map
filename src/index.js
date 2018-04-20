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
      lang: 'ru_RU'
    }, options)
    Vue.yandexMapOptions = opts

    // console.log('install, merge options', Vue.yandexMapOptions)
    const $yandexmap = new yandexMap (Vue.yandexMapOptions)
    VueInstance.prototype.$yandexmap = $yandexmap
    VueInstance.component('yandex-map', require('./Components/YandexMapContainer.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YandexMapPlugin)
}

export default YandexMapPlugin
