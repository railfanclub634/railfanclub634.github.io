/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {
                        //URLパラメーター読み込み
                                                var jsonname = "test";
                        //json読み込み
                                                $.getJSON("test.json", function(data){
                                                $.each(function(){
                                                $('<div class="cover"><main>' +
                                                '<div class="title"><h1>' + this.title + '</h1></div>' +
                                                '<div class="toukousya"><span class="contributor">' + this.contributor + '</span><span class="day">' + this.day +'</span></div>' + 
                                                '<div class="text"><p>' + this.text + '</p></div>'
                                                '</main></div>').appendTo('');  
                                                })
                         })
});

