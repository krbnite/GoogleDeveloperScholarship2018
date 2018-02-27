## WHILE
```js
var x = 1;
while (x < 10000) {
  console.log(x);
  x += 1;
}
```

## FizzBuzz
```js
while (x <= 100) {
    if (x % 3 === 0) {  
		if (x % 5 === 0) { 
			console.log('FizzBuzz'); 
        } else {
			console.log('Fizz');
        }
    } else if (x % 5 === 0) {
        console.log('Buzz'); 
    } else {
        console.log(x);
    }
	x += 1;
}
```

## Bottles on the Wall
```js
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var output;
while (num > 0) {
    // check value of num
    output = '';
    switch (num) {
        case 1: 
            output += num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!";
            break;
        case 2: 
            output += num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!";
            break;
        default: 
            output += num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!";
    }
    // print lyrics using num
    console.log(output);
    // decrement num
    num -= 1;
}
```

## Rocket Launch
```js
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var T = 60;
while (T > 0) {
    switch(T) {
        case 50: 
            console.log('Orbiter transfers from ground to internal power');
            break;
        case 31:
            console.log('Ground launch sequencer is go for auto sequence start');
            break;
        case 16: 
            console.log('Activate launch pad sound suppression system');
            break;
        case 10:
            console.log('Activate main engine hydrogen burnoff system');
            break;
        case 6:
            console.log('Main engine start');
            break;
        default:
            console.log('T-'+T + ' seconds')
    }
    T -= 1;
}
console.log('Solid rocket booster ignition and liftoff!')
```

--------------------------------------

## FOR
```js
for (var i = 0; i < 10; i+=1) {
  console.log(i);
}
```

### Nested
```js
for (var i = 0; i < 10; i+=1) {
  for (var j = i; j < i+3; j++) {
    console.log(i*j);
  }
}
```

----------------------------------------

## Shorthand
| Long      | Short | Operator |
| i = i + 1 | i += 1 | i++, ++i |
| i = i - 1 | i -= 1 | i--, --i |
| i = i * n | i *= n | N/A |
| i = i / n | i /= n | N/A |

If you use i++ or ++i in a for loop, like `for (var i=0, i < 10, i++) { // Do Stuff }`, 
it doesn't really matter which one you use.  If you are printing to screen, it kind of
matters...

```js
var x = 1;
x++;
  1
x;
  2
var y = 1;
++y;
  2
y
  2
```

Basically, x++ will print the current value of x to screen before incrementing it, while
++x will increment the value, then print to screen.

--------------------------------------------

Rewrite the while loop as a for loop.

WHILE:
```js
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}
```

FOR:
```js
for (var x=9; x >= 1; x-=1) {
    console.log("hello " + x);
}
```

-----------------------------------------


