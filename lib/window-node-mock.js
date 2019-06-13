'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classListMock = require('./class-list-mock');

var _classListMock2 = _interopRequireDefault(_classListMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowNodeMock = function () {
  function WindowNodeMock() {
    _classCallCheck(this, WindowNodeMock);

    this._test = 'Node';
    this._attributes = {};
    this._eventListeners = {};
    this.children = [];
    this.classList = new _classListMock2.default();
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
    key: 'setAttribute',
    value: function setAttribute(k, v) {
      this._attributes[k] = v;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(k) {
      return this._attributes[k];
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(e, f) {
      this._eventListeners[e] = f;
    }
  }, {
    key: 'firstChild',
    get: function get() {
      return this.children.length ? this.children[0] : null;
    }
  }]);

  return WindowNodeMock;
}();

exports.default = WindowNodeMock;