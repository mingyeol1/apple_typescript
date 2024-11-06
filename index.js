function 가능하냐(x, y, z) {
    var jum = 0;
    x += jum;
    if (y === true) {
        jum += 500;
    }
    if (z == '상') {
        jum += 100;
    }
    if (jum >= 600) {
        return console.log('결혼가능');
    }
}
가능하냐(100, false, '상');
