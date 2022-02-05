let 새함수 = function (x) {
    return 10;
};
let cutZero = function (a) {
    if (a[0] === "0") {
        return a.slice(1);
    }
    else {
        return a;
    }
};
let removeDash = function (a) {
    return parseFloat(a.replace("-", ""));
};
function 만들함수(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
만들함수("010-1112-333", cutZero, removeDash);
