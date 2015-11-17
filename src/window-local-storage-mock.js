class WindowLocalStorageMock {

  constructor() {
    this._test = 'LocalStorage';
    this._ = {}; // Fake store
  }

  getItem(k) {
    return this._[k];
  }

  setItem(k, v) {
    this._[k] = v;
  }

  removeItem(k) {
    this._[k] = null;
  }

}

export default WindowLocalStorageMock;
