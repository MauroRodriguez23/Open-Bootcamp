let numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
};

let i = 1;
while (i <= numeros.length){
    console.log(i);
    i++;
}

let i2 = 0;
while (true) {
    if (i2 < numeros.length){
        console.log(numeros[i2]);
        i2++;
    }

    if(i2 === 10){
        break;
    }
}