        // CASO 1

// De una sola linea extraer el contenido de src:

// var pattern = /src="(.*)"/gmi
// var values = `<img
//  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
// />`;
// console.log(values.match(pattern));


var pattern = /(https|http):\/\/.{1,}(jpg|png|gif|webp|jpeg|svg)/gmi
var values = `<img
  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
/>`;

console.log(values.match(pattern));

        // CASO 1
// De un HTML extraer todos los src de todos los objetos img:

var pattern = /(https|http):\/\/.{1,}(jpg|png|gif|webp|jpeg|svg)/gmi
var values = `<html>
<body>
  <img
    src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
  />
  <h1>ejemplo</h1>
  <img
    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
  />
</body>
</html>`;
console.log(values.match(pattern));
