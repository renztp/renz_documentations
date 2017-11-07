# __Typescript__ // Cheatsheet

## Installing typescript
- - -
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
- - -
**_What is typescript?_**
    Typescript is a syntatically typed javascript.

## Typescript basics
- - - 
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

console.log(someData1 + ' ' + someData1 + ' ' + someData1); // 25 true bazingga
```

## Variable declaration 
- - - 
the very basic or common in declaring variables are __global__ ones.
you can declare a variable outside any functions or classes and it will
be available in other functions.

```typescript
let a: number = 25;

function sayAge(age): number{
    return age;
}

console.log(sayAge(a)); // 25
```


We can also declare our variables __inside of a function__.
```typescript
function somehting() {
    message = "Hello world";
    return sayMessage() {
        console.log(message); // Hello world
    }
}
```


## Constant variables
- - - 
You can declare a constant variable in typescript. constant variables are
unchangeable values. 
```typescript
const num1 = 25;
console.log(num1) // 25
num1 = 30; // false
```

## Arrays
- - - 
```typescript
let anArray = [1, 2, 3, 4, 5]; // Without a type
let anArray: string[] = ["One", "Two", "Three", "Four"]; // Array with a string type
```


## Functions
- - -
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

In function arguments. you can put __Optional types__ in the
function arguments. it means that you can put a value on the 
arguments or _not_.
```typescript

function getAgeOrHeight(age?: number, height?: number) : number {
    if(height == NaN){
        return age;
    } else if(age == NaN) {
    } else {
        return height;
        return 404;
    }
}

console.log("Age: " + getAgeOrHeight()); // age: 404
```


## Interface
- - - 
Interface are a special type that you can edit/create yourself for
other values. for example you can create a type that has the same
properties of a car.
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

You can also use __optional types__ when declaring the
interface properties.
```typescript
interface carProp {
    unit: string,
    color: string,
    wheels?: number,
    volume()?: void;
}

let myCar: carProp = {
    unit: 'BMW',
    color: 'red'
    volume: () => {
        console.log("VRUUUM");
    }
}

console.log(myCar.unit); // BMW
```


## Classes
- - - 
Creating a class in typescript is a little similar
to javascript when declaring classes. classes behaves like a 
blueprint.
```typescript
class Dog {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }

    sayName(){
        return this.name;
    }
}

let Animal = new Dog("Marco");
console.log("This dog's name is " + Animal.sayName()); // This dog's name is Marco
```

You can declare a constructor by writing a __'constructor()'__.
constructors are automatically initiated when the class is called.
```typescript
class saySomething(){
    Message: string;
    constructor(theMessage){
        this.Message = theMessage;
    }

    sayTheMessage(){
        return this.Message;
    }
}

let message = new saySomething("Hello world");
console.log(message.sayTheMessage()); // Hello world
```
functions in a class are declared without the keyword __'function'__
```typescript
class Animal(){
    Message: string;
    constructor(theMessage){
        this.Message = theMessage;
    }

    sound(){
        return this.Message;
    }
}
```

## Arrow functions
- - - 
Arrow functions are anonymous functions that is more concise in syntax.
they are sometimes called 'fat arrow' because of the '=>' symbol in arrow functions.
arrow functions are more concise in writing function expressions.
```typescript
// With arguments
let Monster = (itHas: string, itSounds: string) => {
    console.log("It has " + itHas);
    console.log("and it sounds " + itSounds);
};

// Without arguments
let Monster = () => { console.log('Monster unknown') };
```


## Inheritance 
- - - 
Inheritance are an important part in OOP. you can __extend__ some
certain class to another class and use it's variables/functions.
```typescript
class Dog {
    constructor(action){
    
    }
}

class Cat extends Dog{
    constructor(action, name){
        super(action);
    }
}
```


## Super class
- - - 
Super class are a way of using the original variables
on the extended class.
```typescript
class Dog {
    constructor(name, action){
        this.name = name;
        this.action = action;
    }
}

class Cat extends Dog {
    constructor(name, action){
        this.action = super(action);
    }
}
```

## Getters and Setters
- - - 
Getters are very useful and important to OO Programming. the __get__ method
usually used for returning data, and __set__ method sets a value for constant or
special variables.
```typescript
class Animal {
    private _weight: number;

    get weight():number {
        return weight;
    }

    set weight(weight) {
        this._weight = weight;
    }
}
```

## Modules
- - - 
Modules are a very useful in OOP especially in other frameworks
such as Angular 4. Exporting a class means that you can spread that
class or any other type or function so that other .js file can use
or import it.
```typescript
<client.js>

function greet(subject){
    console.log("I wan't a " + subject);
}

export { request as theRequest };


<developer.js>
import { theRequest } from './client';
greet('Website');
```

You can also import all functions/classes in one line of code by
using the '*' in import.
```typescript
import * from './client';
```


## Generics
- - - 
Generics are a more versatile kind of like interface. you can declare a function
and declare the type when you start to use that function. the reason generics do this
is because when we reuse our code, we can change the data type depending on the code that
we are developing.
```typescript
function mamaya<T>(name: T) {
    console.log(name);
}

let person = new mamaya<string>("Hello world");
```
You can use generics on tuples as well.
```typescript
interface something<T>{
    item_1: T,
    item_2: T
}

```


## Enums
- - - 
We use enums to create a set of _contants_ more easily.
```typescript
enum controls {
    up = 1,
    down = 3,
    left = 2,
    right = 4
}

console.log(controls.down); // 3
```
When not defined and if it is numeric. it will _automatically increment_
the values of the set of data.
```typescript
enum other_controls {
    up = 1,
    down,
    left,
    right
}

console.log(other_controls.left); // 3
```
We can also strings in the set.
```typescript
enum students {
    student_one = 'Renz',
    student_two = 'Mary'
}
```
