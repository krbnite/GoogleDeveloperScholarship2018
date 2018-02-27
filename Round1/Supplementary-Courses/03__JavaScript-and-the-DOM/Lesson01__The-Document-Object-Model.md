## The Document Object Model (DOM)
The DOM 

The HTML spec provides a set of rules for how an HTML document should be 
interpreted. When the interpreter comes across a tag, a token is emitted, e.g.,
when the <html> tag is reached, a HTML startTag token is emitted.  There is
another process that receives the emitted tokens and converts them
into nodes of a graph, e.g., when the startTag:HTML token is received, the
graph's HTML node is created.  On this graph, the HTML node is the root
node.

<img src="./images/characters-to-tokens.png" width="400">

Tags netsted within a tag becomes child nodes of a parent node, e.g., the
<head> and <body> tags are children of the <html> node, which is their
parent node.  The <head> node often has its own children: the <title> node,
the <meta> node, a <script> node, etc. Similarly, the <body> node has 
its own children: <div> nodes, <p> nodes, and so on, each of which often
have their own children as well.

<img src="./images/tokens-to-nodes.png" width="400">

The DOM is the fully-parsed representation of the HTML mark-up.  It reflects all relationships between
nodes, and the properties/attributes of each node, e.g., and <img> node has a src attribute, etc.

<img src="./images/nodes-to-DOM.png" width="400">

So, to recap:

<img src="./images/characters-tokens-nodes-DOM.png" width="200">

## CSS Recap
Select a tag by tag name:
```
p { ... }
```

Select a tag by its ID:
```
#footer { ... }
```

Select tags by their class:
```
.left-nav{ ... }
```

## document.GetElementById()
* Go to this page: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
* Open up JavaScript Console (cmd+alt+j)
* Get the HTML tag that has the ID attribute ID='content':  ```document.getElementById('content');```

If you want to look at what other IDs are on the page, click on the "Elements" tab in Developer Tools and
take a look, e.g., right at the top, you'll see there is 'main-header' and 'nav-access'.

```js
document.getElementById('nav-access');
```

If the ID exists on the page (i.e., in the `document` object), then the corresponding HTML tag (and its
contents) will be returned.  If the ID does not exist, a null will be returned.

If you want to store the return value in a variable:
```js
const navAccess = document.getElementById('nav-access');
```

## Similar Functions for Class and Tag Selectors
There is only one elment per page w/ a given ID, so getElementById() can return at most 1 HTML element.  However,
many HTML elements can share the same class or tag name, so the following functions can return many elements.  Thus,
we use "Elements" (plural) in their names instead of "Element" (singular).

```
document.getElementsByClassName('brand-color');
document.getElementsByTagName('p');
```

These functions look like they return lists, but the return objects are actually of object type `HTMLCollection`.

### One function to rule them all... Kind of
jQuery was huge when it first came out: instead of having to write different code for each different browser,
jQuery allowed web developers to abstract this away and just focus on the code's function.  jQuery took care
of the browser stuff underneath the hood.  Since its come out, all the popular browsers have been much 
better and more committed at adhering to various web standards, so jQuery's utility has declined.  However,
jQuery left its impact on web development: for example, there is a standard web fcn called `.querySelector()`
that allows you to select tags by ID, class, or name, with the caveat that it only select the first found
element that matches.  

```js
document.querySelector('#header')
document.querySelector('.header')
document.querySelector('header')
```

This means you do not need a different function for each type of CSS element...kind of. The
fcns outlined above are still needed to return lists of matches...kind of.  That is, you can instead
use `.querySelectorAll()` as well.

```js
// Write the .querySelectorAll() code to find all paragraph elements that are descendents of elements 
//   that have the class: articles
document.querySelectorAll('.articles p');
```

Note: the "list" that is returned by `.querySelectorAll()` is not a JavaScript list, but another type of 
object called a `NodeList`. It has a `.forEach()` method, but it's not supported by all browsers... W/ a NodeList,
you're better off just using a regular for loop:

```js
const allHeaders = document.querySelectorAll('header');
for(let i = 0; i < allHeaders; i++){
    console.dir(allHeaders[i]);
}
```

