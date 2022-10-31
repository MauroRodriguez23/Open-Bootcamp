let miNombre = "Mauro Rodriguez";

let miEdad = 23;

let desarrollador = prompt("Soy desarrollador/a?");

if (desarrollador === 'si') {
    alert('Te felicito, estas en el camino correcto');
}
else{
    alert("No eres desarrollador, pero puedes serlo.")
};

let nacimiento = new Date (1999,00,06);

console.log(nacimiento);

const libroFav = {
    titulo : 'Cleando Code',
    autor : 'Robert C.Martin',
    fecha : '1 de agosto de 2008',
    url : 'https://adrianalonso.es/formacion/libros-de-desarrollo-software/libros-de-desarrollo-1-clean-code-de-robert-c-martin/#:~:text=Clean%20Code%20se%20trata%20de,%2C%20mantenible%2C%20extensible%20y%20robusto.'
};

console.log(libroFav);
