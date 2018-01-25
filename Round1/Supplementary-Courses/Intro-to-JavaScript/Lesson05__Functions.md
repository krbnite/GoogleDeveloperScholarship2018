Interestingly, functions can be written to ways.

One way is like how it's done in R, or using lambda in python.  The other way is more similar 
to how its usually done in Python.  

## Function Definition: Method 1

JavaScript:
```js
myFcn = function(x) {
  return(x*x)
}
```

This is similar to how you might define the function in R:
```r
myFcn = function(x) {
  return(x*x)
}
```

You might also say it's similar to how you can define a Python function using the lambda
method:
```python
myFcn = lambda x: x*x
```

## Function Definition: Method 2
This is the way they showed in the course.

JavaScript:
```js
function myFcn(x) {
  return(x*x);
}
```

This seems to result in the same thing, so one might wonder why there would be two
equivalent syntaxes... But then again, Python also has a second, similar method as well!

```python
def myFcn(x):
  return x*x
```

------------------

## No Arguments: Hello!
```js
function hello() { console.log('Hello!'); }
```

## One Argument: Reverse String
```js
rev = function(str) {
    var revStr="";
    for (var i=str.length-1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr)
}
```

## Add two numbers
```js
function add2(x,y) {
  var z = x+y
  return(z);
}
```

## Parameters vs Arguments
* A **parameter** is always going to be a variable name and appears in the function declaration. 
* An **argument** is always going to be a value (a number, a string, a boolean, etc.) and will always appear in the code when the function is called or invoked

* **Parameters** are variables that are used to store the data that's passed into a function for the function to use 
* **Arguments** are the actual data that's passed into a function when it is invoked

Example:
```js
function add2(x,y) { 
  var z = x + y;
  return z
}
add2(5,9)
  14
```

Here, x and y are parameters of the function `add2`, while 5 and 9 are arguments.


### Math Analogy
In terms of math, take a polynomial function: 
* f(x;a,b,c) = ax^2 + bx + c
* g(x) = f(x;1,2,3) = x^2 + 2x + 3

Here, a, b, and c are parameters of a quadratic polynomial. Without specifying them, the
function represents an infinite class of polynomials.  By specifying parameter arguments 1,
2, and 3, we select a single polynomial from the class.  

------------------------------------------------------

## Undefined Function Return
<img src="./images/undefined-function-return.png" width="500">

In JavaScript, a function always returns something. If a function does not explicitly return 
something, as far as JS is concerned, it returns "undefined." That's why in the Chrome JS Console,
any time you type something like console.log('Hello!'), it prints "Hello!" to the screen, but also
shows that "undefined" was returned.

## Two Ways to Return Data
* cosole.log
* return

They cover this in some detail, but the gist is that console.log is basically a print statement,
while return is...well...a return statement.  Just like using print() in Python or R, it is best
used for things like debugging and keeping the user informed about what's going on as code runs.

Interested factoid: the print() function in the JavaScript console will bring up the printer 
dialog...so it makes sense why we use console.log() in JS instead of print().

## Using Return Values
There's not much to say besides it seems like "var" is used any time a new variable is
being used/defined:
```js
function add2(x,y) { return x+y; }
var z = add2(3,5)
```

However, I do notice they just use "return x+y" here, where earlier they first defined
a new var, z, in the function body...

## Scope
Any variable defined in the main environment has global scope, and can be accessed from
any functions inside that environment, functions inside those functions, and so on.

A variable defined in a function environment is not seen in the main environment, but is
seen in any function within the current function environemnt.

All of this can be summarized in various ways: 
* a variable's scope propagates to child environments, but not parent environments
* a variable's scope extends from its environment to all descendants, and excludes any ancestors


