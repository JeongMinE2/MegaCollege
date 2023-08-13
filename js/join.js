// 생성 버튼 클릭 시 이벤트 발생
const create = document.querySelector(".create");
const join_completion_box = document.getElementById("join_completion_box");

create.addEventListener("click", function(e) {
    e.preventDefault();
    join_completion_box.style.display = "block";
})

// 확인 버튼 클릭 시 창 닫기
const check = document.querySelectorAll(".check");

check.forEach((e) => {
    e.addEventListener("click", function(e) {
        e.preventDefault();
        join_completion_box.style.display = "none";
    })
})

// 취소 버튼 클릭 시 브라우저 닫기
const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", function() {
    window.close();
})