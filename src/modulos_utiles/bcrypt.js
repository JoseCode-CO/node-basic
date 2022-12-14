//La función de cifrado de bcrypt nos permite construir una plataforma de seguridad utilizando contraseñas encriptadas con Salt.
//Lo instalamos con npm i bcrypt
const bcrypt = require("bcrypt");
const password = "teste12020";

bcrypt.hash(password, 5, function (err, hash) {
    var data = hash
});
// La consola nos entregaria una contraseña distinta en cada oportunidad.

// Para evaluar si una contraseña concuerda con un hash
bcrypt.compare(password, hash, function (error, result) {
    console.log(result)
    console.log(error)
})
// Nos va a responder **true** *(en el result)* o **false** *(en el error)* dependiendo si la contraseña puede generar el hash