(function(){

	'use strict';

	angular.module('campernews')
		.factory('getNews',['$http', '$log', function($http, $log){
			return function(){
					return $http.get('http://www.freecodecamp.com/news/hot')
						.then(function(d){
							return d.data.map(function(x){
								return  {
											headline: x.headline,
											timePosted: x.timePosted,
											url: x.link,
											description: x.metaDescription,
											votes: x.upVotes.length,
											image: x.image || null,
											author: {
												userName: x.author.username,
												logo: x.author.picture
											}
									};
							});
						});
				};
		}]);

})();


