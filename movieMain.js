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
		// var mname =[];
		// $scope.logId = function($scope) {
		// 	$scope.mname.push($scope.id);
		// 	console.log(mname[0]);
		// 	$scope.mname = $scope.id;
        
 	// }
  //   $scope.mnames = angular.element('#Text1').value;
 	// console.log($scope.mname);
 	// var mname = $scope.id;
 	// $scope.RandomValue = angular.element('#id').val();
    $http.get('http://www.omdbapi.com/?t='+ $scope.id +'&apikey=51f2bbd8&r=json').success(function (response) {
        $scope.movie = response;
    });

})
