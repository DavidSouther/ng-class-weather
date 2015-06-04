angular.module('weather.directive', [
  'ngRoute',
  'weather.service',
  'weather.location.directive',
  'weather.template'
])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'weather',
    controller: WeatherController
  });
});

function WeatherController($scope, weather){
  $scope.searches = [];
  $scope.location = '';
  $scope.search = function(){
    weather.query($scope.location)
    .then(function(currentWeather){
      $scope.searches.push(currentWeather);
    });
  };
}
