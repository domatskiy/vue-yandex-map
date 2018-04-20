## install

npm i vue-yandex-map

## use

```html
<yandex-map 
    :center="[55.681576, 37.488467]"
    :zoom="10"
    :dragable="false"
    :scrollZoom="false"
    @created="mapCreated"></yandex-map>
```

example app

```js

import YandexMap from 'vue-yandex-map'
Vue.use(YandexMap)

export default {
      name: 'app',
      methods: {
        mapCreated: function ($map) {
          console.info('mapCreated, $map=', $map)
        }
      }
    }
```

https://domatskiy.github.io/vue-yandex-map/