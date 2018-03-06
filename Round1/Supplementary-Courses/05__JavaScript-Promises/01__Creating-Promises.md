

* Jake Archibald: [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/primers/promises)

Some terminology:
> A promise can be:
> * fulfilled - The action relating to the promise succeeded
> * rejected - The action relating to the promise failed
> * pending - Hasn't fulfilled or rejected yet
> * settled - Has fulfilled or rejected

* technically, `.then()` can take up to two function arguments: `promise.then(resolve, reject)`
* however, a slightly more readable (and better way) is to chain these like so: `promise.then(resolve).then(reject)`
  - in the 2-argument case, either resolve() or reject() will be called
  - in the chaining case, both will be called, which is useful for longer chains
* the chaining behavior is similar to try/catch statements, so to make the chain more readable, there is a `.catch()` method
  - `.catch()` is a synonym for `.then()`
  - it helps make try/catch chaining more readable
  - `promises.then(resolve).catch(reject)`
* in short, promises allow for a non-blocking/async version of try/catch statements

JavaScript has [iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators)
that are nearly identical to that in Python (mod the syntax).

