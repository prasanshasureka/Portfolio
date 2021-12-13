var body = document.body;
var scrollText = document.querySelector('#percent-scroll p');

var docHeight = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight);
var windowHeight = window.innerHeight;
height = docHeight-windowHeight;
console.log(docHeight, height);

window.onresize = function(){
    docHeight = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight);
    windowHeight = window.innerHeight;
    height = docHeight-windowHeight;
}

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    var text = Math.floor((window.scrollY/height)*100);
    scrollText.innerHTML = text + '% Scrolled';
})
