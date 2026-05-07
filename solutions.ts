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
const checkType = (input: StringOrNumber): string => {
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
const toggleReadStatus = (book: Book) => {
  return { ...book, isRead: true };
};
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const getBookInfo = toggleReadStatus(myBook);
console.log(getBookInfo);

// Prbolem Solving 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
const stuInfo = student.getDetails();
console.log(stuInfo);

// Problem Solving 7
const getIntersection = (arr1: number[], arr2: number[]) => {
  return arr1.filter((num) => arr2.includes(num));
};
const commonArr = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(commonArr);
