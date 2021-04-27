// html tag 변수에 담기
document.getElementById();

// innerHTML 사용하기
document.body.innerHTML = CODE;

// 이벤트 추가하기
```
ex1.)
    <div onclick="console.log('click')">
        click here.
    </div>

ex2.)
    <div id="divBox">
        click here.
    </div>
    <script>
        var divBox = document.getElementById("divBox");

        divBox.addEventListener("click",function(){
            console.log("click");
        });
    </script>
```
// json 형식 변환하기
JSON.stringify
JSON.parse

// localstorage 사용하기
localStorage.setItem("name",value); // <= 문자열만 저장하자
localStorage.getItem("name");