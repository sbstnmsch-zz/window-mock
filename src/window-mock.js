// Fake browser for testing

import WindowApplicationCacheMock from './window-application-cache-mock';
import WindowNavigatorMock from './window-navigator-mock';
import WindowLocationMock from './window-location-mock';
import WindowLocalStorageMock from './window-local-storage-mock';
import WindowDocumentMock from './window-document-mock';

class WindowMock {

  constructor() {
    this._test = 'Window';
    this.applicationCache = new WindowApplicationCacheMock();
    this.navigator = new WindowNavigatorMock();
    this.location = new WindowLocationMock();
    this.localStorage = new WindowLocalStorageMock();
    this.document = new WindowDocumentMock();
  }

  setTimeout(f) {
    f();
  }

  requestAnimationFrame(f) {
    f();
  }

  btoa(s) {
    return s;
  }

}

export default WindowMock;
