const title = document.querySelector("#title");
title.innerHTML = "Hi From JS";
console.log(title);
document.title = "I own you now";

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
    title.addEventListener("click",handleClick);
}
init();