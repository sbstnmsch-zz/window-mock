/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Fake browser for testing

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _windowApplicationCacheMock = __webpack_require__(6);

	var _windowNavigatorMock = __webpack_require__(7);

	var _windowLocationMock = __webpack_require__(8);

	var _windowLocalStorageMock = __webpack_require__(9);

	var _windowDocumentMock = __webpack_require__(10);

	var WindowMock = (function () {
	  function WindowMock() {
	    _classCallCheck(this, WindowMock);

	    this._test = 'Window';
	    this.applicationCache = new _windowApplicationCacheMock.WindowApplicationCacheMock();
	    this.navigator = new _windowNavigatorMock.WindowNavigatorMock();
	    this.location = new _windowLocationMock.WindowLocationMock();
	    this.localStorage = new _windowLocalStorageMock.WindowLocalStorageMock();
	    this.document = new _windowDocumentMock.WindowDocumentMock();
	  }

	  _createClass(WindowMock, [{
	    key: 'setTimeout',
	    value: function setTimeout(f) {
	      f();
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame(f) {
	      f();
	    }
	  }, {
	    key: 'btoa',
	    value: function btoa(s) {
	      return s;
	    }
	  }]);

	  return WindowMock;
	})();

	exports['default'] = WindowMock;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$defineProperty = __webpack_require__(2)["default"];

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;

	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var WindowApplicationCacheMock = (function () {
	  function WindowApplicationCacheMock() {
	    _classCallCheck(this, WindowApplicationCacheMock);

	    this._test = 'ApplicationCache';
	  }

	  _createClass(WindowApplicationCacheMock, [{
	    key: 'addEventListener',
	    value: function addEventListener() {}
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener() {}
	  }]);

	  return WindowApplicationCacheMock;
	})();

	exports.WindowApplicationCacheMock = WindowApplicationCacheMock;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var WindowNavigatorMock = function WindowNavigatorMock() {
	  _classCallCheck(this, WindowNavigatorMock);

	  this._test = 'Navigator';
	  this.userAgent = '';
	};

	exports.WindowNavigatorMock = WindowNavigatorMock;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var WindowLocationMock = function WindowLocationMock() {
	  _classCallCheck(this, WindowLocationMock);

	  this._test = 'Location';
	  this.hash = '';
	};

	exports.WindowLocationMock = WindowLocationMock;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var WindowLocalStorageMock = (function () {
	  function WindowLocalStorageMock() {
	    _classCallCheck(this, WindowLocalStorageMock);

	    this._test = 'LocalStorage';
	    this._ = {}; // Fake store
	  }

	  _createClass(WindowLocalStorageMock, [{
	    key: 'getItem',
	    value: function getItem(k) {
	      return this._[k];
	    }
	  }, {
	    key: 'setItem',
	    value: function setItem(k, v) {
	      this._[k] = v;
	    }
	  }, {
	    key: 'removeItem',
	    value: function removeItem(k) {
	      this._[k] = null;
	    }
	  }]);

	  return WindowLocalStorageMock;
	})();

	exports.WindowLocalStorageMock = WindowLocalStorageMock;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _windowNodeMock = __webpack_require__(11);

	var _windowFragmentMock = __webpack_require__(13);

	var WindowDocumentMock = (function () {
	  function WindowDocumentMock() {
	    _classCallCheck(this, WindowDocumentMock);

	    this._test = 'Document';
	    this.body = new _windowNodeMock.WindowNodeMock();
	  }

	  _createClass(WindowDocumentMock, [{
	    key: 'createDocumentFragment',
	    value: function createDocumentFragment() {
	      return new _windowFragmentMock.WindowFragmentMock();
	    }
	  }, {
	    key: 'createElement',
	    value: function createElement() {
	      return new _windowNodeMock.WindowNodeMock();
	    }
	  }, {
	    key: 'querySelector',
	    value: function querySelector() {
	      return new _windowNodeMock.WindowNodeMock();
	    }
	  }, {
	    key: 'querySelectorAll',
	    value: function querySelectorAll() {
	      return [new _windowNodeMock.WindowNodeMock()];
	    }
	  }]);

	  return WindowDocumentMock;
	})();

	exports.WindowDocumentMock = WindowDocumentMock;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _classListMock = __webpack_require__(12);

	var WindowNodeMock = (function () {
	  function WindowNodeMock() {
	    _classCallCheck(this, WindowNodeMock);

	    this._test = 'Node';
	    this.children = [];
	    this.classList = new _classListMock.ClassListMock();
	  }

	  _createClass(WindowNodeMock, [{
	    key: 'appendChild',
	    value: function appendChild(c) {
	      this.children.push(c);
	    }
	  }, {
	    key: 'removeChild',
	    value: function removeChild() {
	      this.children.shift();
	    }
	  }, {
	    key: 'firstChild',
	    get: function get() {
	      return this.children.length ? this.children[0] : null;
	    }
	  }]);

	  return WindowNodeMock;
	})();

	exports.WindowNodeMock = WindowNodeMock;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(1)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var ClassListMock = (function () {
	  function ClassListMock() {
	    _classCallCheck(this, ClassListMock);

	    this._test = 'ClassList';
	    this._value = [];
	  }

	  _createClass(ClassListMock, [{
	    key: 'add',
	    value: function add(className) {
	      for (var _len = arguments.length, nth = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        nth[_key - 1] = arguments[_key];
	      }

	      var a = [].concat.apply([], [className, nth]);
	      this._value = this._value.concat(a);
	    }
	  }, {
	    key: 'remove',
	    value: function remove(className) {
	      var a = this._value,
	          n = [];
	      for (var x in a) {
	        if (a[x] !== className) {
	          n.push(a[x]);
	        }
	      }
	      this._value = n;
	    }
	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this._value.toString();
	    }
	  }]);

	  return ClassListMock;
	})();

	exports.ClassListMock = ClassListMock;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = __webpack_require__(14)['default'];

	var _inherits = __webpack_require__(27)['default'];

	var _classCallCheck = __webpack_require__(5)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _windowNodeMock = __webpack_require__(11);

	var WindowFragmentMock = (function (_WindowNodeMock) {
	  _inherits(WindowFragmentMock, _WindowNodeMock);

	  function WindowFragmentMock() {
	    _classCallCheck(this, WindowFragmentMock);

	    _get(Object.getPrototypeOf(WindowFragmentMock.prototype), 'constructor', this).call(this);
	    this._test = 'Fragment';
	  }

	  return WindowFragmentMock;
	})(_windowNodeMock.WindowNodeMock);

	exports.WindowFragmentMock = WindowFragmentMock;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$getOwnPropertyDescriptor = __webpack_require__(15)["default"];

	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;

	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;

	    var desc = _Object$getOwnPropertyDescriptor(object, property);

	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);

	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;

	      if (getter === undefined) {
	        return undefined;
	      }

	      return getter.call(receiver);
	    }
	  }
	};

	exports.__esModule = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	__webpack_require__(17);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(18);

	__webpack_require__(22)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(19)
	  , defined = __webpack_require__(21);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// indexed object, fallback for non-array-like ES3 strings
	var cof = __webpack_require__(20);
	module.exports = 0 in Object('z') ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(23)
	    , fn   = (__webpack_require__(25).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(26)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(24)
	  , core      = __webpack_require__(25)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 24 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var UNDEFINED = 'undefined';
	var global = module.exports = typeof window != UNDEFINED && window.Math == Math
	  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 25 */
/***/ function(module, exports) {

	var core = module.exports = {};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _Object$create = __webpack_require__(28)["default"];

	var _Object$setPrototypeOf = __webpack_require__(30)["default"];

	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	exports.__esModule = true;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(29), __esModule: true };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(31), __esModule: true };

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = __webpack_require__(25).Object.setPrototypeOf;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(23);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(33).set});

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(34)
	  , anObject = __webpack_require__(35);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} // eslint-disable-line
	    ? function(buggy, set){
	        try {
	          set = __webpack_require__(36)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	          set({}, []);
	        } catch(e){ buggy = true; }
	        return function setPrototypeOf(O, proto){
	          check(O, proto);
	          if(buggy)O.__proto__ = proto;
	          else set(O, proto);
	          return O;
	        };
	      }()
	    : undefined),
	  check: check
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	// http://jsperf.com/core-js-isobject
	module.exports = function(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(34);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(37);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  } return function(/* ...args */){
	      return fn.apply(that, arguments);
	    };
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }
/******/ ]);