Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = function throttle(fn, interval) {
  var isWaiting = false;
  function stopWaiting() {
    isWaiting = false;
  }
  return function() {
    if (!isWaiting) {
      isWaiting = true;
      setTimeout(stopWaiting, interval || 0);
      return fn.apply(this, arguments);
    }
  }.bind(this);
};
