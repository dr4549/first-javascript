'use strict'

//1. 배열 선언 Declaration
const arr1 = new Array();
console.log(arr1);
const arr2 = [1, 2];
console.log(arr2);

//2. Index를 통해 어떻게 배열 접근 하는지
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //첫번쨰  출력
console.log(fruits[fruits.length -1]);// 마지막 출력

//3. 배열 전체 출력
// 방법 1 for
for(let i = 0 ; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 방법 2 for of
for( let fruit of fruits) {
    console.log(fruit);
}

// 방법 3 for each
fruits.forEach((fruit, index) => console.log(fruit,index));

//4. 배열 뺴고 복사
//제일 뒤에부터 넣는 push
fruits.push('딸기','복숭아');
console.log(fruits);
//제일 뒤에부터 빼는 pop
fruits.pop();
console.log(fruits);

//앞에서부터 넣는 unshift
fruits.unshift('딸기','레몬');
console.log(fruits);
//앞에서부터 뺴는 shift
fruits.shift();
console.log(fruits);

//unshift, shift 는 push와 pop 보다는 엄청 느림
//앞에서 데이터를 넣을라면 모든걸 오른쪽에 옮겼다가 새로운 데이터를 넣을수 있기떄문에 느림

//중간에서 삭제하기 splice
fruits.push('딸기','복숭아','레몬');
console.log(fruits);
fruits.splice(1,1) //1부터 n까지 지우기  현재 1부터 1 인덱스 1만지움
console.log(fruits);
fruits.splice(1, 1,'사과','수박'); //지운자리에 사과 수박 넣기
console.log(fruits);

//배열 2가지를 묶어서 만들 수있음  
//배열 합치기
const fruits2 =['수박','딸기'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.index 값 찾기

console.log(fruits);
//indexOf
console.log(fruits.indexOf('딸기'));
console.log(fruits.indexOf('레몬'));
// includes
console.log(fruits.includes('수박'));

//lastIndexOf
console.log(fruits);
console.log(fruits.lastIndexOf('레몬'));
