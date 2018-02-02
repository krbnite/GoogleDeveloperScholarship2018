

## Quiz 1: Add Style to an Image
### Border Property
From the [docs](https://developer.mozilla.org/en-US/docs/Web/CSS/border):
> The border CSS property is a shorthand property for setting all individual border property values at once: border-width, border-style, and border-color. As with all shorthand properties, any individual value that is not specified is set to its corresponding initial value. Importantly, border cannot be used to specify a custom value for border-image, but instead sets it to its initial value, i.e., none.

border: border-width border-style border-color

Examples
* border: solid;
* border: dashed red;
* border: thick double blue;

### Cursor Property
From [CSS Tricks](https://css-tricks.com/almanac/properties/c/cursor/):
> The cursor property in CSS controls what the mouse cursor will look like when it is located over the element in which this property is set.

You have many choices!  Definitely worth checking out that page, which shows an example of each: auto, default, none, context-menu, 
help, pointer, progress, wait, cell, crosshair, text, vertical-text, alias, copy, move, no-drop, not-allowed, all-scroll, col-resize,
row-resize, n-resize, s-resize, ........... and on and on.

### Kitten Example
```
.kitten-image {
  border: 5px dashed salmon;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 20px #ccc;
}
```


## Quiz: Fonts
Font Families: you should specify multiple fonts in a sequence of what you'd prefer the webpage
get rendered with; this is important since different operating systems might not have the same fonts.
```
# FORMAT --  font-family: font1, font2, font3, ...
font-family: Helvetica, Arial, sans-seriff;
```

[Google Fonts](https://fonts.google.com/) has some open source fonts you can use! Example:
```html
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet">
```
```
font-family: 'Roboto Slab', serif;
```

