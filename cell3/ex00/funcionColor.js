function dame_color_aleatorio() {
    let num;
    let color;
    let i;
    console.log(i);


    num = '0123456789ABCDEF';
    color = '#';
    i = 0;
    while (i < 6) {
        color += num[Math.floor(Math.random() * 16)];
        console.log(num[Math.floor(Math.random() * 16)]);
        i++;
        console.log(color);
    }
    return (color);
}
console.log(dame_color_aleatorio())    