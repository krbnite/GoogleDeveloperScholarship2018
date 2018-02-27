
Clone the project:
```
git clone https://github.com/udacity/course-JS-and-the-DOM
```


Write the DOM code necessary to select the first element with class: card
```js
document.querySelector('.card');
```



## Manipulating the Page
Open the project (`open index.html`) and open Chrome's Developer Tools (cmd+alt+j).  

Save the query from above to a variable so we can freely/easily reference it:
```js
const card = document.querySelector('.card');
```

Now you can actually just the text and other things pretty easily, e.g.:
```js
card.textContent = 'What I want, meng!';
// or...
card.innerHTML = '<img src="https://imgs.xkcd.com/comics/good_code.png">'
```

Both `.textContent` and `.innerHTML` are properties (not methods) of the card element.  The
return values appear string-like, but are a type of object called `DOMString`.

Btw, there is also `.innerText`, which returns the text a user would see in the browser,
whereas `.textContent` returns the Node/code text... These might often be the same, but
can be different (e.g., some text can be hidden, and so would not be returned by 
`.innerText`).

* Good Resource: https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/


---------------------------------------------------------

* `document.createElement()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  - create an element; add content to it
  - new element is not automatically part of page
* `.createTextNode()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
* `.appendChild()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
* `.insertAdjacentHTML()`
  - https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML


```js
const newp = document.createElement('p');
newp.textContent = 'Hello, world!\nI'm Kevin.';
// Add this text to first h1 heading on page
const h1 = document.querySelector('h1');
h1.appendChild(newp)
```

Interestingly, the element is treated as a physical object: it can only be in one location. Some
code will make this easier to describe:
```js
// Create object for first h2 element on page
const h2 = document.querySelector('h2');
// append newp to h2
h2.appendChild(newp)
// now newp is no longer associated w/ h1 
```

Wouldn't it be nice to have something more flexible than `.appendChild()`, which always appends a child element
at the end of an element's children?  `.insertAdjacentHTML(locationKeyword, htmlText)` allows us to do something like that by specifying 
1 of 4 locations:

* beforebegin – inserts the HTML text as a previous sibling 
* afterbegin – inserts the HTML text as the first child 
* beforeend – inserts the HTML text as the last child 
* afterend – inserts the HTML text as a following sibling

```html
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->
```

To be clear, the second argument of this method does NOT take the newly created element, but the actual
HTML of the newly created element.  That is, you write in the HTML text...  If you already created an element,
you can use `element.outerHTML` to get a string of the element's HTML.

* https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

### Two Ways to Remove

```js
// As child, have parent remove its child...
const h1 = document.querySelector('h1');
h1.parentElement.removeChild(h1);

// As child, remove yourself
const h1 = document.querySelector('h1');
h1.remove();
```

------------------------------------------------

## Style Page Content
What we'll be covering:
* `.style.<prop>`
* `.cssText()`
* `.setAttribute()`
* `.className`
* `.classList`

## element.style
CSS Specificity: stylesheet \< style tag \< style attribute
* https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
* https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/

The fact that the style attribute for an HTML element take the highest order or precedence is
important: we can override any style sheet or style tag dynamically by using the element's
style attribute like so:
```js
const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.fontSize = '2em';
h1.style.width = '50%';
```

**Reminder**: while in Developer Tools, you can 2-finger/right click any element on the page to bring it up in the
Elements view and have that element be referenced as $0.  

In hindsight, this makes styling Pandas DataFrames in Python so much clearer (that is, using the various properties
and methods associated with `df.style`). In the DOM, the style property is similar to how `df.style` in Python is a collection of metadata about the presentation/style of your DataFrame.  The object is like a Python dictionary, and is called a CSSStyleDeclaration object. This
object lists many (possibly all) CSS properties for the element that can be populated; most/all are empty.  When we set some
properties in the code above, they are stored in this object.

```js
h1.style
```

### Some Reading
* https://css-tricks.com/almanac/properties/w/width/

## element.style.cssText 
We saw how to edit one style property at a time using highly-specific object notation (e.g., `element.style.color`).  However,
the `.style` property has a `.cssText` property that allows one to edit/add multiple styles at once:

```js
// One at a time
const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.fontSize = '2em';
h1.style.width = '50%';

