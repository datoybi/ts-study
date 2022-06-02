const 이름: string[] = ["kim", "park"];
const obj: { name: string } = { name: "kim" };
const obj1: { name?: string } = { name: "kim" }; // ? 은 옵션
let names: String | number = 123;

// 변수
type Id = string | number;
let id: Id = "dasom123";

function func1(x: number): number {
  return x * 2;
}
// func1("123");

type Member = [number, boolean];
let john: Member = [123, true];

type Mem = {
  name: string;
};
let josh: Mem = { name: "josh" };

type People = {
  [key: string]: string; // 많은 속성을 한번에 선언
};
let bob: People = { name: "bob", age: "20" };

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
