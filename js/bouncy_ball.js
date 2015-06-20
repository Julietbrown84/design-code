
 $(document).ready(function() {

  
	$(function() {
		setInterval(function(){
			BounceAnimation('10px', 300)
		}, 1000) 
	});
	function BounceAnimation(distance, speed) {
	        $("#bounce").animate({marginTop: '-='+distance}, speed)
	        .animate({marginTop: '+='+distance}, speed);       
	}
 });