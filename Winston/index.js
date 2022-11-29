const logger = require("./logger");

a = true;

function registraError() {
    try {
        if (a === 'true'){
            logger.alert('Perfecto es verdadero')
        }
    } catch (error) {
            logger.error('Surgió un error inesperado, por favor vuelve a intentarlo.')
    }
};

registraError();

