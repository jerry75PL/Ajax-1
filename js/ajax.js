'use strict';

function pobierzDane() {
    var httpReq = new XMLHttpRequest();

    httpReq.open('GET', 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', true);

    httpReq.onreadystatechange = function () {

        //        console.log(httpReq.readyState);

        if (httpReq.readyState == 4) {


            if (httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpReq.status == 'undefined') {

                console.log(httpReq.status);
                console.log(httpReq.responseText);

                var returnData = JSON.parse(httpReq.responseText);

                //                console.log(returnData);


                var userName = document.createElement('p');

                userName.innerHTML = 'nazwa użytkownika to: ' + returnData.userName;

                console.log(userName);

                document.body.appendChild(userName);



                var userId = document.createElement('p');

                userId.innerHTML = 'ID użytkownika to: ' + returnData.userId;

                console.log(userId);

                document.body.appendChild(userId);


                var userURL = document.createElement('p');

                userURL.innerHTML = 'URL użytkownika to: <a href ="http://' + returnData.userURL + '">' + returnData.userURL + '</a>';

                console.log(userURL);

                document.body.appendChild(userURL);



                httpReq = null;

            }




        }
    }

    httpReq.send();

}

//pobierzDane();