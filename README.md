# window-mock
A light-weight window-mock for node/ io.js testing


Install via:
```shell
npm install window-mock --save-dev
```

Use it in your unit tests:
```javascript
import test from 'tape';
import WindowMock from 'window-mock';

test(`Some window interaction unit test`, (t) => {

  let
    windowMock = new WindowMock(),

  windowMock.localStorage.setItem('key', 'value');

  t.equal(
    windowMock.localStorage.getItem('key'),
    'value',
    'should set `key` to `value`'
  );

  t.end();
});
```
