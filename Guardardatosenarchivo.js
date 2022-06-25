//requireds
/*const fs = require('fs');*/ //librería que ya existe en Node
//const fs = require('express'); //librería externa de Node, paquete que hay que instalar.
//const fs = require('./fs'); //archivos que nosotros mismos escribimos

let base = '10';
// let data = '';

// for (let i = 1; i <= 10; i++) {

//     console.log(`${base} * ${i} = ${base*i}\n`);
//     data += (`${base} * ${i} = ${base*i}\n`);
// }

// //2 * 1 = 2

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { // ../ directorio anterior ./directorio raíz
//     if (err) throw err;
//     console.log('El archivo ha sido creado.');
// });

console.log(module);


const { crearArchivo } = require('./multiplicar/multiplicar'); // llamo al archivo que quiero importar
//para hacer una destructuración se añaden llaves después de let o const

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));
//console.log(multiplicar);

const { crearArchivo2 } = require('./multiplicar/multiplicar');

crearArchivo2(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));