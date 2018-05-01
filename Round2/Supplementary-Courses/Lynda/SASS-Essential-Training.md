https://www.lynda.com/Sass-tutorials/Sass-Essential-Training/375925-2.html

------------------------------------------------------------------

In the intro quiz, I learned about space-separated lists of classes in CSS, and
how they differ from the comma-separated lists.

In CSS, when you comma-separate a list of classes, the CSS is
applied to each of those classes:
```css
class1, class2 { ... }
```

If you space-separate a list of classes, it implies a nested class, e.g., apply
the css to class2 if it is nested within class1:
```css
class1 class2 { ... }
```

----------------------------------------------------------------------

## Getting Started
* SASS: Syntactically Awesome Style Sheets
* SASS extends CSS, making it into a scripting language
* Ultimately, SASS must be compiled into CSS, and so is called a 'pre-processing language'
* SASS itself is extensible, e.g.:
  - compass
  - bourbon
* Interesting: [SASS vs SCSS](http://www.thesassway.com/editorial/sass-vs-scss-which-syntax-is-better)
  - SASS used to be quite controversial: it was sold as a "better CSS" and had indentation-mandated syntax
  - Why use a language for CSS that feels nothing like CSS?
  - And so we have SCSS ("Sassy CSS"), which is actually SASS3 and is a departure from the controversial aspects of the original SASS
  - > [SCSS] uses brackets and semi-colons just like CSS. It doesn't care about indentation levels or white-space. In fact, Sass's SCSS syntax is a superset of CSS – which means SCSS contains all the features of CSS, but has been expanded to include the features of Sass as well. In layman's terms, any valid CSS is valid SCSS. 
  - No fear: SASS3 is backwards compatible!
    * so if you learned and love the original SASS syntax, you can still use it
    * though if you haven't yet learned the original SASS syntax, almost seems pointless to
* Note: if you see a .sass file, it's old Sass; if you see a .scss file, it's new Sass

### SASS Variable and Function Example
```scss
$main_color : #9E2932;

.navbar {
  background: $main_color;
}

h2, h3 {
  background: darken($main_color, 20);
}
```

How amazing is this?

1. You only have to define the main color (#9E2932) once, then refer to it by name.
  - var names are easier to read and more interpretable
  - variables only require you to change the code in one spot (easy to manage and maintain!)
2. SASS has some functions like `lighten` and `darken`, which make it extremely easy to stick to
   a color theme w/o your head exploding (because who knows off the top of their head how to
   darken #9E2932 by 20%? Anybody? Serious question :-p)

### Example of SASS Nesting
So, in the intro quiz to this course I actually learned what the space-separated class
lists in CSS are for: nested CSS.  To be fair, I think I've learned this once or twice before, but
I use CSS so sparingly that it felt new to me this morning!  Well, think about nesting: if
you could code in a nested style to represent a nested concept, would you want to do it?  

Probably, and SASS offers that.

Let's look at an example from CSS, then put it in SASS (from: https://sass-lang.com/guide):

```sass
$main_color : #9E2932;

nav {
  background: $main_color;
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

In CSS:

```css
nav {
  background: #9E2932;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

### Partials & Import
These are similar to the Server Side Includes I used on the Terrestrial Lab website.  With SSI, you have 
HTML snippet files that you want to include in a full HTML file on the server side before it is served to
the client; the practice is good for when you have a chunk of HTML that is repeated on a bunch of pages since
it allows an "edit once, change all" approach.  The same is true for SASS partials: a SASS partial is a 
SASS snippet file that you can then include into a main SASS/CSS file.

From https://sass-lang.com/guide:
> You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is simply a Sass file named with a leading underscore. You might name it something like _partial.scss. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the @import directive.

```sass
// assuming you made a _mypartial.scss file
@import "mypartial";
```

Similar to SSI, the `@import` statement works serverside before the file is served to the client.  In vanilla
CSS, there is an `import` statement as well, but which requires an HTTP request to be made.

> CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use @import in CSS it creates another HTTP request. Sass builds on top of the current CSS @import but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

### Extend: CSS classes as ... well, classes
Often, you will find yourself rewriting CSS for different classes... Wouldn't it be nice
to just write it once, then reference it when writing a more specific class?

```sass
.btn {
  padding: 6px 12px;
  line-height: 140%;
  text-align: center;
  vertical-align: center;
  border: 1px solid transparent;
  background: lighten($main_color, 20);
}

.arrow-button {
  @extend .btn;
  color: red;
}
```

### Math Operators to the Rescue
```sass
$border : 1px;
$thick_border: $border * 5;
```

### Conditionals to the Rescue
```sass
.sidebar {
  @if ($border<=1) {
    background-color: red;
  } @else {
    background-color: yellow;
  }
}
```

### Mixins to the Rescue (Functions)

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```
