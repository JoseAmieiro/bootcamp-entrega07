            // En este ejercicio vas a buscar una serie de expresiones regulares 
            // y validar si la expresión dada es correcta:

    // Comprobar si una clave es fuerte o no:
// Complejo: que tenga al menos los siguiente caracteres: 
// una minuscula, una mayuscula, un numero y un caracter especial.

var pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/
var values = ['esTOY01.*', 'jOsEfo10@10', 'AñoS2001$', 'micontraseña1234', '@52KUco'];
values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
  });

// Moderado: Que tenga al menos los siguientes caracteres:
// una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.

var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
var values = ['esTOY01gsdfgsdhtehe', 'jOsEfo1010', 'Siglo2001', 'micontraseña1234', 'Jose11'];
values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
  });

    // Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net 
    // ó www.lemoncode.net ó lemoncode.net).

var pattern = /(https:\/\/)?(www\.)?lemoncode.net/gm
var values = `https://www.lemoncode.net
www.lemoncode.net
lemoncode.net
lemoncode.com
www.applecode.net`;

console.log("Están bien formadas " + values.match(pattern));
    
    // Validar que un color en Hexadecimal esta bien formado.

    var pattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
    var values = ['#FF0000', 'FF0000', '#ccc', 'AAA#', '#12e'];
    values.forEach(value => {
        console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
      });