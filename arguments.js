// arguments object na...aita array like object..
/* arguments sudhu matro function ar vitorey available 
aita te index thakay array moto loop chalano jay

kinto push,pop,map,filter  kora jay na
*/


function sum(a,b,c){
    console.log(arguments)/* arguments sudhu matro function ar vitorey available */
    // arguments.pop(5);  pop kora jay na
    const args=[...arguments];
    console.log(args);
    const result=a+b+c;
    return result;

}
const result=sum(5,10,15,5,6,7,8);
console.log(result);
console.log(sum.length);