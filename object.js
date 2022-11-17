//1. Literals and properties
// Object = ( key : value);  
const obj1 = {};    
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const kim = { name: 'kim', age: 4 };
print(kim);
// 따로 추가 삭제도 가능 
kim.hasJob= true;
console.log(kim.hasJob);

delete kim.hasJob;
console.log(kim.hasJob);

//2. computed properties
console.log(kim.name);
console.log(kim['name']);
kim['hasJob'] = true;
console.log(kim.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(kim, 'name');
printValue(kim, 'age');

//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };   
const person3 = { name: 'dave', age: 4 };// name age 반복 생략
const person4 = new Person('kim', 25);
console.log(person4);

// 4. Consturctor Function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    // return this;
}

//5. in operator ( key in obj) 확인 방법
console.log('name' in kim);
console.log('age' in kim);
console.log('random' in kim);
console.log(kim.random);

//6. for..in vs for..of

// for ( key in obj)

for(key in kim) {
    console.log(key);
}

// for( value of iterable)
const array = [1, 2, 3, 4, 5];
// for(let i = 0; i <array.length; i++){
//     console.log(array[i]);
// }                     이렇게 쓸 바에
// 이렇게씀
for(value of array) {
    console.log(value);
}

//7. Fun cloning   (assign)
const user = { name: 'kim', age: 20};
const user2 = user;
user2.name ='coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

console.log(user3);

//assign
const user4 = Object.assign({}, user);
console.log(user4);