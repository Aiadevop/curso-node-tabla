const fs = require('fs'); //importamos la librería filesystem

// let crearArchivo = (base) => {

//     return new Promise((resolve, reject) => {

//         //Si no es un número marcar un error. 
//         if (!Number(base)) {
//             reject(`La base de valor : ${base} -> No es un número`);
//             return;
//         }

//         let data = '';

//         for (let i = 1; i <= 10; i++) {

//             console.log(`${base} * ${i} = ${base*i}\n`);
//             data += (`${base} * ${i} = ${base*i}\n`);
//         }

//         // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

//         //     if (err) reject(err);
//         //     else
//         //         resolve(`tabla-${base}.txt`)
//         // });

//         //Haciendo lo mismo con la función writeFileSync

//         fs.writeFileSync(`tablas/tabla-${base}.txt`, data);

//         resolve(`tabla-${base}.txt`);

//     });
// }

let listarArchivo = async(base, l = false) => {
    try {
        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += (`${base} * ${i} = ${base*i}\n`);

        }
        if (l) {
            console.log(data);
        }



        fs.writeFileSync(`tablas/tabla-${base}.txt`, data);

        return (`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }


}


//Equivalente con async

// const crearArchivo2 = async(base) => {

//     try {

//         if (!Number(base)) {
//             console.log(`La base de valor : ${base} -> No es un número`);
//             return;
//         }

//         let salida = '';

//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} / ${i} = ${base / i}\n`;
//         }

//         fs.writeFileSync(`tablas/division-${base}.txt`, salida);

//         return `division-${base}.txt`;

//     } catch (error) {

//         throw error;

//     }




// };

module.exports = {
    //si tuvieramos más funciones se podrían ageregar aquí.

    //crearArchivo,
    //crearArchivo2
    listarArchivo
};