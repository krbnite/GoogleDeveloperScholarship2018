
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
card.innerText = 'What I want, meng!';
// or...
card.innerHTML = '<img src="https://imgs.xkcd.com/comics/good_code.png">'
```

Both `.innerText` and `.innerHTML` are properties (not methods) of the card element.  The
return values appear string-like, but are a type of object called `DOMString`.

.textContent...

