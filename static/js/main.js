//core.js
app = angular.module('MeanStart',[])
	.controller('mainController', ['$scope', '$http', function($scope, $http){

		//variables
		$scope.title = "MeanStart";

		$scope.getHeadline = function() {
			return "Basic Starting point for creating a Mean App. Using Gulp as a build tool.";
		};

}]);