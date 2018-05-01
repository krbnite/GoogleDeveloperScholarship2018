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
  - > uses brackets and semi-colons just like CSS. It doesn't care about indentation levels or white-space. In fact, Sass's SCSS syntax is a superset of CSS – which means SCSS contains all the features of CSS, but has been expanded to include the features of Sass as well. In layman's terms, any valid CSS is valid SCSS. 
