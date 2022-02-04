//Union 
let 회원 :(number | string) = 123;
let 회원님들 :(number | string)[]= [1,'2',3];
let 오브젝트 :{a: string | number} = {a: 123}

//any 타입 : 쉴드해제
let 애니 : any;
애니 = 123;
애니 = "123";
애니 = [];

//unknown

let 언노운 : unknown;
언노운 =123;
언노운 = {};
언노운 = [1,2,3];

let 변수1 : string = 애니;

// 타입스크립트의 엄격함에대하여

let 이채나이 : unknown = 1;

이채나이 -1;