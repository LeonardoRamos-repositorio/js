let numero1 = parseInt(prompt("Introduce número a evaluar "));
let numero2 = parseInt(prompt("Segundo número a evaluar"));
if (!isNaN(numero1) && !isNaN(numero2)){
    
    if (numero1 < numero2){
        alert("el primer número " + numero1 + " es menor al segundo " + numero2 );
    }else if (numero1 > numero2){
        alert("el primer número " + numero1 + " es mayor al segundo " + numero2 );
    }else if (numero1 == numero2){
        alert("el primer número " + numero1 + " es igual al segundo " + numero2 );
    }


    alert("Con la suma de los numeros imprimira y se repetira en consola");
    let suma = numero1 + numero2;
    console.log("se imprime en consola la suma desde el  1 al " + suma + " con ciclo FOR");
    for (let i = 1; i <= suma; i++){
    console.log(i)
    }

    
}else
    alert("No has introducido números")


let nombre = prompt("Introduce tu nombre por favor");
let edad   = parseInt(prompt("Introduce tu edad"));
    while(edad<=0 || edad>120){
        edad = prompt("Introduce una edad valida");
    }
let ciudad = prompt("Introduce tu ciudad");

alert("Hola "+ nombre + " que buena edad " + edad + " y tu ciudad " + ciudad + " es genial");
