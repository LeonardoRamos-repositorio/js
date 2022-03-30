let numero1 = parseInt(prompt("Introduce número a evaluar "));
let numero2 = parseInt(prompt("Segundo número a evaluar"));

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


