        // CASO 1
// Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

// 2021 GMD

// 2345-GMD

// 4532BDB

// 0320-AAA

var pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/
var values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
values.forEach(value => {
    console.log('Regex matchs with ' + value + ' ? ->', pattern.test(value));
  })

        //CASO 2
// Vamos a extraer por un lado la parte numérica y por otro las letras.


var pattern = /^(\d{4})(\s|-)?([A-Z]{3})$/
var values = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
values.forEach(value => {
    console.log(value.match(pattern));
  })
