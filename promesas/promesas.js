// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// - Una función generadora de índices pares automáticos

function sinParametros(){
    while (1 === 1){
        console.log(true)
    }
};

sinParametros();
console.log(sinParametros);


const datos = 'Hola soy una promesa';

const getDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos);
        }, 5000);
    })
};
getDatos().then((datos) => console.log(datos));

function* generadora(){
    let a = 2;
    let b = 1;
    while(true){
        yield a * b;
        b++;         
    }
};

const g = generadora();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);










