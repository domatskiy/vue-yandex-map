(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-yandex-map"] = factory(require("vue"));
	else
		root["vue-yandex-map"] = factory(root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'yandexMap',
  data: function data() {
    return {
      map: null,
      YandexMapBus: __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__["a" /* default */],
      mapId: 'yandex-map-' + Math.round(Math.random() * 1000000),
      style: this.ymapClass ? '' : 'width: 100%; height: 100%; min-height: 10px',
      mapClass: 'yandex-map'
    };
  },

  props: {
    center: {
      type: Array,
      validator: function validator(val) {
        return !val.filter(function (item) {
          return isNaN(item);
        }).length;
      },

      required: false
    },
    controls: {
      type: Array,
      validator: function validator(val) {
        return !val.filter(function (item) {
          return isNaN(item);
        }).length;
      },

      required: false,
      default: function _default() {
        return [];
      }
    },
    zoom: {
      validator: function validator(val) {
        return !isNaN(val);
      },

      default: 15
    },
    dragable: {
      type: Boolean,
      default: true
    },
    scrollZoom: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getMap: function getMap() {
      return this.map;
    },
    init: function init() {
      var _this = this;

      console.log('on yandexmap-ready');
      var center = this.center ? this.center : [55.753215, 37.622504];

      this.map = new window.ymaps.Map(this.mapId, {
        center: center,
        zoom: this.zoom,
        controls: this.controls,
        type: 'yandex#map'
      }, {});

      if (!this.dragable) {
        this.map.behaviors.disable('drag');
      }

      if (!this.scrollZoom) {
        this.map.behaviors.disable('scrollZoom');
      }

      this.map.events.add('click', function (e) {
        var position = e.get('coordPosition');
        _this.$emit('click', _this.map, position);
      });

      this.map.events.add('boundschange', function (e) {
        var newBounds = e.get('newBounds');
        _this.$emit('boundschange', _this.map, newBounds);
      });

      this.$emit('created', this.map);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.YandexMapBus.attachScript();
    this.YandexMapBus.$on('yandexmap-attached', function () {});
    this.YandexMapBus.$on('yandexmap-loaded', function () {});
    this.YandexMapBus.$on('yandexmap-ready', function () {
      _this2.init();
    });

    if (this.YandexMapBus.ymapReady) {
      this.init();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$emit('destroy', this.map);
  }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var YandexMapBus = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  options: {},
  data: function data() {
    return {
      options: this.options,
      events: {},
      ymapReady: false,
      scriptAttached: false
    };
  },

  created: function created() {},
  methods: {
    attachScript: function attachScript() {
      var _this = this;

      if (this.scriptAttached) {
        return;
      }
      var src = '//api-maps.yandex.ru/' + __WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions.version + '/?lang=' + __WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions.lang;
      if (__WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions.apiKey.length) {
        src += '&apikey=' + __WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions.apiKey;
      }
      var yandexMapScript = document.createElement('SCRIPT');
      yandexMapScript.setAttribute('src', src);
      yandexMapScript.setAttribute('async', '');
      yandexMapScript.setAttribute('defer', '');

      yandexMapScript.onload = function () {
        _this.$emit('yandexmap-loaded');
        window.ymaps.ready(function () {
          _this.ymapReady = true;
          _this.$emit('yandexmap-ready');
        });
      };
      document.body.appendChild(yandexMapScript);
      this.scriptAttached = true;
      this.$emit('yandexmap-attached');
    },
    init: function init(options) {
      console.log('init ========', options);
    },
    isReady: function isReady() {
      return this.ymapReady;
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (YandexMapBus);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'RegionSelect',
  data: function data() {
    return {
      map: null,
      drag: false,
      selected: false,
      mapInit: false,
      dragger: null,
      dragger_polygon: null,
      dragger_polyline: null
    };
  },

  props: {
    region: {
      type: Array,
      required: false,
      default: function _default() {
        return [];
      }
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Select region'
    },
    buttonSelectedText: {
      type: String,
      required: false,
      default: 'Clear selection'
    },
    buttonCancelText: {
      type: String,
      required: false,
      default: 'Cancel'
    },
    buttonClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    buttonClick: function buttonClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.selected === false && this.drag === false) {
        this.initDragger();
        this.$emit('status', 'init');
      } else if (this.selected === false && this.drag === true) {
        this.stopDragger();
        this.$emit('status', 'cancel');
      } else if (this.selected === true) {
        this.removeDragger();
        this.$emit('status', 'selected');
      }
    },
    init: function init($map) {

      this.map = $map;

      if (Array.isArray(this.region) && this.region.length > 0) {

        this.dragger_polygon = new ymaps.Polygon([this.region.slice()], {
          hintContent: ""
        }, {
          fillColor: '#6699ff',
          interactivityModel: 'default#transparent',
          strokeWidth: 1,
          opacity: 0.2
        });

        this.selected = true;
        this.map.geoObjects.add(this.dragger_polygon);
        this.$emit('changed', this.region);
      }
    },
    stopDragger: function stopDragger() {
      console.log('stopDragger');

      var listeners = this.dragger.events.group();
      listeners.removeAll();
      this.drag = false;
    },
    initDragger: function initDragger() {
      var _this = this;

      if (!this.map) {
        console.warn('yandexmap: map not ready');
        return null;
      }

      var vm = this;
      this.drag = true;

      var cursor = this.map.cursors.push('crosshair');
      this.map.behaviors.disable('drag');
      this.map.events.add('mousedown', function (e) {

        var coordinates = [_this.convert(e.get('position'))];
        var listeners = _this.dragger.events.group();

        listeners.add('move', function (e) {

          coordinates.push(_this.convert(e.get('position')));

          if (_this.dragger_polyline) {
            _this.dragger_polyline.geometry.setCoordinates(coordinates.slice());
          } else {
            _this.dragger_polyline = new ymaps.Polyline(coordinates.slice(), {}, {
              strokeColor: '#e4300e',
              strokeWidth: 2,
              strokeStyle: '0 0' });

            _this.map.geoObjects.add(vm.dragger_polyline);
          }
        }).add('stop', function (e) {
          _this.drag = false;

          cursor.remove();
          _this.map.behaviors.enable('drag');

          if (_this.dragger_polyline) {
            _this.map.geoObjects.remove(vm.dragger_polyline);
            _this.dragger_polyline = null;
          }

          if (coordinates.length > 2) {

            if (_this.dragger_polygon) {
              _this.map.geoObjects.remove(vm.dragger_polygon);
            }

            _this.dragger_polygon = new ymaps.Polygon([coordinates.slice()], {
              hintContent: ""
            }, {
              fillColor: '#6699ff',
              interactivityModel: 'default#transparent',
              strokeWidth: 1,
              opacity: 0.2
            });

            _this.map.geoObjects.add(vm.dragger_polygon);
            _this.$emit('changed', coordinates, vm.dragger_polygon);
            _this.selected = true;
          } else {
            _this.selected = false;
            _this.$emit('changed', [], vm.dragger_polygon);
          }

          listeners.removeAll();
        });

        _this.dragger.start(e);
      });
    },
    removeDragger: function removeDragger() {

      if (!this.map) {
        console.warn('yandexmap: map not ready');
        return null;
      }

      this.map.behaviors.enable('drag');
      this.map.events.remove('mousedown');

      this.map.geoObjects.remove(this.dragger_polyline);
      this.map.geoObjects.remove(this.dragger_polygon);

      var cursors = this.map.cursors.push('crosshair');
      cursors.remove();

      this.dragger_polyline = null;
      this.dragger_polygon = null;

      this.$emit('changed', []);

      this.drag = false;
      this.selected = false;
    },
    convert: function convert(position) {
      if (!this.map) {
        console.warn('yandexmap: map not ready');
        return [];
      }

      return this.map.options.get('projection').fromGlobalPixels(this.map.converter.pageToGlobal(position), this.map.getZoom());
    }

  },
  mounted: function mounted() {
    var _this2 = this;

    if (__WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__["a" /* default */].ymapReady) {
      this.dragger = new ymaps.util.Dragger();
      this.mapInit = true;
    }

    __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__["a" /* default */].$on('yandexmap-ready', function () {
      _this2.dragger = new ymaps.util.Dragger();
      _this2.mapInit = true;
    });

    this.$parent.$on('created', function ($map) {
      _this2.init($map);
    });
  },
  computed: {
    computedButtonText: function computedButtonText() {
      return this.drag === true ? this.buttonCancelText : this.selected === true ? this.buttonSelectedText : this.buttonText;
    },
    computedButtonClass: function computedButtonClass() {
      return [this.buttonClass, this.drag === true ? 'processing' : this.selected === true ? 'active' : ''];
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var yandexMap = function () {
  function yandexMap(options) {
    _classCallCheck(this, yandexMap);
  }

  _createClass(yandexMap, [{
    key: 'getOptions',
    value: function getOptions() {
      return this.options;
    }
  }]);

  return yandexMap;
}();

var YandexMapPlugin = {
  install: function install(VueInstance, options) {
    var opts = {};
    Object.assign(opts, {
      version: '2.1',
      lang: 'ru_RU',
      apiKey: ''
    }, options);
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions = opts;

    var $yandexmap = new yandexMap(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.yandexMapOptions);
    VueInstance.prototype.$yandexmap = $yandexmap;
    VueInstance.component('yandex-map', __webpack_require__(6));
    VueInstance.component('region-select', __webpack_require__(8));
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(YandexMapPlugin);
}

/* harmony default export */ __webpack_exports__["default"] = (YandexMapPlugin);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_YandexMapContainer_vue__ = __webpack_require__(1);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_834f1a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_YandexMapContainer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_834f1a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_834f1a84_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mapClass},[_vm._t("default"),_vm._v(" "),_c('div',{class:_vm.mapClass + '__container',style:(_vm.style),attrs:{"id":_vm.mapId}})],2)}
var staticRenderFns = []


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegionSelect_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b70ef2a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(3);
function injectStyle (context) {
  __webpack_require__(9)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegionSelect_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b70ef2a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b70ef2a6_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(12).default
var update = add("bbedb636", content, true, {});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".yandex-map_region{position:relative;text-align:right}.yandex-map_region a{z-index:120;display:inline-block;position:absolute;padding:4px 10px;top:10px;right:10px;background-color:#30b9e8;color:#fff;cursor:pointer;text-decoration:none}.yandex-map_region a.processing{background-color:#7fc54e}.yandex-map_region a.active{background-color:#cc242b}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(13);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.map !== true)?_c('div',{staticClass:"yandex-map_region"},[_c('a',{class:_vm.computedButtonClass,on:{"click":_vm.buttonClick}},[_vm._v(_vm._s(_vm.computedButtonText))])]):_vm._e()}
var staticRenderFns = []


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map