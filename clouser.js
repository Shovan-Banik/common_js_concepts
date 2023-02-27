function stopWatch(){
    let counter=0;
    return function(){
        counter ++;
        return counter;
    }
}
const firstCounter=stopWatch();
console.log('first',firstCounter());
console.log('first',firstCounter());
console.log('first',firstCounter());
console.log('first',firstCounter());
const secondCounter=stopWatch();
console.log('second',secondCounter())
console.log('second',secondCounter())
console.log('second',secondCounter())

console.log('first',firstCounter());
console.log('first',firstCounter());
console.log('first',firstCounter());
console.log('first',firstCounter());

console.log('second',secondCounter())
console.log('second',secondCounter())
console.log('second',secondCounter())


