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

// Problem Solving 4
interface IuserInfo {
  id: number;
  name: string;
  age: number;
}
const getProperty = <Tkey extends keyof IuserInfo>(
  obj: IuserInfo,
  key: Tkey,
) => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };
const getName = getProperty(user, "name");
console.log(getName);

// Problem Solving 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (Book: Book) => {
  return { ...Book, isRead: true };
};
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const getBookInfo = toggleReadStatus(myBook);
console.log(getBookInfo);
