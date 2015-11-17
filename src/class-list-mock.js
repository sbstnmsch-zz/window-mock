class ClassListMock {

  constructor() {
    this._test = 'ClassList';
    this._value = [];
  }

  add(className, ...nth) {
    let a = [].concat.apply([], [className, nth]);
    this._value = this._value.concat(a);
  }

  remove(className) {
    let
      a = this._value,
      n = [];
    for(let x in a) {
      if (a[x] !== className) {
        n.push(a[x]);
      }
    }
    this._value = n;
  }

  toString() {
    return this._value.toString();
  }

}

export default ClassListMock;
