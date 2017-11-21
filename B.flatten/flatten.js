;
(function(window, document, undefined){

  window.B = window.B || {};

  B.flatten = (function() {
    if (!!Array.prototype.reduce && !!Array.isArray) {
      return function(array) {
        return array.reduce(function(prev, next) {
          return prev.concat(Array.isArray(next) ? B.flatten(next) : next);
        }, []);
      };
    } else {
      return function(array) {
        var arr = [];
        var i = 0;
        var len = array.length;
        var target;

        for (; i < len; i++) {
          target = array[i];
          arr = arr.concat(
            (Object.prototype.toString.call(target) === '[object Array]') ? B.flatten(target) : target
          );
        }

        return arr;
      };
    }
  }());

}(window, document));