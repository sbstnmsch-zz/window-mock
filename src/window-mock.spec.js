import test from 'tape';
import WindowMock from './window-mock';
import {name} from '../package.json';

let mock = new WindowMock();

test(`${name}: window`, (t) => {
  let
    tmp,
    tmpFunc = () => { tmp = true; };

  t.equal(mock._test, 'Window', 'should be a Window object');

  t.equal(typeof mock.applicationCache, 'object', 'applicationCache should be an object');

  t.equal(typeof mock.navigator, 'object', 'navigator should be an object');

  t.equal(typeof mock.location, 'object', 'location should be an object');

  t.equal(typeof mock.localStorage, 'object', 'localStorage should be an object');

  t.equal(typeof mock.document, 'object', 'document should be an object');

  t.equal(typeof mock.setTimeout, 'function', 'setTimeout should be a function');
  tmp = false;
  mock.setTimeout(tmpFunc);
  t.equal(tmp, true, 'setTimeout should invoke callback');

  t.equal(typeof mock.requestAnimationFrame, 'function', 'requestAnimationFrame should be a function');
  tmp = false;
  mock.requestAnimationFrame(tmpFunc);
  t.equal(tmp, true, 'requestAnimationFrame should invoke callback');

  t.equal(typeof mock.btoa, 'function', 'btoa should be a function');

  t.equal(mock.btoa('x'), 'x', 'btoa should return');

  t.end();
});
