// 생성 버튼 클릭 시 이벤트 발생
const create = document.getElementById("create");
const join_completion_box = document.getElementById("join_completion_box");

create.addEventListener("click", function(e) {
    e.preventDefault();
    join_completion_box.style.display = "block";
})

// 확인 버튼 클릭 시 창 닫기
let check = document.querySelectorAll(".check");

check.forEach((Element) => {
    Element.addEventListener("click", function(e) {
        e.preventDefault();
        join_completion_box.style.display = "none";
    })
})