let hunger=100;
let happiness=20;
let energy=100;

/*function feed(){
    console.log("Feed function");
    hunger=hunger-20;
    happiness=happiness+20;
    displayInfo();
}*/
function feed(){
    if(hunger>0){
        hunger=hunger-20;
    }
    if(happiness<100){
        happiness=happiness+20;
    }
    displayInfo();
}
function pet(){
    //increase the happiness
    if(happiness<100){
        happiness=happiness+20;
    }
    displayInfo();
}
function play(){
    //increase happiness and decrease energy
    if(happiness<100){
        happiness=happiness+20;
    }
    if(energy>0){
        energy=energy-20;
    }
    displayInfo();
}
function displayInfo(){
    document.getElementById("hungerPoints").innerHTML=hunger;
    document.getElementById("happinessPoints").innerHTML=happiness;
    document.getElementById("energyPoints").innerHTML=energy;
}
displayInfo();