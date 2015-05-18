angular.module('tnstats').controller('MainCtrl', function ($scope, $timeout, $state, $stateParams) {
  'use strict';

  $scope.current = {};

  $scope.categories = ['Area and Population', 'Vital Statistics', 'Climate and Rainfall', 'Agriculture', 'Irrigation', 'Rural Water Supply', 'Animal Husbandry', 'Fisheries', 'Forests', 'Electricity', 'Industries', 'Factories', 'Companies Limited by Shares', 'Medical and Health', 'Family Welfare', 'Education', 'Employment', 'Housing and Building Activity', 'Registration', 'Commercial Tax', 'Co-Operation', 'Civil Supplies', 'Road and Transport', 'Communications', 'Institutional Finance', 'Community Development', 'Social Welfare', 'Adi-Dravidar and Tribal Welfare', 'Price Indices', 'Legislature and Election', 'Judicial Administration', 'Police and Prison', 'Local Bodies', 'State Income', 'State Excise', 'State Finance', 'Five Year Plan', 'Income Tax', 'Insurance Operations', 'Recreation', 'Tourism', 'Environment'];

  $scope.categories = _.map($scope.categories, function (category, index) {
    return {
      id: index + 1,
      name: category
    };
  });

  $scope.subCategories = [['Area, Population, Literates, Scheduled Castes and Scheduled Tribes by Districts', 'Population by Broad Industrial Categories of Workers', 'Population by Religion', 'Population in Five Year Age Group By Residence and Sex in Tamil Nadu as per 2011 Census', 'Comparative Statement showing the population in Five years Age Group By Sex in India & Tamil Nadu as per 2011 Census', 'Single Year Age Returns By Residence and Sex in Tamil Nadu( as per 2011 Census)', 'Population of Tamil Nadu – Decennial Growth', 'Salient features of Census 2011', 'Time Series Data - Population and Literacy Rate of Tamil Nadu']];

  for (var idx = 0; idx < $scope.subCategories.length; idx++) {
    $scope.subCategories[idx] = _.map($scope.subCategories[idx], function (subCategory, index) {
      return {
        id: index + 1,
        name: subCategory
      };
    });
  }

  $scope.setCategory = function (category) {
    $scope.current.category = category;
    $state.go('category', {
      categoryID: category.id
    });
  };

  $scope.setSubCategory = function (subCategory) {
    $scope.current.subCategory = subCategory;
    $state.go('chart', {
      categoryID: $stateParams.categoryID,
      subcategoryID: subCategory.id
    });
  };

  $scope.$on('$stateChangeStart', function(event, toState, toParams) {
    if (!toParams.subcategoryID) {
      $scope.current.subCategory = null;
    }
    if (!toParams.categoryID) {
      $scope.current.category = null;
      $scope.current.subCategory = null;
    }
  });
});
