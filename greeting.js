const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");
//class변수 정의

const USER_LS = "currentUser",
    SHOWING_ON = "showing";
//constant 생성

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event) {
    //event 기본 동작 금지
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}
function loadName() {
    //localStorage.setItem("key값",value값); 
    //localStorage.getItem("key값");
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        //user가 없는 경우
        askForName();

    }else {
        //user가 있는 경우
        paintGreeting(currentUser);

    }
}
function init() {
    loadName();
}

init();