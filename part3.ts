function 함수(x: number): number {
  return x * 2;
}

function 보이드함수(x?: number): void {}
보이드함수();

//숙제1

function 숙제1(x?: string): void {
  if (x) {
    console.log("안녕하세요 " + x);
  } else {
    console.log("이름이없습니다");
  }
}

//숙제2
function 숙제2(x: string | number): number {
  return x.toString().length;
}

//숙제3

function 숙제3(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score = score + money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}

function 내함수(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number;
}
내함수(123);

//숙제1
function 숫자숙제(x: (number | string)[]) {
  let newArr: number[] = [];

  x.forEach((el) => {
    if (typeof el === "string") {
      newArr.push(Number(el));
    } else {
      newArr.push(el);
    }
  });
  return newArr;
}

//숙제2
function 선생님숙제(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return "타입에러";
  }
}
