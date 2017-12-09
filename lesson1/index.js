// This Lesson is about what is exactly means when we use `${}` in javascript
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
