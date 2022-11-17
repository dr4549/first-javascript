// 1. 배열을 스트링으로 구분
{
    const fruits = ['apple','banana','orange'];
    const result = fruits.join(' and ');
    console.log(result);
}
// 2. 주어진 스트링에 배열로 만들기
{
    const fruits = '사과,키위,바나나,체리'
    const result = fruits.split(',', 2);
    console.log(result);
}
// 3. 주어진 배열으 순서를 거꾸로
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 리버스 됐기 때문에 5, 4, 3, 2, 1 으로 나옴
}

// 4. 주어진 배열에서 몇개 없애고 나머지 배열 출력
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 1, 2 없애고 출력
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];



// 5. 90점인 학생 찾기  find
{
    //const result = students.find((student) => student.score ===90);
const result = students.find(function(student, index){
    return student.score === 90;
  });
  console.log(result);
}

//6.수업의 등록한 (true) 인 학생들만 출력 filter
{
    const result = students.filter((student) =>student.enrolled);
    console.log(result);
}

// 7. 학생들의 점수만 출력 map
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// 8.점수가 50점 미만 학생이 있는지 확인 some
{
    const result = students.some((student) => student.score < 50); // some = 한명이라도 있으면 true
    console.log(result);

    const result2 = students.every((student) => student.score < 50); // every =모든 학생이 이거면 false
    console.log(result2);
}
// 9.학생들의 점수 평균 reduce = 배열을 누적시킬떄 사용
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result/ students.length);
}

//10. 학생들의 모든 점수를 스트링으로 변환
{
    const result = students
    .map((student)=> student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}

// 학생들의 점수를 낮은점수부터 출력
{
    const result = students
    .map(student => student.score)
    .sort((a, b)=> a - b)
    .join();
    console.log(result);
}
const arr = [2, 1, 3, 10];

arr.map(arr=> arr.length).sort();
document.writeln(arr + '<br>'); // [1, 10, 2, 3]