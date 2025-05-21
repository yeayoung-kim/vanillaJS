//calculator 만들기 
//조건: a+b, a-b, a/b, a**b
//하단 코드: calculator.add(1, 2)

const calculator= {
    add: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b) {
        console.log(a-b);
    },
    division: function(a, b){
        console.log(a/b);
    },
    Square: function(a, b){
        console.log(a**b);
    }

}
calculator.add(3, 4)
calculator.minus(2, 4)
calculator.division(6, 2)
calculator.Square(1, 2)