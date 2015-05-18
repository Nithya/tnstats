angular.module('tnstats').controller('CategoryCtrl', function ($scope, $stateParams) {
  'use strict';

  $scope.filterdSubCategories = $scope.subCategories[$stateParams.categoryID - 1];

});
