// 이 예제는 js에서 기본 문법을 다룹니다. 변수선언,조건문,반복문,배열,객체,함수

//================= 변수선언 var =================

// js에서는 int,char,long 처럼 자료형을 구분하지 않음 

    var string = "this is string";      // 문자열
    var number = 123;                   // 숫자 (정수)
    var number = 123.456;               // 숫자 (실수)
    var bool = true;                    // 불리언
    var array = [1,2,3];                // 배열
    var object = {name:"수아",age:18};  // 객체

    var a = undefined;                  // 값을 모름 ( 개발자가 값을 넣지 않음 )
    var b = null;                       // 값을 모름 ( 개발자가 값을 일부러 넣지 않음 )

//================= 조건문 if =================
    var a = 30;
    var b = 50;

    if(a > b){ // > , < , <= , >= , ==  , ===
        console.log("true");
    } else{
        console.log("false");
    }

// "==" 과 "===" 차이 https://dorey.github.io/JavaScript-Equality-Table/
    1 == 1      // true
    1 == "1"    // true
    1 === "1"   // false

    undefined == null // true
    undefined === null // false

//================= 반복문 for,while ================= 

    for(var i=0; i<10; i++){
        console.log(i);
    }


    var i = 0;

    while(i < 10){
        console(i);
        ++i;
    }

//================= 배열 [] | 숫자로 구별 =================

    var fruits = ['사과', '바나나'];

    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits[1]);

    fruits[2] = prompt("좋아하는 과일을 입력하세요");

    console.log(fruits);

    for(var i = 0; i<fruits.length; i++){
        console.log(fruits[i]);
    }

    // 배열 심화 문제 : 10번 값을 입력받고 배열에 담아 출력하시요.
        var arr = [];
        for(var i=0; i<10; i++){
            arr[arr.length] = prompt(i+"번째 : 좋아하는 과일을 입력하세요.");
        }

//================= 객체 {} | 이름으로 구별 =================

    var person = {
        name:"수아",
        age:18,
        shcool:"dgsw"
    };

    console.log(person);
    console.log(person.name);
    console.log(person.age);
    console.log(person.school);

    person.food = "초밥";

    console.log(person);

//================= 함수 function(){} =================

    // 기본 함수
    function alertHello(){      
        alert("Hello");
    }

    // 매개변수가 있는 함수
    function alertString(data){ 
        alert(data);
    }

    // 리턴이 있는 함수 return 을 하면 함수는 종료됨
    function add(a,b){ 
        return a + b;
    }

    function sub(a,b){ // 결과는 ?

        console.log("1");

        return a - b;

        console.log("2");
    }

