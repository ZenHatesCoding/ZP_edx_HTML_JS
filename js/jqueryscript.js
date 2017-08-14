$(document).ready(function () {
    manipulateDOM();
});

function manipulateDOM() {
    var h1Headers = $('h1');
    h1Headers.text('Hello World');
    var h3Headers = $('h3');
    h3Headers.css('color', '#37887D');
    h3Headers.first().css('text-decoration', 'line-through');
    var lastH3Header = $('h3:last');
    lastH3Header.css('background-color', '#53226A');        
}

function makeRequests() {
    $.ajax({
        //url: 'http://www.example.com/api',
        url: 'http://httpbin.org/get',
        method: 'GET',
        dataType: 'json'
    })
    .done(function(response) {
        $('body > p').text(
            JSON.stringify(response)
        );
    })
    .fail(function() {
        alert('An error has occured')
    });
}

function makeRequests2() {  
    $.get({
        url: 'http://httpbin.org/user-agent',
        dataType: 'json'
    })
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response['user-agent']
            );
        });
}

function makeRequests3() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            alert(JSON.stringify(response));
            $('body > p').text(
                response.origin
            );
        });
}

$(document).ready(function () {
    //makeRequests();
    //makeRequests2();
    makeRequests3();
})