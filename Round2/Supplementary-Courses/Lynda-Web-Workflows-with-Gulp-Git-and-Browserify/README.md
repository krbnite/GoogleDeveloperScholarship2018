https://www.lynda.com/Web-Design-tutorials/Web-Project-Workflows-Gulp-js-Git-Browserify/154416-2.html

---------------------------------------

In project directory, initialize as a node project:
```
npm init 
```

This will take you through initializing the project's package.json file.  The instructor
then creates a few directories in the project:

```
myProj > builds
myProj > builds > development
myProj > builds > production
```

The development folder holds all the development files, while the production folder holds
the optmized, minified, production-ready version of your project/app.

So, in the `development` directory, we then create the various files and subdirectories typically
used in a web project:

```
myProj > builds > development > index.html
myProj > builds > development > css
myProj > builds > development > images
myProj > builds > development > js
```

We then create a top-level directory called `components` for the various tools that we'll be using:

```
myProj > components
myProj > components > coffee
myProj > components > sass
myProj > components > scripts
```

