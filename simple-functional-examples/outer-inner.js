// # magic names and fat arrows
// The magic names this and arguments have a different behaviour when you invoke a function that was defined with a fat arrow: Instead of being bound when the function is invoked, the fat arrow function always acquires the bindings for this and arguments from its enclosing scope, just like any other binding.

// For example, when this expression’s inner function is defined with function, arguments[0] refers to its only argument, "inner":
// The strength of JavaScript is that you can do anything. The weakness is that you will.

// (function () {
//     return (function () { return arguments[0]; })('inner');
//   })('outer')
//     //=> "inner"

// But if we use a fat arrow, arguments will be defined in the outer environment, the one defined with function. And thus arguments[0] will refer to "outer", not to "inner":

// (function () {
//     return (() => arguments[0])('inner');
//   })('outer')
//     //=> "outer"


const row = function () {
    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return data.map((column) => column * arguments[0])
}
    
console.log(row(3))
console.log(row(4))

//=> [3,6,9,12,15,18,21,24,27,30,33,36