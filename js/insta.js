const SHOWING_CLASS = "show";
const DISAPPEARED_CLASS = "disappeared";
const firstSlide = document.querySelector(".img_one:first-child");
const lastSlide = document.querySelector(".img_one:last-child")

function slide() {
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if (currentSlide) {
        currentSlide.classList.remove(SHOWING_CLASS);
        lastSlide.classList.remove(DISAPPEARED_CLASS);
        currentSlide.classList.add(DISAPPEARED_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        const preSlide = currentSlide.previousElementSibling;
        if (nextSlide) {//마지막이 아니라면
            nextSlide.classList.add(SHOWING_CLASS);
            preSlide?.classList.remove(DISAPPEARED_CLASS);
        }
        else {//마지막 이미지여서 다음 형제가 없다면
            preSlide.classList.remove(DISAPPEARED_CLASS);
            firstSlide.classList.add(SHOWING_CLASS);//처음에 다시 추가
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide, 5000);

//로그인
const login_Form = document.querySelector(".login_first")
const first_Input = document.getElementById("first_value");
const second_Input = document.getElementById("second_value");
const login_Button = document.querySelector(".login_text");

console.log(first_Input.value.length);
console.log(first_Input);
console.log(second_Input);
function login(event) {
    event.preventDefault();
    if (first_Input.value === "insta_clone" || second_Input.value === "12345") {
        location.href = "main.html";
    } else {
        alert("아이디 혹은 비밀번호를 다시한번 확인해주세요.")
    }
}

function changeColor(event) {
    event.preventDefault();
    if (first_Input.value === "insta_clone" && second_Input.value === "12345") {
        login_Button.style.background = "rgba(var(--d69,0,149,246),1)";
    } else if (first_Input.value !== "insta_clone" || second_Input.value !== "12345") {
        login_Button.style.background = "rgb(178, 223, 252)";
    }

}
login_Form.addEventListener("keyup", changeColor);
login_Form.addEventListener("submit", login);
