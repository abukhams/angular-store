(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.00,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full: 'images/dodecahedron-01-full.gif',
					thumb: 'images/dodecahedron-01-thumb.jpg',
				},
				{
					full: 'images/dodecahedron-02-full.jpg',
					thumb: 'images/dodecahedron-02-thumb.jpg',
				}
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'The Pentagonal is a gem with 5 sides, which - in the proper light - gives it the effect of a shining star.',
			canPurchase: false,
			soldOut: false,
			images: [
				{
					full: 'images/pentagonal-gem-01-full.gif',
					thumb: 'images/pentagonal-gem-01-thumb.jpg',
				},
				{
					full: 'images/pentagonal-gem-02-full.jpg',
					thumb: 'images/pentagonal-gem-02-thumb.jpg',
				}
			]
		}
	];
})();