* [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
* [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)



## Nodes, Elements, and Interfaces...
Remember: to get to the DOM, we start with an HTML text file that has HTML tags; the tags are tokenized and 
turned into nodes; the final product is the DOM.

### So what is a [Nn]ode anyway?
* a `Node` is like a class
  - actually, it's more like an interface
  - an interface is like a blueprint for designing classes: it lists all property and method names that a class should have
  - that is, an interface is one step further in the direction of abstraction
  - you implement an interface with a class; for a class to implement an interface, it must define all properties and methods 
  required by the interface
* a `node` is like an object (an instance of the Node class)

Say you go to google.com:
```js
  const body = document.body;
  body.baseURI
    "https://www.google.com/"
  body.nodeName
    "BODY"
  body.nodeType
    1
 ```
 
 ### Node Types
 What is nodeType 1?  The MDN documentation covers the node codes: 
 https://developer.mozilla.org/en-US/docs/Web/API/Node
 
 A node of nodeType 1 is an ELEMENT\_NODE, whereas a node of nodeType 2 is an
 ATTRIBUTE\_NODE.  There are 12 types of nodes (see docs for more details).
 
 ### Node Type Interfaces
 So, we know that `Node` is an Interface... Just like a (child) class can inherit properties and methods
 from another (parent) class, an interface can inherit from another interace.  So, for example, 
 there is the Element Interface, which inherits from the Node Interface.  A specific instance of an Element Node
 is an element class (e.g., class EL), instances of which are objects of that class (e.g., EL objects). ....
 
 https://developer.mozilla.org/en-US/docs/Web/API/Node
 https://developer.mozilla.org/en-US/docs/Web/API/Element
 https://developer.mozilla.org/en-US/docs/Web/API

### Classes and Interfaces in JavaScript
This got me all a bit flustered, so I began reading about classes, interfaces, and objects in JavaScript.  

A major takeaway
is to remember that the DOM is not JavaScript: it is its own thing, and JavaScript in the browser has a system of dealing with 
that thing.  So, independent of JavaScript, the DOM has DOM interaces, etc.

Another major theme is that, yes, you can technically use design patterns to implement traditional classes and interfaces
in JavaScript, but this is through a more-or-less brute force technique known as "Duck Typing."  OOP in JavaScript
is not traditional OOP; it implements a different approach to OOP called prototype-based OOP.  Since this can be alien to
developers from traditional OOP backgrounds, some syntactical sugar has been added in ES6 to make class and interface
implementation \*feel\* like traditional OOP (but it is still prototypical OOP underneath the hood)>

From an [MDN Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain):
> JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).
>
> When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
>
> Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.
>
>While this confusion is often considered to be one of JavaScript's weaknesses, the prototypal inheritance model itself is, in fact, more powerful than the classic model. It is, for example, fairly trivial to build a classic model on top of a prototypal model.

From [another MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction):
> JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.
>
> In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.



* Wiki: [Prototype-Based Programming](https://en.wikipedia.org/wiki/Prototype-based_programming)
* MDN: [Inheritance and the Prototype Chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [JavaScript Interfaces](https://www.webreflection.co.uk/blog/2016/03/23/javascript-interfaces)
* [What's the difference between "declare class" and "interface" in typescript](https://stackoverflow.com/questions/14345485/whats-the-difference-between-declare-class-and-interface-in-typescript)
* [Does JavaScript have the Interface Type such as Java's Interface](https://stackoverflow.com/questions/3710275/does-javascript-have-the-interface-type-such-as-javas-interface)
* Wiki: [Duck Typing](https://en.wikipedia.org/wiki/Duck_typing)
* MDN: [JavaScript Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)


## More on the DOM and Nodes, Etc
I think this particular lesson really requires a little extra reading on the DOM.  It goes over things a little too
quickly to really get a strong feel for what's going on.

Luckily, MDN has a tutorial: [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

> The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, XML documents, and their component parts (e.g. elements). Every element in a document—the document as a whole, the head, tables within the document, table headers, text within the table cells—is part of the document object model for that document, so they can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

Here's another gem:
> In the beginning, JavaScript and the DOM were tightly intertwined, but eventually, they evolved into separate entities. The page content is stored in the DOM and may be accessed and manipulated via JavaScript, so that we may write this approximative equation:
>
> API (HTML or XML page) = DOM + JS (scripting language)

This separation was intentional: JS can be swapped out, e.g., with Python:
```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # DOM property of document object;
p_list = doc.getElementsByTagName("para");
```

<><><><><><><><><><><>
Continue reading this DOM tutorial when you come back!
[Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

-----------------------------

## Some Misc
I got into reading some extraneous material on the MDN website.  This stuff is not exactly related to the current
lesson notes (but not "not related" either).

From MDN ([Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)):
* "JavaScript borrows most of its syntax from Java, but is also influenced by Awk, Perl and Python."
* Scopes: global, function, and block
  - global scope: accessible from anywhere (unless var name is overridden inside function or block)
  - function scope: accessible inside function and its descendants
  - block scope: accessible inside block {}, e.g., only inside a while loop
    * NOTE: block scope is only defined and implemented in ECMAScript2015 and after
* On declaring vars:
  - You can choose to not use "let" or "var", but it is not advised b/c it provides little control (e.g., if x is an important global var, but is then declared w/o "let" or "var" inside a function, then JavaScript thinks you want to overwrite the global var, which is not likely what you want to do).
  - "With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables."
  - "With the keyword let. For example, let y = 13. This syntax can be used to declare a block-scope local variable." This means that if you declare a var inside something like a loop or if-statement (a block), then it is not defined outside that block.  This gives you more control, e.g., the variable cannot be accidentally or incorrectly used outside the block.
* Reminder: beware variable hoisting
* Reminder: function declarations also get hoisted; function expressions do not
* str2num: parseInt('1.23'); parseFloat('1.23'); +'1.23' (unary operator)
* Extra Comma (makes diffs easier to read): [1,2,3,]  
* RegExp Literals are a thing, e.g.: var re = /ab+c/;  
  - want to look into this more!!!!!
* String Templates (like string.format(var=val) in Python:  var name='Kevin'; console.log(`My name is ${name}`)

From MDN's [Control Flow and Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) tutorial:
* Exception Handling Statements:
  - [throw statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_statement)
    * e.g., `if (<expression>) { throw 'fUp'; }`
  - [try...catch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#try...catch_statement)
    * this is just like try/except from Python (even has a finally block)

I really should continue to go through these MDN JavaScript tutorials.


