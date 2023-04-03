        // CASO 1
// Validar que se informa con dos letras, y los números correspondientes.

var pattern = /^[A-Z]{2}\d{2}\d{4}\d{4}\d{2}\d{10}$/ 
var values = 'ES6600190020961234567890';
console.log(pattern.test(values));

        // CASO 2
// Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:
// ES6600190020961234567890
// ES66 0019 0020 9612 3456 7890

var pattern = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){5}$/
var values = ['ES66 0019 0020 9612 3456 7890', 'ES6600190020961234567890'];
  values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
  })
  

        // CASO 3
// Vamos a extraer el código de páis y el dígito de control.

var pattern = /^([A-Z]{2})(\d{2})\d{4}\d{4}\d{2}\d{10}$/ 
var values = 'ES6600190020961234567890';
console.log(pattern.exec(values));

