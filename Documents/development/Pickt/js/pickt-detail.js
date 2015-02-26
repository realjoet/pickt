jQuery(document).ready(function($) {
	//JSON API for in class FB project
	$.ajax({
		url: '../store1.json',  
		type: 'GET',
		dataType: 'json'
	})

	.done(function(data){
		console.log(data);
		var mensShirts = data.store.mens.shirts;
		fillSwipeContent(clothes);
	})
	
	.fail(function(xhr, textResponse){
		console.log('fail', textResponse);
	})
	;

	function fillSwipeContent(clothes){
			var mensShirts = data.store.mens.shirts;

			for (var i = 0; i < mensShirts.length; i++){
				var picture = mensShirts[i].item;
				var price = '$' + mensShirts[i].price;

				$('<div />', {class: 'carousel-item'}).appendTo('.carousel');
				$('<img />', {class: 'content-item', src: picture}).appendTo('.carousel-item');
				$('<p />', {class: 'content-price',}).appendTo('.carousel-item').html(price);
			}
	};

});