// 이 예제는 js에서 입출력하는 방법을 다룹니다.


//================= 출력함수 console.log(),alert() =================

// console.log(); | 콘솔창에 값을 출력합니다.

    console.log("hi"); // hi
    console.log("hi"+"bye") // hibye
    console.log("hi","bye") // hi bye

// alert(); | 웹에서 경고창이 나타나 값을 출력합니다.

    alert("hi"); // 경고창 "hi"

//================= 입력함수 prompt(),confirm() =================

// prompot(); | 사용자가 입력한 값을 받을수 있습니다.
    var name = prompt("당신의 이름을 입력하세요."); 
    console.log(name); 

// confirm(); | 사용자의 확인(true,false)을 받을수 있습니다. 
    var result = confirm("동의하시겠습니까?");
    console.log(result);