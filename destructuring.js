//object destructuring 1
//8
//1846

//object destructuring 2
//{ yearNeptuneDiscovered: 1846,
//  yearMarsDiscovered: 1659
//}

//object destructuring 3
// `Your name is Alejandro and you like purple`
// `Your name is Melissa and you like green`
// `Your name is undefined and you like green`

//array destructuring 1
// Maya
// Marisa
// Chi

//array destructuring 2
// Raindrops on roses
// whisekers on kittens
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//array destructuring 3
// [10, 30, 20]

//es2015 obj destructuring
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
const { a, b } = obj.numbers;

//es2015 one-line array swap 
const arr = [1, 2];
const temp = arr[0];
[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
