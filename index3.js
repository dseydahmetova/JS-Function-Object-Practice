// i want you to write me a function that takes an array as an argument and return the total of all numbers in array

function sumArray(arr) {
    let sum = 0;
  arr.forEach(function(item) {
   sum += item;   
  })
 console.log(sum)
}

console.log("sum:")
sumArray([8, 2, 3, -9])
console.log("--------------------\n")



// i want you to write me a function that takes an array as an argument and return the average of all numbers

function avgArray(arr) {
  let sum = 0;
  arr.forEach(function(item) {
    sum += item;
    avg = sum / arr.length
  })
   console.log(avg)
}
console.log("avg:")
avgArray([7, 20, -10, -5])
console.log("--------------------\n")

// i want you to write a loop that loop through numbers from 1 to 20, if  number is divided by 3 print 'fizz', if it is devided by 5 print 'buzz'
//if it is divided by both 3 and 5 print 'fizzbuzz'

function fizzBuzz(item) {
    if(item % 3 === 0 && item % 5 !== 0){
    console.log("fizz");
    }else if (item % 5 === 0 &&  item %3 !== 0) {
      console.log("buzz");
    }else if(item % 3 === 0 && item % 5 === 0){
      console.log("fizzbuzz");
    }else{
      console.log(item);
    }
}

console.log("FizzBuzz:")

for(let i = 1; i <= 20; i++){
  fizzBuzz(i);
}
console.log("--------------------\n")

  

// i want you to write me a function that takes an array as an argument and return the total of only positive numbers

function sumPositiveArray(arr) {
  let sum = 0;
  arr.forEach(function(item) {
    if(item >= 0){
    sum += item;
    }
  })
   console.log(sum)
}
console.log("sum of positive:")
sumPositiveArray([17, 2, -10, -5])
console.log("--------------------\n")

//i want you to write me a a function that takes an array and tell me if is a duplicate in the array for example [1,2,3,4] good but [ 8,6,7,8] return warning there is a duplicate

function duplicateArray(arr) {
  let count = 0;
  arr.forEach(function(item1, index1) {
    
   arr.forEach(function(item2, index2) { 
     
    if(index1 < index2   &&   item1 === item2){
      count++;
    } 
     
   })
    
  })
  
  if(count > 0){
    console.log("there is " + count +" duplicate(s) in array");
  } else {
    console.log("Array is good, no duplicates");
  }
}

console.log("Check for duplicates:")
duplicateArray([17, 2, -17, -2] )
console.log("--------------------\n")
