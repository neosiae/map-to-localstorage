const isObject = require('is-object')

module.exports = function(o) {
  if (!isObject(o)) {
    throw new TypeError(`Expected object but got ${typeof o}`);
  }

  return Object.keys(o).map(i => localStorage.setItem(i, o[i]));
};
