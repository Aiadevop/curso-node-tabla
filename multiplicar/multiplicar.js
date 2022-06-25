const fs = require('fs'); //importamos la librería filesystem
const colors = require('colors');

let listarArchivo = async(base = 1, l = false, hasta = 10) => {
    try {

        let data, consola, salida = '';

        for (let i = 1; i <= hasta; i++) {
            data += (`${base} x ${i} = ${base*i}\n`);
            salida = base * i;
            consola += (`${colors.bold.cyan(base)} ${'x'.red} ${colors.bold.yellow(i)} ${'='.rainbow} ${colors.green(salida)}\n`);
        }
        if (l) {
            console.log('=================='.blue);
            console.log('  Tabla del:'.rainbow, colors.italic.bgMagenta(base));
            console.log('=================='.blue);
            //console.log(data);
            console.log(consola);

        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, data);

        return (`tabla-${base}.txt`);

    } catch (error) {
        throw error;
    }
}
module.exports = {

    listarArchivo
};