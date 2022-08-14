
//javascript is very flexible but dangerous 
// 1. Use strict 
// added ECMAScript 5
'use strict'; // => 선언되지 않은 변수에 대해서 오류내주는 옵션

// 2. Variable , rw(read/write)
// let (added in ES6) : mutable data type
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);

name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var => don't ever use this!
// var hoisting (move declaration from bottom to top) : 변수를 선언 위치에 관계없이 맨 위로 끌어올려주는거
//그리고 var는 블럭을 무시하는 타입
// 이러한 위험부담때문에 let이 나옴
age = 4; 
var age;

// 3. Contant , r(read only)
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNum = 5; 

//Note!!
// Immutable data types: premitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes



// 4. Variable types
// primitive, single item : number , string, boolean , null , indefiedn, symbol
// object, box container
// function , first-class function : 함수도 변수에 넣을 수있는것. 
// 자바스크립트는 타입을 선언 안해도됨. 

const count = 17;
const size = 17.1;

console.log(`value: ${count}`)

// - primitive , single item

// number - special numeric values : infinity , -infinity , NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'non a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890123456789n; //over (-2**53 ~ 2*53)
console.log(`value: ${bigInt} , type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'C';
const bredan = 'bredan'; 
const greeting = 'hello ' + bredan;
console.log(`value: ${greeting}. type: ${typeof greeting}`);
const helloBob = `hi ${bredan}!`; // template literals (string)
console.log(`value: ${helloBob}. type: ${typeof helloBob}`);
//위에 처럼 백틱을 이용하면 쿼티로 + 안해줘도됨 1
console.log('value: ' + helloBob + ' type: '+ typeof helloBob);

//boolean 
// false : 0 ,  null , undefined , NaN, ''
// true : any other value 
const canRead = true;
const test = 3 < 1; // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
// map 등 자료구조에서 고유의 값을 넣어줄때.
//주어진 스트링값에 관계없이 고유한 값으로 만들어짐 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log (symbol1 === symbol2);

//만약에 동일한 symbol을 만들고 싶다! 하면 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
//console.log(`value: ${gSymbol1}, type: ${typeof gSymbol1}`); // 이렇게 하면 오류남 
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`); // .description으로 string타입으로 변환해서 출력해야함

//5. Dynamic typing: dynamically typed language
// static language => java  , c 등 타입을 정해줘야함.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);



