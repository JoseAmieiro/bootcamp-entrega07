    // CASO 1

// Vamos a validar los siguiente formatos (todos válidos):

var pattern = /^5(0|1|2|3|4|5)\d{2}(\s|-)?(\d{4}(\s|-)?){3}$/
var values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];
values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
  })

      // CASO 2

// Vamos a extraer cada grupo de cuatro digitos.

var pattern = /^(5(0|1|2|3|4|5)\d{2})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?$/
var values = ['5299 6400 0000 0000', '5299-6400-0000-0000', '5299640000000000'];
values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.exec(value));
  })