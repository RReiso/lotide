# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rreiso/lotide`

**Require it:**

`const _ = require('@rreiso/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of the array
* `tail(array)`: returns a new array without the first element
* `middle(array)`: returns a new array with  one or two middle element(s)
* `assertArraysEqual(array1, array2)`: asserts if two arrays are equal
* `assertEqual(a, b)`: asserts if two primitive values are equal
* `assertObjectsEqual(object1, object2)`: asserts if two objects are equal
* `countLetters(string)`: returns an object with letters and the number of their occurrences
* `countOnly(array, object)`: input object syntax: {array_el: true}; returns a new object with elements and their occurrences in the array.
* `eqArrays(array1, array2)`: returns true/false 
* `eqObjects(array1, array2)`: returns true/false
* `findKey(object, callback)`: returns a key that satisfies the statement in the callback
* `findKeyByValue(object, value)`: returns key if the corresponding value exists in the object
* `flatten(array)`: returns new one-dimentional array
* `letterPositions(string)`: returns an object with letters and their indexes
* `map(array, callback)`: returns a new array with elements that satisfies the statement in the callback
* `takeUntil(array, callback)`: returns new array with elements one by one until the first element that satisfies the statement in the callback
* `without(array1, array2)`: returns a new array with elements from array1 without the elements from the array2
