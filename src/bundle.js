(function () {
  console.log("立即执行");
  function r(e, n, t) {
    console.log("再次执行")
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        var p = n[i] = { exports: {} };
        e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t)
      }
      // 这个就相当于进行了一次缓存处理
      return n[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]);
    console.log('加工返回的n', n)
    return o
  }
  return r
})()({
  // eslint-disable-next-line no-unused-vars
  1: [function (require, module, exports) {
    "use strict"

    function unique_pred(list, compare) {
      var ptr = 1
        , len = list.length
        , a = list[0], b = list[0]
      for (var i = 1; i < len; ++i) {
        b = a
        a = list[i]
        if (compare(a, b)) {
          if (i === ptr) {
            ptr++
            continue
          }
          list[ptr++] = a
        }
      }
      list.length = ptr
      return list
    }

    function unique_eq(list) {
      var ptr = 1
        , len = list.length
        , a = list[0], b = list[0]
      for (var i = 1; i < len; ++i, b = a) {
        b = a
        a = list[i]
        if (a !== b) {
          if (i === ptr) {
            ptr++
            continue
          }
          list[ptr++] = a
        }
      }
      list.length = ptr
      return list
    }

    function unique(list, compare, sorted) {
      if (list.length === 0) {
        return list
      }
      if (compare) {
        if (!sorted) {
          list.sort(compare)
        }
        return unique_pred(list, compare)
      }
      if (!sorted) {
        list.sort()
      }
      return unique_eq(list)
    }
    console.log("uniq模块执行", module)
    module.exports = unique

  }, {}],
  // eslint-disable-next-line no-unused-vars
  2: [function (require, module, exports) {
    console.log("模块中的代码开始执行")
    document.getElementById('app').addEventListener('click', function () {
      var unique = require('uniq');
      var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
      console.log(unique(data));
    }, true)
  }, { "uniq": 1 }]
}, {}, [2]);
