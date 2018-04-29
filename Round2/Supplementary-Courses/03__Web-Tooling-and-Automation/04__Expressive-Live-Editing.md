

You edit some HTML or CSS... What does it look like now?  So
you switch to the browser and refresh.  Looks Ok.  You switch back
to the editor...

Live Editing makes for
* fewer context switches
* fewer clicks and keystrokes when changing code
* quick preview of changes

There are various approaches for Live Editing, but the course
instructor recommend using Browser-Sync, which can take advantage
of Gulp watch and workflows

```bash
npm install browser-synch
```

Modify your gulpfile.js to bring in browser-sync and take
advantage of live editing:
```js
var browserSync = require('browser-sync').create();

browserSync.init({
     server: "./"
 });

browserSync.stream();
```

In the Terminal, just type `gulp` and a browser will open
with your webpage, ready for live editing.


NOTE: I got it working, but didn't really see some of my edits 
change live in the browser... I had to still refresh the page...  Not
sure if I'm doing something wrong or not.
