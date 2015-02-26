$(function(){
	function getInfo(){
		var name = $('.contact-area__name-input').keyup(function(){
			name = $(this).val();
		});
		var email = $('.contact-area__email-input').keyup(function(){
			email = $(this).val();
		});
		var message = $('.contact-area__message-input').keyup(function(){
			message = $(this).val();
		});

		$('.contact-area__send-button').on('click', function(event){
			event.preventDefault();
			alert("Name: "+name+"\nEmail: "+email+"\nMessage: "+message);
		})

	}

	getInfo();
})