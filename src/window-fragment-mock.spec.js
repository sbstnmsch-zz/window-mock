import test from 'tape';
import WindowFragmentMock from './window-fragment-mock';
import {name} from '../package.json';

let mock = new WindowFragmentMock();

test(`${name}: window.document{fragment}`, (t) => {

  t.equal(mock._test, 'Fragment', 'should be a Fragment object');

  t.end();
});
