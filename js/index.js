// 로그아웃 버튼 클릭 시 이벤트 발생
const logout = document.getElementById("logout");
const logout_box = document.getElementById("logout_box");

logout.addEventListener("click", function(e) {
    e.preventDefault();     // 기본 동작을 실행하지 않도록 지정
    logout_box.style.display = "block";     // logout_box의 스타일을 none에서 block으로 변경
    
})

// 수강 과목 + 버튼 클릭 시 이벤트 발생
const plus = document.getElementById("plus");
const create_subject_box = document.getElementById("create_subject_box");

plus.addEventListener("click", function(e) {
    e.preventDefault();
    create_subject_box.style.display = "block";     // logout_box의 스타일을 none에서 block으로 변경
})

// 로그아웃 취소, 수강 과목 생성 취소 버튼 클릭 시 이벤트 발생
let cancel = document.querySelectorAll(".cancel");

cancel.forEach((Element) => {
    Element.addEventListener("click", function(e) {
        e.preventDefault();
        logout_box.style.display = "none";
        create_subject_box.style.display = "none";
    })
})


// 수강 과목
const subject = {
    "data" : [
        {
            "subjectName" : "영양갱 경제학",
            "professor" : "왕찬현",
            "credit" : "3",
            "subjectType" : "교양"
        },
        {
            "subjectName" : "피카츄 백만볼트",
            "professor" : "박소희",
            "credit" : "3",
            "subjectType" : "전공"
          },
          {
            "subjectName" : "침팬치의 하루",
            "professor" : "전진우",
            "credit" : "3",
            "subjectType" : "전공"
        },
        {
            "subjectName" : "부팀장이란 무엇인가",
            "professor" : "옥승철",
            "credit" : "3",
            "subjectType" : "교양"
        },
        {
            "subjectName" : "알파메일의 삶",
            "professor" : "김유범",
            "credit" : "3",
            "subjectType" : "싸패"
        },
    ]
}

// const subjectData = document.getElementById("data");

// function createSubject() {
//     for (subjectList of subject) {
//         // const subjectList = document.createElement("li");
//         // subjectList.innerHTML = `${subjectList.subjectName}`;
//         // subjectData.appendChild(subjectList);
//         let li = document.createElement('li');
//         li.textContent = `${subjectList.subjectName}`;
//     }
// }
// createSubject();