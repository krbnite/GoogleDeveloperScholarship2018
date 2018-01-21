Not sure there will too many notes here...

JavaScript was originall called LiveScript, but was changed to JavaScript as
a marketing decision (to piggyback off Java's popularity at the time).  As time went on,
the language evolved in multiple directions, with no one true JavaScript.  This is
when ECMA stepped in and standardized releases of JavaScript.  This standardized version
of JavaScript is technically called ECMAScript, but is still referred to as JavaScript. The
ECMA prefix, however, is still retained in JavaScript version numbers.  For example,
ES5 is the version that has been in use for a while now, though some people are starting
to employ ES6.  To promote a more consistent release cycle, the nomenclature has moved
in the direction of ES2016, ES2017, etc. Point is, the naming scheme of JavaScript
can get confusing!

## JavaScript Console in Chrome Developer Tools
The JS Console in Chrome is a nice way for a beginner to test some lines of code. However,
for more advanced testing, it can get annoying, e.g., for multiline code snippets, you must
press shift+enter for next line.  That said, in this course we will stick to Chrome's JS
console.  To make things easier, you can use a text editor to write multiline code, then
copy and paste it into the console.

To get to the JavaScript Console in Chrome on a MacBook Pro, you can 2-finger click 
a webpage,  click on "Inspect", then click on"Console" tab in the window that opens up. Or,
you can just do cmd+alt+j.

```js
"Hello, World.";
alert("Hello Pop Up!");
```

Note that all other browsers have their own developer tools, but we'll stick with Chrome
in this class.

## Some quickies
String Concatenation
```js
a = 'My cat '
b = 'is annoying.'
a+b
```

For Loop
```
for (var i=0; i<10; i++) {
  console.log(i*i);
}
```

Change first instance of <h1> tag on page to the color red
```
document.getElementByTagName('h1')[0].style.color = '#ff0000';
```

Give clicking the power to manifest pictures of cats licking ice cream
```
document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner"); 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});
```
