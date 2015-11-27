[![npm version](https://badge.fury.io/js/window-mock.svg)](http://badge.fury.io/js/window-mock) [![Build Status](https://travis-ci.org/sbstnmsch/window-mock.svg?branch=master)](https://travis-ci.org/sbstnmsch/window-mock)

# window-mock
A light-weight window-mock for node/ io.js unit-testing written in ES6


## Install
```shell
npm install window-mock --save-dev
```

## Usage (ES6+)
Once you created a WindowMock-Instance the mock should behave exactly as the
browser's window object.

```javascript
import test from 'tape';
import WindowMock from 'window-mock';

test(`Some window interaction unit test`, (t) => {

  let
    windowMock = new WindowMock();

  windowMock.localStorage.setItem('key', 'value');

  t.equal(
    windowMock.localStorage.getItem('key'),
    'value',
    'should set `key` to `value`'
  );

  t.end();
});
```

## Usage (ES5/ Javascript)
```javascript
var
  test = require('tape'),
  WindowMock = require('window-mock');

test(`Some window interaction unit test`, function(t) {

  var
    windowMock = new WindowMock();

  windowMock.localStorage.setItem('key', 'value');

  t.equal(
    windowMock.localStorage.getItem('key'),
    'value',
    'should set `key` to `value`'
  );

  t.end();
});
```

## Fork and Pull-request
This module was built for unit-test mocking the browser's window-object in
my other projects. It's far from complete and will grow once needed.

Feel free to fork and pull-request for extending the API!
