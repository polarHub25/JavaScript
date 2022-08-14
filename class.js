'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JaaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance
 
// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie' , 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 변수에 _를 붙혔지만, 외부에서 age로 호출할 수 있는 것은 내부적인 get과 set이므로 가능!
    get age(){
        return this._age;
    }
    set age(value){
        // if(value < 0){
        //     throw Error(`age can bot be negative`);
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'job' , -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Ref
class Experiment{
    publicField = 2;
    #privateField = 0; // # 클래스 외부에서는 이 값을 읽고변경이 불가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // #이 붙어 있어서 외부에서는 호출안됨.

// 4. Static properties and methods
// Too soon
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // static이 없으면 이렇게 가능
console.log(Article.publisher);
Article.printPublisher();
// object에 상관없이 공통적으로 클래스에서 쓸수있는경우에 static 사용

// 5. Inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape {
    draw(){
        super.draw(); // 상속
        console.log('▲');
    }
    getArea(){ // 오버라이딩
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


 // 6. Clss checking: instanceOf : 왼쪽 오브젝트인가 오른쪽 클래스를 이용해서 만들어진건지 불린값으로 체크해주는 함수
 console.log(rectangle instanceof Rectangle); // true
 console.log(triangle instanceof Rectangle); // false
 console.log(triangle instanceof Triangle); // true
 console.log(triangle instanceof Shape); //true
 console.log(triangle instanceof Object); // true

