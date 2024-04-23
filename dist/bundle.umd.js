(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
      ? define(['exports'], factory)
      : ((global =
          typeof globalThis !== 'undefined' ? globalThis : global || self),
        factory((global['web-excel'] = {})));
})(this, function (exports) {
  'use strict';

  function sayHello(name) {
    console.log('Hello, '.concat(name, '!'));
  }
  sayHello('Rollup Template!!');

  exports.sayHello = sayHello;
});
