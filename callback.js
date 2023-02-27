function eventos(eventManage,person){
    eventManage(person);
}
function eventManage(person){
    console.log('already managed',person);
}
function eventFood(person){
    console.log('almost ready',person);
}
function eventSound(person){
    console.log('porai DJ feetings',person);
}
eventos(eventManage,'boss');
eventos(eventFood,'ostad');
eventos(eventSound,'mamma')