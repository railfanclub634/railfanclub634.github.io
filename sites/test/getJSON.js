$(function() {
//URLパラメーター読み込み
  var jsonname = "test";
//json読み込み
  $.getJSON("test.json", {name: "blogdata"}, function(data){
	   var dataArray = data.blogdata;
     $.each(dataArray, function(i){
		     $("main").append("<div class="title">" + dataArray[i].title +"</div>");
	       });
    });
});
