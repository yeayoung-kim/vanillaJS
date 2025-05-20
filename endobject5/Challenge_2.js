/* 2 <- integer
1.5 <- float 
"hello" <- text
"hello" + "my name is yeauoung" <- string
*/

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// variable -> 값을 저장하거나 유지하는 역할을 함

const a = 5;
const b = 2;
const veryLongVariableName = 0; 
//띄어쓰기 필요한 부분을 대문자로 바꿈 -> camelCass (낙타모양)
// 주로 자바스크립트에서 많이 씀
const very_long_variable_name =0;
// 주로 파이썬에서 많이 씀 -> snake_cass (뱀 모양)
// 파이썬은 const가 필요하지 않음
// 코드가 어떻게 구성되어야 하는지를 규정하는 규칙 = syntax
const myName = " yeayoung";


console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello"+myName);
let myName2 = "yeayoung";

// constant = const (상수) -> 값이 바뀔 수 없음
// let -> 값을 바꿀 수 있음
// const로 거의 만들고, 때에 따라서 let를 사용함

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello"+myName);

myName2 = "yeayoung2";
console.log("hello"+ myName2);

// var는 원한다면 언제든지 업데이트할수있음 -> 규칙이 없음
// var는 절대쓰지 말기


// boolean -> true / false

const amIFat = true;
const amISkinny = false;
const nothing = null;
let something;
console.log(nothing);
console.log(something);
//ull -> 값은 있는데 비어있는 상태, undefined -> 메모리에 변수는 주어졌지만,값은 주어지지 않은 상태
console.log(something,nothing);
//파이썬 None(null)를 사용함
// 파이썬 True  False를 사용함

const mon = "mom";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(dayOfWeek);
const dayOfWeek2 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek2[3]);
//Get Item from Array
console.log(dayOfWeek2[4]);


//Add one more day to the array
dayOfWeek2.push("sun");

console.log(dayOfWeek2);

//설명이 필요하지 않은 데이터 리스트들은 array로,
//설명이 필요한 정보가 담긴 데이터 리스트들은 object로 활용

/* const playerName ="yeayoung";
const playerPoints =1212;
const playerHandsome = false;
const playerSkiiny ="little bit"; */

const player = { //object
    name: "yeayoung",
    points: 10,
    fat: true,
};
console.log(player.points);
console.log(player.name);
console.log(player["name"]);
console.log(player);
player.fat=false; 
console.log(player);

player.lastName = "potato";
player.points =player.points+15;
console.log(player.points);


