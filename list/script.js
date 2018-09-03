window.addEventListener('DOMContentLoaded', function() {
    var jsonname = "json/" + document.location.search.substring(1) + "-list.json"
    $.getJSON(jsonname, {name: "listdata"}, function(data){
        var dataArray = data.listdata;
      $.each(dataArray, function(i){
          $(".list").append('<a href=/sites?' + jsonname + '/' + dataArray[i].url + '><li>' + dataArray[i].title + '</li></a>');
        });
    });
});