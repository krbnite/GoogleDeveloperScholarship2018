# Images
For a moment, they discuss responsive image design, but note that there is a whole
other course on this (which comes next in nanodegree).  

They basically say to use the `srcscet` attribute on an image tag, which allows the browser
to choose which image file is appropriate for the screen size -- and only download that one
file (from a set a related files).  

What if you want a responsive crop design though?  This requires "art direction" is where
the new `<picture>` element comes in (the `<picture>` element uses media queries to select
which image to use). 


* http://usecases.responsiveimages.org
* http://usecases.responsiveimages.org/#art-direction
* http://responsiveimages.org/demos/art-direction/index.html

Example:
```html
<picture>
  <source media="(max-width: 25em)"
          srcset="iphone.png">

  <source media="(max-width: 48em)"
          srcset="iphone@tablet.png">

  <img src="iphone.png"
      alt="The iPhone Safari web browser showing the RICG website.">

</picture>
```

---------------------------------------

