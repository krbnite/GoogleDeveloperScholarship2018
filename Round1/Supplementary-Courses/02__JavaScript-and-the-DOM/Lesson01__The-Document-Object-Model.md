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
 is an element class, instances of which are element objects. ....
 
 Actually... I'm not sure I got this down.  He mentioned "class" once before, then never again: only refers
 to interfaces.  
 
 https://developer.mozilla.org/en-US/docs/Web/API/Node
 https://developer.mozilla.org/en-US/docs/Web/API/Element
 https://developer.mozilla.org/en-US/docs/Web/API
