class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    const result = this.keyMap[index].filter((data) => data[0] === key);
    return result;
  }

  keys() {
    const keysArr = [];
    this.keyMap.forEach((dataArray) => {
      if (dataArray) dataArray.forEach((data) => keysArr.push(data[0]));
    });
    return [...new Set(keysArr)];
  }

  values() {
    const valuesArr = [];
    this.keyMap.forEach((dataArray) => {
      if (dataArray) dataArray.forEach((data) => valuesArr.push(data[1]));
    });
    return [...new Set(valuesArr)];
  }
}
