//1. 함수 선언

function log(message) {
    console.log(message);
}
console.log('hello');
console.log('1235234');
//원래는 javascript는 타입이 없기때문에 정해줘야함 

//2. parameters

function changeName(obj) {
    obj.name = ' coder ';
}
const kim = { name:' kim' };
changeName(kim);
console.log(kim);

//3. Default parameters (ES6 부터)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters( ES6 부터) 배열
function printAll(...args) {
    for (let i = 0; i<args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);              //2번째 방법
    }
    args.forEach((arg) => console.log(arg)); //3번째 방법
}
printAll('dream','coding','kim');

// 5. Local scope
let globalMessage = ' global';      //global 변수
function printMessage() {
    let message = 'hello';              //local 변수
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//6. Return 
function sum(a,b) {
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum:${sum(1,2)}`);

//7. Early reurn, early exit

// 별로 좋지않는 예
function upgradeUser(user) {
    if(user.point > 10) {
        // logic....
    }
}

//좋은 예      가독성이 더 좋음
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // logic ....
}

//1. Function expression
const print = function () {
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. callbak function 
function randomQuiz(answer, printYes, printNo) {
    if (answer ==='love you') {
        printYes();
    }else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function
const printNo = function print() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes,printNo);

//arrow function
// const simplePrint = function () {
//     console.log('simplePrint!');
// } 함수 요약가능

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a,b) => {
    return a * b;
};
// IIFE : Immediately Invoked Function Expression 함수 바로 호출
(function hello() {
    console.log('IIFE');
})();

// Quiz
function calculate(command, a, b) {   
    switch(command) {
        case 'add':
        return a + b;
        case 'substract':
        return a - b;
        case 'multiply':
        return a * b;
        case 'divide':
        return a/ b;
        case 'remainder':
        return a % b;
    }
}
console.log(calculate('divide', 4, 5));