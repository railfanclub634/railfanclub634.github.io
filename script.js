/*JShint false*/
$(function(){

	//boxにリンク
	$('.box1').click(function() {
		window.location.href = "./sites/special/site-opening/index.html"
 	}); 
	 
	//fixed-buttonクリックイベント
	$('.fixed-button-colider').click(function() {
		$('.overlay').toggleClass('is-open');
 	});
/*
	$('.overlay').click(function() {
		$('.overlay').removeClass('is-open');
 	});
*/
});
