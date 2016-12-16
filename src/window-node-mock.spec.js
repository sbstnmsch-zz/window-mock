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

  mock.setAttribute('key', 'value');
  t.equal(mock._attributes['key'], 'value', 'setAttribute should store key-value pairs');
  t.equal(mock.getAttribute('key'), 'value', 'getAttribute should return value for a key');

  t.equal(typeof mock.addEventListener, 'function', 'addEventListener should be a function');
  mock.addEventListener('click', () => { });
  t.equal(typeof mock._eventListeners['click'], 'function', 'addEventListener should append listeners');
  
  t.end();
});

test(`${name}: window.document{Node}.classList`, (t) => {

  t.equal(mock.classList._test, 'ClassList', 'should be a ClassList object');

  t.end();
});

test(`${name}: window.document{Node}.attributes`, (t) => {

  t.equal(typeof mock._attributes, 'object', 'should be an object');

  t.end();
});
