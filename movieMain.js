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

// myApp.controller('movieController', function($scope) {
// 	$scope.students = [
// 		{name: 'Mark Waugh', city:'New York'},
// 		{name: 'Steve Jonathan', city:'London'},
// 		{name: 'John Marcus', city:'Paris'}
// 	];

// 	$scope.message = "Click on the hyper link to view the students list.";
// });
// myApp.controller('movieController', function($scope, $http) {
//   $http.get("// http://www.omdbapi.com/?t="+titl"&apikey=51f2bbd8").then(function (response) {
//       $scope.myData = response.data.records;
//   });
// });

// app.controller('singleMovie', function($scope, GetData, $routeParams) {
//     GetData.movieData('id', $routeParams.ID,function(response) {
//         $scope.movie = response;
//     });

// });


	myApp.controller('movieController', function ($scope, $http) {
    $http.get('http://www.omdbapi.com/?t=mahabharat&apikey=51f2bbd8&r=json').success(function (response) {
        $scope.movie = response;
    });
});