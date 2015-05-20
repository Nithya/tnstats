angular.module('tnstats').controller('ChartCtrl', function ($stateParams, $http, $scope, $timeout) {
  'use strict';

  $http.get('assets/data/' + $stateParams.categoryID + '_' + $stateParams.subcategoryID + '.json').then(function (response) {

    var chart1Data = _.map(response.data, function (datum) {
      return [datum.Religion, datum['Persons in Tamil Nadu']];
    });

    var chart2Data = _.map(response.data, function (datum) {
      return [datum.Religion, datum['All India']];
    });

    var chart3Data = _.map(response.data, function (datum) {
      return datum['Variation Since 1991-2001'];
    });

    var religions = _.pluck(response.data, 'Religion');
    var variation = _.pluck(response.data, 'Variation Since 1991-2001');

    $scope.data = response.data;

    console.log(JSON.stringify($scope.data), JSON.stringify(chart1Data));

    $('.chart').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Population by Religion - Tamil Nadu'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        name: 'Population',
        data: chart1Data
      }]
    });

    $('.chart1').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false
      },
      title: {
        text: 'Population by Religion - All India'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'pie',
        name: 'Population',
        data: chart2Data
      }]
    });

    $('.chart2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Variation since 2001'
        },
        xAxis: {
            categories: religions
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        series: [{
            data: chart3Data
        }]
    });

    $timeout(function () {
      $('#dataTable').DataTable({
        paginate: false
      });
    });

  });
});
