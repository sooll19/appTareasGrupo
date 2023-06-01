const {escribirJSON} = require ('../data')
editar = function(clase, estado){
  const tareas = this.tareas;
  const tarea = tareas.find(tarea => tarea.clase === clase);
  if(!tarea){
    return console.log(`ERROR: La clase ${clase}  no se encuentra`.red)
  }
  const tareasActualizadas = tareas.map((tarea) => {
    if(tarea.clase === clase){
      tarea.estado = estado.toLowerCase()
    }
    return tarea
  });
  escribirJSON(tareasActualizadas);
  return `El estado de la clase ${tarea.titulo} ahora es ${estado}.`;
},
module.exports = editar;