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

Let's look at an example from CSS, then put it in SASS:

```sass
nav {
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

