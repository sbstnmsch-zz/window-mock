import ClassListMock from './class-list-mock';

class WindowNodeMock {

  constructor() {
    this._test = 'Node';
    this._attributes = {};
    this.children = [];
    this.classList = new ClassListMock();
  }

  get firstChild() {
    return this.children.length ? this.children[0] : null;
  }

  appendChild(c) {
    this.children.push(c);
  }

  removeChild() {
    this.children.shift();
  }
  
  setAttribute(k, v) {
    this._attributes[k] = v;
  }
  
  getAttribute(k) {
    return this._attributes[k];
  }
}

export default WindowNodeMock;
