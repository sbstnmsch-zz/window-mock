import test from 'tape';
import WindowMock from './window-mock';
import {name} from '../package.json';

let windowMock = new WindowMock();

test(`${name}: Window`, (t) => {
  let
    tmp,
    tmpFunc = () => { tmp = true; };

  t.equal(windowMock._test, 'Window', 'should be a Window object');

  t.equal(typeof windowMock.applicationCache, 'object', 'applicationCache should be an object');

  t.equal(typeof windowMock.navigator, 'object', 'navigator should be an object');

  t.equal(typeof windowMock.location, 'object', 'location should be an object');

  t.equal(typeof windowMock.localStorage, 'object', 'localStorage should be an object');

  t.equal(typeof windowMock.document, 'object', 'document should be an object');

  t.equal(typeof windowMock.setTimeout, 'function', 'setTimeout should be a function');
  tmp = false;
  windowMock.setTimeout(tmpFunc);
  t.equal(tmp, true, 'setTimeout should invoke callback');

  t.equal(typeof windowMock.requestAnimationFrame, 'function', 'requestAnimationFrame should be a function');
  tmp = false;
  windowMock.requestAnimationFrame(tmpFunc);
  t.equal(tmp, true, 'requestAnimationFrame should invoke callback');

  t.equal(typeof windowMock.btoa, 'function', 'btoa should be a function');

  t.equal(windowMock.btoa('x'), 'x', 'btoa should return');

  t.end();
});
