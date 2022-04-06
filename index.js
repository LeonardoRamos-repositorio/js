// let numero1 = parseInt(prompt("Introduce número a evaluar "));
// let numero2 = parseInt(prompt("Segundo número a evaluar"));
// if (!isNaN(numero1) && !isNaN(numero2)){
    
//     if (numero1 < numero2){
//         alert("el primer número " + numero1 + " es menor al segundo " + numero2 );
//     }else if (numero1 > numero2){
//         alert("el primer número " + numero1 + " es mayor al segundo " + numero2 );
//     }else if (numero1 == numero2){
//         alert("el primer número " + numero1 + " es igual al segundo " + numero2 );
//     }


//     alert("Con la suma de los numeros imprimira y se repetira en consola");
//     let suma = numero1 + numero2;
//     console.log("se imprime en consola la suma desde el  1 al " + suma + " con ciclo FOR");
//     for (let i = 1; i <= suma; i++){
//     console.log(i)
//     }

    
// }else
//     alert("No has introducido números")


alert("¿Qué te gustaría encontrar en tu proceso psicoterapéutico? – selección múltiple. Debes escoger dos (2) opciones.");
alert("selecciona una de las opciones de la pantalla")
let opciones = 7 
let opcion1 = prompt("selecciona una de las opciones (1 al 7)");
let opcion2 = prompt("selecciona una de las opciones (1 al 7)");
 if (!isNaN(opcion1) && !isNaN(opcion2)){
    if (opcion1 >opciones){
        alert("intenta de nuevo");
    }else elije_terapeuta()
        

}else  alert("No has introducido números");

function elije_terapeuta() {
  alert("Elije un servicio terapeutico");

  const precioterapeuta= [9.99, 7.99, 4.99];
  const eleccion = parseInt(
    prompt(
      "Ingresa tu eleccion" + " 1- Experto 2- Especialista 3- Profecional"
    )
  );

  if (eleccion < 1 || eleccion > 3) {
    alert("Opcion no valida");
    elije_terapeuta();

    return;
  }

  alert(
    "se ha agregado un servicio y se han sumado " +
      precioterapeuta[eleccion - 1] +
      " USD a tu cuenta"
  );
  terapeutaSeleccionado.elije_terapeuta = precioterapeuta[eleccion - 1];

  
}






// while(edad<=0 || edad>120){
//     edad = prompt("Introduce una edad valida");
// }
// let opcion2 = prompt("Introduce tu ciudad");