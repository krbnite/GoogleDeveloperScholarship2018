Create an array
```js
var colors = ['red', 'green', 'purple', 'muave',];
```

They do not add the last comma in, but I tested this in the Chrome JS Console,
and it's possible.  This is the recommended best practice in Python, so it's
likely a good practice in JS.  Why?  Well, a lot of times, you might list array
items by line, like so:

```js
var colors = [
  'red',
  'green',
  'purple',
  'muave',
]
```

What if you wanted to change the code later, and add another color?
```js
var colors = [
  'red',
  'green',
  'purple',
  'muave',
  'blue',
]
```

By always putting a comma after an element, even if it's the last element, a git diff
will only pick up on the relevant change.  Without using the comma on the last element, when
we changed the code, a diff would show that the 'mauve' line changed (a comma would be added to it)
in addition to a new line ('blue').

--------------------------------------

## JS Arrays Are Like Python Lists
These are not homogeneous arrays. Anything goes:
```js
var arr = [1, 'two', true, [3,4]];
```

## Accessing Elements in an Array
This is the usual syntax: arr[i]. 

Note that JS is 0-based, like Python or IDL (R is 1-based, as well as MatLab, if I remember
correctly). 

In JS, accessing an element beyond the index range will not yield an error, but will return 
the "undefined" data type.  This is similar to R, which returns NA when an index outside the
array's index range is used.  (In Python, an error is thrown when trying to access an element
outside the range of a list's index.)

Changing an element of an array is the usual: arr[i] = newValue



## Array Properties & Methods

Arrays have properties and methods:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

### Length
```js
var arr = [0,1,2];
console.log(arr.length);
```

### Push
This appends an element to the end of an array (simlar to `myList.append(newData)` in Python):
```js
var arr = ['cat','dog','mouse'];
arr.push('horse');
console.log(arr);
  ['cat', 'dog', 'mouse', 'horse']
```
Not sure this will come into play or not, but a notable side effect of using .push() is that
it returns the new array length.  Not "prints to screen", but actually returns.
```js
var newLength = arr.push('elephant');
console.log(newLength);
  5
```

### Pop
Same as Python: Pops last element off array.
```js
var arr = ['cat','dog','mouse'];
arr.pop()
console.log(arr);
  ['cat', 'dog']
```

Similar to .push(), this method has a return value: the item popped.
```js
var arr = ['cat','dog','mouse'];
var droppedFromList = arr.pop();
console.log(droppedFromList);
  'mouse'
```

### Splice
This function allows you to choose the location (starting index) and length (number of elements from 
starting index) you would like to delete/pop, as well as what items you would like to put/push in their 
place. 

For example, you can insert an item without deleting any:
```js
var arr = [1,2,4];
arr.splice(2,0,3);
console.log(arr);
  [1,2,3,4];
```

You can delete 1 item, then insert 3 items in its place:
```js
var arr = [1,2,3,8,7,8];
arr.splice(3,1,4,5,6);
log.console(arr);
  [1,2,3,4,5,6,7,8]
```

And so on!

Importantly, splice can use reverse indexing, even though arrays do not support it:
```js
var arr = [1,2,3];
arr.splice(-1,1);
console.log(arr);
  [1,2]
```

Finally, the return value (if needed) are the items that were dropped. If no items were dropped,
the return value is an empty arry:
```js
var arr = [1,2,3];
empty = arr.splice(arr.length, 0, 4);
console.log(empty);
  []
```

### Reverse
Almost exactly what you'd expect, though the following should be noted:
* the return value is the reverse array
* the array itself is permanently reversed
```js
arr.reverse()
```

### Sort
Almost exactly what you'd expect, though the following should be noted:
* the return value is the sorted array
* the array itself is permanently sorted
```js
arr.sort()
```

### Shift
This method will pop the first element of your array:
```js
var arr = [0,1,2,3];
droppedValue = arr.shift();
console.log(droppedValue);
  0
console.log(arr);
  [1,2,3]
```

### Slice
First and foremost, slice create a copy of an array.  This is in contrast to
pop, push, reverse, sort, and shift, which all directly impact the array. 

Basically, the return value is the slice of the array that you requested, and
the original array is not affected:
```js
var arr = [0,1,2,3,4,5,6,7];
var subset = arr.slice(1,4);
console.log(arr);
  [0,1,2,3,4,5,6,7]
console.log(subset);
  [1,2,3]
```

Note that the index you specify is clopen, like it is in Python: clopen(1,4) := [1,2,3].

### Join

```js
var arr ['Hello', 'there!'];
# Default
arr.join()
  'Hello,there!'
# No Delimiter
arr.join('');
  'Hellothere!'
# Space Delimited
arr.join(' ');
  'Hello there!'
# and so on...
```

### Concat
Concatenate a second array to end of first array.
```js
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
arr1.concat(arr2);
  ['a', 'b', 'c', 'd', 'e', 'f']
```

### Fill
Replace values in a subset of an array with a constant value.
```js
var arr = ['yes', 'yes', 'yes', 'yes', 'yes'];
arr.fill('no',3); // fill in last 2 element with 'no'
```
This returns the modifies the array itself, and also returns the modified array.

### Many other methods
..........

## forEach
```js
var arr = [1,2,3,4];
// Apply an anonymous print function each element
arr.forEach(function(x) {
  console.log(x*x);
})
// Remember: a name function expressions can sometimes help code readability
arr.forEach(function printSquare(x) {
  console.log(x*x);
})
```

What if you want to reference the index or the entire array?  You can pass variable names as
the 2nd and 3rd arguments, respectively, to the function expression.

```js
var arr = ['cat', 'dog', 'mouse', 'fish']
arr.forEach(function(x, idx, array) {
    console.log('Index ' + idx + ' of [' + arr.join(', ') + ']: ' + x);
})
  Index 0 of [cat, dog, mouse, fish]: cat
  Index 1 of [cat, dog, mouse, fish]: dog
  Index 2 of [cat, dog, mouse, fish]: mouse
  Index 3 of [cat, dog, mouse, fish]: fish
```

------------------------

## Quiz
```js
/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(x, i, arr) {
    if (x % 3 === 0) {
        arr[i] = x+100;
    } else {
        arr[i] = x;
    }
    //console.log(test[i])
})
```

I included this quiz b/c here I learned that you must use the index/array functionality of
.forEach() if you want to affect the array.

-------------------------------------------

```
```
