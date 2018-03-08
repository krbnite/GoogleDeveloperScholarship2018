
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
    var hot = 'It's a shorts kind of day.';
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
    hot = 'It's a shorts kind of day.';
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
    const hot = 'It's a shorts kind of day.';
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
Destructuring is the same thing as "unpacking" in Python.  

```
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

