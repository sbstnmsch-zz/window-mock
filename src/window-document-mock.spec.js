import test from 'tape';
import WindowDocumentMock from './window-document-mock';
import {name} from '../package.json';

let mock = new WindowDocumentMock();

test(`${name}: window.document`, (t) => {

  t.equal(mock._test, 'Document', 'should be a Document object');

  t.equal(mock.createDocumentFragment()._test, 'Fragment', 'createDocumentFragment should return a Fragment');

  t.equal(mock.createElement()._test, 'Node', 'createElement should return a Node');

  t.equal(mock.querySelector()._test, 'Node', 'querySelector should return a Node');

  t.equal(mock.querySelectorAll()[0]._test, 'Node', 'querySelectorAll should return a Node-List');

  t.end();
});

test(`${name}: window.document.referrer`, (t) => {

  t.equal(typeof mock.referrer, 'string', 'referrer should be a String');

  t.end();
});

test(`${name}: window.document.body`, (t) => {

  t.equal(mock.body._test, 'Node', 'body should be a Node');

  t.end();
});
