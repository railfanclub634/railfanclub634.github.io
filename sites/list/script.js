window.addEventListener('DOMContentLoaded', function() {
    var jsonname = document.location.search.substring(1) + "-list.json"
    var dirname = document.location.search.substring(1)
    $.getJSON(jsonname, {name: "listdata"}, function(data){
        var dataArray = data.listdata;
      $.each(dataArray, function(i){
          $(".list").append('<a href=/sites?' + dirname + '/' + dataArray[i].url + '><li>' + dataArray[i].title + '</li></a>');
        });
    });
});
