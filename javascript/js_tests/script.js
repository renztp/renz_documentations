var obj = {
    age: null,
    set herAge(age){
        this.age = age; 
    }
}

obj.herAge = 25;
console.log(obj.age); // 25



