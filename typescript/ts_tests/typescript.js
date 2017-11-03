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