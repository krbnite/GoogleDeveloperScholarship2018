Ok, so if using XHR objects was like having to do every little part of the job of baking a cake yourself (figure out the ingredients,
go buy the ingredients, measure the ingredients, etc); and if using jQuery was like having a baker do it all for you; then
this next method (using the Fetch API) is a little like being the professional baker yourself.  That is, the Fetch API lets
you have the custom feel of the XHR object w/ the power of the jQuery library, but is native to the browser (no need
to import an library).

The Fetch API is promises-based... I know a little about this from some of the GrowWithGoogle videos, but
honestly not a lot. Here's my take: if you were to code synchronously, then you would have control of
when each operation occurred.  However, this can block the call stack for an unnecessary amount of time
for certain operations -- wouldn't it be better if we could get some other work done while a lengthy process
was running in the background?  That is where pure async coding comes in.  However, in this case, there is
no control: if you put a few processes in the background, there is not way to know which will finish in what
order every time.  Wouldn't it be nice if you can have a little more control?  That's where promises come in:
you can have "ordered" async operations.

Anyway, I'll finish up taking some notes on Fetch, then head over the Udacity course on 
[JavaScript Promises](https://www.udacity.com/course/javascript-promises--ud898).

---------------------------------------------

* fetch is replacing utility of XHR object
* fetch still respect the cross origin protocol

Ex
```js
fetch('https://api.unsplash.com/search/photos?page=1&query=flowers');
```


[Fetch Docs on MDN]

> "The fetch() method of the WindowOrWorkerGlobalScope mixin starts the process of fetching a resource from the network. This returns a promise that resolves to the Response object representing the response to your request.
>
> WorkerOrGlobalScope is implemented by both Window and WorkerGlobalScope, which means that the fetch() method is available in pretty much any context in which you might want to fetch resources.

Example
```js
var myImage = document.querySelector('img');
var myRequest = new Request('flowers.jpg');

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(response) {
  var objectURL = URL.createObjectURL(response);
  myImage.src = objectURL;
});
```

Example w/ Headers
```js
var myImage = document.querySelector('img');
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
var myRequest = new Request('flowers.jpg');

fetch(myRequest,myInit).then(function(response) {
  ... 
});
```

Simple Example (from [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch))
> The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
```
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    
```

The second argument of fetch can be a Headers object, or a regular object.  The above
examples mostly use the Header object.  Here is how to change the request type using
a regular object:
```js
fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    method: 'POST'
});
```

--------------------------

> The .json() method on a Response object returns a Promise, so we need to chain on another .then() to actually get and start using the returned data. This time, let's call addImage to pass it the returned data:
```js
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
      headers: {
        Authorization: `Client-ID ${unsplashId}`
    }).then(function(response) {
      //debugger; // work with the returned response
      return response.json();
    }).then(addImage);

    function addImage(data) {
          debugger;
    }
```


Using .blob() will extract the image body from the response.


