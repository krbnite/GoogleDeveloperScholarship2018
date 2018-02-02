

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

MY SOLUTION
```html
<!DOCTYPE html>

<!-- Instructions: Replicate the same styling seen in the Udacity text below. -->

<html>
<head>
    <title>Style the Font Quiz</title>
    <style>
    	.udacity-text {
            /* add CSS here */
            color: #8001ff;
            font-family: Helvetica, Arial, sans-serif;
            text-transform: uppercase;
            text-decoration: underline;
            font-size: 60px;
    	}
    </style>
</head>
<body>
    <h1 class="udacity-text">udacity</h1>
</body>
</html>
```

## Quiz: Match unnamed CSS declaration blocks to appropriate selectors
Here, we were given a pic and had to make our webpage look like it.  

```html
<!DOCTYPE html>
<html>
<head>
	<title>Writing Selectors Quiz</title>
	<!-- the next line loads the tests for the Udacity Feedback extension -->
	<meta name="udacity-grader" content="http://udacity.github.io/fend/lessons/L3/problem-set/05-writing-selectors/tests.json">
	<style>
		div {
			text-align: center;
		}
		h1 {
			color: red;
		}
		img {
			border-radius: 5px;
		}
		p {
			font-style: italic;
		}
	</style>
</head>
<body>
	<div id="menu">
		<h1 class="item">Chicken Clay Pot</h1>
		<img src="img/clay-pot.jpg" alt="clay pot" class="picture">
		<p class="description">Crispy rice baked in clay pot topped with chicken and vegetables</p>
	</div>
</body>
</html>
```


## CSS Selectors
In the previous lesson, we covered 3 types of CSS selector: tag, id, and class.  Apparently,
there are more!  Learn about them on the [MDN Selectors Page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

### Multiple Selectors, One Declaration Block
Here's something I learned: if you have a few selects, say tags, that you want to style the same,
you can throw them in the same selector group:
```css
div p, #id:first-line {
  background-color: red;
  background-style: none;
}
```

### So many types of selectors!
Straigth from MDN's mouth:
> Selectors can be divided into the following categories:
>
> * **Simple selectors**: Match one or more elements based on element type, class, or id.
> * **Attribute selectors**: Match one or more elements based on their attributes/attribute values.
> * **Pseudo-classes**: Match one or more elements that exist in a certain state, such as an element that is being hovered over by the mouse
>   pointer, or a checkbox that is currently disabled or checked, or an element that is the first child of its parent in the DOM tree.
> * **Pseudo-elements**: Match one or more parts of content that are in a certain position in relation to an element, for example the first 
>   word of each paragraph, or generated content appearing just before an element.
> * **Combinators**: These are not exactly selectors themselves, but ways of combining two or more selectors in useful ways for very specific 
>   selections. So for example, you could select only paragraphs that are direct descendants of divs, or paragraphs that come directly 
>   after headings.
> * **Multiple selectors**: Again, these are not separate selectors; the idea is that you can put multiple selectors on the same CSS rule, 
>   separated by commas, to apply a single set of declarations to all the elements selected by those selectors.

This stuff is pretty cool!  I really didn't know how many types of selectors there are.

## Attribute Selectors 
Basically, I'm tempted copy-and-paste this entire page, but just look at it: [https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)

I wonder if these are ways I could select elements with Selenium; webscraping could be so much easier and more
robust against minor updates in a website's code (e.g., adding a value to a class has crashed my scripts in the past).

### Simple Attribute Selectors
* [attr]: will select any element with attribute attr, whatever its value
* [attr=val]: will select any element with attribute attr, but only if its value is val
* [attr~=val]: will select any element with attribute attr, but only if the value val is one of a space-separated list contained in attr's value

### Regex-Like Attribute Selectors
* [attr|=val]: select all elements with the attribute attr for which the value is exactly val or starts with val- (careful, the dash here isn't a mistake, this is to handle language codes)
* [attr^=val]: select all elements with the attribute attr for which the value starts with val
* [attr$=val]: select all elements with the attribute attr for which the value starts with val
* [attr\*=val]: select all elements with the attribute attr for which the value contains the string val (unlike [attr~=val], this selector doesn't treat spaces as value separators but as part of the attribute value)

## Pseudo-Class and Pseudo-Element Selectors
> A **CSS pseudo-class** is a keyword, preceded by a colon (:), added to the end of selectors to specify you want to style the selected elements, and only when they are in certain state. For example, you might want to style an element only when it is being hovered over by the mouse pointer.

Examples
* :active
* :hover
* :target
* :first-child

> **Pseudo-elements** are very much like pseudo-classes, but they have differences. They are keywords, this time preceded by two colons (::), that can be added to the end of selectors to select a certain part of an element.  They are specific to, for example, a tag's content.

Examples
* ::after
* ::before
* ::first-letter
* ::first-line
* ::selection
* ::backdrop
