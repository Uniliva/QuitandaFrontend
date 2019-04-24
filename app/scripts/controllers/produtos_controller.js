'use strict';
angular.module("quitandaApp").controller("produtos_controller", function ($scope,produtos_service) {

if($scope.lista_dados_tabela == undefined){
$scope.carregando = true;
  produtos_service.getAllProdutos().then(function (data) {
      $scope.carregando = false;
      $scope.lista_dados_tabela = data.data;
    }, function (reason) {
      $scope.carregando = false;
      $scope.lista_dados_tabela = {};
      console.log(reason);
    })
  }


  });
