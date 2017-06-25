'use strict';


$(function () {

    //$.ajax({
    //    url:'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', 
    //    dataType: 'json',
    //    success: function(resultJSON){
    //        console.log(resultJSON);
    //    },
    //    error: function(msg){
    //        console.log(msg);
    //    }
    //});

    
    //przy jQuery eventy na elemencie nie poprzez funkcje

    $('#bierz').click(function () {

            $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
                function (data) {
                    console.log(data);

                    $('body').append('<p>nazwa użytkownika to: ' + data.userName + '</p>');
                    $('body').append('<p>ID użytkownika to: ' + data.userId + '</p>');
                    $('body').append('<p>URL użytkownika to: <a href ="http://' + data.userURL + '">' + data.userURL + '</a></p>');
                });

       });
    
});
