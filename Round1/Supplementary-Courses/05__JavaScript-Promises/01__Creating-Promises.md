



--------------------------------------------------------------

## Callbacks
In JavaScript, functions are first-class objects: they can be used just like a string, number,
or any other object.  This means they can be stored in variables, or be returned by another
function, or passed as an argument to a function.

When a function is passed as an argument to another function, the input function is called a 
"callback."  Callbacks help to make asynchronous code: basically, a callback is a function that is executed
if some other condition is met.  

From [JavaScriptIsSexy](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/):
> A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.

This is an extremely simple callback (the function is executed **after** 1 second):
```js
setTimeout(function() {
  console.log('Hi!');
}, 1000);
```

Another example of a callback:
```js
button = document.querySelector('#btn1');
button.click(function() {
  alert("You've won $1,000,000!");
});
```

A callback is just an argument to another function; it gets executed after something else 
happens, e.g., in the last case, after a button is clicked.

The `.foreach()` method of an array is another common example of callback:
```js
var numbers = [1,2,3,4,5];
numbers.foreach(x => console.log(x*x));
```

> Note that the callback function is not executed immediately. It is “called back” (hence the name) at some specified point inside the containing function’s body. ... Even without a name, it can still be accessed later via the arguments object by the containing function.

### Callback functions are closures
>When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure.
* JavaScriptIsSexy: [Understand JavaScript Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)


--------------------------------------------------

## Promises/Thenables vs Callbacks
Callbacks can get messy ("pyramid of doom"). The syntactically simpler and more readable way of doing
similar behavior is to use promises, which give you much better control over async activities.

* https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)
* http://callbackhell.com/

That said... Promises make use of callbacks... They seem to be just a well-structured, easy-to-read
way of using callbacks..

-------------------------------------------------

Basic outline of promises:
* first you wrap/construct a promise
* next, thenify the promise
* to be safe, catchify it too!
* optional: chainify like a boos

* Jake Archibald: [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)

Some terminology:
> A promise can be:
> * fulfilled - The action relating to the promise succeeded
> * rejected - The action relating to the promise failed
> * pending - Hasn't fulfilled or rejected yet
> * settled - Has fulfilled or rejected

* technically, `.then()` can take up to two function arguments: `promise.then(resolve, reject)`
* however, a slightly more readable (and better way) is to chain these like so: `promise.then(resolve).catch(reject)`
* the chaining behavior is similar to try/catch statements
* in short, promises allow for a non-blocking/async version of try/catch statements

> The of them as try/catch wrappers around asynchronous work.

From the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
> A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
* pending: initial state (neither fulfilled nor rejected)
* fulfilled: the operation completed successfully
* rejected: the operation failed

---------------

Basic outline of a promise:
```js
var promise = new Promise(
  function(resolve, reject) {
    if (success) {
      resolve(reward); // promise fulfilled
    } else {
      reject(shame); // promise rejected
    }
  }
).then(giveReward)
.catch(bestowShame);
```

The promise takes in an anonymous callback function with two callbacks, resolve and 
reject (optional).  Inside the function, things happen... If these things are successful,
then the promise is resolved by fulfillment of the promise.  If these things are unsuccessful,
then resolve the promise by rejecting it!  These resolutions are not actions: they are just
decisions to fulfill or reject the promise; they're corresponding actions are defined in the
subsequent `.then()` and `.catch()` methods.  

This example from [scotch.io](https://scotch.io/tutorials/javascript-promises-for-dummies) is really helpful
in understanding how to construct a promise, and what the corresponding terminology means.

> Imagine you are a kid. Your mom promises you that she'll get you a new phone next week. You don't know if you will get that phone until next week. Your mom can either really buy you a brand new phone, or stand you up and withhold the phone if she is not happy :(.

```js
// Promise
var willIGetNewPhone = new Promise(
  function (resolve, reject) {
    if (isMomHappy) {
      var phone = {
        brand: 'Samsung',
        color: 'black'
      };
      resolve(phone); // fulfilled
    } else {
      var reason = new Error('mom is not happy');
      reject(reason); // reject
    }
  }
);
```

-------------

#### SIDE NOTE
JavaScript has [iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators)
that are nearly identical to that in Python (mod the syntax).

----------------------------------------------------------------




## Some References
* JavaScriptIsSexy: [JavaScript Callback Functions](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* JavaScriptIsSexy: [Understand JavaScript Closures with Ease](http://javascriptissexy.com/understand-javascript-closures-with-ease/)
