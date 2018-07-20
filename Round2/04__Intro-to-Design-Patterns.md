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

