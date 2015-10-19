(function(){

	'use strict';

	angular.module('campernews')
		.controller('NewsController', ['getNews', '$scope', function(getNews, $scope){
			getNews().then(function(x){
				$scope.stories = x;
			})
		}]);

})();