// Refactor
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => args.reduce((acc, val) => acc < val ? acc : acc = val);

console.log(findMin(1,4,12,-3))