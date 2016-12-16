import WindowNodeMock from './window-node-mock';
import WindowFragmentMock from './window-fragment-mock';

class WindowDocumentMock {

  constructor() {
    this._test = 'Document';
    this.referrer = '';
    this.body = new WindowNodeMock();
  }

  createDocumentFragment() {
    return new WindowFragmentMock();
  }

  createElement() {
    return new WindowNodeMock();
  }

  querySelector() {
    return new WindowNodeMock();
  }

  querySelectorAll() {
    return [new WindowNodeMock()];
  }

}

export default WindowDocumentMock;
