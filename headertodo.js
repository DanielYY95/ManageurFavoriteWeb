const HEADERTODO = document.querySelectorAll("#headerTodo");
const TODOFORM = document.querySelectorAll("div>form"); 
const NEWTODO1 = "NEWTODO1";
const NEWTODO2 = "NEWTODO2";
const NEWTODO3 = "NEWTODO3";

const TODOINPUT1 = TODOFORM[0].querySelector("input:first-child");
const TODOINPUT2 = TODOFORM[1].querySelector("input:first-child");
const TODOINPUT3 = TODOFORM[2].querySelector("input:first-child");
const XTodoButton = document.querySelector("button:first-of-type");

let TODOLIST1=[];
let TODOLIST2=[];
let TODOLIST3=[];


function setTodo(){
  event.preventDefault();
  const TODO1 = TODOINPUT1.value;
  TODOINPUT1.value = "";
  TODOLIST1.push(TODO1);
  saveTodo();
  paintTodo(TODO1);
}

function saveTodo(i){
  localStorage.setItem("NEWTODO1", TODOLIST1);
}

function paintTodo(x){
  TODOFORM[0].classList.add('hidden');
  HEADERTODO[0].innertext = "x";
}

function deleteTodo(){
  localStorage.removeItem(NEWTODO1);
  saveTodo();

}

TODOFORM[0].addEventListener("submit", setTodo);
XTodoButton.addEventListener("click", deleteTodo);


// 오류: JSON은 {} 꼴로 되어야...

const getTodo = localStorage.getItem(NEWTODO1);

if ((getTodo !== null) && (getTodo !== "")) {
  //const parsedList = JSON.parse(getTodo); 
  //TODOLIST1 = parsedList; 
  //parsedList.forEach(paintTodo);
  HEADERTODO[0].innertext = "getTodo";
} // 여기서 막히네...


// 함수를 세 개 만들어야하나??

// index에 해당하는 form 에서 submit을 할 때
// 그 값을 array에 push     array.push(value);
// 새로운 array JSON 형식으로 저장 localStorage.setItem("KEY", Json.stringify(array));
// paint 함수: 폼 hidden, div innertext가 input 값
// 아이디어: form index를 해당 배열의 id로 부여할까???
// array 형태로 들어가야하나??
// deleteTodo가 바로 안되는문제

