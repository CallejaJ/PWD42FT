function color_plus() {

    if (balloon.contains("red")) {
        balloon.remove("red");
        balloon.add("green");
        console.log(balloon);
    } else if (balloon.contains("green")) {
        balloon.remove("green");
        balloon.add("blue");
    } else if (balloon.contains("blue")) {
        balloon.remove("blue");
        balloon.add("red");
    }
}

console.log(color_plus());