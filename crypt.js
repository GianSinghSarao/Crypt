// ==ClosureCompiler==
// @output_file_name crypt.min.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==
// Copyright 2017 Gian Singh Sarao (Orange)
// MIT License
(function (w) {
  var crypt = function (str, uuid) {
    var z = '';
    var string = str;
    for (var i = 0, len = uuid.length; i < len; i++) {
      string = (function ab(str, x) {
        var q = ''
        for (var i = 0, len = str.length; i < len; i++) {
          var y = str.charCodeAt(i);
          var n = y ^ x;
          q += String.fromCharCode(n);
        }
        return q;
      })(string, uuid.charCodeAt(i));
    }
    z = string;
    return z;
  }
  w['crypt'] = crypt;
})(window);