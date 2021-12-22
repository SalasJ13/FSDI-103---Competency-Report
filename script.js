//Declaracion de variables
var usName="Salas";
let userAge=23;
const URL="https://www.facebook.com/";

//Ciclos
for(let i=1;i<11;i++){
    console.log(i);
    if(i==5){
        console.log("Hey Listen");
    }
    else{
        console.log(i);
    }
}
let n1=0;
let n2=0;
//Metodos
function challange(){
    //Ingresar dos numeros desde el navegador y mostrar el mas
    //grande en console
    n1=Number(prompt("Enter a number 1: "));
    n2=Number(prompt("Enter a number 2: "));
    if (n1>n2){
        console.log("Es mayor" + n1);
    }
    else if(n2>n1){
        console.log("Es mayor" + n2);
    }
    else if (n1<n2){
        console.log("Es menor" + n1);
    }
    else if(n2<n1){
        console.log("Es menor" + n2);
    }
    else{
        console.log("Es el mismo numero");
    }
}
//challange();
//Arreglos
let students=["Salas","Jazmin","Paredes","ISC","TEC"];
let mixed=["jola",9,0,8,9,true,null,"cara"];
let grades=["A","b","c","d","e","f","g"];
console.table(students);
console.log(students[0]);

//travel arrays
for(let i=0;i<students.length;i++){
    document.write(`<p>Name: ${students[i]}<br>Grade: ${grades[i]}</p>`)
}
