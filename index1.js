
// exercise 1
// function computeArea (width, height) {
//   let area = width * height;
//   console.log(`The area of a rectangle with a with a width of ${width} and a height of ${height} is ${area} square units`);
// }
// computeArea(2,3);


// //ex2
// const planetHasWater = function (planet) {
//   if (planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase() === 'Earth' || planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase() === 'Mars') {
//     return true
//   } else {
//     return false
//   }
// }
//   console.log(planetHasWater('MArs'));


//extra exercise
// const computerArea = (width, height) => {
//   let area = width * height;
//   console.log(`The area of a rectangle with a with a width of ${width} and a height of ${height} is ${area} square units`);
// }
//   console.log(computerArea(2,3));

// const planetHasWater = (planet) => {
//   if (planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase() === 'Earth' || planet.charAt(0).toUpperCase() + planet.slice(1).toLowerCase() === 'Mars') {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(planetHasWater('MArs'))

function addList(...arg) {
  let sum = 0;
  arg.forEach(function(item) {
    sum += item;
  })
  console.log(sum);
}
addList(1);
addList(1, 50, 1.23);
addList(7, -12);
