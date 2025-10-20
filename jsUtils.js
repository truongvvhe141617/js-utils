/**
 * jsUtils — A lightweight utility library (ESM version)
 * Author: Truong VV
 * Description: Custom map, filter, forEach, reduce
 */

export const jsUtils = {
  map(array, callback) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  },

  filter(array, callback) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) result.push(array[i]);
    }
    return result;
  },

  forEach(array, callback) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    for (let i = 0; i < array.length; i++) {
      callback(array[i], i, array);
    }
  },

  reduce(array, callback, initialValue) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
      accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
  }
};

// Default export — tiện cho import ngắn gọn
export default jsUtils;
