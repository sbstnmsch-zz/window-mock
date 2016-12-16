import test from 'tape';
import WindowLocationMock from './window-location-mock';
import {name} from '../package.json';

let mock = new WindowLocationMock();

test(`${name}: window.location`, (t) => {

  t.equal(mock._test, 'Location', 'should be a Location object');

  t.end();
});

test(`${name}: window.location.hash`, (t) => {

  t.equal(typeof mock.hash, 'string', 'hash should be a String');

  t.end();
});

test(`${name}: window.location.pathname`, (t) => {

  t.equal(typeof mock.pathname, 'string', 'pathname should be a String');

  t.end();
});

test(`${name}: window.location.origin`, (t) => {

  t.equal(typeof mock.origin, 'string', 'origin should be a String');

  t.end();
});
