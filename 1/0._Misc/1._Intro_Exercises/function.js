function hi (anyfunction){
    anyfunction()
}

function anyfunction(){
    console.log("Hi")
}

function anyfunction2(){
    console.log("Hello")
}

hi(anyfunction2);

//lambda vs arrow function

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}
const mf = (name) =>{ return 'Hug ' + name};


interact((name) =>{ return 'Hug ' + name}, 'Dagmara');