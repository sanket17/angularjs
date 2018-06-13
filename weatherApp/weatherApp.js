// modules
var weatherApp = angular.module('weatherApp',['ngResource','ngRoute']);

weatherApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


weatherApp.config(function($routeProvider) {
    
    $routeProvider.when('/',{
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast' ,{
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
});


// controller
weatherApp.controller('homeController',['$scope','weatherService', function($scope, weatherService){
    $scope.cityName = '';
    
    $scope.setCity = function(){
        weatherService.setCityName($scope.cityName);
    }
}]);

weatherApp.controller('forecastController',['$scope','weatherService', function($scope, weatherService){
    $scope.cityName = weatherService.getCityName();
    
}]);

// service

weatherApp.service('weatherService',function(){
    this.cityName;
    
    this.setCityName = function(name){
        if(name !== null){
            this.cityName = name;    
        }
    }
    
    this.getCityName = function(){
        return this.cityName;
    }
});