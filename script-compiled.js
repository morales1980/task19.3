"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//ZADANIE PIERWSZE
var hello = "Hello";
var world = "World";
// czy powyższe nazwy zmiennych ze względu,że są staymi powinienem zapisać dużymi literami?
var zadaniePierwsze = hello + " " + world;

//ZADANIE DRUGIE
var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

//ZADANIE TRZECIE
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var sum = args.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  return sum / args.length;
};

//ZADANIE CZWARTE
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);

//ZADANIE PIĄTE
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    lastName = data[4];

//ZADANIA CODEWARS

//zadanie 1
/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/

var buildString = function buildString() {
  for (var _len2 = arguments.length, template = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    template[_key2] = arguments[_key2];
  }

  return "I like " + template.join(', ') + "!";
};

//zadanie 2
/*
Create a function ```shuffleIt```. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

Example:
```
shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]
```
*/

var shuffleIt = function shuffleIt(arr) {
  for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    rest[_key3 - 1] = arguments[_key3];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rest[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      element = _step.value;

      var _ref = [].concat(_toConsumableArray(element)),
          a = _ref[0],
          b = _ref[1];

      var _ref2 = [arr[a], arr[b]];
      arr[b] = _ref2[0];
      arr[a] = _ref2[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return arr;
};

//zadanie 3
/*
Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function
*/
var sum = function sum() {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return args.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
};

//zadanie 4
/*
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.
*/
var spread = function spread(functionName, args) {
  return functionName.apply(undefined, _toConsumableArray(args));
};
