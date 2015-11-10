import WindowNodeMock from './window-node-mock';

class WindowFragmentMock extends WindowNodeMock {

  constructor() {
    super();
    this._test = 'Fragment';
  }

}

export default WindowFragmentMock; // @see https://github.com/babel/babel/issues/2694
                                   // Moved to EOF cause of Babel issue
