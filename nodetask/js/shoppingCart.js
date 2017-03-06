var myModule=angular.module("myApp",[]);
myModule.controller("cartController",function($scope){
	$scope.bill={};
	$scope.head="shopping cart hello!";
$scope.items=[
		{title:"Paint pots",quantity:8,price:3.95},
		{title:"Paint pots",quantity:8,price:3.95},
		{title:"Paint pots",quantity:8,price:3.95}
	];
$scope.totalCart=function(){
	var total=0;
	for(var i=0;i<$scope.items.length;i++){
		total+=$scope.items[i].quantity*$scope.items[i].price;
	}
	return total;
}
$scope.subtotal=function(){
	return $scope.totalCart()-$scope.bill.discount;
}
function discount(){
	$scope.bill.discount=$scope.totalCart()>100?10:0;
}
$scope.$watch($scope.totalCart,discount);	
});
myModule.filter("titleCase",function(){
	var titleCase=function(input){
		var words=input.split(' ');
		for(var i=0;i<words.length;i++){
			words[i]=words[i].charAt(0).toUpperCase()+words[i].slice(1);
		}
		return words.join(' ');
	}
	return titleCase;
});	
 