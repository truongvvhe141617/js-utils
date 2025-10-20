/**
 * jsUtils — Custom reimplementation of common JS array methods
 * Author: Truong VV
 * Description: Rewritten map, filter, forEach, reduce, find, some, every, findIndex
 */

export const jsUtils = {
  myMap(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i in array) result[i] = callback.call(thisArg, array[i], i, array);
    }
    return result;
  },

  myFilter(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) {
        result.push(array[i]);
      }
    }
    return result;
  },

  myForEach(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    for (let i = 0; i < array.length; i++) {
      if (i in array) callback.call(thisArg, array[i], i, array);
    }
  },

  myReduce(array, callback, initialValue) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");

    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
      if (array.length === 0) throw new TypeError("Reduce of empty array with no initial value");
      accumulator = array[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
      if (i in array) accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
  },

  myFind(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    for (let i = 0; i < array.length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) {
        return array[i];
      }
    }
    return undefined;
  },

  mySome(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    for (let i = 0; i < array.length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) return true;
    }
    return false;
  },

  myEvery(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    for (let i = 0; i < array.length; i++) {
      if (i in array && !callback.call(thisArg, array[i], i, array)) return false;
    }
    return true;
  },

  myFindIndex(array, callback, thisArg) {
    if (!Array.isArray(array)) throw new TypeError("First argument must be an array");
    if (typeof callback !== "function") throw new TypeError("Callback must be a function");
    for (let i = 0; i < array.length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) return i;
    }
    return -1;
  }
};

// Default export
export default jsUtils;
