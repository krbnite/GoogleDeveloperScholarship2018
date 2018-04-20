There are 4 fairly standard design patterns:
* mostly fluid
* layout shifter
* column drop
* off canvas

To see a bunch of design patterns in action:
* https://responsivedesign.is/patterns/
* https://bradfrost.github.io/this-is-responsive/patterns.html


## Column Drop
On a small screen, we start with a vertical stack:

<table>
  <tr><td> &#9635; </td></tr>
  <tr><td> &#9636; </td></tr>
  <tr><td> &#9637; </td></tr>
</table>

Then as you widen the screen, the div elements reflow:

<table>
  <tr><td> &#9635; &#9636; </td></tr>
  <tr><td> &#9637; </td></tr>
</table>

And finally a row:
<table>
  <tr><td> &#9635; &#9636; &#9637; </td></tr>
</table>


## Mostly Fluid
