In the previous section, we were using a fairly inefficient for loop:
```js
var t0 = performance.now();
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;
    document.body.appendChild(newElement);
}
var t1 = performance.now();
console.log(t1-t0);
```

When I run this code on google.com, t1-t0 gives values between 2.3 and 3.5 ms.

One of the inefficiencies stems from having to traverse the document during each
iteration of the loop in order to append the new element (actually, I learn later in the
lesson that this is due to reflow and repaint operations that the browser runs to keep the 
screen in syn w/ the DOM).  We can fix this by
creating a parent container that we build in the for loop (has nearly nothing to traverse compared
to the full document).

```js
var t0 = performance.now();
// create parent container
const myCustomDiv = document.createElement('div');
// build list in container
for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;
  myCustomDiv.appendChild(newElement);
}
// append container
document.body.appendChild(myCustomDiv);
var t1 = performance.now();
console.log(t1-t0);
```

For this code, t1-t0 gave values of 0.5-0.7 milliseconds, giving a worst-case performance boost of 3.3x (2.3/0.7),
but capable of boosting performance up to 7x (3.5/0.5) in the best case.

The downside of this code is that it adds an unnecessary <div> tag to the DOM.  Is there a way to 
achieve this performance w/o adding extraneous page elements?

Answer: the document fragment.

## Document Fragments
Every time you affect the document, the browser attempts to keep the screen synced with the DOM and goes 
through "reflow" and "repaint" operations.  This is what slows down a for loop that is continuously
updating the DOM.  To resolve this, we used created a prent \<div> tag to build the list in, which we 
then appended to the DOM at the end.  The pro was that we could build the list "offline" and then append
it at the end; the con was that we added an unnecessary \<div> tag to the DOM.  

The document fragment resolves this, allowing us to build the list offline without then adding an extraneous
element to the DOM.  A document fragment is the same type of object as the DOM that can then be 
seamlessly appended to the DOM: it is a way of building the DOM in the background.  

To instantiate a document fragment, use `document.createDocumentFragment()`

```js
const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!
```

## More on Reflow and Repaint
> Reflow is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.
> 
> Repaint happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.

More on Website Optimization:
* https://www.udacity.com/course/website-performance-optimization--ud884

## The Call Stack
JS is single-threaded.  When a script run, the call stack start with one frame ("main").  When a function
is invoked, another frame is added to the stack.  If a function is invoked inside that function, another
frame is added to the stack.  When the "inner" function completes, it is removed from the stack and execution
returns to where the parent function was invoked and continues execution through the end of that function, 
at which point it is removed from the stack and execution returns to main...

https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

-------------------------

Another term for single-threaded is run-to-completion, e.g., a function runs until it is completed before
it returns execution to its caller.  This single-threaded type of behavior is also called 'synchronous'.

One thread means one call stack means one thing at a time.

https://www.youtube.com/watch?time_continue=97&v=uBdemYBG-ek

## The Async Bits
Ok, so JavaScript is synchronous/single-threaded...but what about all the asynchrounous bits that
make up a website?  That is, we've learned about things like event listeners --- where are they
on the call stack?

This is basically how it works:
* the JS code is executed
* function definitions, including things like event listeners, do not go on the call stack unless they are invoked
* so, when an event listener is read by the executioner, it is sent to the browser to listen
* during this time, other JS runs synchronously
* if there is an event in the browser, the event listener is put in a queue
* when the call stack goes empty (idles), it looks at the queue
* if there is something on the queue, it gets put on the empty stack
* etc

> The simplest explanation of JavaScript's concurrency model uses two rules: If some JavaScript is running, let it run until it is finished ("run-to-completion"). If no JavaScript is running, run any pending event handlers.

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
* https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers
* YouTube: [What the heck is an Event Loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
  - this guy had the awesomest ice breaker at the beginning of his talk: he started stretching and asked, "Can everyone give me a stretch?" He finished up stretching and said, "Good! I needed to stretch, and I look less weird." (or something to that effect)
  

## setTimeOut
Basically, there a `setTimeOut()` function that is a Web API.  This means, that it starts at the browser, and
things that needs to be interpreted by the JS engine are put into the queue.  The function works like this:

```js
// Say hi in 1 second (1000 ms)
setTimeOut(function sayHi() {
  console.log('Hi!');
}, 1000);
```

The async trick is that you can give `setTimeOut()` a delay of 0ms.  The purpose of this is to put the
JavaScript in the queue instead of directly on the stack.  When used creatively, this prevents code from
blocking the stack, which is single-threaded.  

* https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

-------------------------------------------------------

More from Udacity:
* [Browser Rendering Optimization](https://www.udacity.com/course/browser-rendering-optimization--ud860)
* [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)


