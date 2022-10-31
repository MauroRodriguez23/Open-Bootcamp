let miNombre = 'Mauro';
let miApellido = 'Rodriguez';
let estudiante = miNombre.concat(" ", miApellido, " es un estudiante");

let estudianteMayus = 'estudiante';
console.log(estudianteMayus.toUpperCase(estudianteMayus));

let estudianteMinus = 'EstUdiante';
console.log(estudianteMinus.toLowerCase(estudianteMinus));


let varEstudiante = 'estudiante';
let numCaractEstudiante = varEstudiante.length;

let primerLetra = miNombre.charAt(0);
console.log(primerLetra);

let ultimaLetra = miApellido.substr(-1);
console.log(ultimaLetra);

let eliminaEspacio = estudiante.replace(/\s+/g, '');
console.log(eliminaEspacio);

let miNombreBoleean = miNombre;

if (miNombreBoleean === 'Mauro') {
    console.log("su nombre es Mauro")
} else {
    console.log('su nombre no es Mauro')
}


