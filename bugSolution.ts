function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user[0]));// Accessing the first element of the array

//Alternative solution: Modify the function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}
console.log(greeterArray(user));