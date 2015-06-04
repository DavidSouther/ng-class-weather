WEATHER_SERVICE = 'weather';

angular.module('weather.service', [

]).factory(WEATHER_SERVICE, function($http){
  return {
    query: function(searchLocation){
      return $http({
        method: 'GET',
        params: {
          q: searchLocation
        },
        url: 'http://api.openweathermap.org/data/2.5/weather'
      }).then(function(response){
        return response.data;
      });
    },
    getForecast: function(id){
      return $http
      .get('http://api.openweathermap.org/data/2.5/forecast/daily', {
        params: {
          id: id
        }
      }).then(function(response){
        response.data.list.forEach(function(item){
          item.date = new Date(item.dt * 1000);
        });
        return response.data;
      });
    }
  };
});
