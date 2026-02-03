// console.log("start VSCode");

// let name = "완수";
// name = "wansu";

// console.log(name);

// let $name;

// let name^;

// let 1st;

// let user1;
// let test123ing;

// let var;

// let if;

// let userInfo;
// let isTrueFalse;

// const name = "완수";
// name = "wansu";

// console.log(name);

// const birthdat = "11-15";
// const name = "wansu";

// const EMAIL_ADDRESS = "123@gmail.com";

//typeof

// let num = 10;

// console.log(typeof num);

//숫자형

// let num1 = 125;
// let num2 = 10.00012;

// console.log(typeof num1);
// console.log(typeof num2);

// let num = Infinity;
// console.log(typeof num);

// let num = 100 / 0;
// console.log(num);

// let number = NaN;
// console.log(typeof number);

// let number = "javascript" / 10;
// console.log(number);

//BigInt

// let bigNum1 = 9999999999999999999999999999n;
// let bigNum2 = BigInt("9999999999999999999999999999");

// console.log(typeof bigNum1);
// console.log(typeof bigNum2);

//string

// let name = "wansu";
// console.log(typeof name);

// " ", ' ', `` ~

// let name = "wansu";
// let intro = `제 이름은 ${name} 입니다.`;

// console.log(intro);

// 템플릿 리터럴

//boolean
// true / false

// let isClicked = false;

// if (isClicked) {
//   console.log("클릭O");
// } else {
//   console / log("클릭X");
// }

// Null
// 존재X, 알 수 없는 값

// let num = null;
// console.log(typeof num);
// console.log(num === null);

//Undefined
// 값이 할당되지 않은 상태

// let num;
// console.log(typeof num);

//묵시적 형 변환

// let num1 = "15";
// let num2 = 5;

// console.log(num1 / num2);

//명시적 형 변환
// let num1 = "15";
// let num2 = 5;

// console.log(num1 + num2);
// console.log(parseInt(num1) + num2);

//산술 연산자

// let num1 = 10;
// let num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);
// console.log(num1 % 2);
// console.log(num2 % 2);

//증감 연산자

// console.log(num1++);
// console.log(num1);
// console.log(++num1);
// console.log(num1--);
// console.log(num1);
// console.log(--num1);

//대입 연산자

// let num = 10;
// num = num + 5;

// console.log(num);

// let num = 10;
// num += 5;

// console.log(num);

//비교 연산자
// 일치
// 불일치

// let num1 = 10;
// let num2 = "10";

// console.log(num1 !== num2);
// console.log(num1 === num2);
// console.log(num1 != num2);
// console.log(num1 == num2);

//대소 비교 연산자

// let a = 10;
// let b = 20;
// let c = 10;

// console.log(a < b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a > b);

//연결 연산자

// let price = 10000;
// console.log("가격: " + price + "원");

//논리 연산자
// true false
// NOT OR AND

//false -> true, true -> false

// let isClicked = true;
// let isOpend = false;

// console.log(!isClicked);
// console.log(!isOpend);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// null 병합 연산자
// A ?? B

// let num1;
// let num2 = 10;

// console.log(num1 ?? 20);
// console.log(num2 ?? 20);

// 삼항 연산자
// A ? B : C

// let num = 100;
// let result = num % 2 === 0 ? "짝수" : "홀수";

// console.log(result);

// if문

// let num = 5;
// let num = 50;
// if (num < 10) {
//   console.log("num은 10보다 작습니다.");
// } else if (num > 10) {
//   console.log("num은 10보다 큽니다.");
// } else {
//   console.log("num은 10보다 크거나 같습니다.");
//   if (num > 10) {
//     console.log("num은 10보다 큽니다.");
//   } else {
//   console.log("num은 10입니다.");
//   }
// }

// switch case

// let fruit = "apple";
// let fruit = "pineapple";

// switch (fruit) {
//   case "banana":
//     console.log("바나나");
//     break;
//   case "orange":
//     console.log("오렌지");
//     break;
//   case "apple":
//     console.log("사과");
//     break;
//   case "grape":
//     console.log("포도");
//     break;
//   default:
//     console.log("다른 과일");
// }

// let num1 = 10;
// let num2 = 15;
// let sum = num1 + num2;

// console.log(sum);

// let num3 = 1;
// let num4 = 5;
// let sum2 = num3 + num4;

// console.log(sum2);

// function add(num1, num2) {
//   //   console.log(num1 + num2);
//   return num1 + num2;
//   console.log("함수 호출");
// }

// add(10, 15);
// let result = add(10, 15);

// console.log(`두 숫자를 더한 결과는 ${result} 입니다.`);

//Early return pattern

// function compare(num) {
//   if (num === 0) {
// console.log("num의 값이 0입니다.");
//     return "num의 값이 0입니다.";
//   }
//   else
//   if (num < 0) {
// console.log("num의 값이 0보다 작습니다.");
//     return "num의 값이 0보다 작습니다.";
//   }
//   else {
//   if (num >= 10) {
//   console.log("num의 값이 10보다 크거나 같습니다.");
//     return "num의 값이 10보다 크거나 같습니다.";
//   }
// else {
//   console.log("num의 값이 0보다 크고 10보다 작습니다.");
//   return "num의 값이 0보다 크고 10보다 작습니다.";
// }
//   }
// }

