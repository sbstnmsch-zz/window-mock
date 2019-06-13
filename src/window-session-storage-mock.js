class WindowSessionStorageMock {

  constructor() {
    this._test = 'SessionStorage';
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

export default WindowSessionStorageMock;
