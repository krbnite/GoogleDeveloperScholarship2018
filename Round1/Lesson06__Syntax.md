
## let & const
I've only formally been learning JS for a couple months now, so I kind of just thought `let` and
`const` were natural parts of the language -- turns out they're new to ES6!

### Hoisting
In classical JavaScript all variables are hoisted; that is, variables **initializations** are raised to the top of
their calling scope (e.g., top of the function scope if inside a function).

Here is the example given in class:
```js
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}
```

In Python, I would expect that freezing did not get defined, which would throw an error to tell me
about my stupid ways.  However, in JavaScript, `console.log` does not throw an error: it returns
calmly with `undefined`.  That is, the JS engine interprets freezing has having been initialized
(`undefined` is different that "variable not defined").  This is because the initialization of the
variables `freezing` and `hot` get hoisted to the top of the function scope...and is why, before 
some new ES6 solutions, the best practice was to fully take control of this behavior and initialize
all variables yourself at the top of a scope.

Here is how the JS interpreter perceives the above code:
```
function getClothing(isCold) {
  var freezing, hot;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}
```

Hoisting occurs because of strict adherence to scope: `var` says that the variable has full
function scope, i.e., anything in the function has access to it.  

### Here is where let & const come in
ES6 introduce block scope with `let` and `const` --- that is, the condition that a variable is
only known within in its calling block, {}.  So, if `freezing` and `hot` were defined by `let`
or `const`, the would not be hoisted to the top of the function, but only to the top of their
immediate calling block:  if(){} for `freezing` and else{} for `hot`.

This will throw an error like you might expect it would: "Uncaught ReferenceError: freezing is not defined."

```js
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = "It's a shorts kind of day.";
    console.log(freezing);
  }
}
```

-----------------------------------------------------

## Rules for using let and const

* Variables declared with `let` can be reassigned, but can’t be redeclared in the same scope.
  - use `let` when you plan to reassign new values to a variable
* Variables declared with `const` must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned.
  - const is the strictest way to declare a variable
  - use `const` when you don’t plan on reassigning new values to a variable

```js
// const Declaration
function fcn1a() {
  const freezing = 'Grab a jacket!';
  const freezing = "It's cold!";
}
fcn1a()
  Uncaught SyntaxError: Identifier 'freezing' has already been declared

// const Reassignment
function fcn1b() {
  const freezing = 'Grab a jacket!';
  freezing = "It's cold!";
}
fcn1b()
  Uncaught TypeError: Assignment to constant variable.
  
// let Declaration
function fcn2a() {
  let hot = 'Get out the Hawaiian shirt!';
  let hot = "It's hot!";
}
fcn2a()
  Uncaught SyntaxError: Identifier 'hot' has already been declared

// let Reassignment
function fcn2b() {
  let hot = 'Get out the Hawaiian shirt!';
  hot = "It's hot!";
}
fcn2b()
// -- no error
```

> "Since const is the strictest way to declare a variable, we suggest that you always declare variables with const because it'll make your code easier to reason about since you know the identifiers won't change throughout the lifetime of your program."

^-- However, a horrible place for `const` is in defining the index var in a for loop:
```js
// BAD
for (const i=0; i<10; i++) { console.log(i); };

// GOOD
for (let i=0; i<10; i++) { console.log(i); };
```

## What about var: shots fired!
> "Is there any reason to use var anymore? Not really."


# Template Literals
This is simply the introduction of Bash's backtick to JavaScript.  Instead of having to
clunkishly concatenate strings and string vars with "+", we can now just use backticks:
```js
const myName = 'Kevin';
let yourName = 'Winnie the Pooh';

// Old, horrible way
const myStr = "Hello, my name is " + myName + ". It was nice to meet you, " + yourName + ".";

// New, enlightened way
const myStr = `Hello, my name is ${myName}. It was nice to meet you, ${yourName}.`
```

## Wait, it gets better
Instead of having to add "\n" every time you want a new line, the backtick allows you to format visually:
```js
// Old, Horrible way
const hello = "Hello, my name is " + myName + ". \n\nIt was nice to meet you, " + yourName + ".";

// New, Enlightened way
const hello = `Hello, my name is ${myName}.

