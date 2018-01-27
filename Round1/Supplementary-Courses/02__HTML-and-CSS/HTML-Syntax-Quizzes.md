
## Buttons
Buttons are simple enough:
```html
<button>This is a button</button>
```

I learned something new when looking them up on the MDN page about 
[buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), namely that
they accept "phrasing content."
 
Well, shiz, what is phrasing content?
 
### Phrasing Content
Elements belonging to the [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content)
category are: \<abbr>, \<audio>, \<b>, \<bdo>, \<br>, \<button>, \<canvas>, \<cite>, \<code>, \<command>, \<data>,
\<datalist>, \<dfn>, \<em>, \<embed>, \<i>, \<iframe>, \<img>, \<input>, \<kbd>, \<keygen>, \<label>, \<mark>, \<math>,
\<meter>, \<noscript>, \<object>, \<output>, \<progress>, \<q>, \<ruby>, \<samp>, \<script>, \<select>, \<small>, 
\<span>, \<strong>, \<sub>, \<sup>, \<svg>, \<textarea>, \<time>, \<var>, \<video>, \<wbr>, and plain text.
 
Other elements belong to this category, but only if a specific condition is filled:
* \<a> if it contains only phrasing content
* \<area> if it is a descendant of a \<map> element
* \<del> if it contains only phrasing content
* \<ins> if it contains only phrasing content
* \<link> if the <strong>itemprop</strong> attribute is present
* \<map> if it contains only phrasing content
* \<meta> if the <strong>itemprop</strong> attribute is present
 
I took the time to painstakingly write this out b/c holy cow! I thought I knew HTML, at least a little
bit.  But all of this?  Half of the tags I don't recognize.  And this info on phrasing content is
just the beginning: there are other [categories of content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories)
as well: metadata content, flow content, sectioning content, heading content, embedded content, interactive content,
palpable content, and form-associated content.  The categories share some tags, but also have their own -- again, many of
which I have not used in the past.
 
So going back to the basics was a good idea!
 
### Now: More About Buttons!
So many attributes:
* autofocus
* autocomplete
* disabled
* form
* formaction
* formenctype
* formmethod
* formnovalidate
* formtarget
* name
* type
* value



