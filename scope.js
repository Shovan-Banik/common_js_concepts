// hoisting kore var datatype..tai var use kra jbe na
// function() aivabe likhle hosting kore...mane function declare korar age call korle kaj kore ...kinto function expression or arrow function likhle declare korar age likhle kaj krbe na....function declare korar por call krte he

// function add(a,b){
//     if(a>b){
//         var sum= a-b;
//         return sum;
//     }
//     else{
//         const sub= a+b;
//         return sub;
//     }
// }
// console.log(add(1,2))
const a=5;
const b=10;
if(b>a){
    var res=b-a;/* var deyay loop ar baire console koreo output pabo */
    // const res=b-a; /* const deyay aita loop ar baire result pabo na cause aita block scope */
}
console.log(res);