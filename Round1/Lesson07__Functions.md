# Arrow Functions
They are cool for quick one liners, but kind of lose their utility for writing complex functions.

Example of a decent replacement w/ an arrow function:
```js
// Old way
const squares_old = [1,2,3,4,5].map(function(num) {
  return num*num;
});

// Arrow way
const squares = [1,2,3,4,5].map( num => num*num );
```

Example of a less dramatic replacement w/ an arrow function:
```js
// Old Way
const bigSquaresOld = [1,2,3,4,5].map( function(num) {
  const square = num*num;
  return square > 15;
});

// Arrow Way
const bigSquaresOld = [1,2,3,4,5].map( num => {
  const square = num*num;
  return square > 15;
});
```

The only difference is swapping out `function` on the left with the `=>` on the right.  Ok, we
removed parentheses too, but that's only possible for one-parameter functions...  If we wrote a function
with two parameters or more (or w/ no parameters), then we would have to use parentheses! 

My point is that using an arrow function is syntactically pleasant in simple situations, but quickly
loses much of its visual advantage for even slightly complex functions.  In the simple situation, the
arrow notation is called "concise body syntax."  In any slightly more complex situtations where curly
braces and "return" are needed again, the notation is called "block body syntax."  

0-Parameter, Multiline Body Example (such a minor difference)
```js
// Old way
const myFcnOld = function() {
  console.log('Beginning database migration...');
  db.migrate();
}

// Arrow way
const myFcn = () => {
  console.log('Beginning database migration...');
  db.migrate();
}
```

Multi-Parameter, Multiline Body Example
```
// Old way
const multOld = function (x,y) {
  const square = x*y;
  console.log(`The produce of ${x} and ${y} is ${square}.`)
  return square;
}

// Arrow way
const mult = (x,y) => {
  const square = x*y;
  console.log(`The produce of ${x} and ${y} is ${square}.`)
  return square;
}
```

In the above case, we still needed to use "return" and we still needed "curly braces." The benefit here
might be simply that most of your code uses `=>` on simple functions and you want to maintain consistency.

Btw, arrow functions are function expressions; the full name is "arrow function expression."  So, if you
needed a function declaration, you would not use an arrow function.

## This Arrow Uh-Oh
For regular functions, the `this` keyword depends on how a function is called.  However, for arrow
functions, `this` depends on **where** the arrow function is called.



## Some more on This
* https://www.quirksmode.org/js/this.html
* http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/
