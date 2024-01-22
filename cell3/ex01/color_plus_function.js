function color_plus(balloon) {
    let balloon = { red };
    //rojo-verde-azul-rojo
    if (balloon.contains("red")) {
        balloon.remove("red");
        balloon.add("green");
    } else if (balloon.contains("green")) {
        balloon.remove("green");
        balloon.add("blue");
    } else if (balloon.contains("blue")) {
        balloon.remove("blue");
        balloon.add("red");
    }
}

console.log(color_plus(balloon));