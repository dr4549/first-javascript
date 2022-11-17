//1. Object to JSON
//string 파일을 어떻게 사용할 수있는지 stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']); // json은 싱글쿼테로 써도 더블 퀘테로 나옴
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};
json =JSON.stringify(rabbit);
console.log(json);

json =JSON.stringify(rabbit, ["name","color","size"]); //원하는 목록 만들기 가능 
console.log(json);

josn = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});

//2. JSON to Object
//string 으로 만든 json을 오브젝트로 변환 parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj= JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// json Diff
// json Beautifier
// json Parser 
// json Validator 
// json 에 문제 생길때 확인 할 수 있는 웹사이트 