'use strict'
//class 는 완성된 것이라 하면 
//object 는 클래스의 instance

//1. Class declarations
class Personm {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    speak() {
        console.log(`$(this.name): hello!`);
    }
}

const kim = new Personm('kim', 25);
console.log(kim.name);
console.log(kim.age);
kim.speak;


//2. Getter anmd setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value <0 ) {
        //}

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job',-1);
console.log(user1.age);

//3.Fields (public, private)   최근에 추가 되어서 아직 잘 안씀

class Experiment {
    publicField =2;
    #privateField = 0;     // 이게 최근나옴
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2 
console.log(experiment.privateField); // undefined

//4. Static properties and methods   최근에 추가 되어서 아직 잘 안씀
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance   -계승 , 상속, 오버라이딩

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('삼각형')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking : instanceof
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t