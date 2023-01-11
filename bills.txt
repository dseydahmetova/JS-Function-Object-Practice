// Bonus ex Write a loop that prints out how many bills customer received in return in as large denominations as possible

let bill_100 = 100;
let bill_50 = 50;
let bill_20 = 20;
let bill_10 = 10;
let bill_5 = 5;
let bill_1 = 1;

let bill_100_count = 0;
let bill_50_count = 0;
let bill_20_count = 0;
let bill_10_count = 0;
let bill_5_count = 0;
let bill_1_count = 0;


let price = 27.83;
let payment = 100;
let totalBillCount = 0;
let change = Math.floor(payment - price);
console.log(`Your change is $${change}:`);


while(change != 0){
  if (change >= 100) {
    bill_100_count = Math.floor(change / bill_100);    // How many $100?
    change = change % bill_100;
  }
  else if (change >= 50) {
    bill_50_count = Math.floor(change / bill_50);    // How many $50 ?
    change = change % bill_50;
  }
  else if (change >= 20) {
    bill_20_count = Math.floor(change / bill_20);    // How many $20?
    change = change % bill_20;
  }
  else if (change >= 10) {
    bill_10_count = Math.floor(change / bill_10);     // How many $10?
    change = change % bill_10;
  }
  else if (change >= 5) {
    bill_5_count = Math.floor(change / bill_5);     // How many $5?
    change = change % bill_5;
  }
  else {
    bill_1_count = Math.floor(change / bill_1);    // How many $1?
    change = change % bill_1;
  }
} 

totalBillCount += bill_100_count + bill_50_count + bill_20_count + bill_10_count + bill_5_count + bill_1_count;

console.log(` ${bill_100_count} x $100\n ${bill_50_count} x $50\n ${bill_20_count} x $20\n ${bill_10_count} x $10\n ${bill_5_count} x $5\n ${bill_1_count} x $1\n `);
console.log(`You have ${totalBillCount} bills`);


// Bonus ex Write a loop that prints out how many quarters he got in return


// let quarter = 0.25;     // Each quarter consists of 0.25 dollars.
// let quarters = 0;



// let price = 9;
// let payment = 10;
// let change = Math.floor(payment - price);
// console.log(`Your change is $${change} :`);

// do {
//   if (change >= quarter) {
//     quarters = Math.floor(change / quarter); // How many quarters?
//     change = change % quarter;
//   }
// }
// while (change != 0)

// console.log(` ${quarters} quarters`);

