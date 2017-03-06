var myModule=angular.module("myApp", ['ngRoute']);
myModule.controller("testController",function($scope){
	$scope.test="hello!";
});
myModule.config(function($routeProvider){
	$routeProvider.when("/",{
		controller:listController,
		templateUrl:"list.html"
	}).when("/view/:id",{
		controller:detailController,
		templateUrl:"detail.html"
	}).otherwise({
		redictTo:"/"
	});
});
messages=[{id:0,sender:"jiji@abc.com",subject:"hi my friend",date:"Dec 6,2016 12:22:00",
recipients:["gugt@abc.com"],message:"hello 0"},
{id:1,sender:"jiji1@abc.com",subject:"hi my friend 1",date:"Dec 6,2016 12:22:00",
recipients:["gugt@abc.com"],message:"hello 1"},
{id:2,sender:"jiji2@abc.com",subject:"hi my friend2",date:"Dec 6,2016 12:22:00",
recipients:["gugt@abc.com"],message:"hello 2"}
];
function listController($scope){
	$scope.messages=messages;
}
function detailController($scope,$routeParams){
	$scope.message=messages[$routeParams.id];
}