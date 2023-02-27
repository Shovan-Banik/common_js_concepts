/* 8 ways to get undefined
1: variable that is not initialized will give undefined 
2. function with no return will give undefined
3. perameter that will not pass will give undefined
4. if return has nothing on the right side will retun undefined
5. property that does't exists on the object will give undefined
6. accessing array elements outside of the index range will give you undefined
7. deleting an element inside an array will ive you undefined[aita kora ochit na]
8. set the value undefined[aita kora ochit na]

*/ 
// 1
let a;
// console.log(a)

// 2
function second(a,b){
    const total=a+b;
}
// console.log(second(1,2))

// 3 
function third(x,y,z){
    console.log(x,y,z);
}
// third(2);

// 4
function negative(a,b){
    if(a<0 || b<0){
        return 
    }
    return a+b;
}
// console.log(negative(2,-3));

// 5
const player={
    name: 'mkko',
    nai : 'pokko'
}
// console.log(player.nai,player.name,player.job);

// 6
const sixth=[2,3,4,5];
// console.log(sixth[0],sixth[3],sixth[15]);


const seventh=[10,11,12,13,14,15];
delete seventh[2]; /* aivabe delte korle array ar vitore hole create hoy...aita kora uchit na...array theke delete krte hle splice kore kora uchit */
// console.log(seventh[2]);
// console.log(seventh);

const eight=undefined;
const ninth=null;
const data={results: [],updated: null}

console.log(typeof undefined);
console.log(typeof null);
