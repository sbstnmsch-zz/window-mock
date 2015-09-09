import test from 'tape';
import WindowMock from './window-mock';
import {name} from '../package.json';

let windowMock = new WindowMock();

test(`${name}: Window`, (t) => {
  t.equal(windowMock._test, 'Window', 'should be a Window object');

  t.end();
});
