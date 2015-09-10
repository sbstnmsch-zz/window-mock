import test from 'tape';
import WindowApplicationCacheMock from './window-application-cache-mock';
import {name} from '../package.json';

let mock = new WindowApplicationCacheMock();

test(`${name}: window.applicationCache`, (t) => {

  t.equal(mock._test, 'ApplicationCache', 'should be a ApplicationCache object');

  t.equal(typeof mock.addEventListener, 'function', 'addEventListener should be a function');

  t.equal(typeof mock.removeEventListener, 'function', 'removeEventListener should be a function');

  t.end();
});
