// 로그아웃 취소, 수강 과목 생성 취소 버튼 클릭 시 이벤트 발생
let cancel = document.querySelectorAll(".cancel");

cancel.forEach((Element) => {
    Element.addEventListener("click", function(e) {
        e.preventDefault();
        logout_box.style.display = "none";
        create_subject_box.style.display = "none";
        update_subject_box.style.display = "none";
        delete_box.style.display = "none";
    });
});

// 수강 과목
const subjectData = {
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

function create_subject() {
    let html = "";

    for (let sd of subjectData.data) {
        html += `
        <ul class="data">
        <li class="list">${sd.subjectName}</li>
        <li class="list">${sd.professor}</li>
        <li class="list">${sd.credit}</li>
        <li class="list">${sd.subjectType}</li>
        <li><button class="setting">설정</button></li>
        </ul>
        `
    }
    document.getElementById("subjectList").innerHTML = html;
}
create_subject();

// 로그아웃 버튼 클릭 시 이벤트 발생
const logout = document.getElementById("logout");
const logout_box = document.getElementById("logout_box");

logout.addEventListener("click", function(e) {
    e.preventDefault();     // 기본 동작을 실행하지 않도록 지정
    logout_box.style.display = "block";     // logout_box의 스타일을 none에서 block으로 변경
    
});

// 수강 과목 + 버튼 클릭 시 이벤트 발생
const plus = document.getElementById("plus");
const create_subject_box = document.getElementById("create_subject_box");

plus.addEventListener("click", function(e) {
    e.preventDefault();
    create_subject_box.style.display = "block";     // logout_box의 스타일을 none에서 block으로 변경
});

// 수강 과목 생성에서 생성 버튼 클릭 시 이벤트 발생
const create = document.querySelector(".create");                           // 생성 버튼
const subject_container = document.getElementById('subject_container');     // 생성 버튼 클릭 시 ul이 추가될 div
const Ul = subject_container.querySelector('.data');                        // data 클래스 가져오기
const list = document.querySelectorAll(".list");

create.addEventListener("click", function(e) {
    e.preventDefault();
    const newUl = document.createElement('ul');         // 새로운 ul 태그 생성
    newUl.className = 'data';                           // 새로 생긴 ul 태그는 data 클래스
    const newLi = Ul.cloneNode(true);                   // Ul(data) 노드 복사, true라서 하위 노드까지 모두 복사
    create_subject_box.style.display = "none";
    subject_container.appendChild(newUl);               // subject_container div에 새로운 ul 태그 추가
    newUl.appendChild(newLi);                           // 새로 추가된 ul에 복제된 노드 추가
});


// 수강 과목 설정 버튼 클릭 시 이벤트 발생
const setting = document.querySelectorAll(".setting");
const setting_button = document.querySelector(".setting_button");



// setting.addEventListener("click", function(e) {
//     const clickX = e.clientX;
//     const clickY = e.clientY;

//     setting_button.style.left = clickX + "px";
//     setting_button.style.top = clickY + "px";
//     setting_button.style.display = "block";
// });

// setting_button.addEventListener("click", function(e) {
//     e.stopPropagation();
//     setting_button.style.display = "none";
// });

// // // 설정 버튼이랑 설정 버튼 클릭 시 나오는 레이어 아닌 부분 클릭 시 설정 레이어 사라지는 이벤트
// document.addEventListener("click", function(e) {
//     if(e.target !== setting && e.target !== setting_button) {
//         setting_button.style.display = "none";
//     }
// })


// 수정 버튼 클릭 시 이벤트 발생
const update_button = document.querySelector(".update_button");
const update_subject_box = document.getElementById("update_subject_box");

update_button.addEventListener("click", function(e) {
    e.preventDefault();
    update_subject_box.style.display = "block";       // update_subject_box의 스타일을 none에서 block으로 변경
});

// 제거 버튼 클릭 시 이벤트 발생
const delete_button = document.querySelector(".delete_button");
const delete_box = document.getElementById("delete_box");

delete_button.addEventListener("click", function(e) {
    e.preventDefault();
    delete_box.style.display = "block";
});


// 이수 학점 넣기
const scoreData = {
    "data" : {
        "totalCredits" : 60,
        "majorCredit" : 24,
        "liberalArtsCredit" : 36
    }
}

function create_score() {
    let scoreList =
    `
    <li><h4>${scoreData.data.totalCredits} / 120</h4></li>
    <li><h4>${scoreData.data.majorCredit} / 80</h4></li>
    <li><h4>${scoreData.data.liberalArtsCredit} / 40</h4></li>
    `
    document.getElementById("score").innerHTML = scoreList;
}
create_score();


// 시간표 넣기
const timetable = {
    "data" : {
        "monday" : {
            "1":"영양갱 경제학",
            "2":"피카츄 백만볼트",
            "3":"",
            "4":"침팬치의 하루",
            "5":""
        },
        "tuesday" : {
            "1":"",
            "2":"피카츄 백만볼트",
            "3":"",
            "4":"침팬치의 하루",
            "5":"알파메일의 삶"
        },
        "wednesday" : {
            "1":"영양갱 경제학",
            "2":"",
            "3":"",
            "4":"",
            "5":"부팀장이란 무엇인가"
        },
        "thursday" : {
            "1":"부팀장이란 무엇인가",
            "2":"피카츄 백만볼트",
            "3":"알파메일의 삶",
            "4":"",
            "5":""
        },
        "friday" : {
            "1":"",
            "2":"",
            "3":"",
            "4":"",
            "5":""
        }
    }
}