// console.log(compare(15));

// function print() {
//   console.log(1);
//   console.log(2);
// }

// console.log(3);
// print();
// console.log(4);

// 전역, 지역

// let globalNum = 100;

// function testFunc() {
//   let innerNum = 50;
//   console.log(globalNum);
//   console.log(innerNum);
// }
// testFunc();
// console.log(globalNum);
// console.log(innerNum);

// let global = "나는 전역변수입니다";

// function outerFunction() {
//   let outer = "나는 외부 함수의 변수입니다";

//   function innerFunction() {
//     let inner = "나는 내부 함수의 변수입니다";
//     console.log(global);
//     console.log(outer);
//     console.log(inner);
//   }

//   innerFunction();
//   console.log(global);
//   console.log(outer);
//   console.log(inner);
// }

// outerFunction();

// function print() {
//   for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// print();

// function print() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// print();

// let num = 10;
// let num = 100;

// console.log(num);

// var num = 10;
// var num = 100;

// console.log(num);

//함수 호이스팅

// connectStrings("study", "hoisting");

// function connectStrings(str1, str2) {
//   console.log(str1 + str2);
// }

//변수 호이스팅

// console.log(num1);
// let num1 = 123;

//console.log(num2);
//var num2 = 123;

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a,b) => a+b;

// console.log(add(10, 20));

//콜백 함수

// const printResult = (a, b) => {
//   let result = a + b;
//   console.log("결과: " + result);
// };
// const doubleResult = (a, b) => {
//   let result = a + b;
//   console.log("결과에 2를 곱한 값: " + result * 2);
// };

// printResult(5, 3);
// doubleResult(5, 3);

// const calculate = (a, b, callback) => {
//   let result = a + b;
//   callback(result);
// };

// const printResult = (result) => {
//   console.log("결과: " + result);
// };
// const doubleResult = (result) => {
//   console.log("결과에 2를 곱한 값: " + result * 2);
// };

// calculate(5, 3, printResult);
// calculate(5, 3, doubleResult);

// const testFunc = (callback) => {
//   callback();
// };

// testFunc(() => {
//   console.log("콜백 함수 테스트");
// });

// testFunc(function () {
//   console.log("콜백 함수 테스트");
// });

// 생성자 함수, 리터럴

// let obj = new Object();
// let obj = {};
// console.log(obj);

//key value

// let book = {
//   title: "자바스크립트 첫걸음",
//   author: "김효빈",
//   cartegory: "자바스크립트",
//   year: undefined,
//   color: function () {
//     console.log("orange");
//   },
// };

// let car = {
//   name: "붕붕",
//   model: "morning",
//   color: "black",
// };

// console.log(car.name);
// console.log(car.color);

// console.log(car["name"]);
// console.log(car["model"]);
// console.log(car["color"]);

// const getValue = (key) => {
//   console.log(car[key]);
// };

// getValue("color");

// let cat = {
//   age: 2,
// };

// cat.name = "야옹이";
// cat["color"] = "white";

// console.log(cat);

// let cat = {
//   age: 2,
//   name: "야옹이",
//   color: "white",
// };

// cat.name = "옹이";
// cat["color"] = "yellow";

// console.log(cat);

// const cat = {
//   age: 2,
//   name: "야옹이",
//   color: "white",
// };

// cat.name = "옹이";
// cat["color"] = "yellow";

// cat = {
//   age: 3,
// };

// delete cat.color;
// delete cat["age"];

// console.log(cat);

// const person = {
//   name: "홍길동",
//   age: 23,
//   print: function () {
//     console.log("hello world");
//   },
// };

// const person = {
//   name: "홍길동",
//   age: 23,
//   print: function () {
//     console.log(`제 이름은 ${this.name}입니다.`);
//   },
// };

// person.print();
// person["print"]();

// let arr1 = new Array(1, 2, 3);
// let arr2 = new Array(3);

// console.log(arr1);
// console.log(arr2);

// let arr1 = [1, 2, 3];
// let arr2 = [3];

// console.log(arr1);
// console.log(arr2);

// let arr = [
//   { name: "홍길동" },
//   1,
//   "array",
//   function () {
//     console.log("hello world!");
//   },
//   null,
//   undefined,
// ];

// console.log(arr);

// let array = [1, "hello", null];

// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);

// let fruits = ["apple", "orange", "peach"];
// fruits.push("grape");
// fruits.unshift("grape");

// console.log(fruits);

// let animal = ["cat", "dog", "hamster"];
// const animal = ["cat", "dog", "hamster"];

// animal = ["cat", "rabbit", "hamster"];
// animal[2] = "parrot";

// console.log(animal);

// const colors = ["purple", "skyblue", "green", "yellow", "orange"];
// colors.pop();
// colors.shift();
// colors.splice(1, 3);

// console.log(colors);

// colors.pop();

// console.log(colors);
// console.log(colors.length);

// 생성자 함수
