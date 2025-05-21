function sayHello() {
    console.log("Hello");
}

//() -> function을 실행하라는 뜻
//sayHello(); // function을 실행하라는 뜻

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is"+nameOfPerson+"and I'm "+ age+" years old");
}
sayHello("yeayoung", 25);
sayHello("elly", 23);
sayHello("jaehoen", 22);

function plus( fristNumber,sencondNumber) {
    console.log(fristNumber + sencondNumber);
}
// NaN은 Not a Number의 약자 (숫자가 아님)

plus(5, 2);

function divide(a,b){
 console.log(a/b);
}

divide(98, 20); 

const player ={
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello"+ otherPersonsName+" nice to meet you");
    },
};

console.log(player.name)
player.sayHello("lynn");