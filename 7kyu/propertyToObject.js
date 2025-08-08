//DESCRIPTION
//Write a function that adds a named property to an object. It must be possible to set the property to a new value.
// If the property already exists on the object, and error should be thrown.


//TESTS
//addProperty(obj, "name", "Palle");
//   });
//   it("Should set the value of the property", function() {
//     Test.expect(obj.name === "Palle");
//   });
//   it("Should allow setting the new property to another value", function() {
//     obj.name = "Dylan";
//     Test.expect(obj.name === "Dylan");
//   });
//   it("Should throw an error if the property already exists", function() {
//     Test.expectError("Did not throw expected error", function() {
//       addProperty(obj, "name", "Palle");

let human = {}

//SOLUTION
function addProperty(obj, prop, value) {
    let object = obj;
  if (prop in obj){
      throw new Error("Property already exists");
  } else {
      object[prop] = value;
  }
  return object;
}

console.log(addProperty(human, "name", "Palle"));
human.name = "Dylan";
console.log(human)
console.log(addProperty(human, "name", "Palle"));