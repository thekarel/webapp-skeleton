var theApp = angular.module('theApp', ['ngRoute']);

theApp.config(function($routeProvider) {

  'use strict';

  $routeProvider
  .when('/',
    {
      templateUrl: 'partials/one.html',
      controller: 'ctrlOne'
    })
  .otherwise({redirectTo: '/'});
});

theApp.controller('ctrlOne', ['$scope', ctrlOne]);