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

