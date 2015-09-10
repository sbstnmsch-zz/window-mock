import test from 'tape';
import WindowNavigatorMock from './window-navigator-mock';
import {name} from '../package.json';

let mock = new WindowNavigatorMock();

test(`${name}: window.navigator`, (t) => {

  t.equal(mock._test, 'Navigator', 'should be a Navigator object');

  t.end();
});

test(`${name}: window.navigator.userAgent`, (t) => {

  t.equal(typeof mock.userAgent, 'string', 'userAgent should be a String');

  t.end();
});
