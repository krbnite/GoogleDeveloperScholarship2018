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

