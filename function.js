// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2){ body... reuturn; }
// one function === one thing
// naming: doSomething, command, verb 
// e.g. createCarAndPoint -> createCard, createPoint => 함수는 최대한 기능 1개만..! 
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello');
log(1234); //함수에 타입을 지정할 수 없음. 
// 그래서 타입스크립트를 주로 사용하게 됨. 왜냐하면 타입스크립트는 데이터 타입을 확실하게 지정해주므로

// 2. Parameters 
// premitive parameters: passed by value
// object parameters: passed by reference 
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Defalut parameters (added in ES6)
function showMessage(message , from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!');

// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream' , 'coding' , 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage); 
}
printMessage();

// 6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1 , 2); //3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit 
// bad
function upgradeUser(user){
    if(user.point > 10 ){
        //long upgrade logic..
    }
}
// good  : 조건이 맞지 않은 경우에는 바로 리턴하고 맞는 경우에만 함수 실행하도록 짜는게 좋음
function upgradeUser(user){
    if(user.point <= 10 ){
        return;
    }
    //long upgrade logic..
}

// First-class function
// functions are treated like any other variable 
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expressions
// a function declaration can be called earlier than it is defined. (hoisted)
// a funtion expression is created when the execution reached it.
const print = function(){// anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. CallBack function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions : 함수 내부에서 자기자신을 호출하는 함수 , 피보나치 수 반복되는평균값등
const printNo = function print(){
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// 간결하게 쓸 수 있는 함수 
const simplePrint = function (){
    console.log('simplePrint!');
}
const simplePrint2 = () => console.log('simplePrint!');
const add = (a , b) => a + b;
const simpleMutiply = (a,b) => {
    // do something more
    return a + b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언하자마자 바로 호출하고 싶을떄
(function hello(){
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command , a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b){
    let sum;
    switch(command){
        case 'add':
            sum = a+b;
        break;
        case 'substract':
            sum = a-b;
        break;
        case 'divide':
            sum = a/b;
        break;
        case 'multiply':
            sum = a*b;
        break;
        case 'remainder':
            sum = a%b;
        break;
        default:
           throw Error('unknown command');
    }
    console.log(`command: ${sum}`);
}

calculate('add' , 2,3);
calculate('substract' , 5,3);
calculate('divide' , 20,3);
calculate('multiply' , 2,3);
calculate('remainder' , 20,3);
calculate('adsdas' , 2,3);


// 함수 선언
// 함수 호출