// Multiple at once
const h1 = document.querySelector('h1');
h1.style.cssText = 'color: red; font-size: 2em; width: 50%';
```

Notice that when using the one-at-a-time approach, you are using a JS-ish syntax on property names; however,
in the multi-style approach, the JS string is written in pure CSS syntax.  This is important: the cssText
property won't throw an error if you type in a nonexistent property -- it will just ignore it.  Tha means that
you must write the correct CSS, e.g., `font-size: 2em` as opposed to `fontSize: 2em`, which you might incorrectly
type thinking in terms of the object notation in the single-style edit above.

## element.setAttribute(attrName, attrVal)
As seems to be the theme with this class, this is a more general method that can be used instead of the
other two approaches we just learned.

```js
// One at a time
const h1 = document.querySelector('h1');
h1.style.color = 'red';
h1.style.fontSize = '2em';
h1.style.width = '50%';

// Multiple at once
const h1 = document.querySelector('h1');
h1.style.cssText = 'color: red; font-size: 2em; width: 50%';

// .setAttribute Method
const h1 = document.querySelector('h1');
h1.setAttribute('style', 'color: red; font-size: 2em; width: 50%');
```

The `.setAttribute()` method is appealing b/c it is just as versatile as `.style.cssText`, but also
a more general approach to editing any type of HTML tag.  

Btw, some code:
```js
const h1 = document.querySelector('h1');
// Get the next h1 instance
next_h1 = h1.nextElementSibling
next_h1.setAttribute('id', 'second-h1');
// Now we can easily grab this element in other parts of the code
document.querySelector('#second-h1');
```

## Wrong Again!
Haha, this class just keeps doing the same move: everything above is all fine and dandy, EXCEPT THAT to write
good web code, you really shouldn't mix-and-match your HTML, CSS, and JavaScript.  That is, in terms of CSS, you should limit using
the style attribute as much as possible, and use style sheets as much as possible.  

Let's create an element to play with:
```js
const h = document.createElement('h1');
h.setAttribute('id', 'main-heading');
h.setAttribute('class', 'ank-student jpk-modal');
h.textContent = 'Learn Web Development at Udacity'

// Insert at top of page
document.querySelector('body').insertAdjacentHTML('afterbegin', h.outerHTML)
```

Look at stuff
```
h = document.querySelector('h1'); // should be the element we just inserted
const classes = h.className; // .className returns a space-sep'd string of classes
const listOfClasses = classes.split(' '); // now we can .push, .pop, etc
```

> Since .className returns a string, it makes it hard to add or remove individual classes. As I mentioned earlier, we can convert the string to an array and then use different Array Methods to search for a class remove it from the list, and then update the .className with the remaining classes. However, we don't want to do all of that work! Let's use the newer .classList property.

I quoted that b/c it's yet another "gotchya!" :-p

```js
const domListOfClasses = h.classList;
```

This returns an object of type `DOMTokenList`.  More to the point, it has some list-like properties/methods that are
easier to use than actual list properties/methods:
* .add()
  - add a class
* .remove()
  - remove a class
* .toggle()
  - adds class if it doesn't exist; removes it if it does
* .contains()
  - boolean: does class exist?

If using a regular list, we would have to locate the index of the class we want to remove, then use
the appropriate JS method...  The DOMTokenList methods are more convenient!

```js
h.classList.add('ice-cream') // add ice-cream class
h.classList.toggle('ice-cream') // since ice-cream class exists, this removes it
```

### Point of .classList
The point is that we're supposed to keep CSS and HTML in separate files. So, while `element.cssText` was
a quick way to force-change the style of an element, it is highly recommended to instead use `element.classList.<method>`
to add and remove CSS classes that are defined in an external CSS style sheet. Similarly, you can use `element.setAttribute('id', 'id-name')`, where the CSS is defined in an external style sheet.

