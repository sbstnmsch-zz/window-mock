'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WindowSessionStorageMock = function () {
  function WindowSessionStorageMock() {
    _classCallCheck(this, WindowSessionStorageMock);

    this._test = 'SessionStorage';
    this._ = {}; // Fake store
  }

  _createClass(WindowSessionStorageMock, [{
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

  return WindowSessionStorageMock;
}();

exports.default = WindowSessionStorageMock;