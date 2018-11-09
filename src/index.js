import Vue from 'vue'
import YandexMapContainer from './Components/YandexMapContainer.vue'
import RegionSelect from './Components/RegionSelect.vue'

const YandexMapPlugin = {
  install (VueInstance, options) {
    let opts = {}
    Object.assign(opts, {
      version: '2.1',
      lang: 'ru_RU'
    }, options)
    Vue.yandexMapOptions = opts
    // console.log('install, merge options', Vue.yandexMapOptions)
    // const $yandexmap = new yandexMap (Vue.yandexMapOptions)
    // VueInstance.prototype.$yandexmap = $yandexmap
    // console.log('install components')
    VueInstance.component('yandex-map', YandexMapContainer)
    VueInstance.component('region-select', RegionSelect)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YandexMapPlugin)
}

export default YandexMapPlugin
