type Animal = { name: string; age: number };
let 동물: Animal = { name: "kim", age: 20 };

type Girlfriend = {
  name: string;
};

const 여친: Girlfriend = {
  name: "엠버",
};

여친.name = "유라";

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY;

let postion: NewType = { x: 20, y: 20 };

//숙제2

type Homework = {
  color?: string;
  size: number;
  readonly position: number[];
};
let 테스트변수: Homework = {
  size: 123,
  position: [1, 2, 3],
};

//숙제3

type Test = {
  name: string;
  phone: number;
  email: string;
};
let 회원정보: Test = { name: "챙", phone: 123, email: "sophie" };

type Adult = {
  adult: boolean;
};

let 회원님정보: Test & Adult = { name: "챙", phone: 123, email: "sophie", adult: true };
