// []==true
// 1
let x=''
if(!!x){
    console.log('truthy');
}
else{
    console.log('falsy')
}


// 2
const a=true;
const b='true';
if(a===b){
    console.log('true');
}else{
    console.log('false');
}


// 3
const check=pera=>{
    if(isNaN(pera)){
        return true;
    }
    return false;
}
const value=check([12,34,56]);
console.log(value);


// 4
let storeFalsyValue = '';
if(storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
}

// important
const operation=(num1,num2,operator)=>{
    if(operator==='add'){
        return num1+num2;
    }
    else if(operator==='subtract'){
        return num1-num2;
    }
    else if(operator==='multiply'){
        return num1*num2;
    }
    else if(operator==='divide'){
        return num1/num2;
    }
    else if(operator==='modulus'){
        return num1%num2;
    }
    else{
        return 'Invalid operation';
    }

    
}

const result1=operation(100,20,'add');
const result2=operation(100,20,'subtract');
const result3=operation(100,20,'multiply');
const result4=operation(100,20,'divide');
const result5=operation(100,20,'modulus');
const result6=operation(100,20,'fraction');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);



// let p='Javascript'; 
// let q=p; 
// p='React'; 
// console.log(q); 

// const isTrue='false'; 
// if(!isTrue){
// console.log('hello');
// } else {
// console.log('world'); 
// }


// function sum(p, q) {
//     p + q;
//    }
//    const result = sum(2, 3);
//    console.log(result);


//    if ("2" === 2) {
//     console.log("Inside if");
//    } else {
//     console.log("Inside else");
//    }


//    function work(x, y = 4) {
//     return x + y;
//    }
//    console.log(work(32);
   
   