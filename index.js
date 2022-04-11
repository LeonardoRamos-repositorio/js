// alert("¿Qué te gustaría encontrar en tu proceso psicoterapéutico? – selección múltiple. Debes escoger dos (2) opciones.");
// alert("selecciona una de las opciones de la pantalla")
// let opciones = 7 
// let opcion1 = prompt("selecciona una de las opciones (1 al 7)");
// let opcion2 = prompt("selecciona una de las opciones (1 al 7)");
//  if (!isNaN(opcion1) && !isNaN(opcion2)){
//     if (opcion1 >opciones){
//         alert("intenta de nuevo");
//     }else elije_terapeuta()
        

// }else  alert("No has introducido números");

// function elije_terapeuta() {
//   alert("Elije un servicio terapeutico");

//   const precioterapeuta= [9.99, 7.99, 4.99];
//   const eleccion = parseInt(
//     prompt(
//       "Ingresa tu eleccion" + " 1- Experto 2- Especialista 3- Profecional"
//     )
//   );

//   if (eleccion < 1 || eleccion > 3) {
//     alert("Opcion no valida");
//     elije_terapeuta();

//     return;
//   }

//   alert(
//     "se ha agregado un servicio y se han sumado " +
//       precioterapeuta[eleccion - 1] +
//       " USD a tu cuenta"
//   );
//   terapeutaSeleccionado.elije_terapeuta = precioterapeuta[eleccion - 1];

  
// }

class  terapeuta {
  constructor (nombre, nacionalidad, modalidad, precio, tipo){
    this.nombre = nombre.toUpperCase()
    this.nacionalidad = nacionalidad
    this.modalidad = modalidad
    this.precio = precio
    this.tipo = tipo
  }

}
const experto = []
experto.push(new terapeuta("Gabriel ", "Peruano", "Videollamada", 9.99, "Experto"))


console.log(experto);


const especialista =[]
especialista.push(new terapeuta("Andres", "Mexicana", "Videollamada", 7.99, "Especialista"))


console.log(especialista);


const profecional = []
profecional.push(new terapeuta("Macario", "Argentina", "Chat", 4.99, "Profecional"))


console.log(profecional);