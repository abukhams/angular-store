(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			canPurchase: true,
			soldOut: false,
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'The Pentagonal is a gem with 4 sides, which - in the proper light - gives it the effect of a shining star.',
			canPurchase: false,
			soldOut: false,
		}
	];
})();