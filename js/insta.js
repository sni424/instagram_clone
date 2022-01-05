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
            preSlide.classList.remove(DISAPPEARED_CLASS);
        } else {//마지막 이미지여서 다음 형제가 없다면
            preSlide.classList.remove(DISAPPEARED_CLASS);
            firstSlide.classList.add(SHOWING_CLASS);//처음에 다시 추가
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide, 5000);