Page layout.  Design patterns.  More responsive hoo-ha.

------------------

## Basic Media Query Intro

"A responsive site changes based on the characteristics of a device."  This means
that your webpage needs to apply different styles/CSS for different devices...  The easiest
way to do this is with "media queries."

Media queries provide simple logical approach to changing CSS layouts based on device
characteristics, such as device height, device width, or device pixel ratio.

To do this is simple: you just add a link tag that looks something like this:
```html
<link rel="stylesheet" media="screen and (min-width: 300px)" href="patterns.css">
```

## Adding a Basic Media Query
We'll define a stylesheet to be used only when the viewport is wider than 500 pixels.

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" media="screen and (min-width: 500px)" href="over500.css">
```

The `over500.css` file should have changes in the CSS, which take affect when the screen
is made larger than 500 pixels...


### My Example
This is cool as hell, and very simple.  Check out my GIF below; all it took was
a simple HTML file and two .css files.

index.html:
```html
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" media="screen and (min-width: 500px)" href="over500.css">
  </head>
  <body>
    Hello, world!
  </body>
</html>
```

styles.css:
```css
body {
  background-color: red;
}
```

over500.css:
```css
body {
  background-color: blue;
}
```

<img src="responsive.gif">

## Another way to add a Media Query: @media
The linked media query can result in many small HTTP requests.

The @media query can result in some big HTTP requests.

Media queries are almost always based on min-width or max-width.  Don't be stupid: don't
use min-device-width or max-device-width, as these refer to physical device lengths and not browser pixels.

## Media Query Quiz
* http://udacity.github.io/RWDF-samples/quizzes/media-queries-quiz.html

Basically, we had to add some breakpoints in a style tag in the head:
```html
<!doctype html>
<html lang="en">
  <head>
  <title>min-width and max-width Median Queries</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="../default-styles.css">
  
  <style type="text/css">
    h1 { ... }
    @media screen and (max-width: 400px) {
      body {background-color: red;}
    }
    @media screen and (min-width: 400px) {
      body {background-color: green;}
    }
    @media screen and (min-width: 600px) {
      body {background-color: blue;}
    }
  </style>
  
  </head>
  <body>
  ...
  </body>
</html>
```
