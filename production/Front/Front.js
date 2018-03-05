if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Front'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Front'.");
}
var Front = function (_, Kotlin) {
  'use strict';
  function main(args) {
    console.log('Hello world!');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('Front', _);
  return _;
}(typeof Front === 'undefined' ? {} : Front, kotlin);
