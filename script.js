
$(function(){
	//html書き換え
	$('.box1').html('<h4>2018/05/19</h4><h1>HP開設</h1>');
	$('.box2').html('<h4>2018/05/19</h4><h1>小冊子配布</h1>');
	$('.box3').html('<h4>2018/05/19</h4><h1>春長期旅行</h1>');
	$('.box4').html('<h4>2018/05/19</h4><h1>第96回記念祭</h1>');
	
	
	//css書き換え
	$('.box1').css({'background-image':'url(images/home/site-introduction.png)','color':'#FFF','width':'100%'});
	$('.box2').css({'background-image':'url(images/home/2018-96th-booklet.svg)','color':'#111'});
	$('.box3').css({'background-image':'url(images/home/2018-harutyouki.png)','color':'#FFF'});
	$('.box4').css({'background-image':'url(images/home/2018-kinensai-logo.png)','color':'#FFF'});
	
	//fixed-buttonクリックイベント
	$('.fixed-button-colider').click(function() {
		$('.overlay').toggleClass('is-open');
 	});
	$('.overlay').click(function() {
		$('.overlay').removeClass('is-open');
 	});
});
