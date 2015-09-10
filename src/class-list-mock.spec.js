import test from 'tape';
import ClassListMock from './class-list-mock';
import {name} from '../package.json';

let mock = new ClassListMock();

test(`${name}: window.document{ClassList}`, (t) => {

  t.equal(mock._test, 'ClassList', 'should be a ClassList object');

  t.equal(typeof mock.add, 'function', 'add should be a function');
  mock.add('class1');
  t.equal(mock._value.toString(), 'class1', 'add should add a class');
  mock.add('class2', 'class3');
  t.equal(mock._value.toString(), 'class1,class2,class3', 'add should add multiple classes');

  t.equal(typeof mock.remove, 'function', 'remove should be a function');
  mock.remove('class2');
  t.equal(mock._value.toString(), 'class1,class3', 'add should remove class');

  t.equal(typeof mock.toString, 'function', 'toString should be a function');
  t.equal(mock.toString(), 'class1,class3', 'toString should stringify classes');

  t.end();
});
