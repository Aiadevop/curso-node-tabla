//const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// crearArchivo(argv.b)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

listarArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`Archivo creado: ${archivo.rainbow}`))
    .catch(e => console.log(e));