// JSON 
// JavaScript Object Notation

//https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10&ab_channel=%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9
// => 유용한 json 사이트 참고하기


// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
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

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit , ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit , (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

console.clear();

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());