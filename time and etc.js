const HEADERTODO = document.querySelectorAll("#headerTodo");
const TODOFORM = document.querySelectorAll("div>form"); 
const NEWTODO1 = "NEWTODO1";
const NEWTODO2 = "NEWTODO2";
const NEWTODO3 = "NEWTODO3";

const TODOtextarea1 = TODOFORM[0].querySelector("textarea:first-child");
const TODOtextarea2 = TODOFORM[1].querySelector("textarea:first-child");
const TODOtextarea3 = TODOFORM[2].querySelector("textarea:first-child");
const XTodoButton = document.querySelector("button:first-of-type");
const setTodoButton = document.querySelector("button:nth-child(2)");

let TODOLIST1=[];
let TODOLIST2=[];
let TODOLIST3=[];


function setTodo(){
  event.preventDefault();
  const TODO1 = {text: TODOtextarea1.value, id: Date.now()} ;
  TODOtextarea1.value = "";
  TODOLIST1.push(TODO1);
  saveTodo();
  paintTodo(TODO1);
}

function saveTodo(){
  localStorage.setItem("NEWTODO1", JSON.stringify(TODOLIST1));
}

function paintTodo(){
  const TODO1 = {text: TODOtextarea1.value, id: Date.now()} ;
  TODOFORM[0].classList.add('hidden');
  HEADERTODO[0].innertext = TODO1.text;
}

function deleteTodo(){
  localStorage.removeItem(NEWTODO1);
  saveTodo();

}


setTodoButton.addEventListener("click", setTodo);
XTodoButton.addEventListener("click", deleteTodo);


// 오류: JSON은 {} 꼴로 되어야...

const getTodo = localStorage.getItem(NEWTODO1);

if ((getTodo !== null) && (getTodo !== "")) {
  const parsedListTodo = JSON.parse(getTodo); 
  TODOLIST1 = parsedListTodo; 
  parsedListTodo.forEach(paintTodo);
} // 여기서 막히네...


// 함수를 세 개 만들어야하나??

// index에 해당하는 form 에서 submit을 할 때
// 그 값을 array에 push     array.push(value);
// 새로운 array JSON 형식으로 저장 localStorage.setItem("KEY", Json.stringify(array));
// paint 함수: 폼 hidden, div innertext가 textarea 값
// 아이디어: form index를 해당 배열의 id로 부여할까???
// array 형태로 들어가야하나??


