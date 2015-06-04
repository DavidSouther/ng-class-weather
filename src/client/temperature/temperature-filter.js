angular.module('temperature.filter', [

]).filter('temperature', function(){
  return function(K){
    return '' + (((K - 273.15)* 1.8 + 32)|0) + '\u00b0';
  }
});
