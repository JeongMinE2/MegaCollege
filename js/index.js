// 로그아웃 버튼 클릭 시 이벤트 발생
let logout = document.getElementById("logout");
let logout_box = document.getElementById("logout_box");

logout.addEventListener("click", function(e) {
    e.preventDefault();     // 기본 동작을 실행하지 않도록 지정
    logout_box.style.display = "block";     // logout_box의 스타일을 none에서 block으로 변경
    
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

function createSubject() {
    for (subjectList of subject) {
        // const subjectList = document.createElement("li");
        // subjectList.innerHTML = `${subjectList.subjectName}`;
        // subjectData.appendChild(subjectList);
        let li = document.createElement('li');
        li.textContent = `${subjectList.subjectName}`;
    }
}
createSubject();