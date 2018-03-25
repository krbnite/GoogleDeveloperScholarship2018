Using IDB, you can create a bunch of different databases, each of which hold any number of
object stores... But typically, you only create one IDB database per app.

An IDB database contains object stores, which are the IDB-equivalent of tables in a 
relational DB. An object store contains can contain mutliple and varied values, including
JS objects, strings, numbers, dates, and arrays.  

## Keys in an Object Store
Values in an object store have a key, which can be and out-of-line or in-line key.  

Out-of-line keys are like Python dictionaries: the "key" is the key.

```
{key1: val1, key2: val2, ...}
```

In-line keys use unique key values as a key (e.g., the name value below):
```
{name: 'name1', age: age1}
{name: 'name2', age: age2}
{name: 'name3', age: age3}
```

Out-of-line keys are useful when you want to access different types of things in
an object store.  This is a true "collection of boxes with different shit in them" type of
model.

In-line keys are useful when you want an object store to contain many similar objects, e.g.,
an object for each app user.  The objects may vary, but all objects have the in-line key (e.g.,
the app users user ID).

## IDB is Transactional
You can use transactions in IDB, where you issue a sequence of queries/executions and if one fails,
the entire transaction is canceled.

## IDB Supports Indexes
...bla

# IDB is great, but horrible 
We want to benefit from all that is great about IDB, but not actually use IDB directly -- b/c its
API is horrible and it was a bit of a bandaid created in a time before JS Promises.  Instead, we will
use the IDB wrapper API called "IDB Promised."

## IDB Promised
Anything you learn about IDB Promised can be translated quite directly and easily to IDB, however
you will have a hard time actually using IDB... Point: forget about IDB as its own thing and rely on
IDB Promised.

IDB Promised wraps of IDB, making the API more intuitive, functional, and respectful of ES6 (e.g.,
it works with and returns Promises, which IDB does not do).

* IDB Promised: https://github.com/jakearchibald/idb

-------------------------------------

In app/public/js/idb-test:

```js
import idb from 'idb';

const version = 1;
var dbPromise = idb.open('test-db', version, function(upgradeDb) {
  // * this fcn will upgrade the DB if version on page is less than 
  //   the version specified in arguments
  // * the upgradeDB parameter is how we access the DB; this object is
  //   very similar to the original IndexedDB API
  let keyValStore = upgradeDb.createObjectStore('keyval');
  keyValStore.put('world', 'hello');
});
```

An object store has methods:
* put
* add
* delete
* clear
* get
* getAll
* getAllKeys
* count

Gotchya: The `.put()` method takes arguments (value, key) instead of (key, value).

"Most of the IDB API is stupid, but for sensible reasons."

Above, we created a database and put an objectStore inside it.  To access this database,
we must create a transaction:

```js
dbPromise.then(function(db) {
  // Tell transaction which objectStores we will be working with:
  //   -- keyval: we specify the objectStore we created above, named 'keyval'
  var tx = db.transaction('keyval'); 
  
  // the transaction object now contains the objectStores we specified
  //   -- since we only specified one objectStore, this next step might seem pointless,
  //      but more generally one can specify more than on objectStore in the transaction
  var keyValStore = tx.objectStore('keyval');
  
  // Here, we return the data we are interested in
  //   -- above, we only created one piece of data in this objectStore:
  //      the (key,val) pair ('hello', 'world')
  return keyValStore.get('hello');
}).then(function(val) {
  console.log('The value of "hello" is:', val)
});
```

Ok, so we've seen how to create a database in IndexedDB using the IDB Promised API. Then, we
saw how to add an objectStore to that DB and how to read objectStore data from that DB.  Let's
now see how to add more data to the objectStore.

```js
dbPromise.then(function(db) {
  // here, we specify which objectStore(s) we want to work with in the DB,
  //   and also specify permissions ('readwrite')
  var tx = db.transaction('keyval', 'readwrite');
  
  // here, we specify which objectStore in the transaction we want to work with
  var keyValStore = tx.objectStore('keyval');
  
  // here, we put more data into the 'keyval' ojectStore
  //   -- remember (key,val) pairs are read/written as (val,key)
  keyValStore.put('bar', 'foo');
  
  // tx.complete is a Promise that fulfills if/when the transaction completes
  //   and rejects if the transaction fails
  return tx.complete;
}).then(function() {
  console.log('Added foo:bar to keyval objectStore');
});
```


## New ObjectStore: Objects, all of the same kind
For instance: people objects.

The only way to add a new object store is to upgrade the DB, and to upgrade the DB you must
specify a new version in the function call:

```js
import idb from 'idb';

var dbPromise = idb.open('test-db', 2, function(updgradeDB) {
  var keyValStore = upgradeDb.createObjectStore('keyval');
  keyValStore.put('world', 'hello');
  upgradeDb.createObjectStore('people'), { keyPath: 'name' }); // objects keys are name values
});
```

However, the above code will throw an error... The DB already has keyValStore: this is not an upgrade! So,
we actually need to use a case statement to add a new upgrade/version.  This is so people who do not have 
the earlier version can build up to the latest version (important: do not use "break" statements so this
flow happens correctly)... 

```js
import idb from 'idb';

var dbPromise = idb.open('test-db', 2, function(updgradeDB) {
  switch(upgradeDb.oldVersion) {
    case 0: 
      var keyValStore = upgradeDb.createObjectStore('keyval');
      keyValStore.put('world', 'hello');
      // do not break here!
    case 1:
      upgradeDb.createObjectStore('people'), { keyPath: 'name' }); // objects keys are name values
      // do not break here!
});
```
