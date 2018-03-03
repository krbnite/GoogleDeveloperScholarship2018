If an async request is like a cake, for the XHR object, we had
to get a list of ingredients, go out and buy them, measure them,
and bake the cake ourselves.... Phew!  That's a lot of work.  Sometimes
you just want to eat cake, not bake it!

Why not have a professional baker bake us a cake? For async JS
requests, jQuery is that baker.

Historically, jQuery was important for web developers' sanity: it
came out before browsers really agreed to strive to respect a single
set of standards. It allowed developers to specify what they wanted
the webpage to do, then would do a bunch of the browser-dependent
specification under the hood...

Now that browser do commit to standards, jQuery is no longer
as necessary.  But it still provides a convenient Ajax function,
so let's check it out.

-----------------------------------------------

How to use jQuery: basically, you need to link to the jQuery
library with a \<script> tag in your HTML.  This can be to a downloaded
copy, or to an online copy.

------------------------------------------------

```js
$.ajax({configObject}).done(handleResponse);
```
O
```js
$.ajax({
  frosting: 'buttercream',
  colors: ['orange','blue'],
  layers: 2,
  isRound: true
}).done(pickUpCakeFromBaker);
```

So is there still an XHR object? 

Yes! jQuery creates it for you.

--------------------------------------------------

NOTE: For some reason, I couldn't get my jQuery version of the app to work...

Also, I went over other lessons, but they mostly focused on how to add break points in DevTools,
and how to debug JS.  I think I should go back and cover this material, but for now I need to
push forward.

* [Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
* [Pause Your Code With Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)

