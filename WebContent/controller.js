var pizzaOrderApp = angular.module('pizzaOrderApp', []);

pizzaOrderApp.controller('PizzaOrderListCtrl', function($scope) {
	$scope.orders = [ {
		'pizzaName' : 'Marharita',
		'pizzaType' : 'BIG',
		'status' : "Delivered",
		'deliveryTime' : '12.12.2015 12:12',
		'delivered' : true,
		'customer' : 'John Smith 444-444-444 Lodz, Piotrkowska 19/23',
		'type' : 'INDIVIDUAL'
	}, {
		'pizzaName' : 'Kebab',
		'pizzaType' : 'SMALL',
		'status' : "Delivered",
		'deliveryTime' : '12.12.2015 12:12',
		'delivered' : true,
		'customer' : 'Janek Maniek 111-11-111 Warsaw,Cieman 1a',
		'type' : 'INDIVIDUAL'
	}, {
		'pizzaName' : 'Marharita',
		'pizzaType' : 'LARGE',
		'status' : "Ordered",
		'deliveryTime' : '12.12.2015 12:12',
		'delivered' : false,
		'customer' : 'John Kowalski 123-456-789 Lodz, Krutka 43a',
		'type' : 'INDIVIDUAL'
	}, {
		'pizzaName' : 'Kebab',
		'pizzaType' : 'BIG',
		'status' : "Cancelled",
		'deliveryTime' : '12.12.2015 12:12',
		'delivered' : false,
		'customer' : 'John Smith 444-444-444 Lodz, Piotrkowska 19/23',
		'type' : 'Bussiness'
	} ];
});