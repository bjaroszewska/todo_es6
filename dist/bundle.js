/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Controller = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(/*! ./template */ "./src/template.js");

var _view = __webpack_require__(/*! ./view */ "./src/view.js");

var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = exports.Controller = function () {
    function Controller(view, items) {
        _classCallCheck(this, Controller);

        this.view = view;
        this.items = items;
        this.view.makeList(items);
        this.view.bindAddItem(this.addItem.bind(this));
        this.view.bindRemoveItem(this.removeItem.bind(this));
    }

    _createClass(Controller, [{
        key: 'addItem',
        value: function addItem(title) {
            this.items.push({ id: Date.now().toString(), title: title });
            this.view.makeList(this.items);
        }
    }, {
        key: 'removeItem',
        value: function removeItem(id) {
            this.items = this.items.filter(function (i) {
                return i.id !== id;
            });
            this.view.makeList(this.items);
        }
    }]);

    return Controller;
}();

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.qs = qs;
exports.$ew = $ew;
exports.$delegate = $delegate;
/**
 * @param {string} selector 
 * @param {Element} scope 
 */
function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}
/**
 * Event wrapper
 * @param {Element|Window} target 
 * @param {string} type 
 * @param {Function} callback 
 */
function $ew(target, type, callback) {
	target.addEventListener(type, callback);
}

function $delegate(target, selector, type, handler) {
	var event = function event() {
		var potentialElements = target.querySelectorAll(selector);
		var i = potentialElements.length;
		while (i--) {
			if (potentialElements[i] == window.event.target) {
				handler.call(window.event.target, window.event);
			}
		}
	};
	$ew(target, type, event);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

var _template = __webpack_require__(/*! ./template */ "./src/template.js");

var _view = __webpack_require__(/*! ./view */ "./src/view.js");

var _controller = __webpack_require__(/*! ./controller */ "./src/controller.js");

var listMock = [{
    id: "0",
    title: "someName"
}, {
    id: "1",
    title: "someName2"
}];
var template = new _template.Template();
var view = new _view.View(template);
var controller = new _controller.Controller(view, listMock);

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = exports.Template = function () {
    function Template() {
        _classCallCheck(this, Template);
    }

    _createClass(Template, [{
        key: 'itemList',

        /**
         * 
         * @param {Array} items 
         */
        value: function itemList(items) {
            return items.reduce(function (a, item) {
                return a + ('\n    <li id="' + item.id + '" class="items-on-list">\n    <button class="destroy">X</button>\n        <label>' + item.title + '</label>\n    </li>');
            }, '');
        }
    }]);

    return Template;
}();

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = exports.View = function () {
  /**
   * 
   * @param {*} template 
   */
  function View(template) {
    _classCallCheck(this, View);

    this.template = template;
    this.$todoList = (0, _helpers.qs)('.todo-list');
    this.$newItem = (0, _helpers.qs)('.new-item');
    this.$itemsOnList = (0, _helpers.qs)('.items-on-list');
    this.$destroy = (0, _helpers.qs)('.destroy');
  }
  /**
   * 
   * @param {Array} items 
   */


  _createClass(View, [{
    key: 'makeList',
    value: function makeList(items) {
      var list = this.template.itemList(items);
      this.$todoList.innerHTML = list;
    }
  }, {
    key: 'bindAddItem',
    value: function bindAddItem(handler) {
      (0, _helpers.$ew)(this.$newItem, 'change', function (_ref) {
        var target = _ref.target;

        var title = target.value.trim();
        if (title) {
          handler(title);
        }
      });
    }
  }, {
    key: 'bindRemoveItem',
    value: function bindRemoveItem(handler) {
      (0, _helpers.$delegate)(this.$todoList, '.destroy', 'click', function (_ref2) {
        var target = _ref2.target;

        handler(target.parentNode.id);
      });
    }
  }]);

  return View;
}();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map