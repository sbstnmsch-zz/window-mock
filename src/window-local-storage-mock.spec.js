import test from 'tape';
import WindowLocalStorageMock from './window-local-storage-mock';
import {name} from '../package.json';

let mock = new WindowLocalStorageMock();

test(`${name}: window.localStorage`, (t) => {

  t.equal(mock._test, 'LocalStorage', 'should be a LocalStorage object');

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
