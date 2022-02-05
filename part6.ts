type 함수타입 = (x: string) => number;
let 새함수: 함수타입 = function (x) {
  return 10;
};

type 컷제로 = (a: string) => string;
type 리무브 = (a: string) => number;

let cutZero: 컷제로 = function (a) {
  if (a[0] === "0") {
    return a.slice(1);
  } else {
    return a;
  }
};

let removeDash: 리무브 = function (a) {
  return parseFloat(a.replace("-", ""));
};

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;
function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

만들함수("010-1112-333", cutZero, removeDash);
