
An JavaScript object is like a Python dictionary, or an IDL struct.  It's like a hash 
table: you store data or functions in it, each with its own key.

```js
var kitty = {
  species: 'cat',
  name: 'Chino',
  age: 7,
  interest: [
    'catching mice',
    'killing birds',
    "chillin' outside",
  ],
  meow: function() {
    return 'Meoooow!';
  },
}
```

This type of object notation is called object-literal notation.

To access use the object, do things like:
```js
kitty.name // dot notation
  'Chino'
kitty['species']  // bracketed notation
  'cat'
kitty.meow()
  'Meoooow!'
```

## Quiz
```js
/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    },
};
```

## JavaScript Object Naming Conventions
JavaScript actually allows you to name object properties names that begin with a number:
```js
myObj = {
  '1stThing': 'This!',
  '2ndThing': 'That!'
}
```

This is legal, but considered bad practice because it is not compatible with dot notation:
```js
// bracketed notation is still possible
myObj['1stThing']
  'This!'
// dot notation will throw an error
myObj.2ndThing
  Syntax Error: Invalid or unexpected token
```

Best practice: only use names that jive w/ both bracketed and dot notation.

----------------------------

## Quiz: Facebook Profile
```
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: 'Kevin',
    friends: 87,
    messages: [
        'lol hashtag',
        'coffee good. too much coffee, still good.',
        'This a real post, typed with real letters!',
        ],
    postMessage: function(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        facebookProfile.friends += 1;
    },
    removeFriend: function() {
        facebookProfile.friends -= 1;
    },
}
```

## Quiz: Donuts
```js
/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(x => {console.log(x.type+' donuts cost $'+x.cost+' each');})
```
