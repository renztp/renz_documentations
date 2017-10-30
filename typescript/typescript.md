# TYPESCRIPT DOCUMENTATION

## Installing typescript
You can install __typescript__ in two different ways. 
* Via Npm 
* or through Visual studio plugin

#### Installing Typescript through NPM and running a typescript file

    1. Download and install node.js
    2. open cmd/terminal
    3. enter the following
```bash
    > npm install -g typescript
```
    4. create a new file with '.ts' extension
    5. open the terminal/cmd and type
```bash
    > tsc <nameofthefile>.ts
```


## Typescript
**_What is typescript?_**
    Typescript is a syntatically typed javascript.

## Typescript basics
### Data Types
**There are 3 data types**
- number
- string
- boolean

```typescript
var num: number = 25;
var aName: string = "renz";
var isAlive: boolean = true;
console.log(num + ' ' + name + ' ' + isAlive); // 25 renz true
```

You can declare a variable with **any** type of data in it.
```typescript
var someData1: any = 25;
var someData2: any = true;
var someData3: any = "bazingga";

console.log(someData1 + ' ' + someData1 + ' ' +someData1); // 25 true bazingga
```

#### Constant variables
You can declare a constant variable in typescript.
```typescript
const num1 = 25;
console.log(num1) // 25
num1 = 30; // false
```

### Functions
You can declare a function that returns nothing (void)

```typescript
function theresNothingHere(): void {
    console.log("Hodor");
}
console.log(theresNothingHere()); // Hodor 
```

You can also declare functions that returns a certain type of data
```typescript
function returnsNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

function returnFullName(fname: string, lname: string): string {
    return fname + ' ' + lname;
}
console.log(returnsNumbers(25 , 25)); // 50 
console.log(returnFullName('Renz', 'Pulvira')); // Renz Pulvira
``` 


## Interfaces

```typescript
/*
*
*   When you wan't to create a complex data type
*   Using Interface is a good way to create a variable
*   with a property inside of it.
*
*/


// This variable has certain properties
interface dog { 
    sound: string;
    theName: string;
    age: number;
}

// Defining the values of properties with the 'dog' interface
let dogProp:dog = { 
    sound: "Bark!",
    theName: "Marco",
    age: 4
};

// outputting the declared variables
console.log(dogProp.sound);
console.log(dogProp.theName);
console.log(dogProp.age);
```




