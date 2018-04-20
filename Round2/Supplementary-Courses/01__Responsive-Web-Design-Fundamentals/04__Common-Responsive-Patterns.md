There are 4 fairly standard design patterns:
* mostly fluid
* layout shifter
* column drop
* off canvas

To see a bunch of design patterns in action:
* https://responsivedesign.is/patterns/
* https://bradfrost.github.io/this-is-responsive/patterns.html

Pete LePage's webpage on responsive design:
* https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns

## Column Drop
On a small screen, we start with a vertical stack:

<table>
  <tr><td> &#9635; </td></tr>
  <tr><td> &#9636; </td></tr>
  <tr><td> &#9641; </td></tr>
</table>

Then as you widen the screen, the div elements reflow:

<table>
  <tr><td> &#9635; &#9636; </td></tr>
  <tr><td> &#9641; </td></tr>
</table>

And finally a row:
<table>
  <tr><td> &#9635; &#9636; &#9641; </td></tr>
</table>

If you continue expanding the screen, the elements either grow with the screen, or
more commonly they reach a certain size at which point margins begin to grow at the sides.


## Mostly Fluid
This pattern is similar to column drop, except that the designer usually picks
fairly specific reflows for each break point, instead of it just reflowing into
a row.

<table>
  <tr><td> &#9635; </td></tr>
  <tr><td> &#9636; </td></tr>
  <tr><td> &#9636; </td></tr>
  <tr><td> &#9672; </td></tr>
  <tr><td> &#9641; </td></tr>
</table>

Hit a breakpoint, then:

<table>
  <tr><td> &#9635; &#9636; &#9636; &#9636; </td></tr>
  <tr><td> &#9672; &#9672; &#9641; &#9641; </td></tr>
</table>

Then, hit another breakpoint and, e.g., margins form and continue
to grow w/ increased screen widths.


## Layout Shifter
Similar to the mostly fluid pattern, but breakpoints cause changes in the
cell left-to-right, top-to-bottom topology/connectivity:
that changes the neighbors.

<table>
  <tr><td> &#9635; </td></tr>
  <tr><td> &#9636; </td></tr>
  <tr><td> &#9672; </td></tr>
  <tr><td> &#9641; </td></tr>
</table>

Hit a breakpoint, then:
<table>
  <tr><td> &#9635; &#9636; &#9636; </td></tr>
  <tr><td> &#9635; &#9672; &#9641; </td></tr>
</table>

## Off Canvas
With this pattern, the designer takes advantage of "off screen" design.  That is,
the designer is ok with some cells not getting representation on the active
screen...  A bit harder to draw w/ just squares... :-p


