

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>HTML Structure</title>
   </head>
   <body>
     <h1>The Headliner</h1>
     <p>This is a paragraph.</p>
     <span>This is a span.</span>
   </body>
 </html>  
 ```
 
 Each \<>\</> is an HTML element. Most elements have both an opening tag, <>, and a 
 closing tag, </>.  Some don't. 
 
 The stuff between an opening and closing tag is that element's content.  If devising a graph,
 we can think of an element's content as a child node of the element node...
 
 
 
 ## Paragraph vs Span
 A paragraph, \<p>\</p>, is a block of text separate from other chunks of text. A span, \<span>\</span>, is like
 a line of text; it really isn't separate from other pieces of text.
 
 ## Comments
 ```html
 <!-- Easy peasy. -->
 <!--
 Multi-line shiz right here.
 -->
 ```
 
 <img src="./images/trees.png>
 
 <img src="./images/div-tree.png>
 
 ## (Strong & Em) vs (Bold & Italics)
 I always use \<b\> and \<i\>, but apparently the preferred elements are <strong> and <em>.
 
 You can learn about why on the [HTML Elements Refernce](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
 available from the Mozilla Developer Network.
 
 Basically: it's alright to use \<b>, but \<strong> often defaults to \<b>, but is better in most 
 situations... I don't know.  Not really the hugest deal!
 
 Apparently, \<i> is an element that "represents a range of text that is set off from the normal
 text for some reason, for example, technical terms, foreign language phrases, or fictional 
 character thoughts."  This is in contrast to \<em>, which "marks text that has stress emphasis," and
 which can be nested, "with each level of nesting indicating a greater degree of emphasis."
 
 
 ## DOCTYPE
DOCTYPE: Helps the browser determine what type of HTML document it's trying to parse and display.  While there are technically different types, \<!DOCTYPE html> is almost always good enough.

Ever see this:
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

It is what older websites use, and will trigger Standards mode in the browser w/ an older 
form of validation.  This is ok.  No DOCTYPE will trigger "Quirks" mode: this is bad.

The best is to just use:
```html
<!DOCTYPE html>
```

This triggers standards mode with all updated features, e.g., all HTML5 specs (at time of writing).

The MDN article, [Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode),
explains all of this. Old browsers (specifically, IE5 and Nav4) do not follow the HTML spec much at all, so need 
Quirks mode to be interpreted correctly. 

There are other types of DOCTYPE, but apparently they do not do much / I'll never need 'em.

## HTML Validator
There is a lot to remember.  Use the HTML validator on your code to help find errors.

https://validator.w3.org/#validate_by_input
