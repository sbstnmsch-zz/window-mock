// Fake browser for testing

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _windowApplicationCacheMock = require('./window-application-cache-mock');

var _windowNavigatorMock = require('./window-navigator-mock');

var _windowLocationMock = require('./window-location-mock');

var _windowLocalStorageMock = require('./window-local-storage-mock');

var _windowDocumentMock = require('./window-document-mock');

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