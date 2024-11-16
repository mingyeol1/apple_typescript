var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var 정답 = 0;
    a.forEach(function (e) {
        if (정답 < e) {
            정답 = e;
        }
    });
    return console.log(정답);
}
함수(1, 2, 3, 4, 5, 6);
function 함수2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    return console.log(user, comment, admin);
}
함수2({ user: 'kim', comment: [3, 5, 4], admin: false });
function 함수3(_a) {
    var a = __rest(_a, []);
    console.log(a);
}
함수3([1, '123', true]);
