'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 1. state 상태 : 기능 수행의 상태여부 
//  State: pending -> fulfilled or rejected
// 2. 프로듀서(정보생성)와 컨슈머(정보소비)의 차이점 
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject)=> {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then((value)=> { // 위에 resolve에서 보내준 값이 value값임
    console.log(value);
})
    .catch(error=> {
        console.log(error);
})
    .finally(()=> {
        console.log('finally');
});

// 3. Promise chining
const fetchNumber = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve('닭'), 1000);
    });
const getEgg = hen => 
    new Promise((resolve, reject) => {
        //setTimeout(()=> resolve(`${hen} => 계란`) , 1000);
        setTimeout(()=> reject(new Error(`error! ${hen} => 계란`)) , 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 계란후라이`) , 1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
//위 소스를 아래처럼 간략하게 가능
getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);