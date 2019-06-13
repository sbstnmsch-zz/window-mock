import test from 'tape';
import WindowSessionStorageMock from './window-session-storage-mock';
import {name} from '../package.json';

let mock = new WindowSessionStorageMock();

test(`${name}: window.sessionStorage`, (t) => {

  t.equal(mock._test, 'SessionStorage', 'should be a SessionStorage object');

  t.equal(typeof mock.getItem, 'function', 'getItem should be a function');
  mock._.key = 'value';
  t.equal(mock.getItem('key'), 'value', 'getItem should return value');

  t.equal(typeof mock.setItem, 'function', 'setItem should be a function');
  mock.setItem('key', 'new value');
  t.equal(mock.getItem('key'), 'new value', 'setItem should set value');

  t.equal(typeof mock.removeItem, 'function', 'removeItem should be a function');
  mock.removeItem('key');
  t.equal(mock.getItem('key'), null, 'removeItem should delete value');

  t.end();
});
