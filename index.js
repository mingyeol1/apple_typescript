function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var str = [];
    var num = [];
    x.forEach(function (a) {
        if (typeof a === 'string') {
            str.push(a);
        }
        else {
            num.push(a);
        }
    });
    return [str, num];
}
console.log(함수('123', 1, 3, '2'));
