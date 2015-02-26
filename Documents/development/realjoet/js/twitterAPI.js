$(function(){
	$.ajax({
		url: "http://bdw-api.herokuapp.com/api/v1/twitter/favs/realjoet", 
		data: 'GET',
		dataType: 'jsonp',
		success: function(response){
			console.log(response);
		},
		error: function(response){
			console.log(response);
		}
		})

	.done(function(data){
		for (var i=0; i<data.length; i++){
			var tweet = data[i].text,
			twitterArea = $('section.twitter-area');
			$(twitterArea).append('<div>').append(tweet);
		}
	});
})