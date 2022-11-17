

//1. 문자열 연결
console.log('my' + ' cat');
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators  연산자 사용
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3); // exponentiation  2의 3승


console.log(1-1);

//3. 증감연산자 사용가능
let counter = 2;
const preIncrement = ++counter;
console.log(`preInvrement: ${preIncrement}, counter: ${counter}`);

//4. 할당 가능 

let x = 3 ;
let y = 7 ;
x += y;
x -= y;
x *= y;
x /= y;

//5. comparison(비교) operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);


//6. Logical operator: || (or) , && (and) , ! (not)

const value1= true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`); 
console.log(`and: ${value1 && value2 && check()}`);
// 함수는 마지못해 나머지로 호출 당하는게 효율적인 코드 작성이다.
//그래서 and 는 nullObject가 null이면 false가 되기 떄문에 null아닐때만 object의 나머지를 받아온다
// if(nullableObject != null) {
//     nullableObject.something;
// } 그래서 이런식으로 코드씀
function check() {
    for(let i = 0; i<10; i++) {
        console.log('ㅎ');
    }
    return true;
}
//! (not)
console.log(!value1);

//7. Equaluty 균등
const stringFive = '5';
const numberFive = 5;

// == loose equality
console.log(stringFive == numberFive);
console.log(stringFive!= numberFive);

// === strict equality
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//코딩할때 strict 이 더 좋음

const kim1 = {name: 'kim' };
const kim2 = {name: 'kim' };
const kim3 = kim1;
console.log(kim1 == kim2); //레퍼런스가 다름
console.log(kim1 === kim2); // 레퍼런스 값이 다름
console.log(kim1 === kim3); // 레퍼런스 같고 값도 같음

console.log(0 == false); //t
console.log(0 === false); // f  타입이 다르기 떄문에 
console.log('' == false); // t
console.log('' === false); // f 타입이 다르기 떄문 
console.log(null == undefined); // t
console.log(null === undefined); // f 타입이 다르기 떄문 

//8. Conditional operators: if 
//if , else if , else
const name1 = 'df';
if (name1 ==='kim') {
    console.log('welcome, kim!');
} else if (name1 ==='coder') {
    console.log('you are amazing coder');
} else {
    console.log('unkwon');
}

// 9.Teranary operator : ?  - 조건문
// condition ? value1 : value2;
console.log(name1 === 'kim' ? 'yes' : 'no');

//10. Switch statement 스위치문

//11. Loops (while 문 , do while 문 , for 문, 2중 for문 )
//2중 for문은 빅오표기법 O(n의2승) 이므로 cpu에 좋지가 않다