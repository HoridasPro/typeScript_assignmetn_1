<!-- Blog-1 -->

# Title

Why is `any` called a "type safety hole" and Why is `unknown` safer?

# Introduction

The typeScript `any` and `unknown` are userd handle uncertain data types.Although, they differently.The `any`type removes type safety, but `unknown` keeps the code safer by the forcing type checks before use data types.

# Body

# Why is `any` Called a "Type Safety Hole"?

The `any` type stop typeScript type checking system and accept any type.Because of this, developers can use any type of value without getting compile-time errors.

# For Example

```ts
let value: any = "Hello";

value = 10;
value.toUpperCase();
```

In this example, the `value` becomes a number, but TypeScript still allows `toUpperCase()`. This may create runtime errors. That is why `any` is called a "Type Safety Hole".

# Why is `unknown` Safer?

The `unknown` type is safer because typeScript checking type before using the value.

For Example

```ts
const value: unknown = "Hi";

if (typeof value === "string") {
  return value.toUpperCase();
}
```

In this exmple, the type first checked before using the string methods.That's why the code safer and the reduces bugs.

# What is type narrowing?

Type narrowing is the process of identifying a variables exact type using conditions like `typeof` and `instanceof`.

For Example

```ts
function printValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else (typeof value === "number"){
    return value.toFixed(5)
  }
}
```

In this exmple,the `string` is a first condition narrows and the `number` is a second condition narrows.
These allow typeScript to safely use type specific methods.

# Conclusion

The `any` is removes type but it disables type checking, while `unknown` is safer because it requires validation before use. The type narrowing helps typescritp understand specific types and improves code safety.

<!-- Blog-2 -->

# Title

How Pick and Omit Prevent Code Duplication in TypeScript?

# Introduction

In TypeScript, `Pick` and `Omit` are utility types that help us create smaller, specialized versions of a large (master) interface. They reduce code duplication and follow the DRY principle.

# Body

# What is `Pick`?

`Pick` allows us to select specific properties from a master interface to create a new type.

# Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type UserBasic = Pick<User, "id" | "name">;
```

<!-- Blog-3 -->

# Title

How Generics Help Build Reusable and Type-Safe Code in TypeScript?

# Introduction

Generics are one of the most powerful features in TypeScript. They help developers create reusable components and functions while keeping type safety.

# Body

# What are Generics?

Generics allow a function or class to work with different data types without losing type information.

# For Example

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Here, `T` is a generic type parameter.

# Using Generics with Different Types

The same function can work with strings, numbers, or arrays.

# Example

```ts
const numberValue = getValue<number>(10);

const stringValue = getValue<string>("Hello");
```

This makes the function reusable for multiple data types.

# Why are Generics Important?

Generics helps for the developers-

1. Reuse code
2. Maintain strict type safety
3. Reduce duplication
4. Improve code readability

Without generics, developers would need separate functions for each type.

# Example

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

Now the `data` type can change depending on the situation.

# Conclusion

Generics make TypeScript code reusable, flexible, and type-safe. They allow developers to build scalable applications without sacrificing type checking.

<!-- Blog-4 -->

# Title

How the Four Pillars of OOP Help Manage Logic and Reduce Complexity in TypeScript

# Introduction

Object-Oriented Programming (OOP) is a programming style that helps developers organize code in a structured way. In large TypeScript projects, OOP makes code easier to manage, reuse, and scale. The four main pillars—Inheritance, Polymorphism, Abstraction, and Encapsulation—play a key role in reducing complexity.

# Inheritance

Inheritance allows one class to reuse properties and methods from another class. This reduces repeated code and improves reusability.

# For Example

```ts
class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string,
  ) {
    super(name, age);
  }
}
```

The `Person` class defines common properties like `name` and `age`.The `Student` class extends `Person`, reuses those properties, and adds an extra property called `grade`.
