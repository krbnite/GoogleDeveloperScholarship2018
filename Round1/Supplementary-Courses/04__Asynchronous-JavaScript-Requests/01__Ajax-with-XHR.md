AJAX originally stood for: Asynchronous JavaScript and XML.  But that's a bit of a misnomer now, and "AJAX" has
evolved into more of a concept at this point, so is usually referred to as Ajax.  (In fact, most Ajax responses these
days are in the form of JSON data, and so the acronym would be AJAJ...which doesn't sound as good!)

Ajax is all about asynchrounously requesting data.

In this course, we learn to make Ajax requests using JavaScript. We'll cover how this is done w/ XHR, jQuery, and the new fetch library.

----------------------

A "GET request" is a request for data made from a client to a server.  The "response" is the server's response
to the client's request.  Usually a request is made synchronously, i.e., since JavaScript's call stack is single-threaded,
it will make a request and wait for the response.  This is important if the rest of the JavaScript code relies on the 
response; however, it is unlikely that all remaining JavaScript code relies on the response.  Things can probably be
getting done as we wait for the response!  This is why we might want to make an "asynchrounouse request" -- that is, 
send a GET request, then do other things instead of waiting around.  The "asynchronous" means the request isn't
"blocking" (a shorthand phrase for "not blocking / holding up the call stack").

From what I learned in previous courses, my prediction is that this is kind of like an event listener or setTimeOut(): the
response will be directed to the queue, then when the call stack is empty (idling) it will check the queue and process the
response.

-----------------------

Ajax is more than not blocking the call stack. It's also about not reloading the page each time a response 
is returned.  Ajax is about allowing the page to continue to operate independently of the request/response, then
update where/when necessary on the fly (w/o necessarily reloading the whole page).

-----------------------

> In the late 90s, the Microsoft Outlook team added the XMLHTTP component to Internet Explorer and built a web version of the Outlook mail client. This code was later picked up by other browsers as XMLHttpRequest. This allowed browsers to make HTTP requests from Javascript and update the current page in place without fetching an entire page from the server. Instead of the synchronous model of waiting for a whole page, the user interface could update asynchronously as the user kept working. Most of the data being exchanged used the XML format.

> [Ajax] is essentially the technique of using XMLHTTPRequest to fetch data and then modify the current page.

* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

Importantly, just like we now write Ajax instead of AJAX since AJAX is technically a misnomer, XMLHttpRequest is also a
misnomer (b/c it doesn't really have to do w/ XML).  So again the name was kept, but often it's just referred to as
XHR.  XHR is the original Ajax.

---------------------

## The Ugly of XHR
Each browser implemented Ajax / XHR differently, so web/app development became a nightmare... This motivated
JS libraries and frameworks, like jQuery.

-------------------------------

## See XHR requests in Action
1. Go to Google
2. Open Chrome Developer Tools 
3. Click on the Network pane (in top selection bar)
4. Choose to monitor XHR 
5. Start typing letters into the search bar

Each letter you type is a XHR request!  Dammnnnnn!

-----------------------------------

## APIs
* [Google APIs](https://developers.google.com/apis-explorer/) (all of 'em!)
* a [Database of APIs](https://www.programmableweb.com/apis/directory)
* Udacity API:  https://www.udacity.com/public-api/v1/catalog

---------------------------

An XHR object is like baking a cake: you need to do a lot before you put the cake in the oven (e.g.,
gather, measure, and mix ingredients), but once it's in the oven you can go do other things.  The XHR
object is prepped to handle the data when it is finally returned...so, like, as if the oven turns off
by itself when the timer goes off

Just like the JS engine provides the document object, an XHR object is provided.  The object is
called XMLHttpRequest.  Again, it has nothing specifically to do with XML: the name is a relic from
times past.  Deal w/ it.

```js
const asyncRequestObject = new XMLHttpRequest();
```

* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

## XMLHttpRequest.open()

Syntax
```js
# At least two positional arguments are necessary
XMLHttpRequest.open(method, url)
# The 3rd positional argument is a boolean: true for async, false for sync
#  -- you almost always want true (the default)
XMLHttpRequest.open(method, url, async)
# User and Password arguments
XMLHttpRequest.open(method, url, async, user)
XMLHttpRequest.open(method, url, async, user, password)
```

### A sync option for an async object?
The 3rd argument is weird to me: why would you use the XHR object for a synchronous request? The XHR 
object was invented for async behavior in defiance of the default pause-and-wait behavior expected from
the JS stack.  However, given it a little more thought: a time when you might do this is when using a username and 
password. This is likely why the sync/async option precedes the user/password arguments.  It's a convenience of sorts that allows
a developer to fall back on sync behavior when required (instead of using another class of object for it). 

### The Same-Origin Policy
> For security reasons, you can only make requests for assets and data on the same domain as the site that will end up loading the data. For example, to asynchronously request data from google.com your browser needs to be on google.com.


> The way to circumvent the same-origin policy is with CORS (Cross-Origin Resource Sharing). 

* [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
  - "Two pages have the same origin if the protocol, port (if one is specified), and host are the same for both pages."
  - The XMLHttpRequest obect follows the same-origin policy, which means that a web application using XMLHttpRequest can only request HTTP resources from the same domain the it was loaded from (unless CORS headers are used).
* [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  - "Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to let a user agent gain permission to access selected resources from a server on a different origin (domain) than the site currently in use."
  
### Staging vs Doing
Say you head over to google.com, open up Developer Tools, create an XHR object, then use the `.open()` method
to stage a request:
```js
# while on google.com
const XHR = new XMLHttpRequest();
XHR.open('GET', 'https://www.google.com/search?q=javascript')
```

What happens?

Answer: Nothing.  The operative word above was "stage." The `XHR.open()` method merely stages a request: it does 
not send the request.

## XMLHttpRequest.send()
To actually make a request, you must use the `.send()` method!  Let'd do it:
```js
XHR.send()
```

What happened?  Again: Nothing -- or so it appears!  If you monitor the network traffic in Developer
Tools, you can actually see that the request was made... So why did nothing happen?

## XMLHttpRequest: onload and onerror
Nothing happened because we did not specify an "onload" or "onerror" functions for the XHR object to use when
a response was returned.

Let's print the response if successful, or an error message if not. Reload the page and start over:
```js
# while on google.com
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.google.com/search?q=javascript')
xhr.onload = function handleSuccess () {
    // in the function, the `this` value is the XHR object
    // this.responseText holds the response from the server
    console.log( this.responseText ); // the HTML of https://unsplash.com/
}
xhr.onerror = function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred :-(' );
}
xhr.send()
```

Getting the HTML code for a webpage is ok... But usually you want to get specific data from an API
available on that web domain.  Quite often this data is sent back as JSON data.  To render this
response into a JS Object, use the following as the `.onload` function:

```js
function handleSuccess () {
const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
console.log( data );
}
asyncRequestObject.onload = handleSuccess;
```

-------------------------------


# Course Project
```bash
git clone https://github.com/udacity/course-ajax.git
```

Will be using the Unsplash and NYT APIs: must make a developer's account w/ both:
*  https://unsplash.com/developers
  - after account is made, you must make to create an Unsplash application, which will provide an "Application ID" that is necessary for making requests
    * https://unsplash.com/oauth/applications
  - limit to 50 requests/hr (development) or 5k/hr (production)
* https://developer.nytimes.com/
  - API key is emailed to you after registering for a specific API
  - I registered for the "Article Search API"
  - Other NYT APIs include
    * Archive
    * Books
    * Community
    * Geographic
    * Most Popular
    * Movie Reviews
    * Semantic
    * Times Tags
    * Times Newswire
    * Top Stories

-------------------------------------

## Make an Unsplash Request
Since our app is not a part of the Unsplash domain, we have to use a Cross-Origin Resource Sharing approach
to making the request: we must include some header info.

```js
const searchedForText = 'hippos';
const unsplashRequest = new XMLHttpRequest();
function addImage(){
  debugger;
}

unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.setRequestHeader('Authorization', 'Client-ID <clientId>');
unsplashRequest.send();
```

By putting debugger in the function addImage(), we can use Developer Tools to look at what the 
response is in the Sources tab, so that we can then write a function to deal with it appropriately.

<figure>
  <img src="./images/javascript-debugger-in-developer-tools.png" width="500">
</figure>

At the bottom of the Sources tab is a pane w/ tabs Scope and Watch.  In the scope pane, the
"this" object being looked at is the XMLHttpRequest object we are working with. You can see
that its `.onload` function is set to `addImage`.  Further below, you can see a response 
attribute: it is filled with JSON data.  This tells us that we want our addImage function to
first parse the JSON data.

NOTE: this code comes from the project we are developing; `responseContainer` is defined therein (this
function will throw an error w/o defining it).
```js
function addImage() {
  let htmlContent = '';
  const data = JSON.parse(this.responseText);
  const firstImage = data.results[0];
  if(data && data.results && data.results[0]) {
    htmlContent = `<figure>
      <img src="${firstImage.urls.regular}" alt=${searchedForText}">
      <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
    <figure>`;
  } else {
    htmlContent = '<div class="error-no-image">No images available</div>'
  }
  responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}
```

At this point, you should just check out the course project for Lesson 1.  (Otherwise, I'm
really just repeating a lot of info.)




