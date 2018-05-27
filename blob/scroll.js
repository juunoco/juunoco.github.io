
$(document).ready(function(){
	$("#scroll-down").click(function(){
		$('html, body').animate({
			scrollTop: $("#reveal-div").offset().top
		}, 900);	
	});

	$("#scroll-down2").click(function(){
		$('html, body').animate({
			scrollTop: $("#app-div").offset().top
		}, 900);	
	});
});
