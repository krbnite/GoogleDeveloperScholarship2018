Fun little thing: go to any website, open up developer tools (cmd+alt+j), 
and delete all the style tags! This will transform even the beautiful of website into ugly, garbled messes! 

Note: \<link> tags also have CSS.  Erase those too!

```html
<link rel="stylesheet" href="//s.ytimg.com/yts/cssbin/www-core-webp-vflCayM79.css" 
  name="www-core" class="css-httpssytimgcomytscssbinwwwcorewebpvflCayM79css">
```
--------------------------------------------


## CSS Rulesets
A CSS Ruleset is made up of 2 parts: a selector (which HTML element do you want to style?)
and a declaration block (how do you want to style it?). The bits of code in the declaration
block (anything within the curly braces) are called declarations.

Example:
```css
div {
  text-align: right;
}
p {
  color: blue;
}
```

## Head CSS
One way to add CSS to your HTML is through a \<style> tag within the HTML \<head> tag, e.g.:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      text-align: right;
      background-color: yellow;
    }
    p {
      color: blue;
    }
  </style>
</head>
<body>
  <p>Outside the Div</p>
  <div>
    <p>Inside the Div</p>
  </div>
</body>
</html>
```

<figure>
  <img src="./images/css-example-1.png" width="400">
  <figcaption> Example in the Browser </figcaption>
</figure>
