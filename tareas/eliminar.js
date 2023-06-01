const {leerJSON, escribirJSON} = require ('../data')
eliminar = function (id){
    const tarea = this.tareas.find ((tarea) => tarea.id === id)
    if (!tarea){
      return (`ERROR no existe una clase con el ID `);
    }
    const tareasNoEliminadas = this.tareas.filter(
      (tarea) => tarea.id !== id
    ); 
    escribirJSON(tareasNoEliminadas)
    
    return `La clase ${tarea.titulo.blue}fue eliminada con exito}`
  
  }
  module.exports = eliminar