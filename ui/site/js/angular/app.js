'use strict';

var app = angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', function AppCtrl($scope, $location){
        $scope.siteTitle = "Lasermed"
        $scope.goTo = function(section){
            $location.path('/'+section);
        }

        $scope.onError = function(reason){
            console.log(reason);
            $scope.error = "Error!";
        };
    })