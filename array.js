'use strict';

//Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];;
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length-1]);

console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});
// 더 간단하게 작성 버전 하단 
fruits.forEach((fruit) => console.log(fruit));

console.clear();

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('orange', 'lemon');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the begining
fruits.unshift('lemon', 'orange');
console.log(fruits);

// shift: remove an item from the begining
fruits.shift();
console.log(fruits);

// note !!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.push('lemon', 'orange');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1 , 'pear');
console.log(fruits);

console.clear();

//combine two arrays
const fruit2 = ['dog' , 'cat'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('lemon'));

// includes
console.log(fruits.includes('egg'));

// lastIndexOf
console.clear();
fruits.push('lemon');
console.log(fruits);
console.log(fruits.indexOf('lemon'));
console.log(fruits.lastIndexOf('lemon'));

// 