//==================================Note 1===========================================

// This Note is about what is exactly means when we use `${}` in javascript
// when we use `${}` in javascript means that we can include all javascript
// expressions such as variables , functions ...
// lets consider following example:

const person = (first_name, surname , age)=>`${first_name} ${surname} ${age}`;
const callPerson = person("Mahta","Rezayazdi","22");
console.log(callPerson);

// so what we did was just defining an arrow function which takes 3 parameters
// and we use those 3 javascript variables inside of `${}`.
// now you might think that is possible to use following way to present variables

const personSimple = (first_name, surname , age) => first_name + surname + age ;
const callPersonSimple = personSimple("peyman","ghazvini","20");
console.log(callPersonSimple);
console.log(typeof callPersonSimple +" "+ typeof callPerson);

// well actually its possible to use this way to peresent variables, but with the
// first method you can pass any JavaScript expressions , while in the last method
// you can only pass variables.


//==================================Note 2===========================================

// This Note is about explaining what exactly ... do in JavaScript.
// 3 dots(...) lets you to copy the object or an array to use the copy of the object or
// an array rather than modifying the orginal object.
// basically ... is doing something like slice() or assign() functions in JavaScript.
// Lets conside following example:

const aObject = [1, 2, 3, 4];
const copeid = [...aObject];
console.log(copeid);
// now we have the copy of the array and we can modify the new array
