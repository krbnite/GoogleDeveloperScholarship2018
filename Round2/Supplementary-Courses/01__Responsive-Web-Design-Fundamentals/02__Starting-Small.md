Hardware pixels vs DIPs (device independent pixels)

...vs CSS pixels...

devicePixelRatio = num(hardware pixels) / num(DIPs)

* [A pixel is not a pixel: designing for a new generation of mobile devices](https://juiceboxinteractive.com/ideas/a-pixel-is-not-a-pixel-designing-new-generation-mobile-devices/)
* [CSS pixel ratio: How big is my phone?](https://blogs.perficient.com/perficientdigital/2014/12/24/css-pixel-ratio-or-how-big-is-my-phone/)


------------------------------

## Random. Not Related. But Cool!
Pixel Art:
* https://css-tricks.com/fun-times-css-pixel-art/


## Calculate the Viewport Size
viewportSize = num(hardware pixels) / devicePixelRatio

* Phone (640px wide, DPR=2):  vps = 640 / 2 = 320
* Phablet (768px wide, DPR=2.5): vps = 760 * (2 / 5) = 152 * 2 = 304
* Tablet (1024px wide, DPR=1): vps = 1024 / 1 = 1024
* Laptop Browser (800 px wide, DPR=1):  vps = 800

## Setting the Viewport
* add `<meta name="viewport" content="width=device-width,initial-scale=1">` to \<head\> tag
* `width=device-width` tells the page to match the screen's width in DIPs, which allows the page to reflow content to 
match different screen sizes
* `initial-scale=1` instructs the browser to establish a 1:1 relationship between DIPs and CSS pixels
  - CSS pixels are what web developers are used to working with, and adding this instruction makes it so the web developer
  needn't worry much more about hardware pixes or DIPs
  
Moral: Don't forget to set the viewport!

* https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
* https://www.quirksmode.org/mobile/viewports.html
* https://www.quirksmode.org/mobile/viewports2.html

## Large Fixed-Width Elements
In short: don't use them.  For responsive design, use relative positions/lengths.

## Max-width on elements
Images are allowed to break out of their containers and look like shit... To hedge against this:
```cs
img, embed,
object, video {
  max-width: 100%;
}
```

## Some Examples

### Responsive Images
Responsive to smaller devices...
```html
<img id="owl">
#owl {
  width: 640px;
  max-width: 100%;
}
```

Responsive by accident (mostly any device bigger than img)...
```html
<img class="logo">
.logo {
  width: 125px;
}
```

Always responsive...
```html
<div class="city"></div>
.city {
  width: 100%;
}
```


### Unresponsive Images
Not responsive / crappy on 320px devices...
```html
<div class="box"></div>
.box {
  width=350px;
}
```

## Tap Targets
How big should buttons be?  On any screen they need to be big enough to be visible and tappable, and
big enough to avoid hitting another button by accident.

Advice: make buttons 48px x 48px; if buttons are smaller than this, there should be about 40px between buttons.

```css
nav a, button {
  min-width: 48px;
  min-height: 48px;
}
```

## Start Small
Start with smallest phone, and make the design look great!  Then move onto the next biggest device,
and make sure it looks great / add tweaks.  After each design step, ask if there is any need for a 
wider screen?  At one point, there is not. 

By starting small, you can design in priority: what's the most important thing to see on screen?


## Some Lessons Learned
So, basically to make something responsive:
1. Add that meta tag
2. Change CSS widths for almost anything in containers to 100%
3. Also use min-width on things like buttons

--------------------------------------------------

## Non-Course Excusrion on Progressive Web Apps (PWAs)

From [Progressive Web Apps: Features and Business Advantages](https://stxnext.com/blog/2017/06/14/progressive-web-apps-features-and-business-advantages/)
> "In the simplest possible terms, a Progressive Web App is a mobile website transformed with additional features and functionalities that give it a definitive ‘app-like’ feel. It is displayed using an instance of Google Chrome and uses service workers to ensure smooth operation even without a reliable internet connection. ... So it’s a website - but it feels like a native mobile app, with a custom loading screen, smoother animations and no navigation bar."

--------------------------------------------------

## Random
I've seen/heard media queries mentioned several times... What are they?
