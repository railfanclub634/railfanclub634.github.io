window.addEventListener('DOMContentLoaded', function() {
//URLパラメーター読み込み
  var jsonname = "test";
  $.getJSON("test.json", {name: "blogdata"}, function(data){
	   var dataArray = data.blogdata;
     $.each(dataArray, function(i){
		     $("main").append('<div class="title"><h1>' + dataArray[i].title +'</h1></div></div><div class="toukousya"><p>投稿者:' + dataArray[i].name + ' 投稿日:' + dataArray[i].day + '</p></div><div class="text"><p>' + dataArray[i].text + '</p></div>');
	       });
    });
});
