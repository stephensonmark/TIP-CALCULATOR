const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// Prompt the user to input bills separated by commas
let inputBills = prompt("Enter the bill amounts, separated by commas:");
const bills = inputBills.split(",").map(Number); // Convert the input into an array of numbers
//Hard Coded Bills Array
// const bills = [52, 320, 166, 240, 94, 154, 92, 456, 96, 142];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.round((sum / arr.length) * 100) / 100;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
