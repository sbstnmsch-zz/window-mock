'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _windowNodeMock = require('./window-node-mock');

var _windowFragmentMock = require('./window-fragment-mock');

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