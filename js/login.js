// 로그인 버튼 클릭 시 비밀번호 불일치 이벤트 발생
const login = document.getElementById("login");
const login_false_box = document.getElementById("login_false_box");

login.addEventListener("click", function(e) {
    e.preventDefault();
    login_false_box.style.display = "block";
})

// 확인 버튼 클릭 시 창 닫기
let check = document.querySelectorAll(".check");

check.forEach((Element) => {
    Element.addEventListener("click", function(e) {
        e.preventDefault();
        login_false_box.style.display = "none";
    })
})