!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports["vue-yandex-map"] = factory() : root["vue-yandex-map"] = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/dist/", __webpack_require__(__webpack_require__.s = 18);
    }([ function(module, exports) {
        var core = module.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = core);
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(4)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(module, exports) {
        var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = global);
    }, function(module, exports) {
        module.exports = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it;
        };
    }, function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return !0;
            }
        };
    }, function(module, exports) {
        var g;
        g = function() {
            return this;
        }();
        try {
            g = g || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (g = window);
        }
        module.exports = g;
    }, function(module, exports, __webpack_require__) {
        var global = __webpack_require__(2), core = __webpack_require__(0), ctx = __webpack_require__(22), hide = __webpack_require__(24), has = __webpack_require__(8), $export = function(type, name, source) {
            var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports.prototype, target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {}).prototype;
            IS_GLOBAL && (source = name);
            for (key in source) (own = !IS_FORCED && target && void 0 !== target[key]) && has(exports, key) || (out = own ? target[key] : source[key], 
            exports[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();

                          case 1:
                            return new C(a);

                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                    }
                    return C.apply(this, arguments);
                };
                return F.prototype = C.prototype, F;
            }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, IS_PROTO && ((exports.virtual || (exports.virtual = {}))[key] = out, 
            type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)));
        };
        $export.F = 1, $export.G = 2, $export.S = 4, $export.P = 8, $export.B = 16, $export.W = 32, 
        $export.U = 64, $export.R = 128, module.exports = $export;
    }, function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(25), IE8_DOM_DEFINE = __webpack_require__(26), toPrimitive = __webpack_require__(28), dP = Object.defineProperty;
        exports.f = __webpack_require__(1) ? Object.defineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            return "value" in Attributes && (O[P] = Attributes.value), O;
        };
    }, function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, function(module, exports, __webpack_require__) {
        var IObject = __webpack_require__(10), defined = __webpack_require__(11);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        var cof = __webpack_require__(33);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return "String" == cof(it) ? it.split("") : Object(it);
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if (void 0 == it) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, function(module, exports) {
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        (function(global, setImmediate) {
            function isUndef(v) {
                return void 0 === v || null === v;
            }
            function isDef(v) {
                return void 0 !== v && null !== v;
            }
            function isTrue(v) {
                return !0 === v;
            }
            function isFalse(v) {
                return !1 === v;
            }
            function isPrimitive(value) {
                return "string" == typeof value || "number" == typeof value || "symbol" == typeof value || "boolean" == typeof value;
            }
            function isObject(obj) {
                return null !== obj && "object" == typeof obj;
            }
            function isPlainObject(obj) {
                return "[object Object]" === _toString.call(obj);
            }
            function isRegExp(v) {
                return "[object RegExp]" === _toString.call(v);
            }
            function isValidArrayIndex(val) {
                var n = parseFloat(String(val));
                return n >= 0 && Math.floor(n) === n && isFinite(val);
            }
            function toString(val) {
                return null == val ? "" : "object" == typeof val ? JSON.stringify(val, null, 2) : String(val);
            }
            function toNumber(val) {
                var n = parseFloat(val);
                return isNaN(n) ? val : n;
            }
            function makeMap(str, expectsLowerCase) {
                for (var map = Object.create(null), list = str.split(","), i = 0; i < list.length; i++) map[list[i]] = !0;
                return expectsLowerCase ? function(val) {
                    return map[val.toLowerCase()];
                } : function(val) {
                    return map[val];
                };
            }
            function remove(arr, item) {
                if (arr.length) {
                    var index = arr.indexOf(item);
                    if (index > -1) return arr.splice(index, 1);
                }
            }
            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key);
            }
            function cached(fn) {
                var cache = Object.create(null);
                return function(str) {
                    return cache[str] || (cache[str] = fn(str));
                };
            }
            function polyfillBind(fn, ctx) {
                function boundFn(a) {
                    var l = arguments.length;
                    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
                }
                return boundFn._length = fn.length, boundFn;
            }
            function nativeBind(fn, ctx) {
                return fn.bind(ctx);
            }
            function toArray(list, start) {
                start = start || 0;
                for (var i = list.length - start, ret = new Array(i); i--; ) ret[i] = list[i + start];
                return ret;
            }
            function extend(to, _from) {
                for (var key in _from) to[key] = _from[key];
                return to;
            }
            function toObject(arr) {
                for (var res = {}, i = 0; i < arr.length; i++) arr[i] && extend(res, arr[i]);
                return res;
            }
            function noop(a, b, c) {}
            function looseEqual(a, b) {
                if (a === b) return !0;
                var isObjectA = isObject(a), isObjectB = isObject(b);
                if (!isObjectA || !isObjectB) return !isObjectA && !isObjectB && String(a) === String(b);
                try {
                    var isArrayA = Array.isArray(a), isArrayB = Array.isArray(b);
                    if (isArrayA && isArrayB) return a.length === b.length && a.every(function(e, i) {
                        return looseEqual(e, b[i]);
                    });
                    if (isArrayA || isArrayB) return !1;
                    var keysA = Object.keys(a), keysB = Object.keys(b);
                    return keysA.length === keysB.length && keysA.every(function(key) {
                        return looseEqual(a[key], b[key]);
                    });
                } catch (e) {
                    return !1;
                }
            }
            function looseIndexOf(arr, val) {
                for (var i = 0; i < arr.length; i++) if (looseEqual(arr[i], val)) return i;
                return -1;
            }
            function once(fn) {
                var called = !1;
                return function() {
                    called || (called = !0, fn.apply(this, arguments));
                };
            }
            function isReserved(str) {
                var c = (str + "").charCodeAt(0);
                return 36 === c || 95 === c;
            }
            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: !0,
                    configurable: !0
                });
            }
            function parsePath(path) {
                if (!bailRE.test(path)) {
                    var segments = path.split(".");
                    return function(obj) {
                        for (var i = 0; i < segments.length; i++) {
                            if (!obj) return;
                            obj = obj[segments[i]];
                        }
                        return obj;
                    };
                }
            }
            function isNative(Ctor) {
                return "function" == typeof Ctor && /native code/.test(Ctor.toString());
            }
            function pushTarget(_target) {
                Dep.target && targetStack.push(Dep.target), Dep.target = _target;
            }
            function popTarget() {
                Dep.target = targetStack.pop();
            }
            function createTextVNode(val) {
                return new VNode(void 0, void 0, void 0, String(val));
            }
            function cloneVNode(vnode) {
                var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
                return cloned.ns = vnode.ns, cloned.isStatic = vnode.isStatic, cloned.key = vnode.key, 
                cloned.isComment = vnode.isComment, cloned.fnContext = vnode.fnContext, cloned.fnOptions = vnode.fnOptions, 
                cloned.fnScopeId = vnode.fnScopeId, cloned.isCloned = !0, cloned;
            }
            function toggleObserving(value) {
                shouldObserve = value;
            }
            function protoAugment(target, src, keys) {
                target.__proto__ = src;
            }
            function copyAugment(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }
            function observe(value, asRootData) {
                if (isObject(value) && !(value instanceof VNode)) {
                    var ob;
                    return hasOwn(value, "__ob__") && value.__ob__ instanceof Observer ? ob = value.__ob__ : shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue && (ob = new Observer(value)), 
                    asRootData && ob && ob.vmCount++, ob;
                }
            }
            function defineReactive(obj, key, val, customSetter, shallow) {
                var dep = new Dep(), property = Object.getOwnPropertyDescriptor(obj, key);
                if (!property || !1 !== property.configurable) {
                    var getter = property && property.get;
                    getter || 2 !== arguments.length || (val = obj[key]);
                    var setter = property && property.set, childOb = !shallow && observe(val);
                    Object.defineProperty(obj, key, {
                        enumerable: !0,
                        configurable: !0,
                        get: function() {
                            var value = getter ? getter.call(obj) : val;
                            return Dep.target && (dep.depend(), childOb && (childOb.dep.depend(), Array.isArray(value) && dependArray(value))), 
                            value;
                        },
                        set: function(newVal) {
                            var value = getter ? getter.call(obj) : val;
                            newVal === value || newVal !== newVal && value !== value || (setter ? setter.call(obj, newVal) : val = newVal, 
                            childOb = !shallow && observe(newVal), dep.notify());
                        }
                    });
                }
            }
            function set(target, key, val) {
                if (Array.isArray(target) && isValidArrayIndex(key)) return target.length = Math.max(target.length, key), 
                target.splice(key, 1, val), val;
                if (key in target && !(key in Object.prototype)) return target[key] = val, val;
                var ob = target.__ob__;
                return target._isVue || ob && ob.vmCount ? val : ob ? (defineReactive(ob.value, key, val), 
                ob.dep.notify(), val) : (target[key] = val, val);
            }
            function del(target, key) {
                if (Array.isArray(target) && isValidArrayIndex(key)) return void target.splice(key, 1);
                var ob = target.__ob__;
                target._isVue || ob && ob.vmCount || hasOwn(target, key) && (delete target[key], 
                ob && ob.dep.notify());
            }
            function dependArray(value) {
                for (var e = void 0, i = 0, l = value.length; i < l; i++) e = value[i], e && e.__ob__ && e.__ob__.dep.depend(), 
                Array.isArray(e) && dependArray(e);
            }
            function mergeData(to, from) {
                if (!from) return to;
                for (var key, toVal, fromVal, keys = Object.keys(from), i = 0; i < keys.length; i++) key = keys[i], 
                toVal = to[key], fromVal = from[key], hasOwn(to, key) ? isPlainObject(toVal) && isPlainObject(fromVal) && mergeData(toVal, fromVal) : set(to, key, fromVal);
                return to;
            }
            function mergeDataOrFn(parentVal, childVal, vm) {
                return vm ? function() {
                    var instanceData = "function" == typeof childVal ? childVal.call(vm, vm) : childVal, defaultData = "function" == typeof parentVal ? parentVal.call(vm, vm) : parentVal;
                    return instanceData ? mergeData(instanceData, defaultData) : defaultData;
                } : childVal ? parentVal ? function() {
                    return mergeData("function" == typeof childVal ? childVal.call(this, this) : childVal, "function" == typeof parentVal ? parentVal.call(this, this) : parentVal);
                } : childVal : parentVal;
            }
            function mergeHook(parentVal, childVal) {
                return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [ childVal ] : parentVal;
            }
            function mergeAssets(parentVal, childVal, vm, key) {
                var res = Object.create(parentVal || null);
                return childVal ? extend(res, childVal) : res;
            }
            function normalizeProps(options, vm) {
                var props = options.props;
                if (props) {
                    var i, val, name, res = {};
                    if (Array.isArray(props)) for (i = props.length; i--; ) "string" == typeof (val = props[i]) && (name = camelize(val), 
                    res[name] = {
                        type: null
                    }); else if (isPlainObject(props)) for (var key in props) val = props[key], name = camelize(key), 
                    res[name] = isPlainObject(val) ? val : {
                        type: val
                    };
                    options.props = res;
                }
            }
            function normalizeInject(options, vm) {
                var inject = options.inject;
                if (inject) {
                    var normalized = options.inject = {};
                    if (Array.isArray(inject)) for (var i = 0; i < inject.length; i++) normalized[inject[i]] = {
                        from: inject[i]
                    }; else if (isPlainObject(inject)) for (var key in inject) {
                        var val = inject[key];
                        normalized[key] = isPlainObject(val) ? extend({
                            from: key
                        }, val) : {
                            from: val
                        };
                    }
                }
            }
            function normalizeDirectives(options) {
                var dirs = options.directives;
                if (dirs) for (var key in dirs) {
                    var def = dirs[key];
                    "function" == typeof def && (dirs[key] = {
                        bind: def,
                        update: def
                    });
                }
            }
            function mergeOptions(parent, child, vm) {
                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }
                "function" == typeof child && (child = child.options), normalizeProps(child, vm), 
                normalizeInject(child, vm), normalizeDirectives(child);
                var extendsFrom = child.extends;
                if (extendsFrom && (parent = mergeOptions(parent, extendsFrom, vm)), child.mixins) for (var i = 0, l = child.mixins.length; i < l; i++) parent = mergeOptions(parent, child.mixins[i], vm);
                var key, options = {};
                for (key in parent) mergeField(key);
                for (key in child) hasOwn(parent, key) || mergeField(key);
                return options;
            }
            function resolveAsset(options, type, id, warnMissing) {
                if ("string" == typeof id) {
                    var assets = options[type];
                    if (hasOwn(assets, id)) return assets[id];
                    var camelizedId = camelize(id);
                    if (hasOwn(assets, camelizedId)) return assets[camelizedId];
                    var PascalCaseId = capitalize(camelizedId);
                    if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId];
                    return assets[id] || assets[camelizedId] || assets[PascalCaseId];
                }
            }
            function validateProp(key, propOptions, propsData, vm) {
                var prop = propOptions[key], absent = !hasOwn(propsData, key), value = propsData[key], booleanIndex = getTypeIndex(Boolean, prop.type);
                if (booleanIndex > -1) if (absent && !hasOwn(prop, "default")) value = !1; else if ("" === value || value === hyphenate(key)) {
                    var stringIndex = getTypeIndex(String, prop.type);
                    (stringIndex < 0 || booleanIndex < stringIndex) && (value = !0);
                }
                if (void 0 === value) {
                    value = getPropDefaultValue(vm, prop, key);
                    var prevShouldObserve = shouldObserve;
                    toggleObserving(!0), observe(value), toggleObserving(prevShouldObserve);
                }
                return value;
            }
            function getPropDefaultValue(vm, prop, key) {
                if (hasOwn(prop, "default")) {
                    var def = prop.default;
                    return vm && vm.$options.propsData && void 0 === vm.$options.propsData[key] && void 0 !== vm._props[key] ? vm._props[key] : "function" == typeof def && "Function" !== getType(prop.type) ? def.call(vm) : def;
                }
            }
            function getType(fn) {
                var match = fn && fn.toString().match(/^\s*function (\w+)/);
                return match ? match[1] : "";
            }
            function isSameType(a, b) {
                return getType(a) === getType(b);
            }
            function getTypeIndex(type, expectedTypes) {
                if (!Array.isArray(expectedTypes)) return isSameType(expectedTypes, type) ? 0 : -1;
                for (var i = 0, len = expectedTypes.length; i < len; i++) if (isSameType(expectedTypes[i], type)) return i;
                return -1;
            }
            function handleError(err, vm, info) {
                if (vm) for (var cur = vm; cur = cur.$parent; ) {
                    var hooks = cur.$options.errorCaptured;
                    if (hooks) for (var i = 0; i < hooks.length; i++) try {
                        var capture = !1 === hooks[i].call(cur, err, vm, info);
                        if (capture) return;
                    } catch (e) {
                        globalHandleError(e, cur, "errorCaptured hook");
                    }
                }
                globalHandleError(err, vm, info);
            }
            function globalHandleError(err, vm, info) {
                if (config.errorHandler) try {
                    return config.errorHandler.call(null, err, vm, info);
                } catch (e) {
                    logError(e, null, "config.errorHandler");
                }
                logError(err, vm, info);
            }
            function logError(err, vm, info) {
                if (!inBrowser && !inWeex || "undefined" == typeof console) throw err;
                console.error(err);
            }
            function flushCallbacks() {
                pending = !1;
                var copies = callbacks.slice(0);
                callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) copies[i]();
            }
            function withMacroTask(fn) {
                return fn._withTask || (fn._withTask = function() {
                    useMacroTask = !0;
                    var res = fn.apply(null, arguments);
                    return useMacroTask = !1, res;
                });
            }
            function nextTick(cb, ctx) {
                var _resolve;
                if (callbacks.push(function() {
                    if (cb) try {
                        cb.call(ctx);
                    } catch (e) {
                        handleError(e, ctx, "nextTick");
                    } else _resolve && _resolve(ctx);
                }), pending || (pending = !0, useMacroTask ? macroTimerFunc() : microTimerFunc()), 
                !cb && "undefined" != typeof Promise) return new Promise(function(resolve) {
                    _resolve = resolve;
                });
            }
            function traverse(val) {
                _traverse(val, seenObjects), seenObjects.clear();
            }
            function _traverse(val, seen) {
                var i, keys, isA = Array.isArray(val);
                if (!(!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode)) {
                    if (val.__ob__) {
                        var depId = val.__ob__.dep.id;
                        if (seen.has(depId)) return;
                        seen.add(depId);
                    }
                    if (isA) for (i = val.length; i--; ) _traverse(val[i], seen); else for (keys = Object.keys(val), 
                    i = keys.length; i--; ) _traverse(val[keys[i]], seen);
                }
            }
            function createFnInvoker(fns) {
                function invoker() {
                    var arguments$1 = arguments, fns = invoker.fns;
                    if (!Array.isArray(fns)) return fns.apply(null, arguments);
                    for (var cloned = fns.slice(), i = 0; i < cloned.length; i++) cloned[i].apply(null, arguments$1);
                }
                return invoker.fns = fns, invoker;
            }
            function updateListeners(on, oldOn, add, remove$$1, vm) {
                var name, cur, old, event;
                for (name in on) cur = on[name], old = oldOn[name], event = normalizeEvent(name), 
                isUndef(cur) || (isUndef(old) ? (isUndef(cur.fns) && (cur = on[name] = createFnInvoker(cur)), 
                add(event.name, cur, event.once, event.capture, event.passive, event.params)) : cur !== old && (old.fns = cur, 
                on[name] = old));
                for (name in oldOn) isUndef(on[name]) && (event = normalizeEvent(name), remove$$1(event.name, oldOn[name], event.capture));
            }
            function mergeVNodeHook(def, hookKey, hook) {
                function wrappedHook() {
                    hook.apply(this, arguments), remove(invoker.fns, wrappedHook);
                }
                def instanceof VNode && (def = def.data.hook || (def.data.hook = {}));
                var invoker, oldHook = def[hookKey];
                isUndef(oldHook) ? invoker = createFnInvoker([ wrappedHook ]) : isDef(oldHook.fns) && isTrue(oldHook.merged) ? (invoker = oldHook, 
                invoker.fns.push(wrappedHook)) : invoker = createFnInvoker([ oldHook, wrappedHook ]), 
                invoker.merged = !0, def[hookKey] = invoker;
            }
            function extractPropsFromVNodeData(data, Ctor, tag) {
                var propOptions = Ctor.options.props;
                if (!isUndef(propOptions)) {
                    var res = {}, attrs = data.attrs, props = data.props;
                    if (isDef(attrs) || isDef(props)) for (var key in propOptions) {
                        var altKey = hyphenate(key);
                        checkProp(res, props, key, altKey, !0) || checkProp(res, attrs, key, altKey, !1);
                    }
                    return res;
                }
            }
            function checkProp(res, hash, key, altKey, preserve) {
                if (isDef(hash)) {
                    if (hasOwn(hash, key)) return res[key] = hash[key], preserve || delete hash[key], 
                    !0;
                    if (hasOwn(hash, altKey)) return res[key] = hash[altKey], preserve || delete hash[altKey], 
                    !0;
                }
                return !1;
            }
            function simpleNormalizeChildren(children) {
                for (var i = 0; i < children.length; i++) if (Array.isArray(children[i])) return Array.prototype.concat.apply([], children);
                return children;
            }
            function normalizeChildren(children) {
                return isPrimitive(children) ? [ createTextVNode(children) ] : Array.isArray(children) ? normalizeArrayChildren(children) : void 0;
            }
            function isTextNode(node) {
                return isDef(node) && isDef(node.text) && isFalse(node.isComment);
            }
            function normalizeArrayChildren(children, nestedIndex) {
                var i, c, lastIndex, last, res = [];
                for (i = 0; i < children.length; i++) c = children[i], isUndef(c) || "boolean" == typeof c || (lastIndex = res.length - 1, 
                last = res[lastIndex], Array.isArray(c) ? c.length > 0 && (c = normalizeArrayChildren(c, (nestedIndex || "") + "_" + i), 
                isTextNode(c[0]) && isTextNode(last) && (res[lastIndex] = createTextVNode(last.text + c[0].text), 
                c.shift()), res.push.apply(res, c)) : isPrimitive(c) ? isTextNode(last) ? res[lastIndex] = createTextVNode(last.text + c) : "" !== c && res.push(createTextVNode(c)) : isTextNode(c) && isTextNode(last) ? res[lastIndex] = createTextVNode(last.text + c.text) : (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex) && (c.key = "__vlist" + nestedIndex + "_" + i + "__"), 
                res.push(c)));
                return res;
            }
            function ensureCtor(comp, base) {
                return (comp.__esModule || hasSymbol && "Module" === comp[Symbol.toStringTag]) && (comp = comp.default), 
                isObject(comp) ? base.extend(comp) : comp;
            }
            function createAsyncPlaceholder(factory, data, context, children, tag) {
                var node = createEmptyVNode();
                return node.asyncFactory = factory, node.asyncMeta = {
                    data: data,
                    context: context,
                    children: children,
                    tag: tag
                }, node;
            }
            function resolveAsyncComponent(factory, baseCtor, context) {
                if (isTrue(factory.error) && isDef(factory.errorComp)) return factory.errorComp;
                if (isDef(factory.resolved)) return factory.resolved;
                if (isTrue(factory.loading) && isDef(factory.loadingComp)) return factory.loadingComp;
                if (!isDef(factory.contexts)) {
                    var contexts = factory.contexts = [ context ], sync = !0, forceRender = function() {
                        for (var i = 0, l = contexts.length; i < l; i++) contexts[i].$forceUpdate();
                    }, resolve = once(function(res) {
                        factory.resolved = ensureCtor(res, baseCtor), sync || forceRender();
                    }), reject = once(function(reason) {
                        isDef(factory.errorComp) && (factory.error = !0, forceRender());
                    }), res = factory(resolve, reject);
                    return isObject(res) && ("function" == typeof res.then ? isUndef(factory.resolved) && res.then(resolve, reject) : isDef(res.component) && "function" == typeof res.component.then && (res.component.then(resolve, reject), 
                    isDef(res.error) && (factory.errorComp = ensureCtor(res.error, baseCtor)), isDef(res.loading) && (factory.loadingComp = ensureCtor(res.loading, baseCtor), 
                    0 === res.delay ? factory.loading = !0 : setTimeout(function() {
                        isUndef(factory.resolved) && isUndef(factory.error) && (factory.loading = !0, forceRender());
                    }, res.delay || 200)), isDef(res.timeout) && setTimeout(function() {
                        isUndef(factory.resolved) && reject(null);
                    }, res.timeout))), sync = !1, factory.loading ? factory.loadingComp : factory.resolved;
                }
                factory.contexts.push(context);
            }
            function isAsyncPlaceholder(node) {
                return node.isComment && node.asyncFactory;
            }
            function getFirstComponentChild(children) {
                if (Array.isArray(children)) for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) return c;
                }
            }
            function initEvents(vm) {
                vm._events = Object.create(null), vm._hasHookEvent = !1;
                var listeners = vm.$options._parentListeners;
                listeners && updateComponentListeners(vm, listeners);
            }
            function add(event, fn, once) {
                once ? target.$once(event, fn) : target.$on(event, fn);
            }
            function remove$1(event, fn) {
                target.$off(event, fn);
            }
            function updateComponentListeners(vm, listeners, oldListeners) {
                target = vm, updateListeners(listeners, oldListeners || {}, add, remove$1, vm), 
                target = void 0;
            }
            function resolveSlots(children, context) {
                var slots = {};
                if (!children) return slots;
                for (var i = 0, l = children.length; i < l; i++) {
                    var child = children[i], data = child.data;
                    if (data && data.attrs && data.attrs.slot && delete data.attrs.slot, child.context !== context && child.fnContext !== context || !data || null == data.slot) (slots.default || (slots.default = [])).push(child); else {
                        var name = data.slot, slot = slots[name] || (slots[name] = []);
                        "template" === child.tag ? slot.push.apply(slot, child.children || []) : slot.push(child);
                    }
                }
                for (var name$1 in slots) slots[name$1].every(isWhitespace) && delete slots[name$1];
                return slots;
            }
            function isWhitespace(node) {
                return node.isComment && !node.asyncFactory || " " === node.text;
            }
            function resolveScopedSlots(fns, res) {
                res = res || {};
                for (var i = 0; i < fns.length; i++) Array.isArray(fns[i]) ? resolveScopedSlots(fns[i], res) : res[fns[i].key] = fns[i].fn;
                return res;
            }
            function initLifecycle(vm) {
                var options = vm.$options, parent = options.parent;
                if (parent && !options.abstract) {
                    for (;parent.$options.abstract && parent.$parent; ) parent = parent.$parent;
                    parent.$children.push(vm);
                }
                vm.$parent = parent, vm.$root = parent ? parent.$root : vm, vm.$children = [], vm.$refs = {}, 
                vm._watcher = null, vm._inactive = null, vm._directInactive = !1, vm._isMounted = !1, 
                vm._isDestroyed = !1, vm._isBeingDestroyed = !1;
            }
            function mountComponent(vm, el, hydrating) {
                vm.$el = el, vm.$options.render || (vm.$options.render = createEmptyVNode), callHook(vm, "beforeMount");
                var updateComponent;
                return updateComponent = function() {
                    vm._update(vm._render(), hydrating);
                }, new Watcher(vm, updateComponent, noop, null, !0), hydrating = !1, null == vm.$vnode && (vm._isMounted = !0, 
                callHook(vm, "mounted")), vm;
            }
            function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
                var hasChildren = !!(renderChildren || vm.$options._renderChildren || parentVnode.data.scopedSlots || vm.$scopedSlots !== emptyObject);
                if (vm.$options._parentVnode = parentVnode, vm.$vnode = parentVnode, vm._vnode && (vm._vnode.parent = parentVnode), 
                vm.$options._renderChildren = renderChildren, vm.$attrs = parentVnode.data.attrs || emptyObject, 
                vm.$listeners = listeners || emptyObject, propsData && vm.$options.props) {
                    toggleObserving(!1);
                    for (var props = vm._props, propKeys = vm.$options._propKeys || [], i = 0; i < propKeys.length; i++) {
                        var key = propKeys[i], propOptions = vm.$options.props;
                        props[key] = validateProp(key, propOptions, propsData, vm);
                    }
                    toggleObserving(!0), vm.$options.propsData = propsData;
                }
                listeners = listeners || emptyObject;
                var oldListeners = vm.$options._parentListeners;
                vm.$options._parentListeners = listeners, updateComponentListeners(vm, listeners, oldListeners), 
                hasChildren && (vm.$slots = resolveSlots(renderChildren, parentVnode.context), vm.$forceUpdate());
            }
            function isInInactiveTree(vm) {
                for (;vm && (vm = vm.$parent); ) if (vm._inactive) return !0;
                return !1;
            }
            function activateChildComponent(vm, direct) {
                if (direct) {
                    if (vm._directInactive = !1, isInInactiveTree(vm)) return;
                } else if (vm._directInactive) return;
                if (vm._inactive || null === vm._inactive) {
                    vm._inactive = !1;
                    for (var i = 0; i < vm.$children.length; i++) activateChildComponent(vm.$children[i]);
                    callHook(vm, "activated");
                }
            }
            function deactivateChildComponent(vm, direct) {
                if (!(direct && (vm._directInactive = !0, isInInactiveTree(vm)) || vm._inactive)) {
                    vm._inactive = !0;
                    for (var i = 0; i < vm.$children.length; i++) deactivateChildComponent(vm.$children[i]);
                    callHook(vm, "deactivated");
                }
            }
            function callHook(vm, hook) {
                pushTarget();
                var handlers = vm.$options[hook];
                if (handlers) for (var i = 0, j = handlers.length; i < j; i++) try {
                    handlers[i].call(vm);
                } catch (e) {
                    handleError(e, vm, hook + " hook");
                }
                vm._hasHookEvent && vm.$emit("hook:" + hook), popTarget();
            }
            function resetSchedulerState() {
                index = queue.length = activatedChildren.length = 0, has = {}, waiting = flushing = !1;
            }
            function flushSchedulerQueue() {
                flushing = !0;
                var watcher, id;
                for (queue.sort(function(a, b) {
                    return a.id - b.id;
                }), index = 0; index < queue.length; index++) watcher = queue[index], id = watcher.id, 
                has[id] = null, watcher.run();
                var activatedQueue = activatedChildren.slice(), updatedQueue = queue.slice();
                resetSchedulerState(), callActivatedHooks(activatedQueue), callUpdatedHooks(updatedQueue), 
                devtools && config.devtools && devtools.emit("flush");
            }
            function callUpdatedHooks(queue) {
                for (var i = queue.length; i--; ) {
                    var watcher = queue[i], vm = watcher.vm;
                    vm._watcher === watcher && vm._isMounted && callHook(vm, "updated");
                }
            }
            function queueActivatedComponent(vm) {
                vm._inactive = !1, activatedChildren.push(vm);
            }
            function callActivatedHooks(queue) {
                for (var i = 0; i < queue.length; i++) queue[i]._inactive = !0, activateChildComponent(queue[i], !0);
            }
            function queueWatcher(watcher) {
                var id = watcher.id;
                if (null == has[id]) {
                    if (has[id] = !0, flushing) {
                        for (var i = queue.length - 1; i > index && queue[i].id > watcher.id; ) i--;
                        queue.splice(i + 1, 0, watcher);
                    } else queue.push(watcher);
                    waiting || (waiting = !0, nextTick(flushSchedulerQueue));
                }
            }
            function proxy(target, sourceKey, key) {
                sharedPropertyDefinition.get = function() {
                    return this[sourceKey][key];
                }, sharedPropertyDefinition.set = function(val) {
                    this[sourceKey][key] = val;
                }, Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function initState(vm) {
                vm._watchers = [];
                var opts = vm.$options;
                opts.props && initProps(vm, opts.props), opts.methods && initMethods(vm, opts.methods), 
                opts.data ? initData(vm) : observe(vm._data = {}, !0), opts.computed && initComputed(vm, opts.computed), 
                opts.watch && opts.watch !== nativeWatch && initWatch(vm, opts.watch);
            }
            function initProps(vm, propsOptions) {
                var propsData = vm.$options.propsData || {}, props = vm._props = {}, keys = vm.$options._propKeys = [];
                !vm.$parent || toggleObserving(!1);
                for (var key in propsOptions) !function(key) {
                    keys.push(key);
                    var value = validateProp(key, propsOptions, propsData, vm);
                    defineReactive(props, key, value), key in vm || proxy(vm, "_props", key);
                }(key);
                toggleObserving(!0);
            }
            function initData(vm) {
                var data = vm.$options.data;
                data = vm._data = "function" == typeof data ? getData(data, vm) : data || {}, isPlainObject(data) || (data = {});
                for (var keys = Object.keys(data), props = vm.$options.props, i = (vm.$options.methods, 
                keys.length); i--; ) {
                    var key = keys[i];
                    props && hasOwn(props, key) || isReserved(key) || proxy(vm, "_data", key);
                }
                observe(data, !0);
            }
            function getData(data, vm) {
                pushTarget();
                try {
                    return data.call(vm, vm);
                } catch (e) {
                    return handleError(e, vm, "data()"), {};
                } finally {
                    popTarget();
                }
            }
            function initComputed(vm, computed) {
                var watchers = vm._computedWatchers = Object.create(null), isSSR = isServerRendering();
                for (var key in computed) {
                    var userDef = computed[key], getter = "function" == typeof userDef ? userDef : userDef.get;
                    isSSR || (watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions)), 
                    key in vm || defineComputed(vm, key, userDef);
                }
            }
            function defineComputed(target, key, userDef) {
                var shouldCache = !isServerRendering();
                "function" == typeof userDef ? (sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : userDef, 
                sharedPropertyDefinition.set = noop) : (sharedPropertyDefinition.get = userDef.get ? shouldCache && !1 !== userDef.cache ? createComputedGetter(key) : userDef.get : noop, 
                sharedPropertyDefinition.set = userDef.set ? userDef.set : noop), Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function createComputedGetter(key) {
                return function() {
                    var watcher = this._computedWatchers && this._computedWatchers[key];
                    if (watcher) return watcher.dirty && watcher.evaluate(), Dep.target && watcher.depend(), 
                    watcher.value;
                };
            }
            function initMethods(vm, methods) {
                vm.$options.props;
                for (var key in methods) vm[key] = null == methods[key] ? noop : bind(methods[key], vm);
            }
            function initWatch(vm, watch) {
                for (var key in watch) {
                    var handler = watch[key];
                    if (Array.isArray(handler)) for (var i = 0; i < handler.length; i++) createWatcher(vm, key, handler[i]); else createWatcher(vm, key, handler);
                }
            }
            function createWatcher(vm, expOrFn, handler, options) {
                return isPlainObject(handler) && (options = handler, handler = handler.handler), 
                "string" == typeof handler && (handler = vm[handler]), vm.$watch(expOrFn, handler, options);
            }
            function initProvide(vm) {
                var provide = vm.$options.provide;
                provide && (vm._provided = "function" == typeof provide ? provide.call(vm) : provide);
            }
            function initInjections(vm) {
                var result = resolveInject(vm.$options.inject, vm);
                result && (toggleObserving(!1), Object.keys(result).forEach(function(key) {
                    defineReactive(vm, key, result[key]);
                }), toggleObserving(!0));
            }
            function resolveInject(inject, vm) {
                if (inject) {
                    for (var result = Object.create(null), keys = hasSymbol ? Reflect.ownKeys(inject).filter(function(key) {
                        return Object.getOwnPropertyDescriptor(inject, key).enumerable;
                    }) : Object.keys(inject), i = 0; i < keys.length; i++) {
                        for (var key = keys[i], provideKey = inject[key].from, source = vm; source; ) {
                            if (source._provided && hasOwn(source._provided, provideKey)) {
                                result[key] = source._provided[provideKey];
                                break;
                            }
                            source = source.$parent;
                        }
                        if (!source && "default" in inject[key]) {
                            var provideDefault = inject[key].default;
                            result[key] = "function" == typeof provideDefault ? provideDefault.call(vm) : provideDefault;
                        }
                    }
                    return result;
                }
            }
            function renderList(val, render) {
                var ret, i, l, keys, key;
                if (Array.isArray(val) || "string" == typeof val) for (ret = new Array(val.length), 
                i = 0, l = val.length; i < l; i++) ret[i] = render(val[i], i); else if ("number" == typeof val) for (ret = new Array(val), 
                i = 0; i < val; i++) ret[i] = render(i + 1, i); else if (isObject(val)) for (keys = Object.keys(val), 
                ret = new Array(keys.length), i = 0, l = keys.length; i < l; i++) key = keys[i], 
                ret[i] = render(val[key], key, i);
                return isDef(ret) && (ret._isVList = !0), ret;
            }
            function renderSlot(name, fallback, props, bindObject) {
                var nodes, scopedSlotFn = this.$scopedSlots[name];
                if (scopedSlotFn) props = props || {}, bindObject && (props = extend(extend({}, bindObject), props)), 
                nodes = scopedSlotFn(props) || fallback; else {
                    var slotNodes = this.$slots[name];
                    slotNodes && (slotNodes._rendered = !0), nodes = slotNodes || fallback;
                }
                var target = props && props.slot;
                return target ? this.$createElement("template", {
                    slot: target
                }, nodes) : nodes;
            }
            function resolveFilter(id) {
                return resolveAsset(this.$options, "filters", id, !0) || identity;
            }
            function isKeyNotMatch(expect, actual) {
                return Array.isArray(expect) ? -1 === expect.indexOf(actual) : expect !== actual;
            }
            function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
                var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
                return builtInKeyName && eventKeyName && !config.keyCodes[key] ? isKeyNotMatch(builtInKeyName, eventKeyName) : mappedKeyCode ? isKeyNotMatch(mappedKeyCode, eventKeyCode) : eventKeyName ? hyphenate(eventKeyName) !== key : void 0;
            }
            function bindObjectProps(data, tag, value, asProp, isSync) {
                if (value) if (isObject(value)) {
                    Array.isArray(value) && (value = toObject(value));
                    var hash;
                    for (var key in value) !function(key) {
                        if ("class" === key || "style" === key || isReservedAttribute(key)) hash = data; else {
                            var type = data.attrs && data.attrs.type;
                            hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
                        }
                        if (!(key in hash) && (hash[key] = value[key], isSync)) {
                            (data.on || (data.on = {}))["update:" + key] = function($event) {
                                value[key] = $event;
                            };
                        }
                    }(key);
                } else ;
                return data;
            }
            function renderStatic(index, isInFor) {
                var cached = this._staticTrees || (this._staticTrees = []), tree = cached[index];
                return tree && !isInFor ? tree : (tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this), 
                markStatic(tree, "__static__" + index, !1), tree);
            }
            function markOnce(tree, index, key) {
                return markStatic(tree, "__once__" + index + (key ? "_" + key : ""), !0), tree;
            }
            function markStatic(tree, key, isOnce) {
                if (Array.isArray(tree)) for (var i = 0; i < tree.length; i++) tree[i] && "string" != typeof tree[i] && markStaticNode(tree[i], key + "_" + i, isOnce); else markStaticNode(tree, key, isOnce);
            }
            function markStaticNode(node, key, isOnce) {
                node.isStatic = !0, node.key = key, node.isOnce = isOnce;
            }
            function bindObjectListeners(data, value) {
                if (value) if (isPlainObject(value)) {
                    var on = data.on = data.on ? extend({}, data.on) : {};
                    for (var key in value) {
                        var existing = on[key], ours = value[key];
                        on[key] = existing ? [].concat(existing, ours) : ours;
                    }
                } else ;
                return data;
            }
            function installRenderHelpers(target) {
                target._o = markOnce, target._n = toNumber, target._s = toString, target._l = renderList, 
                target._t = renderSlot, target._q = looseEqual, target._i = looseIndexOf, target._m = renderStatic, 
                target._f = resolveFilter, target._k = checkKeyCodes, target._b = bindObjectProps, 
                target._v = createTextVNode, target._e = createEmptyVNode, target._u = resolveScopedSlots, 
                target._g = bindObjectListeners;
            }
            function FunctionalRenderContext(data, props, children, parent, Ctor) {
                var contextVm, options = Ctor.options;
                hasOwn(parent, "_uid") ? (contextVm = Object.create(parent), contextVm._original = parent) : (contextVm = parent, 
                parent = parent._original);
                var isCompiled = isTrue(options._compiled), needNormalization = !isCompiled;
                this.data = data, this.props = props, this.children = children, this.parent = parent, 
                this.listeners = data.on || emptyObject, this.injections = resolveInject(options.inject, parent), 
                this.slots = function() {
                    return resolveSlots(children, parent);
                }, isCompiled && (this.$options = options, this.$slots = this.slots(), this.$scopedSlots = data.scopedSlots || emptyObject), 
                options._scopeId ? this._c = function(a, b, c, d) {
                    var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                    return vnode && !Array.isArray(vnode) && (vnode.fnScopeId = options._scopeId, vnode.fnContext = parent), 
                    vnode;
                } : this._c = function(a, b, c, d) {
                    return createElement(contextVm, a, b, c, d, needNormalization);
                };
            }
            function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
                var options = Ctor.options, props = {}, propOptions = options.props;
                if (isDef(propOptions)) for (var key in propOptions) props[key] = validateProp(key, propOptions, propsData || emptyObject); else isDef(data.attrs) && mergeProps(props, data.attrs), 
                isDef(data.props) && mergeProps(props, data.props);
                var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor), vnode = options.render.call(null, renderContext._c, renderContext);
                if (vnode instanceof VNode) return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
                if (Array.isArray(vnode)) {
                    for (var vnodes = normalizeChildren(vnode) || [], res = new Array(vnodes.length), i = 0; i < vnodes.length; i++) res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
                    return res;
                }
            }
            function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
                var clone = cloneVNode(vnode);
                return clone.fnContext = contextVm, clone.fnOptions = options, data.slot && ((clone.data || (clone.data = {})).slot = data.slot), 
                clone;
            }
            function mergeProps(to, from) {
                for (var key in from) to[camelize(key)] = from[key];
            }
            function createComponent(Ctor, data, context, children, tag) {
                if (!isUndef(Ctor)) {
                    var baseCtor = context.$options._base;
                    if (isObject(Ctor) && (Ctor = baseCtor.extend(Ctor)), "function" == typeof Ctor) {
                        var asyncFactory;
                        if (isUndef(Ctor.cid) && (asyncFactory = Ctor, void 0 === (Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)))) return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
                        data = data || {}, resolveConstructorOptions(Ctor), isDef(data.model) && transformModel(Ctor.options, data);
                        var propsData = extractPropsFromVNodeData(data, Ctor, tag);
                        if (isTrue(Ctor.options.functional)) return createFunctionalComponent(Ctor, propsData, data, context, children);
                        var listeners = data.on;
                        if (data.on = data.nativeOn, isTrue(Ctor.options.abstract)) {
                            var slot = data.slot;
                            data = {}, slot && (data.slot = slot);
                        }
                        installComponentHooks(data);
                        var name = Ctor.options.name || tag;
                        return new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ""), data, void 0, void 0, void 0, context, {
                            Ctor: Ctor,
                            propsData: propsData,
                            listeners: listeners,
                            tag: tag,
                            children: children
                        }, asyncFactory);
                    }
                }
            }
            function createComponentInstanceForVnode(vnode, parent, parentElm, refElm) {
                var options = {
                    _isComponent: !0,
                    parent: parent,
                    _parentVnode: vnode,
                    _parentElm: parentElm || null,
                    _refElm: refElm || null
                }, inlineTemplate = vnode.data.inlineTemplate;
                return isDef(inlineTemplate) && (options.render = inlineTemplate.render, options.staticRenderFns = inlineTemplate.staticRenderFns), 
                new vnode.componentOptions.Ctor(options);
            }
            function installComponentHooks(data) {
                for (var hooks = data.hook || (data.hook = {}), i = 0; i < hooksToMerge.length; i++) {
                    var key = hooksToMerge[i];
                    hooks[key] = componentVNodeHooks[key];
                }
            }
            function transformModel(options, data) {
                var prop = options.model && options.model.prop || "value", event = options.model && options.model.event || "input";
                (data.props || (data.props = {}))[prop] = data.model.value;
                var on = data.on || (data.on = {});
                isDef(on[event]) ? on[event] = [ data.model.callback ].concat(on[event]) : on[event] = data.model.callback;
            }
            function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
                return (Array.isArray(data) || isPrimitive(data)) && (normalizationType = children, 
                children = data, data = void 0), isTrue(alwaysNormalize) && (normalizationType = ALWAYS_NORMALIZE), 
                _createElement(context, tag, data, children, normalizationType);
            }
            function _createElement(context, tag, data, children, normalizationType) {
                if (isDef(data) && isDef(data.__ob__)) return createEmptyVNode();
                if (isDef(data) && isDef(data.is) && (tag = data.is), !tag) return createEmptyVNode();
                Array.isArray(children) && "function" == typeof children[0] && (data = data || {}, 
                data.scopedSlots = {
                    default: children[0]
                }, children.length = 0), normalizationType === ALWAYS_NORMALIZE ? children = normalizeChildren(children) : normalizationType === SIMPLE_NORMALIZE && (children = simpleNormalizeChildren(children));
                var vnode, ns;
                if ("string" == typeof tag) {
                    var Ctor;
                    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag), vnode = config.isReservedTag(tag) ? new VNode(config.parsePlatformTagName(tag), data, children, void 0, void 0, context) : isDef(Ctor = resolveAsset(context.$options, "components", tag)) ? createComponent(Ctor, data, context, children, tag) : new VNode(tag, data, children, void 0, void 0, context);
                } else vnode = createComponent(tag, data, context, children);
                return Array.isArray(vnode) ? vnode : isDef(vnode) ? (isDef(ns) && applyNS(vnode, ns), 
                isDef(data) && registerDeepBindings(data), vnode) : createEmptyVNode();
            }
            function applyNS(vnode, ns, force) {
                if (vnode.ns = ns, "foreignObject" === vnode.tag && (ns = void 0, force = !0), isDef(vnode.children)) for (var i = 0, l = vnode.children.length; i < l; i++) {
                    var child = vnode.children[i];
                    isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && "svg" !== child.tag) && applyNS(child, ns, force);
                }
            }
            function registerDeepBindings(data) {
                isObject(data.style) && traverse(data.style), isObject(data.class) && traverse(data.class);
            }
            function initRender(vm) {
                vm._vnode = null, vm._staticTrees = null;
                var options = vm.$options, parentVnode = vm.$vnode = options._parentVnode, renderContext = parentVnode && parentVnode.context;
                vm.$slots = resolveSlots(options._renderChildren, renderContext), vm.$scopedSlots = emptyObject, 
                vm._c = function(a, b, c, d) {
                    return createElement(vm, a, b, c, d, !1);
                }, vm.$createElement = function(a, b, c, d) {
                    return createElement(vm, a, b, c, d, !0);
                };
                var parentData = parentVnode && parentVnode.data;
                defineReactive(vm, "$attrs", parentData && parentData.attrs || emptyObject, null, !0), 
                defineReactive(vm, "$listeners", options._parentListeners || emptyObject, null, !0);
            }
            function initInternalComponent(vm, options) {
                var opts = vm.$options = Object.create(vm.constructor.options), parentVnode = options._parentVnode;
                opts.parent = options.parent, opts._parentVnode = parentVnode, opts._parentElm = options._parentElm, 
                opts._refElm = options._refElm;
                var vnodeComponentOptions = parentVnode.componentOptions;
                opts.propsData = vnodeComponentOptions.propsData, opts._parentListeners = vnodeComponentOptions.listeners, 
                opts._renderChildren = vnodeComponentOptions.children, opts._componentTag = vnodeComponentOptions.tag, 
                options.render && (opts.render = options.render, opts.staticRenderFns = options.staticRenderFns);
            }
            function resolveConstructorOptions(Ctor) {
                var options = Ctor.options;
                if (Ctor.super) {
                    var superOptions = resolveConstructorOptions(Ctor.super);
                    if (superOptions !== Ctor.superOptions) {
                        Ctor.superOptions = superOptions;
                        var modifiedOptions = resolveModifiedOptions(Ctor);
                        modifiedOptions && extend(Ctor.extendOptions, modifiedOptions), options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions), 
                        options.name && (options.components[options.name] = Ctor);
                    }
                }
                return options;
            }
            function resolveModifiedOptions(Ctor) {
                var modified, latest = Ctor.options, extended = Ctor.extendOptions, sealed = Ctor.sealedOptions;
                for (var key in latest) latest[key] !== sealed[key] && (modified || (modified = {}), 
                modified[key] = dedupe(latest[key], extended[key], sealed[key]));
                return modified;
            }
            function dedupe(latest, extended, sealed) {
                if (Array.isArray(latest)) {
                    var res = [];
                    sealed = Array.isArray(sealed) ? sealed : [ sealed ], extended = Array.isArray(extended) ? extended : [ extended ];
                    for (var i = 0; i < latest.length; i++) (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) && res.push(latest[i]);
                    return res;
                }
                return latest;
            }
            function Vue(options) {
                this._init(options);
            }
            function initUse(Vue) {
                Vue.use = function(plugin) {
                    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);
                    if (installedPlugins.indexOf(plugin) > -1) return this;
                    var args = toArray(arguments, 1);
                    return args.unshift(this), "function" == typeof plugin.install ? plugin.install.apply(plugin, args) : "function" == typeof plugin && plugin.apply(null, args), 
                    installedPlugins.push(plugin), this;
                };
            }
            function initMixin$1(Vue) {
                Vue.mixin = function(mixin) {
                    return this.options = mergeOptions(this.options, mixin), this;
                };
            }
            function initExtend(Vue) {
                Vue.cid = 0;
                var cid = 1;
                Vue.extend = function(extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this, SuperId = Super.cid, cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                    if (cachedCtors[SuperId]) return cachedCtors[SuperId];
                    var name = extendOptions.name || Super.options.name, Sub = function(options) {
                        this._init(options);
                    };
                    return Sub.prototype = Object.create(Super.prototype), Sub.prototype.constructor = Sub, 
                    Sub.cid = cid++, Sub.options = mergeOptions(Super.options, extendOptions), Sub.super = Super, 
                    Sub.options.props && initProps$1(Sub), Sub.options.computed && initComputed$1(Sub), 
                    Sub.extend = Super.extend, Sub.mixin = Super.mixin, Sub.use = Super.use, ASSET_TYPES.forEach(function(type) {
                        Sub[type] = Super[type];
                    }), name && (Sub.options.components[name] = Sub), Sub.superOptions = Super.options, 
                    Sub.extendOptions = extendOptions, Sub.sealedOptions = extend({}, Sub.options), 
                    cachedCtors[SuperId] = Sub, Sub;
                };
            }
            function initProps$1(Comp) {
                var props = Comp.options.props;
                for (var key in props) proxy(Comp.prototype, "_props", key);
            }
            function initComputed$1(Comp) {
                var computed = Comp.options.computed;
                for (var key in computed) defineComputed(Comp.prototype, key, computed[key]);
            }
            function initAssetRegisters(Vue) {
                ASSET_TYPES.forEach(function(type) {
                    Vue[type] = function(id, definition) {
                        return definition ? ("component" === type && isPlainObject(definition) && (definition.name = definition.name || id, 
                        definition = this.options._base.extend(definition)), "directive" === type && "function" == typeof definition && (definition = {
                            bind: definition,
                            update: definition
                        }), this.options[type + "s"][id] = definition, definition) : this.options[type + "s"][id];
                    };
                });
            }
            function getComponentName(opts) {
                return opts && (opts.Ctor.options.name || opts.tag);
            }
            function matches(pattern, name) {
                return Array.isArray(pattern) ? pattern.indexOf(name) > -1 : "string" == typeof pattern ? pattern.split(",").indexOf(name) > -1 : !!isRegExp(pattern) && pattern.test(name);
            }
            function pruneCache(keepAliveInstance, filter) {
                var cache = keepAliveInstance.cache, keys = keepAliveInstance.keys, _vnode = keepAliveInstance._vnode;
                for (var key in cache) {
                    var cachedNode = cache[key];
                    if (cachedNode) {
                        var name = getComponentName(cachedNode.componentOptions);
                        name && !filter(name) && pruneCacheEntry(cache, key, keys, _vnode);
                    }
                }
            }
            function pruneCacheEntry(cache, key, keys, current) {
                var cached$$1 = cache[key];
                !cached$$1 || current && cached$$1.tag === current.tag || cached$$1.componentInstance.$destroy(), 
                cache[key] = null, remove(keys, key);
            }
            function genClassForVnode(vnode) {
                for (var data = vnode.data, parentNode = vnode, childNode = vnode; isDef(childNode.componentInstance); ) (childNode = childNode.componentInstance._vnode) && childNode.data && (data = mergeClassData(childNode.data, data));
                for (;isDef(parentNode = parentNode.parent); ) parentNode && parentNode.data && (data = mergeClassData(data, parentNode.data));
                return renderClass(data.staticClass, data.class);
            }
            function mergeClassData(child, parent) {
                return {
                    staticClass: concat(child.staticClass, parent.staticClass),
                    class: isDef(child.class) ? [ child.class, parent.class ] : parent.class
                };
            }
            function renderClass(staticClass, dynamicClass) {
                return isDef(staticClass) || isDef(dynamicClass) ? concat(staticClass, stringifyClass(dynamicClass)) : "";
            }
            function concat(a, b) {
                return a ? b ? a + " " + b : a : b || "";
            }
            function stringifyClass(value) {
                return Array.isArray(value) ? stringifyArray(value) : isObject(value) ? stringifyObject(value) : "string" == typeof value ? value : "";
            }
            function stringifyArray(value) {
                for (var stringified, res = "", i = 0, l = value.length; i < l; i++) isDef(stringified = stringifyClass(value[i])) && "" !== stringified && (res && (res += " "), 
                res += stringified);
                return res;
            }
            function stringifyObject(value) {
                var res = "";
                for (var key in value) value[key] && (res && (res += " "), res += key);
                return res;
            }
            function getTagNamespace(tag) {
                return isSVG(tag) ? "svg" : "math" === tag ? "math" : void 0;
            }
            function isUnknownElement(tag) {
                if (!inBrowser) return !0;
                if (isReservedTag(tag)) return !1;
                if (tag = tag.toLowerCase(), null != unknownElementCache[tag]) return unknownElementCache[tag];
                var el = document.createElement(tag);
                return tag.indexOf("-") > -1 ? unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement : unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
            }
            function query(el) {
                if ("string" == typeof el) {
                    var selected = document.querySelector(el);
                    return selected || document.createElement("div");
                }
                return el;
            }
            function createElement$1(tagName, vnode) {
                var elm = document.createElement(tagName);
                return "select" !== tagName ? elm : (vnode.data && vnode.data.attrs && void 0 !== vnode.data.attrs.multiple && elm.setAttribute("multiple", "multiple"), 
                elm);
            }
            function createElementNS(namespace, tagName) {
                return document.createElementNS(namespaceMap[namespace], tagName);
            }
            function createTextNode(text) {
                return document.createTextNode(text);
            }
            function createComment(text) {
                return document.createComment(text);
            }
            function insertBefore(parentNode, newNode, referenceNode) {
                parentNode.insertBefore(newNode, referenceNode);
            }
            function removeChild(node, child) {
                node.removeChild(child);
            }
            function appendChild(node, child) {
                node.appendChild(child);
            }
            function parentNode(node) {
                return node.parentNode;
            }
            function nextSibling(node) {
                return node.nextSibling;
            }
            function tagName(node) {
                return node.tagName;
            }
            function setTextContent(node, text) {
                node.textContent = text;
            }
            function setStyleScope(node, scopeId) {
                node.setAttribute(scopeId, "");
            }
            function registerRef(vnode, isRemoval) {
                var key = vnode.data.ref;
                if (isDef(key)) {
                    var vm = vnode.context, ref = vnode.componentInstance || vnode.elm, refs = vm.$refs;
                    isRemoval ? Array.isArray(refs[key]) ? remove(refs[key], ref) : refs[key] === ref && (refs[key] = void 0) : vnode.data.refInFor ? Array.isArray(refs[key]) ? refs[key].indexOf(ref) < 0 && refs[key].push(ref) : refs[key] = [ ref ] : refs[key] = ref;
                }
            }
            function sameVnode(a, b) {
                return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
            }
            function sameInputType(a, b) {
                if ("input" !== a.tag) return !0;
                var i, typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type, typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
            }
            function createKeyToOldIdx(children, beginIdx, endIdx) {
                var i, key, map = {};
                for (i = beginIdx; i <= endIdx; ++i) key = children[i].key, isDef(key) && (map[key] = i);
                return map;
            }
            function updateDirectives(oldVnode, vnode) {
                (oldVnode.data.directives || vnode.data.directives) && _update(oldVnode, vnode);
            }
            function _update(oldVnode, vnode) {
                var key, oldDir, dir, isCreate = oldVnode === emptyNode, isDestroy = vnode === emptyNode, oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context), newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context), dirsWithInsert = [], dirsWithPostpatch = [];
                for (key in newDirs) oldDir = oldDirs[key], dir = newDirs[key], oldDir ? (dir.oldValue = oldDir.value, 
                callHook$1(dir, "update", vnode, oldVnode), dir.def && dir.def.componentUpdated && dirsWithPostpatch.push(dir)) : (callHook$1(dir, "bind", vnode, oldVnode), 
                dir.def && dir.def.inserted && dirsWithInsert.push(dir));
                if (dirsWithInsert.length) {
                    var callInsert = function() {
                        for (var i = 0; i < dirsWithInsert.length; i++) callHook$1(dirsWithInsert[i], "inserted", vnode, oldVnode);
                    };
                    isCreate ? mergeVNodeHook(vnode, "insert", callInsert) : callInsert();
                }
                if (dirsWithPostpatch.length && mergeVNodeHook(vnode, "postpatch", function() {
                    for (var i = 0; i < dirsWithPostpatch.length; i++) callHook$1(dirsWithPostpatch[i], "componentUpdated", vnode, oldVnode);
                }), !isCreate) for (key in oldDirs) newDirs[key] || callHook$1(oldDirs[key], "unbind", oldVnode, oldVnode, isDestroy);
            }
            function normalizeDirectives$1(dirs, vm) {
                var res = Object.create(null);
                if (!dirs) return res;
                var i, dir;
                for (i = 0; i < dirs.length; i++) dir = dirs[i], dir.modifiers || (dir.modifiers = emptyModifiers), 
                res[getRawDirName(dir)] = dir, dir.def = resolveAsset(vm.$options, "directives", dir.name, !0);
                return res;
            }
            function getRawDirName(dir) {
                return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join(".");
            }
            function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
                var fn = dir.def && dir.def[hook];
                if (fn) try {
                    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
                } catch (e) {
                    handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
                }
            }
            function updateAttrs(oldVnode, vnode) {
                var opts = vnode.componentOptions;
                if (!(isDef(opts) && !1 === opts.Ctor.options.inheritAttrs || isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs))) {
                    var key, cur, elm = vnode.elm, oldAttrs = oldVnode.data.attrs || {}, attrs = vnode.data.attrs || {};
                    isDef(attrs.__ob__) && (attrs = vnode.data.attrs = extend({}, attrs));
                    for (key in attrs) cur = attrs[key], oldAttrs[key] !== cur && setAttr(elm, key, cur);
                    (isIE || isEdge) && attrs.value !== oldAttrs.value && setAttr(elm, "value", attrs.value);
                    for (key in oldAttrs) isUndef(attrs[key]) && (isXlink(key) ? elm.removeAttributeNS(xlinkNS, getXlinkProp(key)) : isEnumeratedAttr(key) || elm.removeAttribute(key));
                }
            }
            function setAttr(el, key, value) {
                el.tagName.indexOf("-") > -1 ? baseSetAttr(el, key, value) : isBooleanAttr(key) ? isFalsyAttrValue(value) ? el.removeAttribute(key) : (value = "allowfullscreen" === key && "EMBED" === el.tagName ? "true" : key, 
                el.setAttribute(key, value)) : isEnumeratedAttr(key) ? el.setAttribute(key, isFalsyAttrValue(value) || "false" === value ? "false" : "true") : isXlink(key) ? isFalsyAttrValue(value) ? el.removeAttributeNS(xlinkNS, getXlinkProp(key)) : el.setAttributeNS(xlinkNS, key, value) : baseSetAttr(el, key, value);
            }
            function baseSetAttr(el, key, value) {
                if (isFalsyAttrValue(value)) el.removeAttribute(key); else {
                    if (isIE && !isIE9 && "TEXTAREA" === el.tagName && "placeholder" === key && !el.__ieph) {
                        var blocker = function(e) {
                            e.stopImmediatePropagation(), el.removeEventListener("input", blocker);
                        };
                        el.addEventListener("input", blocker), el.__ieph = !0;
                    }
                    el.setAttribute(key, value);
                }
            }
            function updateClass(oldVnode, vnode) {
                var el = vnode.elm, data = vnode.data, oldData = oldVnode.data;
                if (!(isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class)))) {
                    var cls = genClassForVnode(vnode), transitionClass = el._transitionClasses;
                    isDef(transitionClass) && (cls = concat(cls, stringifyClass(transitionClass))), 
                    cls !== el._prevClass && (el.setAttribute("class", cls), el._prevClass = cls);
                }
            }
            function normalizeEvents(on) {
                if (isDef(on[RANGE_TOKEN])) {
                    var event = isIE ? "change" : "input";
                    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []), delete on[RANGE_TOKEN];
                }
                isDef(on[CHECKBOX_RADIO_TOKEN]) && (on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []), 
                delete on[CHECKBOX_RADIO_TOKEN]);
            }
            function createOnceHandler(handler, event, capture) {
                var _target = target$1;
                return function onceHandler() {
                    null !== handler.apply(null, arguments) && remove$2(event, onceHandler, capture, _target);
                };
            }
            function add$1(event, handler, once$$1, capture, passive) {
                handler = withMacroTask(handler), once$$1 && (handler = createOnceHandler(handler, event, capture)), 
                target$1.addEventListener(event, handler, supportsPassive ? {
                    capture: capture,
                    passive: passive
                } : capture);
            }
            function remove$2(event, handler, capture, _target) {
                (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
            }
            function updateDOMListeners(oldVnode, vnode) {
                if (!isUndef(oldVnode.data.on) || !isUndef(vnode.data.on)) {
                    var on = vnode.data.on || {}, oldOn = oldVnode.data.on || {};
                    target$1 = vnode.elm, normalizeEvents(on), updateListeners(on, oldOn, add$1, remove$2, vnode.context), 
                    target$1 = void 0;
                }
            }
            function updateDOMProps(oldVnode, vnode) {
                if (!isUndef(oldVnode.data.domProps) || !isUndef(vnode.data.domProps)) {
                    var key, cur, elm = vnode.elm, oldProps = oldVnode.data.domProps || {}, props = vnode.data.domProps || {};
                    isDef(props.__ob__) && (props = vnode.data.domProps = extend({}, props));
                    for (key in oldProps) isUndef(props[key]) && (elm[key] = "");
                    for (key in props) {
                        if (cur = props[key], "textContent" === key || "innerHTML" === key) {
                            if (vnode.children && (vnode.children.length = 0), cur === oldProps[key]) continue;
                            1 === elm.childNodes.length && elm.removeChild(elm.childNodes[0]);
                        }
                        if ("value" === key) {
                            elm._value = cur;
                            var strCur = isUndef(cur) ? "" : String(cur);
                            shouldUpdateValue(elm, strCur) && (elm.value = strCur);
                        } else elm[key] = cur;
                    }
                }
            }
            function shouldUpdateValue(elm, checkVal) {
                return !elm.composing && ("OPTION" === elm.tagName || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
            }
            function isNotInFocusAndDirty(elm, checkVal) {
                var notInFocus = !0;
                try {
                    notInFocus = document.activeElement !== elm;
                } catch (e) {}
                return notInFocus && elm.value !== checkVal;
            }
            function isDirtyWithModifiers(elm, newVal) {
                var value = elm.value, modifiers = elm._vModifiers;
                if (isDef(modifiers)) {
                    if (modifiers.lazy) return !1;
                    if (modifiers.number) return toNumber(value) !== toNumber(newVal);
                    if (modifiers.trim) return value.trim() !== newVal.trim();
                }
                return value !== newVal;
            }
            function normalizeStyleData(data) {
                var style = normalizeStyleBinding(data.style);
                return data.staticStyle ? extend(data.staticStyle, style) : style;
            }
            function normalizeStyleBinding(bindingStyle) {
                return Array.isArray(bindingStyle) ? toObject(bindingStyle) : "string" == typeof bindingStyle ? parseStyleText(bindingStyle) : bindingStyle;
            }
            function getStyle(vnode, checkChild) {
                var styleData, res = {};
                if (checkChild) for (var childNode = vnode; childNode.componentInstance; ) (childNode = childNode.componentInstance._vnode) && childNode.data && (styleData = normalizeStyleData(childNode.data)) && extend(res, styleData);
                (styleData = normalizeStyleData(vnode.data)) && extend(res, styleData);
                for (var parentNode = vnode; parentNode = parentNode.parent; ) parentNode.data && (styleData = normalizeStyleData(parentNode.data)) && extend(res, styleData);
                return res;
            }
            function updateStyle(oldVnode, vnode) {
                var data = vnode.data, oldData = oldVnode.data;
                if (!(isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style))) {
                    var cur, name, el = vnode.elm, oldStaticStyle = oldData.staticStyle, oldStyleBinding = oldData.normalizedStyle || oldData.style || {}, oldStyle = oldStaticStyle || oldStyleBinding, style = normalizeStyleBinding(vnode.data.style) || {};
                    vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
                    var newStyle = getStyle(vnode, !0);
                    for (name in oldStyle) isUndef(newStyle[name]) && setProp(el, name, "");
                    for (name in newStyle) (cur = newStyle[name]) !== oldStyle[name] && setProp(el, name, null == cur ? "" : cur);
                }
            }
            function addClass(el, cls) {
                if (cls && (cls = cls.trim())) if (el.classList) cls.indexOf(" ") > -1 ? cls.split(/\s+/).forEach(function(c) {
                    return el.classList.add(c);
                }) : el.classList.add(cls); else {
                    var cur = " " + (el.getAttribute("class") || "") + " ";
                    cur.indexOf(" " + cls + " ") < 0 && el.setAttribute("class", (cur + cls).trim());
                }
            }
            function removeClass(el, cls) {
                if (cls && (cls = cls.trim())) if (el.classList) cls.indexOf(" ") > -1 ? cls.split(/\s+/).forEach(function(c) {
                    return el.classList.remove(c);
                }) : el.classList.remove(cls), el.classList.length || el.removeAttribute("class"); else {
                    for (var cur = " " + (el.getAttribute("class") || "") + " ", tar = " " + cls + " "; cur.indexOf(tar) >= 0; ) cur = cur.replace(tar, " ");
                    cur = cur.trim(), cur ? el.setAttribute("class", cur) : el.removeAttribute("class");
                }
            }
            function resolveTransition(def) {
                if (def) {
                    if ("object" == typeof def) {
                        var res = {};
                        return !1 !== def.css && extend(res, autoCssTransition(def.name || "v")), extend(res, def), 
                        res;
                    }
                    return "string" == typeof def ? autoCssTransition(def) : void 0;
                }
            }
            function nextFrame(fn) {
                raf(function() {
                    raf(fn);
                });
            }
            function addTransitionClass(el, cls) {
                var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
                transitionClasses.indexOf(cls) < 0 && (transitionClasses.push(cls), addClass(el, cls));
            }
            function removeTransitionClass(el, cls) {
                el._transitionClasses && remove(el._transitionClasses, cls), removeClass(el, cls);
            }
            function whenTransitionEnds(el, expectedType, cb) {
                var ref = getTransitionInfo(el, expectedType), type = ref.type, timeout = ref.timeout, propCount = ref.propCount;
                if (!type) return cb();
                var event = type === TRANSITION ? transitionEndEvent : animationEndEvent, ended = 0, end = function() {
                    el.removeEventListener(event, onEnd), cb();
                }, onEnd = function(e) {
                    e.target === el && ++ended >= propCount && end();
                };
                setTimeout(function() {
                    ended < propCount && end();
                }, timeout + 1), el.addEventListener(event, onEnd);
            }
            function getTransitionInfo(el, expectedType) {
                var type, styles = window.getComputedStyle(el), transitionDelays = styles[transitionProp + "Delay"].split(", "), transitionDurations = styles[transitionProp + "Duration"].split(", "), transitionTimeout = getTimeout(transitionDelays, transitionDurations), animationDelays = styles[animationProp + "Delay"].split(", "), animationDurations = styles[animationProp + "Duration"].split(", "), animationTimeout = getTimeout(animationDelays, animationDurations), timeout = 0, propCount = 0;
                return expectedType === TRANSITION ? transitionTimeout > 0 && (type = TRANSITION, 
                timeout = transitionTimeout, propCount = transitionDurations.length) : expectedType === ANIMATION ? animationTimeout > 0 && (type = ANIMATION, 
                timeout = animationTimeout, propCount = animationDurations.length) : (timeout = Math.max(transitionTimeout, animationTimeout), 
                type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null, 
                propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0), 
                {
                    type: type,
                    timeout: timeout,
                    propCount: propCount,
                    hasTransform: type === TRANSITION && transformRE.test(styles[transitionProp + "Property"])
                };
            }
            function getTimeout(delays, durations) {
                for (;delays.length < durations.length; ) delays = delays.concat(delays);
                return Math.max.apply(null, durations.map(function(d, i) {
                    return toMs(d) + toMs(delays[i]);
                }));
            }
            function toMs(s) {
                return 1e3 * Number(s.slice(0, -1));
            }
            function enter(vnode, toggleDisplay) {
                var el = vnode.elm;
                isDef(el._leaveCb) && (el._leaveCb.cancelled = !0, el._leaveCb());
                var data = resolveTransition(vnode.data.transition);
                if (!isUndef(data) && !isDef(el._enterCb) && 1 === el.nodeType) {
                    for (var css = data.css, type = data.type, enterClass = data.enterClass, enterToClass = data.enterToClass, enterActiveClass = data.enterActiveClass, appearClass = data.appearClass, appearToClass = data.appearToClass, appearActiveClass = data.appearActiveClass, beforeEnter = data.beforeEnter, enter = data.enter, afterEnter = data.afterEnter, enterCancelled = data.enterCancelled, beforeAppear = data.beforeAppear, appear = data.appear, afterAppear = data.afterAppear, appearCancelled = data.appearCancelled, duration = data.duration, context = activeInstance, transitionNode = activeInstance.$vnode; transitionNode && transitionNode.parent; ) transitionNode = transitionNode.parent, 
                    context = transitionNode.context;
                    var isAppear = !context._isMounted || !vnode.isRootInsert;
                    if (!isAppear || appear || "" === appear) {
                        var startClass = isAppear && appearClass ? appearClass : enterClass, activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass, toClass = isAppear && appearToClass ? appearToClass : enterToClass, beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter, enterHook = isAppear && "function" == typeof appear ? appear : enter, afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter, enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled, explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration), expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(enterHook), cb = el._enterCb = once(function() {
                            expectsCSS && (removeTransitionClass(el, toClass), removeTransitionClass(el, activeClass)), 
                            cb.cancelled ? (expectsCSS && removeTransitionClass(el, startClass), enterCancelledHook && enterCancelledHook(el)) : afterEnterHook && afterEnterHook(el), 
                            el._enterCb = null;
                        });
                        vnode.data.show || mergeVNodeHook(vnode, "insert", function() {
                            var parent = el.parentNode, pendingNode = parent && parent._pending && parent._pending[vnode.key];
                            pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb && pendingNode.elm._leaveCb(), 
                            enterHook && enterHook(el, cb);
                        }), beforeEnterHook && beforeEnterHook(el), expectsCSS && (addTransitionClass(el, startClass), 
                        addTransitionClass(el, activeClass), nextFrame(function() {
                            removeTransitionClass(el, startClass), cb.cancelled || (addTransitionClass(el, toClass), 
                            userWantsControl || (isValidDuration(explicitEnterDuration) ? setTimeout(cb, explicitEnterDuration) : whenTransitionEnds(el, type, cb)));
                        })), vnode.data.show && (toggleDisplay && toggleDisplay(), enterHook && enterHook(el, cb)), 
                        expectsCSS || userWantsControl || cb();
                    }
                }
            }
            function leave(vnode, rm) {
                function performLeave() {
                    cb.cancelled || (vnode.data.show || ((el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode), 
                    beforeLeave && beforeLeave(el), expectsCSS && (addTransitionClass(el, leaveClass), 
                    addTransitionClass(el, leaveActiveClass), nextFrame(function() {
                        removeTransitionClass(el, leaveClass), cb.cancelled || (addTransitionClass(el, leaveToClass), 
                        userWantsControl || (isValidDuration(explicitLeaveDuration) ? setTimeout(cb, explicitLeaveDuration) : whenTransitionEnds(el, type, cb)));
                    })), leave && leave(el, cb), expectsCSS || userWantsControl || cb());
                }
                var el = vnode.elm;
                isDef(el._enterCb) && (el._enterCb.cancelled = !0, el._enterCb());
                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data) || 1 !== el.nodeType) return rm();
                if (!isDef(el._leaveCb)) {
                    var css = data.css, type = data.type, leaveClass = data.leaveClass, leaveToClass = data.leaveToClass, leaveActiveClass = data.leaveActiveClass, beforeLeave = data.beforeLeave, leave = data.leave, afterLeave = data.afterLeave, leaveCancelled = data.leaveCancelled, delayLeave = data.delayLeave, duration = data.duration, expectsCSS = !1 !== css && !isIE9, userWantsControl = getHookArgumentsLength(leave), explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration), cb = el._leaveCb = once(function() {
                        el.parentNode && el.parentNode._pending && (el.parentNode._pending[vnode.key] = null), 
                        expectsCSS && (removeTransitionClass(el, leaveToClass), removeTransitionClass(el, leaveActiveClass)), 
                        cb.cancelled ? (expectsCSS && removeTransitionClass(el, leaveClass), leaveCancelled && leaveCancelled(el)) : (rm(), 
                        afterLeave && afterLeave(el)), el._leaveCb = null;
                    });
                    delayLeave ? delayLeave(performLeave) : performLeave();
                }
            }
            function isValidDuration(val) {
                return "number" == typeof val && !isNaN(val);
            }
            function getHookArgumentsLength(fn) {
                if (isUndef(fn)) return !1;
                var invokerFns = fn.fns;
                return isDef(invokerFns) ? getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns) : (fn._length || fn.length) > 1;
            }
            function _enter(_, vnode) {
                !0 !== vnode.data.show && enter(vnode);
            }
            function setSelected(el, binding, vm) {
                actuallySetSelected(el, binding, vm), (isIE || isEdge) && setTimeout(function() {
                    actuallySetSelected(el, binding, vm);
                }, 0);
            }
            function actuallySetSelected(el, binding, vm) {
                var value = binding.value, isMultiple = el.multiple;
                if (!isMultiple || Array.isArray(value)) {
                    for (var selected, option, i = 0, l = el.options.length; i < l; i++) if (option = el.options[i], 
                    isMultiple) selected = looseIndexOf(value, getValue(option)) > -1, option.selected !== selected && (option.selected = selected); else if (looseEqual(getValue(option), value)) return void (el.selectedIndex !== i && (el.selectedIndex = i));
                    isMultiple || (el.selectedIndex = -1);
                }
            }
            function hasNoMatchingOption(value, options) {
                return options.every(function(o) {
                    return !looseEqual(o, value);
                });
            }
            function getValue(option) {
                return "_value" in option ? option._value : option.value;
            }
            function onCompositionStart(e) {
                e.target.composing = !0;
            }
            function onCompositionEnd(e) {
                e.target.composing && (e.target.composing = !1, trigger(e.target, "input"));
            }
            function trigger(el, type) {
                var e = document.createEvent("HTMLEvents");
                e.initEvent(type, !0, !0), el.dispatchEvent(e);
            }
            function locateNode(vnode) {
                return !vnode.componentInstance || vnode.data && vnode.data.transition ? vnode : locateNode(vnode.componentInstance._vnode);
            }
            function getRealChild(vnode) {
                var compOptions = vnode && vnode.componentOptions;
                return compOptions && compOptions.Ctor.options.abstract ? getRealChild(getFirstComponentChild(compOptions.children)) : vnode;
            }
            function extractTransitionData(comp) {
                var data = {}, options = comp.$options;
                for (var key in options.propsData) data[key] = comp[key];
                var listeners = options._parentListeners;
                for (var key$1 in listeners) data[camelize(key$1)] = listeners[key$1];
                return data;
            }
            function placeholder(h, rawChild) {
                if (/\d-keep-alive$/.test(rawChild.tag)) return h("keep-alive", {
                    props: rawChild.componentOptions.propsData
                });
            }
            function hasParentTransition(vnode) {
                for (;vnode = vnode.parent; ) if (vnode.data.transition) return !0;
            }
            function isSameChild(child, oldChild) {
                return oldChild.key === child.key && oldChild.tag === child.tag;
            }
            function callPendingCbs(c) {
                c.elm._moveCb && c.elm._moveCb(), c.elm._enterCb && c.elm._enterCb();
            }
            function recordPosition(c) {
                c.data.newPos = c.elm.getBoundingClientRect();
            }
            function applyTranslation(c) {
                var oldPos = c.data.pos, newPos = c.data.newPos, dx = oldPos.left - newPos.left, dy = oldPos.top - newPos.top;
                if (dx || dy) {
                    c.data.moved = !0;
                    var s = c.elm.style;
                    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)", s.transitionDuration = "0s";
                }
            }
            /*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
            var emptyObject = Object.freeze({}), _toString = Object.prototype.toString, isReservedAttribute = (makeMap("slot,component", !0), 
            makeMap("key,ref,slot,slot-scope,is")), hasOwnProperty = Object.prototype.hasOwnProperty, camelizeRE = /-(\w)/g, camelize = cached(function(str) {
                return str.replace(camelizeRE, function(_, c) {
                    return c ? c.toUpperCase() : "";
                });
            }), capitalize = cached(function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }), hyphenateRE = /\B([A-Z])/g, hyphenate = cached(function(str) {
                return str.replace(hyphenateRE, "-$1").toLowerCase();
            }), bind = Function.prototype.bind ? nativeBind : polyfillBind, no = function(a, b, c) {
                return !1;
            }, identity = function(_) {
                return _;
            }, SSR_ATTR = "data-server-rendered", ASSET_TYPES = [ "component", "directive", "filter" ], LIFECYCLE_HOOKS = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], config = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !1,
                devtools: !1,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: no,
                isReservedAttr: no,
                isUnknownElement: no,
                getTagNamespace: noop,
                parsePlatformTagName: identity,
                mustUseProp: no,
                _lifecycleHooks: LIFECYCLE_HOOKS
            }, bailRE = /[^\w.$]/, hasProto = "__proto__" in {}, inBrowser = "undefined" != typeof window, inWeex = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, weexPlatform = inWeex && WXEnvironment.platform.toLowerCase(), UA = inBrowser && window.navigator.userAgent.toLowerCase(), isIE = UA && /msie|trident/.test(UA), isIE9 = UA && UA.indexOf("msie 9.0") > 0, isEdge = UA && UA.indexOf("edge/") > 0, isIOS = (UA && UA.indexOf("android"), 
            UA && /iphone|ipad|ipod|ios/.test(UA) || "ios" === weexPlatform), nativeWatch = (UA && /chrome\/\d+/.test(UA), 
            {}.watch), supportsPassive = !1;
            if (inBrowser) try {
                var opts = {};
                Object.defineProperty(opts, "passive", {
                    get: function() {
                        supportsPassive = !0;
                    }
                }), window.addEventListener("test-passive", null, opts);
            } catch (e) {}
            var _isServer, _Set, isServerRendering = function() {
                return void 0 === _isServer && (_isServer = !inBrowser && !inWeex && void 0 !== global && "server" === global.process.env.VUE_ENV), 
                _isServer;
            }, devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, hasSymbol = "undefined" != typeof Symbol && isNative(Symbol) && "undefined" != typeof Reflect && isNative(Reflect.ownKeys);
            _Set = "undefined" != typeof Set && isNative(Set) ? Set : function() {
                function Set() {
                    this.set = Object.create(null);
                }
                return Set.prototype.has = function(key) {
                    return !0 === this.set[key];
                }, Set.prototype.add = function(key) {
                    this.set[key] = !0;
                }, Set.prototype.clear = function() {
                    this.set = Object.create(null);
                }, Set;
            }();
            var warn = noop, uid = 0, Dep = function() {
                this.id = uid++, this.subs = [];
            };
            Dep.prototype.addSub = function(sub) {
                this.subs.push(sub);
            }, Dep.prototype.removeSub = function(sub) {
                remove(this.subs, sub);
            }, Dep.prototype.depend = function() {
                Dep.target && Dep.target.addDep(this);
            }, Dep.prototype.notify = function() {
                for (var subs = this.subs.slice(), i = 0, l = subs.length; i < l; i++) subs[i].update();
            }, Dep.target = null;
            var targetStack = [], VNode = function(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
                this.tag = tag, this.data = data, this.children = children, this.text = text, this.elm = elm, 
                this.ns = void 0, this.context = context, this.fnContext = void 0, this.fnOptions = void 0, 
                this.fnScopeId = void 0, this.key = data && data.key, this.componentOptions = componentOptions, 
                this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, 
                this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, 
                this.asyncFactory = asyncFactory, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
            }, prototypeAccessors = {
                child: {
                    configurable: !0
                }
            };
            prototypeAccessors.child.get = function() {
                return this.componentInstance;
            }, Object.defineProperties(VNode.prototype, prototypeAccessors);
            var createEmptyVNode = function(text) {
                void 0 === text && (text = "");
                var node = new VNode();
                return node.text = text, node.isComment = !0, node;
            }, arrayProto = Array.prototype, arrayMethods = Object.create(arrayProto);
            [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(method) {
                var original = arrayProto[method];
                def(arrayMethods, method, function() {
                    for (var args = [], len = arguments.length; len--; ) args[len] = arguments[len];
                    var inserted, result = original.apply(this, args), ob = this.__ob__;
                    switch (method) {
                      case "push":
                      case "unshift":
                        inserted = args;
                        break;

                      case "splice":
                        inserted = args.slice(2);
                    }
                    return inserted && ob.observeArray(inserted), ob.dep.notify(), result;
                });
            });
            var arrayKeys = Object.getOwnPropertyNames(arrayMethods), shouldObserve = !0, Observer = function(value) {
                if (this.value = value, this.dep = new Dep(), this.vmCount = 0, def(value, "__ob__", this), 
                Array.isArray(value)) {
                    (hasProto ? protoAugment : copyAugment)(value, arrayMethods, arrayKeys), this.observeArray(value);
                } else this.walk(value);
            };
            Observer.prototype.walk = function(obj) {
                for (var keys = Object.keys(obj), i = 0; i < keys.length; i++) defineReactive(obj, keys[i]);
            }, Observer.prototype.observeArray = function(items) {
                for (var i = 0, l = items.length; i < l; i++) observe(items[i]);
            };
            var strats = config.optionMergeStrategies;
            strats.data = function(parentVal, childVal, vm) {
                return vm ? mergeDataOrFn(parentVal, childVal, vm) : childVal && "function" != typeof childVal ? parentVal : mergeDataOrFn(parentVal, childVal);
            }, LIFECYCLE_HOOKS.forEach(function(hook) {
                strats[hook] = mergeHook;
            }), ASSET_TYPES.forEach(function(type) {
                strats[type + "s"] = mergeAssets;
            }), strats.watch = function(parentVal, childVal, vm, key) {
                if (parentVal === nativeWatch && (parentVal = void 0), childVal === nativeWatch && (childVal = void 0), 
                !childVal) return Object.create(parentVal || null);
                if (!parentVal) return childVal;
                var ret = {};
                extend(ret, parentVal);
                for (var key$1 in childVal) {
                    var parent = ret[key$1], child = childVal[key$1];
                    parent && !Array.isArray(parent) && (parent = [ parent ]), ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [ child ];
                }
                return ret;
            }, strats.props = strats.methods = strats.inject = strats.computed = function(parentVal, childVal, vm, key) {
                if (!parentVal) return childVal;
                var ret = Object.create(null);
                return extend(ret, parentVal), childVal && extend(ret, childVal), ret;
            }, strats.provide = mergeDataOrFn;
            var microTimerFunc, macroTimerFunc, defaultStrat = function(parentVal, childVal) {
                return void 0 === childVal ? parentVal : childVal;
            }, callbacks = [], pending = !1, useMacroTask = !1;
            if (void 0 !== setImmediate && isNative(setImmediate)) macroTimerFunc = function() {
                setImmediate(flushCallbacks);
            }; else if ("undefined" == typeof MessageChannel || !isNative(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) macroTimerFunc = function() {
                setTimeout(flushCallbacks, 0);
            }; else {
                var channel = new MessageChannel(), port = channel.port2;
                channel.port1.onmessage = flushCallbacks, macroTimerFunc = function() {
                    port.postMessage(1);
                };
            }
            if ("undefined" != typeof Promise && isNative(Promise)) {
                var p = Promise.resolve();
                microTimerFunc = function() {
                    p.then(flushCallbacks), isIOS && setTimeout(noop);
                };
            } else microTimerFunc = macroTimerFunc;
            var target, seenObjects = new _Set(), normalizeEvent = cached(function(name) {
                var passive = "&" === name.charAt(0);
                name = passive ? name.slice(1) : name;
                var once$$1 = "~" === name.charAt(0);
                name = once$$1 ? name.slice(1) : name;
                var capture = "!" === name.charAt(0);
                return name = capture ? name.slice(1) : name, {
                    name: name,
                    once: once$$1,
                    capture: capture,
                    passive: passive
                };
            }), activeInstance = null, queue = [], activatedChildren = [], has = {}, waiting = !1, flushing = !1, index = 0, uid$1 = 0, Watcher = function(vm, expOrFn, cb, options, isRenderWatcher) {
                this.vm = vm, isRenderWatcher && (vm._watcher = this), vm._watchers.push(this), 
                options ? (this.deep = !!options.deep, this.user = !!options.user, this.lazy = !!options.lazy, 
                this.sync = !!options.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
                this.cb = cb, this.id = ++uid$1, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                this.newDeps = [], this.depIds = new _Set(), this.newDepIds = new _Set(), this.expression = "", 
                "function" == typeof expOrFn ? this.getter = expOrFn : (this.getter = parsePath(expOrFn), 
                this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
            };
            Watcher.prototype.get = function() {
                pushTarget(this);
                var value, vm = this.vm;
                try {
                    value = this.getter.call(vm, vm);
                } catch (e) {
                    if (!this.user) throw e;
                    handleError(e, vm, 'getter for watcher "' + this.expression + '"');
                } finally {
                    this.deep && traverse(value), popTarget(), this.cleanupDeps();
                }
                return value;
            }, Watcher.prototype.addDep = function(dep) {
                var id = dep.id;
                this.newDepIds.has(id) || (this.newDepIds.add(id), this.newDeps.push(dep), this.depIds.has(id) || dep.addSub(this));
            }, Watcher.prototype.cleanupDeps = function() {
                for (var this$1 = this, i = this.deps.length; i--; ) {
                    var dep = this$1.deps[i];
                    this$1.newDepIds.has(dep.id) || dep.removeSub(this$1);
                }
                var tmp = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = tmp, this.newDepIds.clear(), tmp = this.deps, 
                this.deps = this.newDeps, this.newDeps = tmp, this.newDeps.length = 0;
            }, Watcher.prototype.update = function() {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : queueWatcher(this);
            }, Watcher.prototype.run = function() {
                if (this.active) {
                    var value = this.get();
                    if (value !== this.value || isObject(value) || this.deep) {
                        var oldValue = this.value;
                        if (this.value = value, this.user) try {
                            this.cb.call(this.vm, value, oldValue);
                        } catch (e) {
                            handleError(e, this.vm, 'callback for watcher "' + this.expression + '"');
                        } else this.cb.call(this.vm, value, oldValue);
                    }
                }
            }, Watcher.prototype.evaluate = function() {
                this.value = this.get(), this.dirty = !1;
            }, Watcher.prototype.depend = function() {
                for (var this$1 = this, i = this.deps.length; i--; ) this$1.deps[i].depend();
            }, Watcher.prototype.teardown = function() {
                var this$1 = this;
                if (this.active) {
                    this.vm._isBeingDestroyed || remove(this.vm._watchers, this);
                    for (var i = this.deps.length; i--; ) this$1.deps[i].removeSub(this$1);
                    this.active = !1;
                }
            };
            var sharedPropertyDefinition = {
                enumerable: !0,
                configurable: !0,
                get: noop,
                set: noop
            }, computedWatcherOptions = {
                lazy: !0
            };
            installRenderHelpers(FunctionalRenderContext.prototype);
            var componentVNodeHooks = {
                init: function(vnode, hydrating, parentElm, refElm) {
                    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
                        var mountedNode = vnode;
                        componentVNodeHooks.prepatch(mountedNode, mountedNode);
                    } else {
                        (vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm)).$mount(hydrating ? vnode.elm : void 0, hydrating);
                    }
                },
                prepatch: function(oldVnode, vnode) {
                    var options = vnode.componentOptions;
                    updateChildComponent(vnode.componentInstance = oldVnode.componentInstance, options.propsData, options.listeners, vnode, options.children);
                },
                insert: function(vnode) {
                    var context = vnode.context, componentInstance = vnode.componentInstance;
                    componentInstance._isMounted || (componentInstance._isMounted = !0, callHook(componentInstance, "mounted")), 
                    vnode.data.keepAlive && (context._isMounted ? queueActivatedComponent(componentInstance) : activateChildComponent(componentInstance, !0));
                },
                destroy: function(vnode) {
                    var componentInstance = vnode.componentInstance;
                    componentInstance._isDestroyed || (vnode.data.keepAlive ? deactivateChildComponent(componentInstance, !0) : componentInstance.$destroy());
                }
            }, hooksToMerge = Object.keys(componentVNodeHooks), SIMPLE_NORMALIZE = 1, ALWAYS_NORMALIZE = 2, uid$3 = 0;
            !function(Vue) {
                Vue.prototype._init = function(options) {
                    var vm = this;
                    vm._uid = uid$3++, vm._isVue = !0, options && options._isComponent ? initInternalComponent(vm, options) : vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm), 
                    vm._renderProxy = vm, vm._self = vm, initLifecycle(vm), initEvents(vm), initRender(vm), 
                    callHook(vm, "beforeCreate"), initInjections(vm), initState(vm), initProvide(vm), 
                    callHook(vm, "created"), vm.$options.el && vm.$mount(vm.$options.el);
                };
            }(Vue), function(Vue) {
                var dataDef = {};
                dataDef.get = function() {
                    return this._data;
                };
                var propsDef = {};
                propsDef.get = function() {
                    return this._props;
                }, Object.defineProperty(Vue.prototype, "$data", dataDef), Object.defineProperty(Vue.prototype, "$props", propsDef), 
                Vue.prototype.$set = set, Vue.prototype.$delete = del, Vue.prototype.$watch = function(expOrFn, cb, options) {
                    var vm = this;
                    if (isPlainObject(cb)) return createWatcher(vm, expOrFn, cb, options);
                    options = options || {}, options.user = !0;
                    var watcher = new Watcher(vm, expOrFn, cb, options);
                    return options.immediate && cb.call(vm, watcher.value), function() {
                        watcher.teardown();
                    };
                };
            }(Vue), function(Vue) {
                var hookRE = /^hook:/;
                Vue.prototype.$on = function(event, fn) {
                    var this$1 = this, vm = this;
                    if (Array.isArray(event)) for (var i = 0, l = event.length; i < l; i++) this$1.$on(event[i], fn); else (vm._events[event] || (vm._events[event] = [])).push(fn), 
                    hookRE.test(event) && (vm._hasHookEvent = !0);
                    return vm;
                }, Vue.prototype.$once = function(event, fn) {
                    function on() {
                        vm.$off(event, on), fn.apply(vm, arguments);
                    }
                    var vm = this;
                    return on.fn = fn, vm.$on(event, on), vm;
                }, Vue.prototype.$off = function(event, fn) {
                    var this$1 = this, vm = this;
                    if (!arguments.length) return vm._events = Object.create(null), vm;
                    if (Array.isArray(event)) {
                        for (var i = 0, l = event.length; i < l; i++) this$1.$off(event[i], fn);
                        return vm;
                    }
                    var cbs = vm._events[event];
                    if (!cbs) return vm;
                    if (!fn) return vm._events[event] = null, vm;
                    if (fn) for (var cb, i$1 = cbs.length; i$1--; ) if ((cb = cbs[i$1]) === fn || cb.fn === fn) {
                        cbs.splice(i$1, 1);
                        break;
                    }
                    return vm;
                }, Vue.prototype.$emit = function(event) {
                    var vm = this, cbs = vm._events[event];
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        for (var args = toArray(arguments, 1), i = 0, l = cbs.length; i < l; i++) try {
                            cbs[i].apply(vm, args);
                        } catch (e) {
                            handleError(e, vm, 'event handler for "' + event + '"');
                        }
                    }
                    return vm;
                };
            }(Vue), function(Vue) {
                Vue.prototype._update = function(vnode, hydrating) {
                    var vm = this;
                    vm._isMounted && callHook(vm, "beforeUpdate");
                    var prevEl = vm.$el, prevVnode = vm._vnode, prevActiveInstance = activeInstance;
                    activeInstance = vm, vm._vnode = vnode, prevVnode ? vm.$el = vm.__patch__(prevVnode, vnode) : (vm.$el = vm.__patch__(vm.$el, vnode, hydrating, !1, vm.$options._parentElm, vm.$options._refElm), 
                    vm.$options._parentElm = vm.$options._refElm = null), activeInstance = prevActiveInstance, 
                    prevEl && (prevEl.__vue__ = null), vm.$el && (vm.$el.__vue__ = vm), vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode && (vm.$parent.$el = vm.$el);
                }, Vue.prototype.$forceUpdate = function() {
                    var vm = this;
                    vm._watcher && vm._watcher.update();
                }, Vue.prototype.$destroy = function() {
                    var vm = this;
                    if (!vm._isBeingDestroyed) {
                        callHook(vm, "beforeDestroy"), vm._isBeingDestroyed = !0;
                        var parent = vm.$parent;
                        !parent || parent._isBeingDestroyed || vm.$options.abstract || remove(parent.$children, vm), 
                        vm._watcher && vm._watcher.teardown();
                        for (var i = vm._watchers.length; i--; ) vm._watchers[i].teardown();
                        vm._data.__ob__ && vm._data.__ob__.vmCount--, vm._isDestroyed = !0, vm.__patch__(vm._vnode, null), 
                        callHook(vm, "destroyed"), vm.$off(), vm.$el && (vm.$el.__vue__ = null), vm.$vnode && (vm.$vnode.parent = null);
                    }
                };
            }(Vue), function(Vue) {
                installRenderHelpers(Vue.prototype), Vue.prototype.$nextTick = function(fn) {
                    return nextTick(fn, this);
                }, Vue.prototype._render = function() {
                    var vm = this, ref = vm.$options, render = ref.render, _parentVnode = ref._parentVnode;
                    _parentVnode && (vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject), 
                    vm.$vnode = _parentVnode;
                    var vnode;
                    try {
                        vnode = render.call(vm._renderProxy, vm.$createElement);
                    } catch (e) {
                        handleError(e, vm, "render"), vnode = vm._vnode;
                    }
                    return vnode instanceof VNode || (vnode = createEmptyVNode()), vnode.parent = _parentVnode, 
                    vnode;
                };
            }(Vue);
            var patternTypes = [ String, RegExp, Array ], KeepAlive = {
                name: "keep-alive",
                abstract: !0,
                props: {
                    include: patternTypes,
                    exclude: patternTypes,
                    max: [ String, Number ]
                },
                created: function() {
                    this.cache = Object.create(null), this.keys = [];
                },
                destroyed: function() {
                    var this$1 = this;
                    for (var key in this$1.cache) pruneCacheEntry(this$1.cache, key, this$1.keys);
                },
                mounted: function() {
                    var this$1 = this;
                    this.$watch("include", function(val) {
                        pruneCache(this$1, function(name) {
                            return matches(val, name);
                        });
                    }), this.$watch("exclude", function(val) {
                        pruneCache(this$1, function(name) {
                            return !matches(val, name);
                        });
                    });
                },
                render: function() {
                    var slot = this.$slots.default, vnode = getFirstComponentChild(slot), componentOptions = vnode && vnode.componentOptions;
                    if (componentOptions) {
                        var name = getComponentName(componentOptions), ref = this, include = ref.include, exclude = ref.exclude;
                        if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) return vnode;
                        var ref$1 = this, cache = ref$1.cache, keys = ref$1.keys, key = null == vnode.key ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : "") : vnode.key;
                        cache[key] ? (vnode.componentInstance = cache[key].componentInstance, remove(keys, key), 
                        keys.push(key)) : (cache[key] = vnode, keys.push(key), this.max && keys.length > parseInt(this.max) && pruneCacheEntry(cache, keys[0], keys, this._vnode)), 
                        vnode.data.keepAlive = !0;
                    }
                    return vnode || slot && slot[0];
                }
            }, builtInComponents = {
                KeepAlive: KeepAlive
            };
            !function(Vue) {
                var configDef = {};
                configDef.get = function() {
                    return config;
                }, Object.defineProperty(Vue, "config", configDef), Vue.util = {
                    warn: warn,
                    extend: extend,
                    mergeOptions: mergeOptions,
                    defineReactive: defineReactive
                }, Vue.set = set, Vue.delete = del, Vue.nextTick = nextTick, Vue.options = Object.create(null), 
                ASSET_TYPES.forEach(function(type) {
                    Vue.options[type + "s"] = Object.create(null);
                }), Vue.options._base = Vue, extend(Vue.options.components, builtInComponents), 
                initUse(Vue), initMixin$1(Vue), initExtend(Vue), initAssetRegisters(Vue);
            }(Vue), Object.defineProperty(Vue.prototype, "$isServer", {
                get: isServerRendering
            }), Object.defineProperty(Vue.prototype, "$ssrContext", {
                get: function() {
                    return this.$vnode && this.$vnode.ssrContext;
                }
            }), Object.defineProperty(Vue, "FunctionalRenderContext", {
                value: FunctionalRenderContext
            }), Vue.version = "2.5.16";
            var target$1, emptyStyle, isReservedAttr = makeMap("style,class"), acceptValue = makeMap("input,textarea,option,select,progress"), mustUseProp = function(tag, type, attr) {
                return "value" === attr && acceptValue(tag) && "button" !== type || "selected" === attr && "option" === tag || "checked" === attr && "input" === tag || "muted" === attr && "video" === tag;
            }, isEnumeratedAttr = makeMap("contenteditable,draggable,spellcheck"), isBooleanAttr = makeMap("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), xlinkNS = "http://www.w3.org/1999/xlink", isXlink = function(name) {
                return ":" === name.charAt(5) && "xlink" === name.slice(0, 5);
            }, getXlinkProp = function(name) {
                return isXlink(name) ? name.slice(6, name.length) : "";
            }, isFalsyAttrValue = function(val) {
                return null == val || !1 === val;
            }, namespaceMap = {
                svg: "http://www.w3.org/2000/svg",
                math: "http://www.w3.org/1998/Math/MathML"
            }, isHTMLTag = makeMap("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), isSVG = makeMap("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), isReservedTag = function(tag) {
                return isHTMLTag(tag) || isSVG(tag);
            }, unknownElementCache = Object.create(null), isTextInputType = makeMap("text,number,password,search,email,tel,url"), nodeOps = Object.freeze({
                createElement: createElement$1,
                createElementNS: createElementNS,
                createTextNode: createTextNode,
                createComment: createComment,
                insertBefore: insertBefore,
                removeChild: removeChild,
                appendChild: appendChild,
                parentNode: parentNode,
                nextSibling: nextSibling,
                tagName: tagName,
                setTextContent: setTextContent,
                setStyleScope: setStyleScope
            }), ref = {
                create: function(_, vnode) {
                    registerRef(vnode);
                },
                update: function(oldVnode, vnode) {
                    oldVnode.data.ref !== vnode.data.ref && (registerRef(oldVnode, !0), registerRef(vnode));
                },
                destroy: function(vnode) {
                    registerRef(vnode, !0);
                }
            }, emptyNode = new VNode("", {}, []), hooks = [ "create", "activate", "update", "remove", "destroy" ], directives = {
                create: updateDirectives,
                update: updateDirectives,
                destroy: function(vnode) {
                    updateDirectives(vnode, emptyNode);
                }
            }, emptyModifiers = Object.create(null), baseModules = [ ref, directives ], attrs = {
                create: updateAttrs,
                update: updateAttrs
            }, klass = {
                create: updateClass,
                update: updateClass
            }, RANGE_TOKEN = "__r", CHECKBOX_RADIO_TOKEN = "__c", events = {
                create: updateDOMListeners,
                update: updateDOMListeners
            }, domProps = {
                create: updateDOMProps,
                update: updateDOMProps
            }, parseStyleText = cached(function(cssText) {
                var res = {}, listDelimiter = /;(?![^(]*\))/g, propertyDelimiter = /:(.+)/;
                return cssText.split(listDelimiter).forEach(function(item) {
                    if (item) {
                        var tmp = item.split(propertyDelimiter);
                        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                    }
                }), res;
            }), cssVarRE = /^--/, importantRE = /\s*!important$/, setProp = function(el, name, val) {
                if (cssVarRE.test(name)) el.style.setProperty(name, val); else if (importantRE.test(val)) el.style.setProperty(name, val.replace(importantRE, ""), "important"); else {
                    var normalizedName = normalize(name);
                    if (Array.isArray(val)) for (var i = 0, len = val.length; i < len; i++) el.style[normalizedName] = val[i]; else el.style[normalizedName] = val;
                }
            }, vendorNames = [ "Webkit", "Moz", "ms" ], normalize = cached(function(prop) {
                if (emptyStyle = emptyStyle || document.createElement("div").style, "filter" !== (prop = camelize(prop)) && prop in emptyStyle) return prop;
                for (var capName = prop.charAt(0).toUpperCase() + prop.slice(1), i = 0; i < vendorNames.length; i++) {
                    var name = vendorNames[i] + capName;
                    if (name in emptyStyle) return name;
                }
            }), style = {
                create: updateStyle,
                update: updateStyle
            }, autoCssTransition = cached(function(name) {
                return {
                    enterClass: name + "-enter",
                    enterToClass: name + "-enter-to",
                    enterActiveClass: name + "-enter-active",
                    leaveClass: name + "-leave",
                    leaveToClass: name + "-leave-to",
                    leaveActiveClass: name + "-leave-active"
                };
            }), hasTransition = inBrowser && !isIE9, TRANSITION = "transition", ANIMATION = "animation", transitionProp = "transition", transitionEndEvent = "transitionend", animationProp = "animation", animationEndEvent = "animationend";
            hasTransition && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (transitionProp = "WebkitTransition", 
            transitionEndEvent = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (animationProp = "WebkitAnimation", 
            animationEndEvent = "webkitAnimationEnd"));
            var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(fn) {
                return fn();
            }, transformRE = /\b(transform|all)(,|$)/, transition = inBrowser ? {
                create: _enter,
                activate: _enter,
                remove: function(vnode, rm) {
                    !0 !== vnode.data.show ? leave(vnode, rm) : rm();
                }
            } : {}, platformModules = [ attrs, klass, events, domProps, style, transition ], modules = platformModules.concat(baseModules), patch = function(backend) {
                function emptyNodeAt(elm) {
                    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], void 0, elm);
                }
                function createRmCb(childElm, listeners) {
                    function remove() {
                        0 == --remove.listeners && removeNode(childElm);
                    }
                    return remove.listeners = listeners, remove;
                }
                function removeNode(el) {
                    var parent = nodeOps.parentNode(el);
                    isDef(parent) && nodeOps.removeChild(parent, el);
                }
                function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
                    if (isDef(vnode.elm) && isDef(ownerArray) && (vnode = ownerArray[index] = cloneVNode(vnode)), 
                    vnode.isRootInsert = !nested, !createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                        var data = vnode.data, children = vnode.children, tag = vnode.tag;
                        isDef(tag) ? (vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode), 
                        setScope(vnode), createChildren(vnode, children, insertedVnodeQueue), isDef(data) && invokeCreateHooks(vnode, insertedVnodeQueue), 
                        insert(parentElm, vnode.elm, refElm)) : isTrue(vnode.isComment) ? (vnode.elm = nodeOps.createComment(vnode.text), 
                        insert(parentElm, vnode.elm, refElm)) : (vnode.elm = nodeOps.createTextNode(vnode.text), 
                        insert(parentElm, vnode.elm, refElm));
                    }
                }
                function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i = vnode.data;
                    if (isDef(i)) {
                        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                        if (isDef(i = i.hook) && isDef(i = i.init) && i(vnode, !1, parentElm, refElm), isDef(vnode.componentInstance)) return initComponent(vnode, insertedVnodeQueue), 
                        isTrue(isReactivated) && reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm), 
                        !0;
                    }
                }
                function initComponent(vnode, insertedVnodeQueue) {
                    isDef(vnode.data.pendingInsert) && (insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert), 
                    vnode.data.pendingInsert = null), vnode.elm = vnode.componentInstance.$el, isPatchable(vnode) ? (invokeCreateHooks(vnode, insertedVnodeQueue), 
                    setScope(vnode)) : (registerRef(vnode), insertedVnodeQueue.push(vnode));
                }
                function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    for (var i, innerNode = vnode; innerNode.componentInstance; ) if (innerNode = innerNode.componentInstance._vnode, 
                    isDef(i = innerNode.data) && isDef(i = i.transition)) {
                        for (i = 0; i < cbs.activate.length; ++i) cbs.activate[i](emptyNode, innerNode);
                        insertedVnodeQueue.push(innerNode);
                        break;
                    }
                    insert(parentElm, vnode.elm, refElm);
                }
                function insert(parent, elm, ref$$1) {
                    isDef(parent) && (isDef(ref$$1) ? ref$$1.parentNode === parent && nodeOps.insertBefore(parent, elm, ref$$1) : nodeOps.appendChild(parent, elm));
                }
                function createChildren(vnode, children, insertedVnodeQueue) {
                    if (Array.isArray(children)) for (var i = 0; i < children.length; ++i) createElm(children[i], insertedVnodeQueue, vnode.elm, null, !0, children, i); else isPrimitive(vnode.text) && nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
                }
                function isPatchable(vnode) {
                    for (;vnode.componentInstance; ) vnode = vnode.componentInstance._vnode;
                    return isDef(vnode.tag);
                }
                function invokeCreateHooks(vnode, insertedVnodeQueue) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, vnode);
                    i = vnode.data.hook, isDef(i) && (isDef(i.create) && i.create(emptyNode, vnode), 
                    isDef(i.insert) && insertedVnodeQueue.push(vnode));
                }
                function setScope(vnode) {
                    var i;
                    if (isDef(i = vnode.fnScopeId)) nodeOps.setStyleScope(vnode.elm, i); else for (var ancestor = vnode; ancestor; ) isDef(i = ancestor.context) && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i), 
                    ancestor = ancestor.parent;
                    isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId) && nodeOps.setStyleScope(vnode.elm, i);
                }
                function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                    for (;startIdx <= endIdx; ++startIdx) createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, !1, vnodes, startIdx);
                }
                function invokeDestroyHook(vnode) {
                    var i, j, data = vnode.data;
                    if (isDef(data)) for (isDef(i = data.hook) && isDef(i = i.destroy) && i(vnode), 
                    i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
                    if (isDef(i = vnode.children)) for (j = 0; j < vnode.children.length; ++j) invokeDestroyHook(vnode.children[j]);
                }
                function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
                    for (;startIdx <= endIdx; ++startIdx) {
                        var ch = vnodes[startIdx];
                        isDef(ch) && (isDef(ch.tag) ? (removeAndInvokeRemoveHook(ch), invokeDestroyHook(ch)) : removeNode(ch.elm));
                    }
                }
                function removeAndInvokeRemoveHook(vnode, rm) {
                    if (isDef(rm) || isDef(vnode.data)) {
                        var i, listeners = cbs.remove.length + 1;
                        for (isDef(rm) ? rm.listeners += listeners : rm = createRmCb(vnode.elm, listeners), 
                        isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data) && removeAndInvokeRemoveHook(i, rm), 
                        i = 0; i < cbs.remove.length; ++i) cbs.remove[i](vnode, rm);
                        isDef(i = vnode.data.hook) && isDef(i = i.remove) ? i(vnode, rm) : rm();
                    } else removeNode(vnode.elm);
                }
                function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                    for (var oldKeyToIdx, idxInOld, vnodeToMove, refElm, oldStartIdx = 0, newStartIdx = 0, oldEndIdx = oldCh.length - 1, oldStartVnode = oldCh[0], oldEndVnode = oldCh[oldEndIdx], newEndIdx = newCh.length - 1, newStartVnode = newCh[0], newEndVnode = newCh[newEndIdx], canMove = !removeOnly; oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx; ) isUndef(oldStartVnode) ? oldStartVnode = oldCh[++oldStartIdx] : isUndef(oldEndVnode) ? oldEndVnode = oldCh[--oldEndIdx] : sameVnode(oldStartVnode, newStartVnode) ? (patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue), 
                    oldStartVnode = oldCh[++oldStartIdx], newStartVnode = newCh[++newStartIdx]) : sameVnode(oldEndVnode, newEndVnode) ? (patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue), 
                    oldEndVnode = oldCh[--oldEndIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldStartVnode, newEndVnode) ? (patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue), 
                    canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm)), 
                    oldStartVnode = oldCh[++oldStartIdx], newEndVnode = newCh[--newEndIdx]) : sameVnode(oldEndVnode, newStartVnode) ? (patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue), 
                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm), 
                    oldEndVnode = oldCh[--oldEndIdx], newStartVnode = newCh[++newStartIdx]) : (isUndef(oldKeyToIdx) && (oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)), 
                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx), 
                    isUndef(idxInOld) ? createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx) : (vnodeToMove = oldCh[idxInOld], 
                    sameVnode(vnodeToMove, newStartVnode) ? (patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue), 
                    oldCh[idxInOld] = void 0, canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)) : createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, !1, newCh, newStartIdx)), 
                    newStartVnode = newCh[++newStartIdx]);
                    oldStartIdx > oldEndIdx ? (refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm, 
                    addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)) : newStartIdx > newEndIdx && removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
                }
                function findIdxInOld(node, oldCh, start, end) {
                    for (var i = start; i < end; i++) {
                        var c = oldCh[i];
                        if (isDef(c) && sameVnode(node, c)) return i;
                    }
                }
                function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
                    if (oldVnode !== vnode) {
                        var elm = vnode.elm = oldVnode.elm;
                        if (isTrue(oldVnode.isAsyncPlaceholder)) return void (isDef(vnode.asyncFactory.resolved) ? hydrate(oldVnode.elm, vnode, insertedVnodeQueue) : vnode.isAsyncPlaceholder = !0);
                        if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) return void (vnode.componentInstance = oldVnode.componentInstance);
                        var i, data = vnode.data;
                        isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch) && i(oldVnode, vnode);
                        var oldCh = oldVnode.children, ch = vnode.children;
                        if (isDef(data) && isPatchable(vnode)) {
                            for (i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
                            isDef(i = data.hook) && isDef(i = i.update) && i(oldVnode, vnode);
                        }
                        isUndef(vnode.text) ? isDef(oldCh) && isDef(ch) ? oldCh !== ch && updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) : isDef(ch) ? (isDef(oldVnode.text) && nodeOps.setTextContent(elm, ""), 
                        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)) : isDef(oldCh) ? removeVnodes(elm, oldCh, 0, oldCh.length - 1) : isDef(oldVnode.text) && nodeOps.setTextContent(elm, "") : oldVnode.text !== vnode.text && nodeOps.setTextContent(elm, vnode.text), 
                        isDef(data) && isDef(i = data.hook) && isDef(i = i.postpatch) && i(oldVnode, vnode);
                    }
                }
                function invokeInsertHook(vnode, queue, initial) {
                    if (isTrue(initial) && isDef(vnode.parent)) vnode.parent.data.pendingInsert = queue; else for (var i = 0; i < queue.length; ++i) queue[i].data.hook.insert(queue[i]);
                }
                function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
                    var i, tag = vnode.tag, data = vnode.data, children = vnode.children;
                    if (inVPre = inVPre || data && data.pre, vnode.elm = elm, isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) return vnode.isAsyncPlaceholder = !0, 
                    !0;
                    if (isDef(data) && (isDef(i = data.hook) && isDef(i = i.init) && i(vnode, !0), isDef(i = vnode.componentInstance))) return initComponent(vnode, insertedVnodeQueue), 
                    !0;
                    if (isDef(tag)) {
                        if (isDef(children)) if (elm.hasChildNodes()) if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                            if (i !== elm.innerHTML) return !1;
                        } else {
                            for (var childrenMatch = !0, childNode = elm.firstChild, i$1 = 0; i$1 < children.length; i$1++) {
                                if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                                    childrenMatch = !1;
                                    break;
                                }
                                childNode = childNode.nextSibling;
                            }
                            if (!childrenMatch || childNode) return !1;
                        } else createChildren(vnode, children, insertedVnodeQueue);
                        if (isDef(data)) {
                            var fullInvoke = !1;
                            for (var key in data) if (!isRenderedModule(key)) {
                                fullInvoke = !0, invokeCreateHooks(vnode, insertedVnodeQueue);
                                break;
                            }
                            !fullInvoke && data.class && traverse(data.class);
                        }
                    } else elm.data !== vnode.text && (elm.data = vnode.text);
                    return !0;
                }
                var i, j, cbs = {}, modules = backend.modules, nodeOps = backend.nodeOps;
                for (i = 0; i < hooks.length; ++i) for (cbs[hooks[i]] = [], j = 0; j < modules.length; ++j) isDef(modules[j][hooks[i]]) && cbs[hooks[i]].push(modules[j][hooks[i]]);
                var isRenderedModule = makeMap("attrs,class,staticClass,staticStyle,key");
                return function(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
                    if (isUndef(vnode)) return void (isDef(oldVnode) && invokeDestroyHook(oldVnode));
                    var isInitialPatch = !1, insertedVnodeQueue = [];
                    if (isUndef(oldVnode)) isInitialPatch = !0, createElm(vnode, insertedVnodeQueue, parentElm, refElm); else {
                        var isRealElement = isDef(oldVnode.nodeType);
                        if (!isRealElement && sameVnode(oldVnode, vnode)) patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly); else {
                            if (isRealElement) {
                                if (1 === oldVnode.nodeType && oldVnode.hasAttribute(SSR_ATTR) && (oldVnode.removeAttribute(SSR_ATTR), 
                                hydrating = !0), isTrue(hydrating) && hydrate(oldVnode, vnode, insertedVnodeQueue)) return invokeInsertHook(vnode, insertedVnodeQueue, !0), 
                                oldVnode;
                                oldVnode = emptyNodeAt(oldVnode);
                            }
                            var oldElm = oldVnode.elm, parentElm$1 = nodeOps.parentNode(oldElm);
                            if (createElm(vnode, insertedVnodeQueue, oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm)), 
                            isDef(vnode.parent)) for (var ancestor = vnode.parent, patchable = isPatchable(vnode); ancestor; ) {
                                for (var i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](ancestor);
                                if (ancestor.elm = vnode.elm, patchable) {
                                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) cbs.create[i$1](emptyNode, ancestor);
                                    var insert = ancestor.data.hook.insert;
                                    if (insert.merged) for (var i$2 = 1; i$2 < insert.fns.length; i$2++) insert.fns[i$2]();
                                } else registerRef(ancestor);
                                ancestor = ancestor.parent;
                            }
                            isDef(parentElm$1) ? removeVnodes(parentElm$1, [ oldVnode ], 0, 0) : isDef(oldVnode.tag) && invokeDestroyHook(oldVnode);
                        }
                    }
                    return invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch), vnode.elm;
                };
            }({
                nodeOps: nodeOps,
                modules: modules
            });
            isIE9 && document.addEventListener("selectionchange", function() {
                var el = document.activeElement;
                el && el.vmodel && trigger(el, "input");
            });
            var directive = {
                inserted: function(el, binding, vnode, oldVnode) {
                    "select" === vnode.tag ? (oldVnode.elm && !oldVnode.elm._vOptions ? mergeVNodeHook(vnode, "postpatch", function() {
                        directive.componentUpdated(el, binding, vnode);
                    }) : setSelected(el, binding, vnode.context), el._vOptions = [].map.call(el.options, getValue)) : ("textarea" === vnode.tag || isTextInputType(el.type)) && (el._vModifiers = binding.modifiers, 
                    binding.modifiers.lazy || (el.addEventListener("compositionstart", onCompositionStart), 
                    el.addEventListener("compositionend", onCompositionEnd), el.addEventListener("change", onCompositionEnd), 
                    isIE9 && (el.vmodel = !0)));
                },
                componentUpdated: function(el, binding, vnode) {
                    if ("select" === vnode.tag) {
                        setSelected(el, binding, vnode.context);
                        var prevOptions = el._vOptions, curOptions = el._vOptions = [].map.call(el.options, getValue);
                        if (curOptions.some(function(o, i) {
                            return !looseEqual(o, prevOptions[i]);
                        })) {
                            (el.multiple ? binding.value.some(function(v) {
                                return hasNoMatchingOption(v, curOptions);
                            }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)) && trigger(el, "change");
                        }
                    }
                }
            }, show = {
                bind: function(el, ref, vnode) {
                    var value = ref.value;
                    vnode = locateNode(vnode);
                    var transition$$1 = vnode.data && vnode.data.transition, originalDisplay = el.__vOriginalDisplay = "none" === el.style.display ? "" : el.style.display;
                    value && transition$$1 ? (vnode.data.show = !0, enter(vnode, function() {
                        el.style.display = originalDisplay;
                    })) : el.style.display = value ? originalDisplay : "none";
                },
                update: function(el, ref, vnode) {
                    var value = ref.value;
                    !value != !ref.oldValue && (vnode = locateNode(vnode), vnode.data && vnode.data.transition ? (vnode.data.show = !0, 
                    value ? enter(vnode, function() {
                        el.style.display = el.__vOriginalDisplay;
                    }) : leave(vnode, function() {
                        el.style.display = "none";
                    })) : el.style.display = value ? el.__vOriginalDisplay : "none");
                },
                unbind: function(el, binding, vnode, oldVnode, isDestroy) {
                    isDestroy || (el.style.display = el.__vOriginalDisplay);
                }
            }, platformDirectives = {
                model: directive,
                show: show
            }, transitionProps = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [ Number, String, Object ]
            }, Transition = {
                name: "transition",
                props: transitionProps,
                abstract: !0,
                render: function(h) {
                    var this$1 = this, children = this.$slots.default;
                    if (children && (children = children.filter(function(c) {
                        return c.tag || isAsyncPlaceholder(c);
                    }), children.length)) {
                        var mode = this.mode, rawChild = children[0];
                        if (hasParentTransition(this.$vnode)) return rawChild;
                        var child = getRealChild(rawChild);
                        if (!child) return rawChild;
                        if (this._leaving) return placeholder(h, rawChild);
                        var id = "__transition-" + this._uid + "-";
                        child.key = null == child.key ? child.isComment ? id + "comment" : id + child.tag : isPrimitive(child.key) ? 0 === String(child.key).indexOf(id) ? child.key : id + child.key : child.key;
                        var data = (child.data || (child.data = {})).transition = extractTransitionData(this), oldRawChild = this._vnode, oldChild = getRealChild(oldRawChild);
                        if (child.data.directives && child.data.directives.some(function(d) {
                            return "show" === d.name;
                        }) && (child.data.show = !0), oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && (!oldChild.componentInstance || !oldChild.componentInstance._vnode.isComment)) {
                            var oldData = oldChild.data.transition = extend({}, data);
                            if ("out-in" === mode) return this._leaving = !0, mergeVNodeHook(oldData, "afterLeave", function() {
                                this$1._leaving = !1, this$1.$forceUpdate();
                            }), placeholder(h, rawChild);
                            if ("in-out" === mode) {
                                if (isAsyncPlaceholder(child)) return oldRawChild;
                                var delayedLeave, performLeave = function() {
                                    delayedLeave();
                                };
                                mergeVNodeHook(data, "afterEnter", performLeave), mergeVNodeHook(data, "enterCancelled", performLeave), 
                                mergeVNodeHook(oldData, "delayLeave", function(leave) {
                                    delayedLeave = leave;
                                });
                            }
                        }
                        return rawChild;
                    }
                }
            }, props = extend({
                tag: String,
                moveClass: String
            }, transitionProps);
            delete props.mode;
            var TransitionGroup = {
                props: props,
                render: function(h) {
                    for (var tag = this.tag || this.$vnode.data.tag || "span", map = Object.create(null), prevChildren = this.prevChildren = this.children, rawChildren = this.$slots.default || [], children = this.children = [], transitionData = extractTransitionData(this), i = 0; i < rawChildren.length; i++) {
                        var c = rawChildren[i];
                        if (c.tag) if (null != c.key && 0 !== String(c.key).indexOf("__vlist")) children.push(c), 
                        map[c.key] = c, (c.data || (c.data = {})).transition = transitionData; else ;
                    }
                    if (prevChildren) {
                        for (var kept = [], removed = [], i$1 = 0; i$1 < prevChildren.length; i$1++) {
                            var c$1 = prevChildren[i$1];
                            c$1.data.transition = transitionData, c$1.data.pos = c$1.elm.getBoundingClientRect(), 
                            map[c$1.key] ? kept.push(c$1) : removed.push(c$1);
                        }
                        this.kept = h(tag, null, kept), this.removed = removed;
                    }
                    return h(tag, null, children);
                },
                beforeUpdate: function() {
                    this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
                },
                updated: function() {
                    var children = this.prevChildren, moveClass = this.moveClass || (this.name || "v") + "-move";
                    children.length && this.hasMove(children[0].elm, moveClass) && (children.forEach(callPendingCbs), 
                    children.forEach(recordPosition), children.forEach(applyTranslation), this._reflow = document.body.offsetHeight, 
                    children.forEach(function(c) {
                        if (c.data.moved) {
                            var el = c.elm, s = el.style;
                            addTransitionClass(el, moveClass), s.transform = s.WebkitTransform = s.transitionDuration = "", 
                            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                                e && !/transform$/.test(e.propertyName) || (el.removeEventListener(transitionEndEvent, cb), 
                                el._moveCb = null, removeTransitionClass(el, moveClass));
                            });
                        }
                    }));
                },
                methods: {
                    hasMove: function(el, moveClass) {
                        if (!hasTransition) return !1;
                        if (this._hasMove) return this._hasMove;
                        var clone = el.cloneNode();
                        el._transitionClasses && el._transitionClasses.forEach(function(cls) {
                            removeClass(clone, cls);
                        }), addClass(clone, moveClass), clone.style.display = "none", this.$el.appendChild(clone);
                        var info = getTransitionInfo(clone);
                        return this.$el.removeChild(clone), this._hasMove = info.hasTransform;
                    }
                }
            }, platformComponents = {
                Transition: Transition,
                TransitionGroup: TransitionGroup
            };
            Vue.config.mustUseProp = mustUseProp, Vue.config.isReservedTag = isReservedTag, 
            Vue.config.isReservedAttr = isReservedAttr, Vue.config.getTagNamespace = getTagNamespace, 
            Vue.config.isUnknownElement = isUnknownElement, extend(Vue.options.directives, platformDirectives), 
            extend(Vue.options.components, platformComponents), Vue.prototype.__patch__ = inBrowser ? patch : noop, 
            Vue.prototype.$mount = function(el, hydrating) {
                return el = el && inBrowser ? query(el) : void 0, mountComponent(this, el, hydrating);
            }, inBrowser && setTimeout(function() {
                config.devtools && devtools && devtools.emit("init", Vue);
            }, 0), __webpack_exports__.a = Vue;
        }).call(__webpack_exports__, __webpack_require__(5), __webpack_require__(50).setImmediate);
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__ = __webpack_require__(15);
        __webpack_exports__.a = {
            name: "yandexMap",
            data: function() {
                return {
                    map: null,
                    YandexMapBus: __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__.a,
                    mapId: "yandex-map-" + Math.round(1e6 * Math.random()),
                    style: this.ymapClass ? "" : "width: 100%; height: 100%; min-height: 10px",
                    mapClass: "yandex-map"
                };
            },
            props: {
                center: {
                    type: Array,
                    validator: function(val) {
                        return !val.filter(function(item) {
                            return isNaN(item);
                        }).length;
                    },
                    required: !1
                },
                controls: {
                    type: Array,
                    validator: function(val) {
                        return !val.filter(function(item) {
                            return isNaN(item);
                        }).length;
                    },
                    required: !1,
                    default: function() {
                        return [];
                    }
                },
                zoom: {
                    validator: function(val) {
                        return !isNaN(val);
                    },
                    default: 15
                },
                dragable: {
                    type: Boolean,
                    default: !0
                },
                scrollZoom: {
                    type: Boolean,
                    default: !0
                }
            },
            methods: {
                getMap: function() {
                    return this.map;
                },
                init: function() {
                    var _this = this;
                    console.log("on yandexmap-ready");
                    var center = this.center ? this.center : [ 55.753215, 37.622504 ];
                    this.map = new window.ymaps.Map(this.mapId, {
                        center: center,
                        zoom: this.zoom,
                        controls: this.controls,
                        type: "yandex#map"
                    }, {}), this.dragable || this.map.behaviors.disable("drag"), this.scrollZoom || this.map.behaviors.disable("scrollZoom"), 
                    this.map.events.add("click", function(e) {
                        var position = e.get("coordPosition");
                        _this.$emit("click", _this.map, position);
                    }), this.map.events.add("boundschange", function(e) {
                        var newBounds = e.get("newBounds");
                        _this.$emit("boundschange", _this.map, newBounds);
                    }), this.$emit("created", this.map);
                }
            },
            mounted: function() {
                var _this2 = this;
                this.YandexMapBus.attachScript(), this.YandexMapBus.$on("yandexmap-attached", function() {}), 
                this.YandexMapBus.$on("yandexmap-loaded", function() {}), this.YandexMapBus.$on("yandexmap-ready", function() {
                    _this2.init();
                }), this.YandexMapBus.ymapReady && this.init();
            },
            watch: {},
            beforeDestroy: function() {
                this.$emit("destroy", this.map);
            }
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(13), YandexMapBus = new __WEBPACK_IMPORTED_MODULE_0_vue__.a({
            options: {},
            data: function() {
                return {
                    options: this.options,
                    events: {},
                    ymapReady: !1,
                    scriptAttached: !1
                };
            },
            created: function() {},
            methods: {
                attachScript: function() {
                    var _this = this;
                    if (!this.scriptAttached) {
                        var src = "//api-maps.yandex.ru/" + __WEBPACK_IMPORTED_MODULE_0_vue__.a.yandexMapOptions.version + "/?lang=" + __WEBPACK_IMPORTED_MODULE_0_vue__.a.yandexMapOptions.lang;
                        __WEBPACK_IMPORTED_MODULE_0_vue__.a.yandexMapOptions.apiKey.length && (src += "apikey=" + __WEBPACK_IMPORTED_MODULE_0_vue__.a.yandexMapOptions.apiKey);
                        var yandexMapScript = document.createElement("SCRIPT");
                        yandexMapScript.setAttribute("src", src), yandexMapScript.setAttribute("async", ""), 
                        yandexMapScript.setAttribute("defer", ""), yandexMapScript.onload = function() {
                            _this.$emit("yandexmap-loaded"), window.ymaps.ready(function() {
                                _this.ymapReady = !0, _this.$emit("yandexmap-ready");
                            });
                        }, document.body.appendChild(yandexMapScript), this.scriptAttached = !0, this.$emit("yandexmap-attached");
                    }
                },
                init: function(options) {
                    console.log("init ========", options);
                },
                isReady: function() {
                    return this.ymapReady;
                }
            }
        });
        __webpack_exports__.a = YandexMapBus;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
            scriptExports = scriptExports || {};
            var type = typeof scriptExports.default;
            "object" !== type && "function" !== type || (scriptExports = scriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            render && (options.render = render, options.staticRenderFns = staticRenderFns, options._compiled = !0), 
            functionalTemplate && (options.functional = !0), scopeId && (options._scopeId = scopeId);
            var hook;
            if (moduleIdentifier ? (hook = function(context) {
                context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, 
                context || "undefined" == typeof __VUE_SSR_CONTEXT__ || (context = __VUE_SSR_CONTEXT__), 
                injectStyles && injectStyles.call(this, context), context && context._registeredComponents && context._registeredComponents.add(moduleIdentifier);
            }, options._ssrRegister = hook) : injectStyles && (hook = shadowMode ? function() {
                injectStyles.call(this, this.$root.$options.shadowRoot);
            } : injectStyles), hook) if (options.functional) {
                options._injectStyles = hook;
                var originalRender = options.render;
                options.render = function(h, context) {
                    return hook.call(context), originalRender(h, context);
                };
            } else {
                var existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [ hook ];
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        __webpack_exports__.a = normalizeComponent;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__ = __webpack_require__(15);
        __webpack_exports__.a = {
            name: "RegionSelect",
            data: function() {
                return {
                    map: null,
                    drag: !1,
                    selected: !1,
                    mapInit: !1,
                    dragger: null,
                    dragger_polygon: null,
                    dragger_polyline: null
                };
            },
            props: {
                region: {
                    type: Array,
                    required: !1,
                    default: function() {
                        return [];
                    }
                },
                buttonText: {
                    type: String,
                    required: !1,
                    default: "Select region"
                },
                buttonSelectedText: {
                    type: String,
                    required: !1,
                    default: "Clear selection"
                },
                buttonCancelText: {
                    type: String,
                    required: !1,
                    default: "Cancel"
                },
                buttonClass: {
                    type: String,
                    required: !1,
                    default: ""
                }
            },
            methods: {
                buttonClick: function(e) {
                    e.preventDefault(), e.stopPropagation(), !1 === this.selected && !1 === this.drag ? this.initDragger() : !1 === this.selected && !0 === this.drag ? this.stopDragger() : !0 === this.selected && this.removeDragger();
                },
                init: function($map) {
                    this.map = $map, Array.isArray(this.region) && this.region.length > 0 && (this.dragger_polygon = new ymaps.Polygon([ this.region.slice() ], {
                        hintContent: ""
                    }, {
                        fillColor: "#6699ff",
                        interactivityModel: "default#transparent",
                        strokeWidth: 1,
                        opacity: .2
                    }), this.selected = !0, this.map.geoObjects.add(this.dragger_polygon), this.$emit("changed", this.region));
                },
                stopDragger: function() {
                    console.log("stopDragger"), this.dragger.events.group().removeAll(), this.drag = !1;
                },
                initDragger: function() {
                    var _this = this;
                    if (!this.map) return console.warn("yandexmap: map not ready"), null;
                    var vm = this;
                    this.drag = !0;
                    var cursor = this.map.cursors.push("crosshair");
                    this.map.behaviors.disable("drag"), this.map.events.add("mousedown", function(e) {
                        var coordinates = [ _this.convert(e.get("position")) ], listeners = _this.dragger.events.group();
                        listeners.add("move", function(e) {
                            coordinates.push(_this.convert(e.get("position"))), _this.dragger_polyline ? _this.dragger_polyline.geometry.setCoordinates(coordinates.slice()) : (_this.dragger_polyline = new ymaps.Polyline(coordinates.slice(), {}, {
                                strokeColor: "#e4300e",
                                strokeWidth: 2,
                                strokeStyle: "0 0"
                            }), _this.map.geoObjects.add(vm.dragger_polyline));
                        }).add("stop", function(e) {
                            _this.drag = !1, cursor.remove(), _this.map.behaviors.enable("drag"), _this.dragger_polyline && (_this.map.geoObjects.remove(vm.dragger_polyline), 
                            _this.dragger_polyline = null), coordinates.length > 2 ? (_this.dragger_polygon && _this.map.geoObjects.remove(vm.dragger_polygon), 
                            _this.dragger_polygon = new ymaps.Polygon([ coordinates.slice() ], {
                                hintContent: ""
                            }, {
                                fillColor: "#6699ff",
                                interactivityModel: "default#transparent",
                                strokeWidth: 1,
                                opacity: .2
                            }), _this.map.geoObjects.add(vm.dragger_polygon), _this.$emit("changed", coordinates, vm.dragger_polygon), 
                            _this.selected = !0) : (_this.selected = !1, _this.$emit("changed", [], vm.dragger_polygon)), 
                            listeners.removeAll();
                        }), _this.dragger.start(e);
                    });
                },
                removeDragger: function() {
                    if (!this.map) return console.warn("yandexmap: map not ready"), null;
                    this.map.behaviors.enable("drag"), this.map.events.remove("mousedown"), this.map.geoObjects.remove(this.dragger_polyline), 
                    this.map.geoObjects.remove(this.dragger_polygon), this.map.cursors.push("crosshair").remove(), 
                    this.dragger_polyline = null, this.dragger_polygon = null, this.$emit("changed", []), 
                    this.drag = !1, this.selected = !1;
                },
                convert: function(position) {
                    return this.map ? this.map.options.get("projection").fromGlobalPixels(this.map.converter.pageToGlobal(position), this.map.getZoom()) : (console.warn("yandexmap: map not ready"), 
                    []);
                }
            },
            mounted: function() {
                var _this2 = this;
                __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__.a.ymapReady && (this.dragger = new ymaps.util.Dragger(), 
                this.mapInit = !0), __WEBPACK_IMPORTED_MODULE_0__yandex_map_bus__.a.$on("yandexmap-ready", function() {
                    _this2.dragger = new ymaps.util.Dragger(), _this2.mapInit = !0;
                }), this.$parent.$on("created", function($map) {
                    _this2.init($map);
                });
            },
            computed: {
                computedButtonText: function() {
                    return !0 === this.drag ? this.buttonCancelText : !0 === this.selected ? this.buttonSelectedText : this.buttonText;
                },
                computedButtonClass: function() {
                    return [ this.buttonClass, !0 === this.drag ? "processing" : !0 === this.selected ? "active" : "" ];
                }
            }
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(19), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(46), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__), __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(13), yandexMap = function() {
            function yandexMap(options) {
                __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, yandexMap);
            }
            return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(yandexMap, [ {
                key: "getOptions",
                value: function() {
                    return this.options;
                }
            } ]), yandexMap;
        }(), YandexMapPlugin = {
            install: function(VueInstance, options) {
                var opts = {};
                __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(opts, {
                    version: "2.1",
                    lang: "ru_RU",
                    apiKey: ""
                }, options), __WEBPACK_IMPORTED_MODULE_3_vue__.a.yandexMapOptions = opts;
                var $yandexmap = new yandexMap(__WEBPACK_IMPORTED_MODULE_3_vue__.a.yandexMapOptions);
                VueInstance.prototype.$yandexmap = $yandexmap, VueInstance.component("yandex-map", __webpack_require__(53)), 
                VueInstance.component("region-select", __webpack_require__(55));
            }
        };
        "undefined" != typeof window && window.Vue && window.Vue.use(YandexMapPlugin), __webpack_exports__.default = YandexMapPlugin;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(20),
            __esModule: !0
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(21), module.exports = __webpack_require__(0).Object.assign;
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(6);
        $export($export.S + $export.F, "Object", {
            assign: __webpack_require__(30)
        });
    }, function(module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(23);
        module.exports = function(fn, that, length) {
            if (aFunction(fn), void 0 === that) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, function(module, exports) {
        module.exports = function(it) {
            if ("function" != typeof it) throw TypeError(it + " is not a function!");
            return it;
        };
    }, function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(7), createDesc = __webpack_require__(29);
        module.exports = __webpack_require__(1) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            return object[key] = value, object;
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(3);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(1) && !__webpack_require__(4)(function() {
            return 7 != Object.defineProperty(__webpack_require__(27)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(3), document = __webpack_require__(2).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(3);
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
            if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            };
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var getKeys = __webpack_require__(31), gOPS = __webpack_require__(42), pIE = __webpack_require__(43), toObject = __webpack_require__(44), IObject = __webpack_require__(10), $assign = Object.assign;
        module.exports = !$assign || __webpack_require__(4)(function() {
            var A = {}, B = {}, S = Symbol(), K = "abcdefghijklmnopqrst";
            return A[S] = 7, K.split("").forEach(function(k) {
                B[k] = k;
            }), 7 != $assign({}, A)[S] || Object.keys($assign({}, B)).join("") != K;
        }) ? function(target, source) {
            for (var T = toObject(target), aLen = arguments.length, index = 1, getSymbols = gOPS.f, isEnum = pIE.f; aLen > index; ) for (var key, S = IObject(arguments[index++]), keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S), length = keys.length, j = 0; length > j; ) isEnum.call(S, key = keys[j++]) && (T[key] = S[key]);
            return T;
        } : $assign;
    }, function(module, exports, __webpack_require__) {
        var $keys = __webpack_require__(32), enumBugKeys = __webpack_require__(41);
        module.exports = Object.keys || function(O) {
            return $keys(O, enumBugKeys);
        };
    }, function(module, exports, __webpack_require__) {
        var has = __webpack_require__(8), toIObject = __webpack_require__(9), arrayIndexOf = __webpack_require__(34)(!1), IE_PROTO = __webpack_require__(37)("IE_PROTO");
        module.exports = function(object, names) {
            var key, O = toIObject(object), i = 0, result = [];
            for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
            for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
            return result;
        };
    }, function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, function(module, exports, __webpack_require__) {
        var toIObject = __webpack_require__(9), toLength = __webpack_require__(35), toAbsoluteIndex = __webpack_require__(36);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIObject($this), length = toLength(O.length), index = toAbsoluteIndex(fromIndex, length);
                if (IS_INCLUDES && el != el) {
                    for (;length > index; ) if ((value = O[index++]) != value) return !0;
                } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1;
            };
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(12), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(12), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(38)("keys"), uid = __webpack_require__(40);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, function(module, exports, __webpack_require__) {
        var core = __webpack_require__(0), global = __webpack_require__(2), store = global["__core-js_shared__"] || (global["__core-js_shared__"] = {});
        (module.exports = function(key, value) {
            return store[key] || (store[key] = void 0 !== value ? value : {});
        })("versions", []).push({
            version: core.version,
            mode: __webpack_require__(39) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    }, function(module, exports) {
        module.exports = !0;
    }, function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
        };
    }, function(module, exports) {
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, function(module, exports) {
        exports.f = {}.propertyIsEnumerable;
    }, function(module, exports, __webpack_require__) {
        var defined = __webpack_require__(11);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0, exports.default = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        exports.__esModule = !0;
        var _defineProperty = __webpack_require__(47), _defineProperty2 = function(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }(_defineProperty);
        exports.default = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), (0, _defineProperty2.default)(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(48),
            __esModule: !0
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(49);
        var $Object = __webpack_require__(0).Object;
        module.exports = function(it, key, desc) {
            return $Object.defineProperty(it, key, desc);
        };
    }, function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(6);
        $export($export.S + $export.F * !__webpack_require__(1), "Object", {
            defineProperty: __webpack_require__(7).f
        });
    }, function(module, exports, __webpack_require__) {
        (function(global) {
            function Timeout(id, clearFn) {
                this._id = id, this._clearFn = clearFn;
            }
            var scope = void 0 !== global && global || "undefined" != typeof self && self || window, apply = Function.prototype.apply;
            exports.setTimeout = function() {
                return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
            }, exports.setInterval = function() {
                return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
            }, exports.clearTimeout = exports.clearInterval = function(timeout) {
                timeout && timeout.close();
            }, Timeout.prototype.unref = Timeout.prototype.ref = function() {}, Timeout.prototype.close = function() {
                this._clearFn.call(scope, this._id);
            }, exports.enroll = function(item, msecs) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = msecs;
            }, exports.unenroll = function(item) {
                clearTimeout(item._idleTimeoutId), item._idleTimeout = -1;
            }, exports._unrefActive = exports.active = function(item) {
                clearTimeout(item._idleTimeoutId);
                var msecs = item._idleTimeout;
                msecs >= 0 && (item._idleTimeoutId = setTimeout(function() {
                    item._onTimeout && item._onTimeout();
                }, msecs));
            }, __webpack_require__(51), exports.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== global && global.setImmediate || this && this.setImmediate, 
            exports.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== global && global.clearImmediate || this && this.clearImmediate;
        }).call(exports, __webpack_require__(5));
    }, function(module, exports, __webpack_require__) {
        (function(global, process) {
            !function(global, undefined) {
                "use strict";
                function setImmediate(callback) {
                    "function" != typeof callback && (callback = new Function("" + callback));
                    for (var args = new Array(arguments.length - 1), i = 0; i < args.length; i++) args[i] = arguments[i + 1];
                    var task = {
                        callback: callback,
                        args: args
                    };
                    return tasksByHandle[nextHandle] = task, registerImmediate(nextHandle), nextHandle++;
                }
                function clearImmediate(handle) {
                    delete tasksByHandle[handle];
                }
                function run(task) {
                    var callback = task.callback, args = task.args;
                    switch (args.length) {
                      case 0:
                        callback();
                        break;

                      case 1:
                        callback(args[0]);
                        break;

                      case 2:
                        callback(args[0], args[1]);
                        break;

                      case 3:
                        callback(args[0], args[1], args[2]);
                        break;

                      default:
                        callback.apply(undefined, args);
                    }
                }
                function runIfPresent(handle) {
                    if (currentlyRunningATask) setTimeout(runIfPresent, 0, handle); else {
                        var task = tasksByHandle[handle];
                        if (task) {
                            currentlyRunningATask = !0;
                            try {
                                run(task);
                            } finally {
                                clearImmediate(handle), currentlyRunningATask = !1;
                            }
                        }
                    }
                }
                if (!global.setImmediate) {
                    var registerImmediate, nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1, doc = global.document, attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                    attachTo = attachTo && attachTo.setTimeout ? attachTo : global, "[object process]" === {}.toString.call(global.process) ? function() {
                        registerImmediate = function(handle) {
                            process.nextTick(function() {
                                runIfPresent(handle);
                            });
                        };
                    }() : function() {
                        if (global.postMessage && !global.importScripts) {
                            var postMessageIsAsynchronous = !0, oldOnMessage = global.onmessage;
                            return global.onmessage = function() {
                                postMessageIsAsynchronous = !1;
                            }, global.postMessage("", "*"), global.onmessage = oldOnMessage, postMessageIsAsynchronous;
                        }
                    }() ? function() {
                        var messagePrefix = "setImmediate$" + Math.random() + "$", onGlobalMessage = function(event) {
                            event.source === global && "string" == typeof event.data && 0 === event.data.indexOf(messagePrefix) && runIfPresent(+event.data.slice(messagePrefix.length));
                        };
                        global.addEventListener ? global.addEventListener("message", onGlobalMessage, !1) : global.attachEvent("onmessage", onGlobalMessage), 
                        registerImmediate = function(handle) {
                            global.postMessage(messagePrefix + handle, "*");
                        };
                    }() : global.MessageChannel ? function() {
                        var channel = new MessageChannel();
                        channel.port1.onmessage = function(event) {
                            runIfPresent(event.data);
                        }, registerImmediate = function(handle) {
                            channel.port2.postMessage(handle);
                        };
                    }() : doc && "onreadystatechange" in doc.createElement("script") ? function() {
                        var html = doc.documentElement;
                        registerImmediate = function(handle) {
                            var script = doc.createElement("script");
                            script.onreadystatechange = function() {
                                runIfPresent(handle), script.onreadystatechange = null, html.removeChild(script), 
                                script = null;
                            }, html.appendChild(script);
                        };
                    }() : function() {
                        registerImmediate = function(handle) {
                            setTimeout(runIfPresent, 0, handle);
                        };
                    }(), attachTo.setImmediate = setImmediate, attachTo.clearImmediate = clearImmediate;
                }
            }("undefined" == typeof self ? void 0 === global ? this : global : self);
        }).call(exports, __webpack_require__(5), __webpack_require__(52));
    }, function(module, exports) {
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) return setTimeout(fun, 0);
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) return cachedSetTimeout = setTimeout, 
            setTimeout(fun, 0);
            try {
                return cachedSetTimeout(fun, 0);
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0);
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) return clearTimeout(marker);
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) return cachedClearTimeout = clearTimeout, 
            clearTimeout(marker);
            try {
                return cachedClearTimeout(marker);
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker);
                } catch (e) {
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        function cleanUpNextTick() {
            draining && currentQueue && (draining = !1, currentQueue.length ? queue = currentQueue.concat(queue) : queueIndex = -1, 
            queue.length && drainQueue());
        }
        function drainQueue() {
            if (!draining) {
                var timeout = runTimeout(cleanUpNextTick);
                draining = !0;
                for (var len = queue.length; len; ) {
                    for (currentQueue = queue, queue = []; ++queueIndex < len; ) currentQueue && currentQueue[queueIndex].run();
                    queueIndex = -1, len = queue.length;
                }
                currentQueue = null, draining = !1, runClearTimeout(timeout);
            }
        }
        function Item(fun, array) {
            this.fun = fun, this.array = array;
        }
        function noop() {}
        var cachedSetTimeout, cachedClearTimeout, process = module.exports = {};
        !function() {
            try {
                cachedSetTimeout = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                cachedClearTimeout = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }();
        var currentQueue, queue = [], draining = !1, queueIndex = -1;
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) args[i - 1] = arguments[i];
            queue.push(new Item(fun, args)), 1 !== queue.length || draining || runTimeout(drainQueue);
        }, Item.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, process.title = "browser", process.browser = !0, process.env = {}, process.argv = [], 
        process.version = "", process.versions = {}, process.on = noop, process.addListener = noop, 
        process.once = noop, process.off = noop, process.removeListener = noop, process.removeAllListeners = noop, 
        process.emit = noop, process.prependListener = noop, process.prependOnceListener = noop, 
        process.listeners = function(name) {
            return [];
        }, process.binding = function(name) {
            throw new Error("process.binding is not supported");
        }, process.cwd = function() {
            return "/";
        }, process.chdir = function(dir) {
            throw new Error("process.chdir is not supported");
        }, process.umask = function() {
            return 0;
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_YandexMapContainer_vue__ = __webpack_require__(14), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe524fb4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__ = __webpack_require__(54), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(16), Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_YandexMapContainer_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe524fb4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe524fb4_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_YandexMapContainer_vue__.b, !1, null, null, null);
        Component.options.__file = "src/Components/YandexMapContainer.vue", __webpack_exports__.default = Component.exports;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
            return _c("div", {
                class: _vm.mapClass
            }, [ _vm._t("default"), _vm._v(" "), _c("div", {
                class: _vm.mapClass + "__container",
                style: _vm.style,
                attrs: {
                    id: _vm.mapId
                }
            }) ], 2);
        }, staticRenderFns = [];
        render._withStripped = !0;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function injectStyle(context) {
            disposed || __webpack_require__(56);
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegionSelect_vue__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c76b520_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__ = __webpack_require__(61), __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(16), disposed = !1, __vue_styles__ = injectStyle, Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__.a)(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegionSelect_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c76b520_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__.a, __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c76b520_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegionSelect_vue__.b, !1, __vue_styles__, null, null);
        Component.options.__file = "src/Components/RegionSelect.vue", __webpack_exports__.default = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(57);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        var add = __webpack_require__(59).default;
        add("2be15526", content, !1, {});
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(58)(!1), exports.push([ module.i, "\n.yandex-map_region {\n  position: relative;\n  text-align: right;\n}\n.yandex-map_region a {\n  z-index: 120;\n  display: inline-block;\n  position: absolute;\n  padding: 4px 10px;\n  top: 10px;\n  right: 10px;\n  background-color: #30b9e8;\n  color: white;\n  cursor: pointer;\n  text-decoration: none;\n}\n.yandex-map_region a.processing {\n  background-color: #7fc54e;\n}\n.yandex-map_region a.active {\n  background-color: #cc242b;\n}\n", "" ]);
    }, function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        module.exports = function(useSourceMap) {
            var list = [];
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction, options = _options || {};
            var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, list);
            return addStylesToDom(styles), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                newList ? (styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__.a)(parentId, newList), 
                addStylesToDom(styles)) : styles = [];
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        }
        function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
                    domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css", head.appendChild(styleElement), styleElement;
        }
        function addStyle(obj) {
            var update, remove, styleElement = document.querySelector("style[" + ssrIdKey + '~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction) return noop;
                styleElement.parentNode.removeChild(styleElement);
            }
            if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement()), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
            } else styleElement = createStyleElement(), update = applyToTag.bind(null, styleElement), 
            remove = function() {
                styleElement.parentNode.removeChild(styleElement);
            };
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
            if (media && styleElement.setAttribute("media", media), options.ssrId && styleElement.setAttribute(ssrIdKey, obj.id), 
            sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */", css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), 
            styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        }), __webpack_exports__.default = addStylesClient;
        var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(60), hasDocument = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !hasDocument) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var stylesInDom = {}, head = hasDocument && (document.head || document.getElementsByTagName("head")[0]), singletonElement = null, singletonCounter = 0, isProduction = !1, noop = function() {}, options = null, ssrIdKey = "data-vue-ssr-id", isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function listToStyles(parentId, list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    id: parentId + ":" + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        }
        __webpack_exports__.a = listToStyles;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return render;
        }), __webpack_require__.d(__webpack_exports__, "b", function() {
            return staticRenderFns;
        });
        var render = function() {
            var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
            return !0 !== _vm.map ? _c("div", {
                staticClass: "yandex-map_region"
            }, [ _c("a", {
                class: _vm.computedButtonClass,
                on: {
                    click: _vm.buttonClick
                }
            }, [ _vm._v(_vm._s(_vm.computedButtonText)) ]) ]) : _vm._e();
        }, staticRenderFns = [];
        render._withStripped = !0;
    } ]);
});