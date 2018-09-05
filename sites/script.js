window.addEventListener('DOMContentLoaded', function() {
//URLパラメーター読み込み
  var jsonname = document.location.search.substring(1) + "/data.json";
  var headerimg = document.location.search.substring(1) + "/header.png";
  $.getJSON(jsonname, {name: "blogdata"}, function(data){
	var dataArray = data.blogdata;
    $.each(dataArray, function(i){
		     $("main").append('<div class="title"><h1>' + dataArray[i].title +'</h1></div></div><div class="toukousya"><p>投稿者:' + dataArray[i].name + ' 投稿日:' + dataArray[i].day + '</p></div><div class="text"><p>' + dataArray[i].text + '</p></div>');
	       });
    });
    $(".headerimg").append('<img class="second-header" src=' + headerimg + ' alt="second-header">');
});
window.onload = function(){
  var imgname = document.location.search.substring(1);
  $("#1").append("<img src=" + imgname  +"/1.png>");
};
