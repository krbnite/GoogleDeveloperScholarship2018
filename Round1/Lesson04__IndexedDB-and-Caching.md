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

