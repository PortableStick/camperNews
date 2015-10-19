(function() {
  'use strict';

  angular
    .module('campernews')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/partials/newsSite.html',
        controller: 'NewsController',
        controllerAs: 'theNews'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
