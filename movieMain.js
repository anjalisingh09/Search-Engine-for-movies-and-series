var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
		.when('/movieHome', {
			templateUrl: 'movieHome.html',
			controller: 'movieController'
		})
		.when('/viewMovies', {
			templateUrl: 'viewMovies.html',
			controller: 'movieController'
		})
		.otherwise({
			redirectTo: '/movieHome'
		});
});

	myApp.controller('movieController', function ($scope, $http) {
		// $scope.formData = {};
		$scope.message = "hero";
		$scope.logId = function($scope) {
			$scope.message = $scope.id;
			$scope.$apply();
			// console.log($scope.message);
		}
		// console.log($scope.message);
		// console.log($scope.formData.searchText.$modelValue)
    	$http.get('http://www.omdbapi.com/?t='+ $scope.message +'&apikey=51f2bbd8&r=json').success(function (response) {
        $scope.movie = response;
    });

})