It was nice to meet you, ${youName}.`
```

That can get pretty convenient when typing up HTML, as this clearly shows:
```js
// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name"> ${animal.name} </h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>;`

    return cardHTML;
```

# Destructuring
Destructuring is basically the same thing as "unpacking" in Python.  There are separate
ways to destructure and array and to destructure an object.

## Destructuring an Array

```js
const arr = [1,2,3];

// Old way
let x = arr[0];
let y = arr[1];
let z = arr[2];

// New, ES6 way
let [u,v,w] = arr;  // save 3 components in 3 separate vars
let [a,b] = arr;    // save first 2 components of arr in 2 separate vars
let [z] = arr;      // save first component of arr in its own var
```

## Destructuring an Object
```js
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

// Old way
const a_old = obj.a;
const b_old = obj.b;
const d_old = obj.d;

// New ES6 way
const {a,b,d} = obj;  // specify object keys to extract

```

### Plucking out array elements
```js
const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];
const [color1,,,color2,,,,color3,] = things;
```

### This Caveat
You can extract function from objects by destructuring, but beware of `this`: any 
object method that self refernces with `this` will still have `this` in the extracted
function, but will have not object to self reference... 

Example
```js
const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getCircumference: function() {
    return 2 * Math.PI * this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;
getArea()
  NaN
```

# Object Shorthands
## Object Literal Shorthand

```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

// Old, time-consuming way
const gemstone_old = {
  type: type,
  color: color,
  carat: carat
};

// New ES6 way
const gemstone = {type, color, carat};
```

Point: why type something twice? If you want to put a variable in an object with the same name and value, just 
put the variable in like you would in a array. Done!

## Object Method Shorthand
```js
let type = 'quartz';
let color = 'rose';
let carat = 21.29;

// Old, chit-chatty way
const gemstone_old = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};

// New ES6 way
let gemstone = {
  type,
  color,
  carat,
  calculateWorth() { ... }
};
```

Point: ES6 will figure out if you're defining a function by the (){//stuff}.  No need to write any more than that!

# More For
You've got
```js
for (let idx=0; idx < arr.length; idx++) { console.log(arr[idx]*arr[idx]); };
```

And you've got a simpler version of basically the same thing
```js
for (let idx in arr) { console.log(arr[idx]*arr[idx]); };
```

But not everything has an index!  Think about Python, where we can easily iterate over
dictionaries.  JavaScript's "for idx in" notation looks like it has the same thing to offer, 
but idx is still an index in JavaScript, not an item.

In ES6, this "for item [in]"  functionality found in Python is included, but since the "for...in"
notation was already taken, the notation for this is "for item of":

```js
for (let item of arr) { console.log(item*item); };
```

Example
```js
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// Capitalize first letter
for (let day of days) { 
    console.log(day.charAt(0).toUpperCase()+day.slice(1)); 
}
```

# The Spread Operator, ...
The spread operator spreads out a list. 

How do you combine these two arrays? In Python, you might use the "+" operator, but
in JavaScript that coerces the two arrays into a single string.  In classical JS, lists have a
`.concat()` method. In ES6, you can also use the spread operator.
```js
const a = [1,2,3];
const b = [4,5,6];

// Old way
console.log(
  a.concat(b)
);

// ES6 way
console.log(
  [...a, ...b]
```

# The Rest Operator, ...
Just like ... unpacks (or "spreads out") an array, it can be used to pack an array as well.
```js
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);
```

The `...items` bit says to pack the rest of `order` into `items`.

## Use the Rest Operator w/ Variadic Functions (like \*args in Python)
A variadic function is one that takes in a variable number of inputs.

```js
// Old way to define a sum
function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

// ES6 way
function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}
```

### Quiz
```js
function average(...nums) {
    if (nums.length > 0) {
        let total=0;
        for (const num of nums) {
            total+=num;
        }
        avg = total/nums.length
    } else {
        avg = 0
    }
    return avg
}
```

------------------------------------------------------------

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
