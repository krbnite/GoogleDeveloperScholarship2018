JavaScript data types include:
* numbers (integers, decimals)
* strings
* booleans
* undefined
* null

## Numbers (and their operators)
```js
n1 = 1;
n2 = 1.65 * 2;
n3 = n1 + n2;
25 % 12;
27/2;
5 > 7;
n2 == 3.3;
10 != 9;

## Comments
```js
// This is a single line comment
/* And this is a 
multiline comment
:-p */


## Strings
Strings are objects! Check it:
```js
var str = 'cat in the hat';
// strings have properties
str.length;
  14
// strings have methods
str.concat(' with a baseball bat');
  'cat in the hat with a baseball bat'
str.bold();
  <b>cat in the hat</b>
str.fontcolor('#ff0000');
  <font color="ff0000">cat in the hat</font>
```

Strings have indices indices (like a list or array) and are similar to
python strings.
```js
str[0]
  'c'
str[1]
  'a'
str1 = 'He said, "No way."'
str2 = "This isn't a string."
```

Other string things:
```js
// there exist string operators
str + ' on a wrestling mat'
  'cat in the hat on a wrestling mat'
// implicit type conversion
'hello' + 5*10;
  'hello50'
// Escaping!
console.log("This quote has a \"quote\" in it.")
// Comparison
'green' > 'Green'
  true
'blue' > 'green'
  false
```

## Null vs Undefined
Null is a data type that has the value of nothing, where as undefined is a
data type that has no value.
```js
var a; // a is undefined
var b = null; // b is null
```

A related type is NaN -- Not a Number.  This is often return when indicating
an error in a math calculation, e.g.:
```js
'kitty cat' / 2
  NaN
Math.sqrt(-1)
  NaN
```


## Variables & JS Naming Convention
In SQL, you often see vars_like_this, but in JavaScript you will more often
see varsLikeThis (camelCase).

Google has a JS Style Guide
* https://google.github.io/styleguide/jsguide.html

So "var" always seems to be written before declaring a variable, but in the 
JS console, I do not need to do that... It got me wondering, is "var" arbitrary?  So
I googled it and [this StackOverFlow page](https://stackoverflow.com/questions/6881415/when-is-the-var-need-in-js)
sums it up nicely:
>The var keyword is never "needed". However if you don't use it then the variable 
> that you are declaring will be exposed in the global scope (i.e. as a property on 
> the window object). Usually this is not what you want.
>
> Usually you only want your variable to be visible in the current scope, and this 
> is what var does for you. It declares the variable in the current scope only 
> (though note that in some cases the "current scope" will coincide with the 
> "global scope", in which case there is no difference between using var and not 
> using var).


## Implicit Type Conversion
JavaScript is a loosely-typed language: there is no need to specify data types.  Instead,
the JavaScript engine will do the interpreting and coerce things into making sense.

```js
// string + number --> string
'hello' + 50;
  'hello50'
// comparison
"1" == 1
  true
0 == false
  true
```

### Loose Type vs Strong Type

| Implicit (e.g., JS) | Explicity (e.g., C) |
----------------------|---------------------|
| var cnt = 1;        | int cnt = 1         |
| var name = 'Kevin'  | string name = 'Kevin'|
| var num = 1.23      | double num = 1.23   |

### Strict Equality in JavaScript
In order to get around the potential pitfalls of loosely-typed equality expressions,
one can use the "strict equality" operator:
```js
'1' === 1
  false
'1' !== 1
  true
```


-------------------------------------------------------------

## Some Code
### Reverse Letters in a Word
```js
function rev(w) {
  var revw = "";
  // loops over the chars in rev order
  for (var i = w.length - 1; i >= 0; i--) {
    // adds chars to a new word
    revw = revw.concat(w[i]);
  }
  return revw;
}
```
