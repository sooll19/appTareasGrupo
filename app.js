const { argv } = require("process");
const moduloTareas = require("./tareas");
require (`colors`);
let respuesta;
//console.log(moduloTareas.tareas);

switch (argv[2].toLowerCase()) {
  case "listar":
    console.log(`\n********** LISTA DE TAREAS ***********/n`.blue)
    moduloTareas.listar()
    break;


    case "agregar":
       if([argv[3],argv[4]].includes(undefined)){
        console.log('Error: el número y titulo de la clase son obligatorios'.red);
        break; 
      } 
      if (isNaN(argv[3]) || argv[3]<1){
        console.log("Error: el número de la clase no es válido".red);
      break;
      }
      respuesta = moduloTareas.agregar(+argv[3], argv[4]);
      console.log(respuesta)
      break;
  case "filtrar":
        const estados = ['pendiente','en proceso','terminado']
        if(!argv[3]){
          console.log("Error: El estado debe ser uno de los siguientes pendiente | en proceso | terminado".red);
          break
      }
      if(!estados.includes(argv[3].toLowerCase())){
        console.log('ERROR: El estado debe ser uno de los siguientes : pendiente | en proceso | terminado'.red);
      break
      }
moduloTareas.filtrar(argv[3].toLowerCase())
break




case "editar":
  if([argv[3],argv[4]].includes(undefined)){
    console.log('Error: el número y titulo de la clase son obligatorios'.red);
    break; 
  } 
  if (isNaN(argv[3]) || argv[3]<1){
    console.log("Error: el número de la clase no es válido".red);
  break
  }
  respuesta = moduloTareas.editar(+argv[3],argv[4])
  //console.log(respuesta) 
  break 
  case "eliminar":
    respuesta = moduloTareas.eliminar(argv[3])
    console.log(respuesta)
    break;
  default:
    console.log(`Comando incorrecto`.red)
    break;
}