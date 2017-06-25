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

                httpReq = null;

            }




        }
    }

    httpReq.send();

}

pobierzDane();