A service worker intercepts requests made in the browser, and can do things with 'em! Basically,
you have a service worker script saved somewhere (e.g., /sw.js), and you "register" it in the browser like so:

```javascript
navigator.serviceWorker.register('/sw.js')
```

This returns a promise, so really you ought to chain it with some then and catch statements:
```javascript
navigator.serviceWorker.register('/sw.js').then(function(reg) {
  console.log('Yay!');
}).catch(function(err) {
  console.log('Boo!');
});
```

## Service Worker Scopes
Optional: You can provide a service worker with a scope. That is, basically, a directory with pages that the 
service worker will control, outside of which the service worker has no dominion.
```javascript
navigator.serviceWorker.register('/sw.js') { 
  scope: '/my-app/' 
});
```

In this case, the service worker will control any page with a URL that goes deeper into /my-app/, but
no shallower URLs like / or other branches, like /my-other-app/.

The benefit is that you can then create multiple service workers with differing scopes.  The example
of GitHub is given, where multiple projects share the same origin:

<img src="./images/github-scope-example.png" width="500vw">

The default scope of a service worker is the directory in which the service worker script sits, making
it often unneccesary to specify the scope (just put the different service workers in their different
parent directories).

## Events
What does a service worker do?  It listens to events!  Here are some examples of statements
you might find in some service worker code:
```javascript
self.addEventListener('install', function(event) {
  //...
});

self.addEventListener('activate', function(event) {
  //...
});

self.addEventListener('fetch', function(event) {
  //...
})
```

## Service Worker Support
> "Every browser has expressed some interest in implementing [service worker], but as of 2015, 
> service worker is only supported in Chrome and Opera -- with Firefox support soon to land."

So, uh, to my mind -- Chrome, Firefox -- good enough! :-p

This actually got me interested: how often are other browsers even being used? A quick Google search
brought me to a Browser Statistics page on W3schools.  Here are the 2017 stats:

<img src="./images/browser-stats-2017.png" widht="500vw">

Without Safari or IE, we are still talking about 90% of the market share here...so, like I said, 
good enough! 

Better, I checked out the website from the video ([Is Service Worker Ready?](https://jakearchibald.github.io/isserviceworkerready/)),
and IE and Safari both jumped on board.

<img src="./images/service-workers-everywhere.png" width="500vw">

-----------------------------------------

## Making My First Service Worker
In the `wittr` directory, I first turn on tmux 

```bash
tmux
# Split screen horizontally: <ctrl>+a, -
# Resize bottom screen to be fairly small: <ctrl>+a, <shift>+J, <shift>+J...
# Then begin server
npm run serve  
# Now go to top screen: <ctrl>+a, k
# Open editor
vim
```

<img src="./images/tmux-vim-setup.png" width="500">

Now, in the Nerd Tree file browser go to public > js > sw > index.js:
```js
console.log('js')
```

To see this in the browser:
```
localhost:8888/sw.js
```

Something we might actuall put in index.js is a fetch event listener:
```js
self.addEventListener('fetch', function(event) {
  console.log(event.request)
});
```
-----------------------------------------------------------

## Quiz
Above, we added a fetch listener to a service worker script, but now we need to register
it from the page.

To get the wittr code in the same state as Jake's, we must reset git and change branches.

Reset the changes I made:
```git
git reset --hard
```

Change git branch I'm working on:
```git
git checkout task-register-sw
```

Now...if you're already hooked into the server, how does the server know which git 
branch to take code from...?  

### Private Methods (by Convention Only)
Just like in Python, Javascript does not have truly private methods.  Instead, similar to Python,
the convention is to begin a method name with an underscore if one wants to let other programmers
know that this method should be treated as if it were private.




