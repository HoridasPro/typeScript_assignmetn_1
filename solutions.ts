// Problem Solving 1
const filterEvenNumbers = (arr: number[]) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  return evenNumbers;
};
const filteringNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(filteringNumbers);
