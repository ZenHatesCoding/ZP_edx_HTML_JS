/********************************************************/
//basic syntax example
function startLogic() {
    var newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML = newHtml;
}
startLogic();// this func will be called after alerts

/********************************************************/
// callback example
function clickHandler(callback) {
    alert('You clicked me!');
    if(callback){
        callback();
    }
}
function doMore() {
    alert('I could process more logic here');
}
function doSomethingElse() {
    document.writeln('Test Message');
}
/********************************************************/
//handle click example

document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget2').innerHTML = Date();
}

document.getElementById('dateButton2').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget3').innerHTML = Date();
});

/********************************************************/
// forEach example
var sum = 0;
var numbers = [4, 9, 16, 25];
function increment(item, index) {
    sum += item;
}
numbers.forEach(increment);
alert('forEach example: '+ sum);// alert in consecutive orders
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
alert('switch example: '+day);

// alt+shift+F formatting - remove indentation
var $elem = document.getElementById('output');
$elem.innerHTML += 'Test';
$elem.innerHTML += 4 + 6;
$elem.innerHTML += 4 + 6 + ' Demo';
$elem.innerHTML += 'Demo ' + 4 + 6;
$elem.innerHTML += 'Demo ' + (4 + 6);

/********************************************************/
//getElement + validation example
//var testVariable ;//undefined
//var testVariable = null;
var testVariable = '';//empty
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');
document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;
/********************************************************/
// call back example - save to cookie
function saveToCookie(key, value, onCompletion) {
    var cookieValue = key + ';' + value;
    document.cookie += cookieValue;
    onCompletion(cookieValue);
}

function saveTextValue() {
    var textValue = document.getElementsByName('position')[0].value;
    saveToCookie('Position', textValue, showTextSuccess);
}

function showTextSuccess (result) {
    window.alert('You successfully saved [' + result + '] from the text input to your cookie.');
}

function saveRadioValue() {
    var radioValue;
    var radioOptions = document.getElementsByName('department');
    for (var index = 0; index < radioOptions.length; index++) {
        if (radioOptions[index].checked) {
            radioValue = radioOptions[index].value;
            break;
        }
    }
    saveToCookie('Department', radioValue, function (result) {
       window.alert('You did it! You saved [' + result + ']');
    });
}
/********************************************************/
//bubble event - events propagation
var sections = document.getElementsByTagName('section');

for (var index = 0; index < sections.length; index++) {
    sections[index].onclick = handleClick;
}

function handleClick (event) {
    console.log('current element: ' + this.className + ' | target element: ' + event.target.className);

    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propogation stopped');
    }
}
/********************************************************/
//anonymous func
function normalFunction(input, callbackFunction) {
    var newValue = input + 1;
    callbackFunction(newValue);
};
normalFunction(1, function(inputViaCallback) {
    alert('anonymous func example: '+inputViaCallback);
});

/********************************************************/
//try-catch - error handling
function correctMethodName() {  
    return "Output Message";
}

//var result = correctMethodName(3);
//var result = wrongMethodName(3);
//document.writeln(result);

try {
    var result = correctMethodName(3);
    //var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    //document.writeln('An error occurred');
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");  
}


/********************************************************/
// HTML5 api
/* 
//This data is available even after the user has closed the browser or shut down the computer.
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
*/
// canvas
var canvas = document.getElementById("demoCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#A9B0B3";
context.strokeStyle = "#746C73";
context.lineWidth = 5;

context.moveTo(0, 0);
context.lineTo(700, 350);
context.stroke();

context.beginPath();
context.arc(160, 80, 70, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 345);
context.lineTo(700, 350);
context.lineTo(665, 315);
context.stroke();

context.fillStyle = "#20293F";
context.strokeStyle = "#20293F";

context.font = "78px Segoe UI";
context.fillText("Hello", 190, 230);
context.strokeText("World", 190, 310);


// worker
// Chrome has some problems with it, but Edge doesn't.
var worker;
function startWorker(){
    worker = new Worker("js/mod4_worker.js");
    worker.onmessage = function(event){
        document.getElementById("output1").innerHTML += '<li>'+event.data+'</li>';
    };
}

function stopWorker(){
    worker.terminate();
}


// web socket
var socket = new WebSocket('ws://echo.websocket.org');

socket.onopen = function () {
    console.log('Our socket has been opened!');
}

socket.onmessage = function (event) {
    window.alert(event.data);
}

function testMessage () {
    socket.send("Hello World!");
    //socket.close(); //if closed, no echo canbe received.
}