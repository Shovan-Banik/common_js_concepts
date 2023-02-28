// premetive datar khetre jdi functioner vitore kono data modify kora hoy tahole outer variable ar man change kore na
let num1=5;
let num2=10;
function multiply(a,b){
    a=10;
    const result=a*b;
    return result;
}
const output=multiply(num1,num2);
console.log(output);
// non-premetive datar khetre jdi functioner viotre kono outer variable ar value modify kora hoy tahole function call korar por outer variable ar value..o change hye jay...kkn na tara same reference share kore thake

let couple1={nayok:'chongchonacha',nayika:'ginkjokpik'};
let couple2={nayok:'oltomoltoniki',nayika:'quisnosifusi'};

function makeMovie(juri1,juri2){
    couple1.nayika='higibijigiji';
    couple2.nayok='lantidisngdhosong';
}
console.log(couple1,couple2);
makeMovie(couple1,couple2);
console.log(couple1,couple2);


// array and object pass by reference 
// primitive type pass b value