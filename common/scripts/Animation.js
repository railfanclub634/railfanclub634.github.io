$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".second-header").css({
		width: (100 + scroll/5)  + "%",
		top: -(scroll/10)  + "%",
		"-webkit-filter": "blur(" + (scroll/200) + "px)",
		filter: "blur(" + (scroll/200) + "px)"
	});
});