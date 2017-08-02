$(document).ready(function(){
	var event = 'click',
	speed = 500,
	current;
	//console.log($('dd').length);
	$('dd').not(':first').hide();
	$('dt').on(event, function(){
	 	current = $(this).children('img');
		$(this)
		.next()
		.slideToggle(speed)
		.siblings('dd')
		.slideUp(speed);
		//remove rotate class excep the active one
		$('img').not(current).removeClass('rotate');

		//Adding or removing rotate class base on the existing rotating class
		current.toggleClass('rotate');
	
	});
});