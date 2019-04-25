'use strict';
angular.module('quitandaApp').controller('MainCtrl', function ($scope, produtos_service) {
  $scope.msgErro = false;
  produtos_service.getAllProdutosByTipo().then(function (data) {
    console.log("Entrou busca main");
    $scope.msgErro = false;
    $scope.prods = data.data;

    var ctx_grafico = $("#grafico-estoque").get(0).getContext("2d");
    var chart_grafico = new Chart(ctx_grafico, {
      type: 'bar',
      data: {
        labels: Object.keys($scope.prods),
        datasets: [
          {
            label: "Estoque de Alimentos",
            data: Object.values($scope.prods),
            borderColor: ['rgb(102, 0, 0)', 'rgb(76, 153, 0)', 'rgb(204, 102, 0)'],
            backgroundColor: ['rgb(102, 0, 0)', 'rgb(76, 153, 0)', 'rgb(204, 102, 0)'],
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Estoque de Alimentos',
          position: 'top',
          fontSize: 16
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })

  }, function (reason) {
    $scope.msgErro = true;
    console.log(reason);
  });

});
