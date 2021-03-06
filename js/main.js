/////////////프로파일 이미지 슬라이드///////////////////

const $next_button1 = document.querySelector(".next_button1");
const $next_button2 = document.querySelector(".next_button1 button");
const $pre_button1 = document.querySelector(".pre_button1");
const $pre_button2 = document.querySelector(".pre_button1 button");
const $container = document.querySelector(".container");
const $max = $container.childElementCount - 6
const $hiden = "hiden";
let withMax = 0
let length = -82;

function nextMove() {
    withMax += 1
    if (window.getComputedStyle($container).getPropertyValue("margin-left") === "-328px") {
        $next_button1.classList.add($hiden);
        return;
    } else {
        $container.style.marginLeft = `${length}px`;
        length -= 82
        $pre_button1.classList.remove($hiden);
    }
}

function preMove() {
    let now = parseInt(window.getComputedStyle($container).getPropertyValue("margin-left"));
    if (window.getComputedStyle($container).getPropertyValue("margin-left") === "0px") {
        $pre_button1.classList.add($hiden);
        return;
    } else if (window.getComputedStyle($container).getPropertyValue("margin-left") !== "0px") {
        now += 82
        $container.style.marginLeft = `${now}px`;
    }
}

$next_button2.addEventListener("click", nextMove);
$pre_button2.addEventListener("click", preMove);


/////////////////////////////////
///////업로드 이미지 슬라이드/////
////////////////////////////////

const $img_div = document.querySelector(".img_div");
const $img_pre = document.querySelector(".pre_button2");
const $img_next = document.querySelector(".next_button2");
const img_count = document.querySelectorAll(".upload_2 img");

if (window.getComputedStyle($img_div).getPropertyValue("margin-left") === "0px") {
    $img_pre.classList.add($hiden);
}

let count_img = 0;
let img_length = 0;
console.log(img_count.length);

function preImg() {
    let now2 = parseInt(window.getComputedStyle($img_div).getPropertyValue("margin-left"));
    if (window.getComputedStyle($img_div).getPropertyValue("margin-left") === "0px") {
        $img_pre.classList.add($hiden);
        return
    } else {
        now2 += 614;
        img_length = 0;
        $img_div.style.marginLeft = `${now2}px`;
        $img_next.classList.remove($hiden);
    }
}

function nextImg() {
    if (window.getComputedStyle($img_div).getPropertyValue("margin-left") === "-2456px") {
        $img_next.classList.add($hiden);
        return;
    } else {
        console.log()
        $img_div.style.marginLeft = `${img_length}px`;
        img_length += -614;
        $img_pre.classList.remove($hiden);
    }
}

$img_pre.addEventListener("click", preImg);
$img_next.addEventListener("click", nextImg);

/////////////////////////////////////
////////////////댓글/////////////////
////////////////////////////////////

const $button = document.querySelector(".upload3_first button");
const $heart = document.querySelector(".heart");
const $red_Heart = document.querySelector(".red_heart");
const $upload_First = document.querySelector(".upload_4 div:first-child");
const $reply_form = document.querySelector(".reply_form");
const $textarea = document.querySelector("textarea");
const $upload_6 = document.querySelector(".upload_6");
const $upload6_button = document.querySelector(".upload_6 button");
const dis_none = "dis_none";
const upload6_first = "upload6-first";

function toggleFuntion() {
    $red_Heart.classList.toggle(dis_none);
    const heart_Like = document.querySelector(`.${dis_none}`);
    if (!heart_Like) {
        $upload_First.innerHTML = "1";
    } else {
        $upload_First.innerHTML = "0";
    }
};

function replyKeydown(event) {
    if (event.keyCode == 13) {
        const $div = document.createElement("div");
        const $div_First = document.createElement("div");
        const $div_Second = document.createElement("div");
        $upload_6.insertBefore($div, $upload6_button);
        $div.classList.add(upload6_first);
        $div.appendChild($div_First);
        $div_First.innerHTML = "jonghyeok";
        $div.appendChild($div_Second);
        $div_Second.innerHTML = $textarea.value;
        $textarea.value = "";
    }
};

function replySubmit(event) {
    event.preventDefault();
    const $div = document.createElement("div");
    const $div_First = document.createElement("div");
    const $div_Second = document.createElement("div");
    $upload_6.insertBefore($div, $upload6_button);
    $div.classList.add(upload6_first);
    $div.appendChild($div_First);
    $div_First.innerHTML = "jonghyeok";
    $div.appendChild($div_Second);
    $div_Second.innerHTML = $textarea.value;
    $textarea.value = "";
};

$button.addEventListener("click", toggleFuntion);
$reply_form.addEventListener("keydown", replyKeydown);
$reply_form.addEventListener("submit", replySubmit);
