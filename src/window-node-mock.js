import ClassListMock from './class-list-mock';

class WindowNodeMock {

  constructor() {
    this._test = 'Node';
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

}

export default WindowNodeMock;
