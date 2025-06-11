const jwt = require('jsonwebtoken');

const generarJWT = async( uid, name ) =>{

    await new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(
            payload, 
            process.env.SECRET_JWT_SEED, 
            {
                expiresIn: '2h'
            }, 
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                }

                resolve(token);
            }
        );
    
    }).then((token) => {
    tokenGenerado = token;
    });

    return tokenGenerado

}


module.exports = {
    generarJWT
}