"A responsive website changes based on the characteristics of a device."  You site/app can serve
different styles (layout, background, etc) to different devices through the use of media queries (e.g., based on width or pixel
ratio).

## Linked Media Queries
It's simple too. Here are a few basic linked media queries that apply different styles to a page based
on its current width:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" media="screen and (min-width: 300px)" href="min300.css">
<link rel="stylesheet" media="screen and (min-width: 500px)" href="min500.css">
```

The "screen" keyword in the media attribute is a media type.  When this attribute was invented, there
were other media types in use, such as "handheld" and "projected," but which never really picked up any 
steam.  Nowadays, all you really have to know about are "screen" and "print".

The linked CSS files needn't be complex!  They just require whatever additional or overriding
CSS statements you'd like to include when the condition is met.  For example, `min500.css`
might include a single statement:

```css
body {
    background-color: blue;
}
```

Standard CSS rules of precedence...

Bla, bla, blah!

## Inline Media Queries
```css
@media screen and (min-width: 500px) {
    body { background-color: blue; }
}
```

## Media Query Parameters to Care About
All that really matters is `min-width` and `max-width`.

## Breakpoints
A breakpoint is a point at which a page changes layout.  In the previous example, we had a breakpoint
at a width of 300px: any smaller than this would result in only the default CSS being used, whereas
at this point, the `min300.css` file gets applied.  We had another breakpoint at 500px width, at which
point the `min500.css` file get applied.

Use your content as a guide to find breakpoints -- rather than designing for any particular device or
size (other than a sense of "small design" vs "larger-than-X design", etc).  

That is:
1. Design for the smallest screen
2. Begin stretching the width:  when it starts to look bad, add a breakpoint (e.g., at 550px).
3. Keep stretching: if it starts to look kind of bad again, add another breakpoint (e.g., at 700px).


## Complex Media Queries (AND/OR)
The word "no" appears on the screen (opacity: 1) unless the screen width is between
500 and 600 pixels, at which point "no" disappears (opacity: 0) and "yes"
appears (opacity: 1). 
```css
@media screen and (min-width: 500px) and (max-width: 600px) {
    .yes {
        opacity: 1;
    }
    .no {
        opacity: 0;
    }
}
```

## Overlapping Media Queries
```
@media screen and (max-width: 400px) { ... }
@media screen and (min-width: 301px) and (max-width: 600px) { ... }
@media screen and (min-width: 601px) { ... }
@media screen and (min-width: 961px) { ... }
```




