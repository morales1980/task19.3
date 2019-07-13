//ZADANIE PIERWSZE
const hello = "Hello";
const world = "World";
// czy powyższe nazwy zmiennych ze względu,że są staymi powinienem zapisać dużymi literami?
const zadaniePierwsze = `${hello} ${world}`;

//ZADANIE DRUGIE
const multiply =  (x = 1, y = 1 ) => { return x * y };

//ZADANIE TRZECIE
const average = (...args) => {
  const sum = args.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return sum / args.length;
};

//ZADANIE CZWARTE
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//ZADANIE PIĄTE
const data = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = data;

//ZADANIA CODEWARS

//zadanie 1
/*
Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
*/
const buildString = (...template) => `I like ${template.join(', ')}!`;

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

const shuffleIt = (arr, ...rest) => {
  for(element of rest) {
    const [a, b] = [...element];
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
  return arr;
}

//zadanie 3
/*
Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function
*/
const sum = (...args) => {
  return args.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
};

//zadanie 4
/*
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.
*/
const spread = (functionName, args) => {return functionName(...args)};
