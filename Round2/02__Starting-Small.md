

## The Viewport
The viewport defines the area of the screen that the browser can render content to... So you
want the viewport on device X to be the width of device X.  That is, the "window into your
content is the size of the device's screen."  You also want that window into your content to 
be at the right zoom:  not zoomed in or out.


Put this in the head of all your webpages:
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Reasons why:
* You don't want content flowing off the page horizontally
* You don't want a user on mobile to have to pinch/zoom too much
* Buttons must be big enough for fat fingers
* Abstracts away different screen sizes and pixel densities (more on this next)

### Some Refs
* https://www.w3schools.com/css/css_rwd_viewport.asp
* https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag

## Pixels
It is important to understand the difference between hardware pixels, device (or density) independent pixels (DIPs),
and CSS pixels.  

**CSS pixels** are what you define when typing out CSS... They can increase/decrease in size.  This is what
happens when you zoom in and zoom out: as far as the browser is concerned, the (CSS) pixel width and height of a zoomed
image have not changed.

**Device (or hardware) pixels** are simple: they are the actual, physical pixels on a device.  For a given device,
this is a constant: device X has a fixed amount of pixels along the width and height of its screen. What can
get more complex is that device Y might have the same pixel count as device X, yet might have a much
smaller screen.  So what's going on?

In this scenario, device X and device Y have two different pixel densities.  Apparently this became a big
deal when Retina screens came out ([ref](https://fronteers.nl/congres/2012/sessions/a-pixel-is-not-a-pixel-peter-paul-koch)).

This is why the device/density indpendent pixels (DIPs) were invented.

In this code (below), we establish a 1:1 relationship between DIPs and CSS pixels (initial-scale=1.0):
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Some Refs
* https://fronteers.nl/congres/2012/sessions/a-pixel-is-not-a-pixel-peter-paul-koch
* https://alistapart.com/article/a-pixel-identity-crisis
* https://medium.com/@pnowelldesign/pixel-density-demystified-a4db63ba2922
  - video in this article is great


## Relative Positions and Sizes!
If your web app is going to be responsive, it is important to think in terms of "touch events" and "tap targets." That is,
for example, to make sure links and text are big enough, even on small devices. 

On the other hand, you don't want things too big either, e.g., you want images to fit within the screen lest the user
has to horizontally scroll (that's a big no-no!).

Use relative fonts, relative padding, relative widths... Try not to use absolute/fixes positions or sizes!  Exceptions
include min and max sizes (e.g., min touch target size, max container width size, etc).  

Recommended CSS code for any responsive web app:
```css
img, embed, object, video {
    max-width: 100%;
}
```

Recommended tap target CSS: 
* a button should have a min of about 48x48 px 
* also, there should be at least 40px between two tap targets so two targets are not hit at same time

Recommended design approach: start small!  This helps optimize for prioritized content on any/all devices. Often 
one doesn't need any more than 3 levels of design:
* start w/ small phone
* then go to a tablet
* then maybe something a little bigger

Designing small-to-large also forces you to consider performance from the beginning.  That is, beyond design,
testing your web app on mobile devices first pretty much guarantees good performance on bigger, better-spec'd devices.



