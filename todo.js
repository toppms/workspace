const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
//toDos를 담을 array 생성
let toDos = [];
let idNum = 1;
//toDo 삭제 
function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //filter = array의 모든 아이템을 통해 함수를 실행
    //true인 아이템들만 가지고 새로운 array 생성
    //filterFn이 체크가 된 아이템들의 array
    const cleanToDos = toDos.filter(function(toDo) {
       //모든 toDos가 li의 id와 같지 않을 때
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();

}
//로컬 스토리지에 toDos 저장
function saveToDos(){
    //toDos는 Object 형태로 String으로 변환하여 저장
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));

}
//toDos 표시
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    //toDos array는 null인 상태이므로 + 1
    const newId = idNum;
    idNum += 1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    //fatherElement에 ChildElement 추가
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    //toDoObj 오브젝트 생성
    const toDoObj = {
        text : text,
        id : newId
    }
    //toDos Array에 toDoObj 푸쉬
    toDos.push(toDoObj);
    //로컬 스토리지에 저장
    saveToDos();
}
//제출 핸들러
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        //string을 Object로 변환
        const parsedToDos = JSON.parse(loadedToDos);
        //array에 담긴 것들을 뽑아내기 위해 각각 한번씩 함수를 실행
        parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);
        });
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();