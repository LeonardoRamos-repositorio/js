class Consultorio{
  contructor(nombreConsultorio, anioApertura, fundador){
    this.nombreConsultorio = nombreConsultorio;
    this.anioApertura = anioApertura;
    this.fundador = fundador;

  }
}

const amarTMas = new Consultorio("Amarte+", 2007, "Grupo Psicologico");


class  Terapeuta {
  constructor (nombre, nacionalidad, modalidad, precio, tipos){
    this.nombre = nombre.toUpperCase()
    this.nacionalidad = nacionalidad
    this.modalidad = modalidad
    this.precio = precio
    this.tipos = []
  }

    agregarTipo(tipos){
      this.tipos.push(tipos)
    }
}
class Tipos{
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
const cuenta1 = new Cuenta("Antonio", "1 sesion", "videoTerapia", "4.99");
const cuenta2 = new Cuenta("Gerardo", "1 semana", "ChatTerapia", "7.99");
const cuenta3 = new Cuenta("Pedro", "2 meses", "videoTerapia", "9.99");





const paciente = []
paciente.push(new Cuenta("Antonio", "1 sesion", "videoTerapia", "4.99"))

console.log(paciente);

const experto = []
experto.push(new Terapeuta("Gabriel ", "Peruana", "Videollamada", 9.99, "Experto"))


console.log(experto); 


const especialista =[]
especialista.push(new Terapeuta("Andres", "Mexicana", "Videollamada", 7.99, "Especialista"))


console.log(especialista);


const profecional = []
profecional.push(new Terapeuta("Macario", "Argentina", "Chat", 4.99, "Profecional"))


console.log(profecional);


console.log(amarTMas);