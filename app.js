
/*
$(document).ready(function(){
    
    var currentStep = 0;
    
    $("#step1").hide();
    $("#step2").hide();
    
    $("#btnStep1").click(function(){
        $("#step1").show();
        $("#step2").hide();
        
        currentStep = 1;
        // update the database code logic
    });
    
    $("#btnStep2").click(function(){
        $("#step1").hide();
        $("#step2").show();
        
        currentStep = 2;
        // update the database code logic
    });
    
   
});
*/


var myApp = angular.module('myApp',[]);

myApp.controller('mainController', ['$log','$scope','$timeout', 'nameService',function($log, $scope, $timeout,nameService){
    $log.info('This is an my information');
    $scope.name = nameService.name;
    
    $timeout(function(){
        $scope.name = 'Every Body';
    },3000);
  
    $scope.$watch('name', function(){
        
        nameService.name = $scope.name;
    });
}]);


//myApp.controller("mainController",["$log","$scope",function(r,o){r.error("This is an error")}]);

// custom service
myApp.service('nameService', function(){
    
    var self = this;
    this.name = 'John Doe';
    this.nameLength = function(){
        return self.name.length;
    }
});

// custom directive <search-result></search-result>
myApp.directive('searchResult', function(){
    return {
        restrict: 'EACM', // A - ATTRIBUTE, E - ELEMENT, C - CLASS, M - COMMENTit means display it only for ELEMENT TYPE, restrict it for rest 
        template:'<div><ng-transclude></ng-transclude><a href="">{{personName}}</a></div>',
        replace: true,                   // removes <search-result> tag from html, default is false
        scope: {
            personName: "@"
        },
        transclude: true
        
        /*,
        compile: function(elem, attrs){
        
            console.log('Compilng...');
            console.log(elem.html());
            return {
                /*
                    pre: function(scope, elements, attrs){
                    
                        console.log('Pre-Link...');
                        console.log(elements);
        
                    },*/
       /*             post: function(scope, elements, attrs){
                        console.log('Post-Link...');
                        console.log(elements);
                    }
            }   
        
    }*/
    }
    
});