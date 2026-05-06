// Problem Solving 1
const filterEvenNumbers = (arr: number[]) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
};
const filteringNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(filteringNumbers);

// Problem Solving 2
const reverseString = (str: string) => {
  const reverse = str.split("").reverse().join("");
  return reverse;
};
const reverseStr = reverseString("typescript");
console.log(reverseStr);

// Problem Solving 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber) => {
  // Check Guard
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};
const checkTypes = checkType("Hello");
console.log(checkTypes);
