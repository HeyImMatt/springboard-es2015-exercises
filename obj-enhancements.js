//same keys and values
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName
  }
}

//computed property names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

const favoriteNumber = 42;
const instructor = {
  firstName: 'Colt',
}
instructor[favoriteNumber] = 'That is my favorite!';

//Object Methods
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
const instructor = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  }
}

//createAnimail function
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise
    }
  }
}