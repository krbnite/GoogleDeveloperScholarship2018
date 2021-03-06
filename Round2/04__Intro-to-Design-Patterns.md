Most webpages/app can be described by one or a combination of 4 different patterns:
* column drop
  - very simple "row to matrix to column" pattern as screen goes from large to small
* mostly fluid
  - similar to column drop, but w/ customizations
  - e.g., row-oriented matrix design -> box-oriented matrix design -> column-oriented matrix design
  - here, the extremes need not be a row and a column
* layout shifter
  - distinct design decisions that may abruptly change at breakpoints
* off canvas
  - portions of the screen become "swipable" as the screen gets smaller in size
  - e.g., Slack website is like this: as the screen becomes cell phone sized, the website literally takes on the app design (swipe right for list of channels, and again for communities, etc)
  
Each of these patterns can easily be achieved using flexbox and media queries. Perhaps
the hard part is (i) choosing the best design for your project, and (ii) deciding on breakpoints.


# Column Drop (Example)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Column Drop</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
      /* Default Styles */
      html, body {
        margin: 0;
        padding: 0;
      }
      @import url(https://fonts.googleapis.com/css?family=Roboto);
      body { font-family: 'Roboto', sans-serif; }
      /* 
      Small Screen (up to 450px): Column of Boxes 
      */
      .container {
        display: flex;
        flex-wrap: wrap;  
      }
      .box { 
        width: 100%; 
        min-height: 150px; 
      }
      .dark_blue { background-color: #2A457A; }
      .light_blue { background-color: #099DD9; }
      .green { background-color: #0C8542; }
    </style>
    <style type="text/css">
      /* Breakpoints */
      @media screen and (min-width: 450px) {
        .dark_blue { width: 25%; }
        .light_blue { width: 75%; }
      }
      /*
      Largest Screens (>= 550px): Row of Boxes 
      */
      @media screen and (min-width: 550px) {
        .dark_blue, .green { width: 25%; }
        .light_blue { width: 50%; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box dark_blue"></div>
      <div class="box light_blue"></div>
      <div class="box green"></div>
    </div>
  </body>
</html>
```

# Mostly Fluid (Example)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Mostly Fluid</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
      /* Default Styles */
      html, body {
        margin: 0;
        padding: 0;
      }
      @import url(https://fonts.googleapis.com/css?family=Roboto);
      body { font-family: 'Roboto', sans-serif; }
      /* Small Screen (up to 450px): Column of Boxes */
      .container {
        display: flex;
        flex-wrap: wrap;  
      }
      .box { 
        width: 100%; 
        min-height: 150px; 
      }
      .dark_blue { background-color: #2A457A; }
      .light_blue { background-color: #099DD9; }
      .green { background-color: #0C8542; }
      .red { background-color: #EC1D3B; }
      .orange { background-color: #F79420; }
    </style>
    <style type="text/css">
      /* Breakpoints */
      @media screen and (min-width: 450px) {
        .light_blue, .green { width: 50%; }
      }
      @media screen and (min-width: 550px) {
        .dark_blue, .light_blue { width: 50%; }
        .green, .red, .orange { width: 33.33%; }
      }
      /*
      Largest Screens: Keep Container Size Fixed @ 700px
      */
      @media screen and (min-width: 700px ) {
        .container {
          width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box dark_blue"></div>
      <div class="box light_blue"></div>
      <div class="box green"></div>
      <div class="box red"></div>
      <div class="box orange"></div>
    </div>
  </body>
</html>
```

# Layout Shifter (Example)
The major difference between "Layout Shifter" and "Mostly Fluid" is that 
"Layout Shifter" is not just a sequence of reflowing columns into rows: abrupt
design breaks may occur.  The `order` CSS attribute becomes important!

Layout Shifter patterns can take a bit more planning.  In this example, we use
a second container to help keep two of the color boxes together as things move around.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Layout Shifter</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/css">
      /* Default Styles */
      html, body {
        margin: 0;
        padding: 0;
      }
      @import url(https://fonts.googleapis.com/css?family=Roboto);
      body { font-family: 'Roboto', sans-serif; }
      /* Small Screen (up to 450px): Column of Boxes */
      .container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;  
      }
      .box { 
        width: 100%; 
        min-height: 150px; 
      }
      .dark_blue { background-color: #2A457A; }
      .light_blue { background-color: #099DD9; }
      .green { background-color: #0C8542; }
      .red { background-color: #EC1D3B; }
    </style>
    <style type="text/css">
      /* Breakpoints */
      @media screen and (min-width: 500px) {
        .dark_blue, #container2 { width: 50%; }
      }
      @media screen and (min-width: 600px) {
        .red { 
          order: -1;
          width: 25%; 
        }
        #container2 { 
          width: 50%;
        }
        .dark_blue { 
          order: 1;
          width: 25%; 
        }
      }
      /*
      Largest Screens: Keep Container Size Fixed @ 700px
      */
      @media screen and (min-width: 700px ) {
        .container {
          width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box dark_blue"></div>
      <div class="container" id="container2">
        <div class="box light_blue"></div>
        <div class="box green"></div>
      </div>
      <div class="box red"></div>
    </div>
  </body>
</html>
```

# Off Canvas (Example)
Layout Shift might take some planning CSS/design-wise, but Off Canvas still seems to be the most
technical, requiring more flexbox, HTML, and JavaScript knowledge.  Of the 4 major design patterns,
this is the only one where JavaScript even makes an entrance.

...get back to this...

Here is the code (cmd+opt+i):
* http://udacity.github.io/RWDF-samples/Lesson4/patterns/off-canvas.html

