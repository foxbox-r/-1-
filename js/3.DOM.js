// 이 예제는 js에서 DOM을 다룹니다.

//================= DOM 이란? =================

    // Document(html의 모든 태그) Object(js객체) Model(인식하는 방식,형식)의 약자

//================= CRUD 란? =================

    // Create(생성) Read(조회) Update(수정) Delete(삭제) 의 약자임.
    // CURD만 알면 거의 모든 프로그램을 만들수 있음. sns,blog ..

//================= Element(요소),Attribute(속성) =================

    // Element(요소) : A 태그
    // Attribute(속성) : id , class , href

        <a id="naver_link" class="link" href="https://www.naver.com/">Naver link</a>

//================= Element 찾기 =================

    // id로 찾기

        document.getElementById(id);

    // class로 찾기

        document.getElementsByClassName(class); // 배열로 반환

    // 태그이름로 찾기

        document.getElementsByTagName(tag); // 배열로 반환

    // querySelector : CSS 선택자와 같음

        document.querySelector("#id");      // 아이디로 찾기

        document.querySelector(".class");   // 클래스로 찾기 (클래스중 제일 첫번째 Element 반환)

        document.querySelectorAll(".class"); // 클래스로 찾기 (배열 반환) 

        document.querySelector("tagName");   // 태그이름로 찾기 (태그중 제일 첫번째 Element 반환)
    
        document.querySelectorAll("tagName"); // 태그이름으로 찾기 (배열 반환)

//================= 속성 (Read,Update) =================

    // Read , Update
    // 조회 Element.getAttribute("속성이름"), 변경 Element.setAttribute("속성이름","값")
        
        // index.html

            <html>
                <body>
                    <h1 id="title">hi my website.</h1>
                </body>
            </html>

        // index_01.js (방법 : Attribute) Attributes are defined by HTML, all definitions inside HTML tag are attributes.

            var title = document.documentElement("title"); // document.querySelector("#title");
            
            console.log(title.getAttribute("id"));  // title 의 id 속성 보기

            title.setAttribute("id","Title");       // title 의 id 속성 변경하기

            console.log(title.getAttribute("id"));  // title 의 바뀐 id 속성 보기

        // index_02.js (방법 : Property) Properties belong to DOM is an object in JavaScript

            var title = document.documentElement("title"); // document.querySelector("#title");
        
            console.log(title.id);      // title 의 id 속성 보기

            title.id = "Title";       // title 의 id 속성 변경하기

            console.log(title.id);    // title 의 바뀐 id 속성 보기

        // Element.getAttribute 와 Element.attribute 의 차이점

            <a class="link" href=".">link</a>

            var a = document.querySelector(".link");

            console.log(a.getAttribute("class"));       // "link"
            console.log(a.getAttribute("className"));   // null

            console.log(a.class);                       // undefined ( class 는 예약어임 )
            console.log(a.className);                   // "link"

            <input id="input" value="good." placeholder="insert you string." />

            var input = document.querySelector("#input");

            console.log(input.value);
            console.log(input.getAttribute("value"));
            
//================= 속성 (Create,Delete) =================

    // Create , Delete
    // 생성 Element.createElement("태그이름"), 삭제 Element.remove()

    var a = document.createElement("A");
    a.href = "https://www.naver.com/";
    a.innerText = "naver link";

    console.log(a);

    document.body.appendChild(a); // 태그 추가

    a.remove(); // 태그 삭제

//================= 계산기 만들어 보기 =================