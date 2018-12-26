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
		// $scope.message = "hero";
		// $scope.logId = function($scope) {
		// 	$scope.message = $scope.id;
		// 	$scope.$apply();
		// 	// console.log($scope.message);
		// }
		// // console.log($scope.message);
		// // console.log($scope.formData.searchText.$modelValue)
  //   	$http.get('http://www.omdbapi.com/?t='+ $scope.message +'&apikey=51f2bbd8&r=json').success(function (response) {
  //       $scope.movie = response;
  //   });
  		$scope.name = 'zero';
  		$scope.check = function(name){
  			$http({
  				method: "GET",
  				url: "http://www.omdbapi.com/?t="+name+"&apikey=51f2bbd8&r=json"
  			}).then(function mySuccess(resp){
  				console.log("success")
  				console.log(resp.data)
  				$scope.movie = resp.data;
  			},function myError(response){
  				console.log("error");
  			});
  		}

})
