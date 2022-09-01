// async & await
// clear sytle of using promise :)

// 1. async 
async function fetchUser(){
    // do network request in 10 secs....
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromist = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromist;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//위에 처럼 지저분하게 만들지 않고 아래 3번처럼 만들수 있음

// 3. useful Promist APIs
function pickAllFruits(){
    return Promise.all([getApple() , getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

