let 챙이름: 123;
챙이름 = 123;
챙이름 = 456;

let 접니다: "갈수록존예" | "벼락부자";

function 접니다함수(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

let 자료 = {
  name: "kim",
} as const;

자료.name;

function 챙함수(x: "kim") {}
챙함수(자료.name);
