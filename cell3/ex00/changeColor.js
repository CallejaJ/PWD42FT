// function generate_color() {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     let i = 0;
//     while (i < 6) {
//         color += hex[Math.floor(Math.random() * 16)];
//         i++;
//     }
//     return (color);
// }
// console.log(dame_color_aleatorio())    

function changeColor() {

    // creamos un array de colores 
    var color = new Array('red', 'green', 'blue', 'yellow', 'black', 'white', 'purple', 'grey', 'pink', 'aquamarine', 'beige');

    // iniciamos una variable que recorra el array y saque los colores de forma aleatoria
    var cambiaColor = Math.round(Math.random() * color.length);

    // cambiamos el color de fondo del body
    document.body.style.backgroundColor = color[cambiaColor];

}