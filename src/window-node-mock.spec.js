import test from 'tape';
import WindowNodeMock from './window-node-mock';
import {name} from '../package.json';

let mock = new WindowNodeMock();

test(`${name}: window.document{Node}`, (t) => {

  t.equal(mock._test, 'Node', 'should be a Node object');

  t.equal(typeof mock.appendChild, 'function', 'appendChild should be a function');
  mock.appendChild('child');
  t.equal(mock.children[0], 'child', 'appendChild should append childs');

  t.equal(mock.firstChild, 'child', 'firstChild should be first child');

  t.equal(typeof mock.removeChild, 'function', 'removeChild should be a function');
  mock.removeChild();
  t.equal(mock.children.length, 0, 'removeChild should remove child');

  t.end();
});

test(`${name}: window.document{Node}.classList`, (t) => {

  t.equal(mock.classList._test, 'ClassList', 'should be a ClassList object');

  t.end();
});
