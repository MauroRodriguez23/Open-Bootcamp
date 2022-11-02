const productos = ['Harina', 'Azucar', 'Leche', 'Manteca', 'Sal', 'Mayonesa'];
productos.splice(6, 0, 'Aceite de Girasol');
console.log(productos);

productos.splice(6, 1,);
console.log(productos);

let peliculas = [
    {
        titulo: 'The Avengers',
        director: 'Joe Russo',
        fecha: '20/2/2012'
    },
    {
        titulo: 'Música,fiesta y amigos',
        director: 'Max Joseph',
        fecha: '30/01/2015'
    },
    {
        titulo: 'El hombre de acero',
        director: 'Zack Snyder',
        fecha: '15/04/2008'
    },
]

let peliculasFilter = peliculas.filter(p => p.fecha > '15/04/2008');
console.log(peliculasFilter);

let directoresMap = peliculas.map(d => d.director);
console.log(directoresMap);

let titulosMap = peliculas.map(t => t.titulo);
console.log(titulosMap);

let listaConcat = peliculas.concat(directoresMap, titulosMap);
console.log(listaConcat);

let listaPropag = [...directoresMap, ...titulosMap];
console.log(listaPropag);

