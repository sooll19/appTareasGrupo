  listar = function (tareas = this.tareas) {
    tareas.forEach(({ titulo, estado }) => {
    console.log(`${titulo} - ${estado}.`);
    });
  }

  module.exports = listar