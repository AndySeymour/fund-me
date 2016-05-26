'use strict';

/**
 * @ngdoc function
 * @name fundmeApp.controller:Project1Ctrl
 * @description
 * # Project1Ctrl
 * Controller of the fundmeApp
 */
angular.module('fundMe')
  .controller('Project1Ctrl', function ($scope, send) {
    $scope.sendBronze = function() {
      send.bronze();
    };
    $scope.sendSilver = function() {
      send.silver();
    };
    $scope.sendGold = function() {
      send.gold();
    };
  });
