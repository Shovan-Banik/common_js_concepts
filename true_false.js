/* 
truthy:
1.true
2.any number(+ or -)with out 0
3.any string without empty string ''
4. '0' [0 string bole truthy]
5. 'false'
6. {}  ----sokol object truthy
7.[]  ---sokol array truthy
*/
/* 
falsy:
1.false
2. 0
3. '' (empty string)
4. undefined(all undifined is falsy)
5. null
*/

const x=4;
if(x){
    console.log('value ox x is truthy');
}else{
    console.log('value of x is falsy')
}


// check falsy
const y=null;
if(!y){ /* jdi value false hoy tahole ! oita k true te convert kore condition true krbe jn console krte pare */
    console.log('falsy');
}

// check truthy
const z='abul';
if(!!z){  /* aikhane double bang !! deya hoyece karon jdi true value dey tahole akta ! oita k false a convert korbe abong second ! oita k abr true te convert korbe */
    console.log('truthy')
}