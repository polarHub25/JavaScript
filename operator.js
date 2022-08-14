// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 


.......
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\t book");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2; 
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6; 
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less thann or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or) , && (and) , ! (not)
const value1 = false;
const value2 = 4 < 2; 

// || (or) , find the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // 이럴경우에는 함수는 마지막에 배치하기

// && (and) , find the first falsy value
console.log(`and: ${value1 || value2 || check()}`); // 이럴경우에는 함수는 마지막에 배치하기

//often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('omg');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion => 타입을 무시하고 값만 비교
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion => 타입까지 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if(name == 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for mutiple type check in TS
const browser = 'IE';
switch(browser){
    case 'IE':
        console.log('go away');
    break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
    break;
    default:
        console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops =>  이 경우는 보통 BIG-O : O(N²)
for(let i = 0; i < 10; i++){
    for(let j = 0; i< 10; i++){
        console.log(`i: ${i} , j:${j}`);
    }
}

//예제
// break, continue
// Q1. iterate from 0 to 10 and pring only even numbers(use continue)
for(let i = 0; i <= 10; i++){
    if(i%2===0){
        console.log(`i: ${i}`);
    }else{
        continue;
    }
}

// Q2. iterate from 0 to 10 and print numbers util reaching 8 (use break)
for(let i = 0; i <= 10; i++){
    if(i == 8){
        break;
    }else{
        console.log(`i: ${i}`);
    }
}