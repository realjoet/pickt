$(function(){

	function getWork(){
		$.ajax({
			url:'realjoetWork.json', 
			type: "GET", 
			dataType: "json",
			success: function(response) {
				console.log(response);
			},
			error: function(response) {
				console.log("Error: " + response);
			},
		}).done(function(data) {
				var work = data,
				devWork = data.devWork,
				designWork = data.designWork,
				experiments = data.experiments,
				div = $('<div></div>');
	
				for (i=0; i<data.length; i++){
					var randomNum = Math.random(0, data.length);
					var indexNum = data[randomNum];
					if (indexNum == 0){
						$('section.work').append(div).addClass('yellow');

					} else if (indexNum == 1) {
						$('section.work').append(div).addClass('pink');

					} else if (indexNum == 2){
						$('section.work').append(div).addClass('teal');

					} else {
						console.log ("Data object " + data + " isn't categorized")
					}
				}


			})
	}

	getWork();

})