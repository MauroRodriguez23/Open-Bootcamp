// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor


const misDatos = {

        nombre: 'Mauro',
        apellido: 'Rodriguez',
        edad: 23,
        altura: 1.75,
        Developer: true
    }
;

let edad = misDatos.edad;
console.log(edad);

let lista = misDatos;
console.log(lista);

const amigos = [
    {
        nombre: 'Ignacio',
        apellido: 'Ciancio',
        edad: 24,
        altura: 1.75,
        Developer: false
    },
    {
        nombre: 'Taiana',
        apellido: 'Dorado',
        edad: 25,
        altura: 1.45,
        Developer: false
    }
];
console.log(amigos)

let ordenadoEdad = amigos.sort((a,b) => b.edad - a.edad);
console.log(ordenadoEdad);
