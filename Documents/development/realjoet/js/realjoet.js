$(function(){
	function initSkrollr(){
		var s = skrollr.init({
			forceHeight: false
		});
	}

	function scrollAlert(){
		$('#scrollAlert')
			.fadeOut(40)
			.fadeIn(40)
			.fadeOut(40)
			.fadeIn(50)
			.fadeOut(40)
			.fadeIn(60)
			.fadeOut(40)
			.fadeIn(40)
			.fadeOut(900);
	}

	initSkrollr();
	scrollAlert();
})