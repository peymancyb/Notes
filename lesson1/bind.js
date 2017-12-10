// The bind() method creates a new function that, when called,
// has its this keyword set to the provided value, with a given sequence of
// arguments preceding any provided when the new function is called.
// syntax is:
// fun.bind(thisArg[, arg1[, arg2[, ...]]])
// *** The bind() function creates a new bound function (BF). ***
// A BF is an exotic function object (a term from ECMAScript 2015) that wraps
// the original function object. Calling a BF generally results in the execution
// of its wrapped function.
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null,37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]

console.log(list1);

console.log(list2);

console.log(list3);


// Note:
// So when you call it with onfilechange.bind(null, playsound),
// it creates and returns a new function, always receiving playsound as
// first argument and using global context (Because null is used as context),
// just like all regular functions use global context, when you call them without
// new operator and not using .call() or apply() with specific context.

var b = 5;

function myArgs(myNum){
  return myNum+b;
}

let call_Back = myArgs.bind(null,5);

call_Back();


//more info check the link below:
//https://stackoverflow.com/questions/27654149/function-prototype-bind-with-null-as-argument



//Note:constant - a read-only reference to a value.
//This does not mean the value is immutable, just that the variable identifier cannot be reassigned.


var obj = {
    foo: function() {
        return this;
    }
};

console.log(obj.foo() === obj); // true


var testClosures = (function(a , b){
  a = 10;
  b = 5;
  return console.log(a + b);
})(this);

// The Window Object. The window object is supported by all browsers.
// It represents the browser's window. All global JavaScript objects,
// functions, and variables automatically become members of the window object.


// next topic => closures , module pattern , hiden classes , hot functions
