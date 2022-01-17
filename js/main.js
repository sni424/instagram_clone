const $button = document.querySelector(".upload3_first button");
const $heart = document.querySelector(".heart");
const $red_Heart = document.querySelector(".red_heart");
const $upload_First = document.querySelector(".upload_4 div:first-child");
const dis_none = "dis_none";

function toggleFuntion() {
    $red_Heart.classList.toggle(dis_none);
    const heart_Like = document.querySelector(`.${dis_none}`);
    if (!heart_Like) {
        $upload_First.innerHTML = "1";
    } else {
        $upload_First.innerHTML = "0";
    }
};

$button.addEventListener("click", toggleFuntion);
