module.exports = function(o) {
  if (typeof o === "object" && o !== null) {
    return Object.keys(o).map(i => localStorage.setItem(i, o[i]));
  }
  throw new TypeError(`Expected object but got ${typeof o}`);
};
