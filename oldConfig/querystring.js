module.exports = function (arg, k, v) {
  let result = null;
  for (let item of arg) {
    if (item.includes('=')) {
      let [key, val] = item.split('=');
      if (key === k) {
        if (v === val) {
          result = true;
        } else {
          result = false;
        }
        break;
      }
    }
  }
  return result;
};
