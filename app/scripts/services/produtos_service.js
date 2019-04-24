'use strict';
  angular.module('quitandaApp').service('produtos_service', function ($http, configValue) {
    var headers = {
        "headers": {            
            "Content-Type": "application/json"
        }
    }

    var _getAllProdutos = function () {
        return $http.get(configValue.baseUrl + "/produto/find-all");
    };  
    
    var _getAllProdutosByTipo = function () {
        return $http.get(configValue.baseUrl + "/produto/total-por-tipo");
    };  
    
    return {
        getAllProdutos: _getAllProdutos,
        getAllProdutosByTipo: _getAllProdutosByTipo
    };

});