/*
 * glob.js: UNIX globbing (wildcard matching) for javascript
 * yc <iyanchuan@gmail.com>
 */

(function () {
  var caches = {}
    , context = typeof(exports) !== 'undefined' ? exports : window;

  // make str pattern to regexp
  // http://en.wikipedia.org/wiki/Glob_(programming)
  var make = function (str) {
    if (caches[str]) {
      return caches[str];
    }
    
    // special regexp chars (., +, etc.)
    reg = str.replace(/[.+^$()|{}]/g, function (match, offset, s) {
      return s[offset - 1] === '\\' ? match : '\\' + match;
    });
    // ? and *
    reg = reg.replace(/[?*]/g, function (match, offset, s) {
      if (s[offset - 1] === '\\') {
        return match;
      }
      return match === '?' ? '.' : '.*';
    });
    // special regexp escapings (\d, \S, etc.)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    reg = reg.replace(/\\([dDsSwWtrnvfbB0cxu])/g, '$1');
    return caches[str] = new RegExp('^' + reg + '$');
  };

  // test if a pattern (str or regexp) matches a str
  var match = function (pattern, str) {
    return str.match(typeof(pattern) === 'string' ? make(pattern) : pattern);
  };

  context.glob = {
    make: make,
    match: match
  };
})();
