Most build tools are just simple bash scripts, but can help
drive productivity quite a bit... 

Web-focused build tools are often written in JS b/c that's what
web devs are familiar with...

Install Gulp: 
* https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Make a project directory, then use `npm init`, which will walk you through
making a package.json file. For example, I made a project directory
called gulpProj1 then ran `npm init`, which presented me with the following
fields to fill out:
* package name (defaulted to gulpproj1)
* version 
* description
* entry point
* test command
* git repository
* keywords
* author
* license

It then generated some JSON:
```bash
{
  "name": "gulpproj1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

A lot of the fields are empty b/c I just pressed "enter" through
them...

Continuing to follow the Gulp Installation directions: I then installed
gulp into my devDependencies:
```bash
npm install --save-dev gulp@next
```

This added an entry to the package.json file:
```
"devDependencies": {
    "gulp": "^4.0.0"
}
```

At this point, I created my first gulpfile.js:
```js
var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}
```

And tested it:
```bash
gulp
```


-------------------------------------------


## SASS

* http://sass-lang.com/

```bash
npm install gulp-sass
```

Note: If you look in package.json at this point, again you'll see that
it changed: gulp-sass is now listed as a project dependency.

```bash
{
  "name": "gulpproj1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.0"
  },
  "dependencies": {
    "gulp-sass": "^4.0.1"
  }
}
```


At this point in the project, make a sass directory and move .css files
to it, renaming their extentions to .scss.

## Auto-Prefixer

```bash
npm install gulp-autoprefixer
```

This is now added as a dependency in the package.json file.

--------------------------------------

NOTE:  I did not do the quizzes in this lesson.  (That might matter when doing the actual
nanodegree.)


NOTE 2: This YouTube playlist for learning Gulp is approximately infinitely
more helpful than the few, brief Udacity videos:
* https://www.youtube.com/playlist?list=PLLnpHn493BHE2RsdyUNpbiVn-cfuV7Fos


