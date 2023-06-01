const { leerJSON, escribirJSON } = require('../data')

module.exports = {
    tareas: leerJSON(),

<<<<<<< HEAD
    listar: require('./listar'),
=======
listar : require('./listar'),
>>>>>>> a6c22e0f77358e0bdfc17ef6ee56e32075110237

    agregar: require('./agregar'),


    //filtrar : require = ('./filtrar')



<<<<<<< HEAD
    //editar : require = ('./editar')
    //eliminar : require = ('./eliminar')
=======
//editar : require = ('./editar')
eliminar : require('./eliminar')
>>>>>>> a6c22e0f77358e0bdfc17ef6ee56e32075110237
}