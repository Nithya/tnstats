angular.module('tnstats', ['ngAnimate', 'ui.router', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/main/main.html'
  })
  .state('category', {
    url: 'category/:categoryID/',
    templateUrl: 'app/category/category.html'
  })
  .state('chart', {
    url: 'chart/:categoryID/:subcategoryID/',
    templateUrl: 'app/chart/chart.html'
  });

  $urlRouterProvider.otherwise('/');
});
