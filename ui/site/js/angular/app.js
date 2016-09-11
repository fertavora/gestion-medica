'use strict';

var app = angular.module('myApp', ['ngRoute'])
    .controller('AppCtrl', function AppCtrl($scope, $location){
        $scope.siteTitle = "Lasermed"
        $scope.goTo = function(section){
            $location.path('/'+section);
        }
    })