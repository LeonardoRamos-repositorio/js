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

class  Terapeuta {
  constructor (nombre, nacionalidad, modalidad, precio, tipo){
    this.nombre = nombre.toUpperCase()
    this.nacionalidad = nacionalidad
    this.modalidad = modalidad
    this.precio = precio
    this.tipos = []
  }

    agregarTipo(tipo){
      this.tipo.push(tipo)
    }
}
class Tipo{
  constructor(nombreTerapeuta, tipoTerapeuta, atencion){
    this.nombreTerapeuta = nombreTerapeuta;
    this.tipoTerapeuta = tipoTerapeuta;
    this.atencion = atencion;
  }
}

class Cuenta {
  constructor(nombrePaciente, tipoCuenta, metodoAtencion, costo ){
    this.nombrePaciente = nombrePaciente;
    this.tipoCuenta = tipoCuenta;
    this.metodoAtencion = metodoAtencion;
    this.numeroSesiones = []

  }
  agregarTipo(numeroSesiones){
    this.sesiones.push(sesiones)
  }
}
const paciente = []
paciente.push(new Cuenta("Antonio", "1 sesion", "videoTerapia", "4.99"))

console.log(Cuenta);

const experto = []
experto.push(new Terapeuta("Gabriel ", "Peruana", "Videollamada", 9.99, "Experto"))


console.log(experto); 


const especialista =[]
especialista.push(new Terapeuta("Andres", "Mexicana", "Videollamada", 7.99, "Especialista"))


console.log(especialista);


const profecional = []
profecional.push(new Terapeuta("Macario", "Argentina", "Chat", 4.99, "Profecional"))


console.log(profecional);