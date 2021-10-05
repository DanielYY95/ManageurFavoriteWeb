const LI = document.body.querySelectorAll('div>li');
const BasicA = document.body.querySelectorAll('li>a');
const BasicForm = document.body.querySelectorAll("#Basictodo");
// 공통

const SBUTTON = document.querySelectorAll("#setbutton");
const NameInput = BasicForm[0].querySelector("input:first-child");
const UrlInput = BasicForm[0].querySelector("input:nth-child(2)");
const sButton = BasicForm[0].querySelector("button:first-of-type");
// FROM의 인덱스에 따라 

const NEWLIST = "nList";

let nList = []; 

function saveBasic() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
}

//1.
function deleteBasic() {
  const newBasic = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  localStorage.removeItem(NEWLIST);
  nList = nList.filter((toBye) => toBye.id !== parseInt(BasicForm[0].id));
  saveBasic();
  paintBasic(newBasic);
  LI[0].querySelector("button").remove();
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

// id를 event.target같은 걸 활용할까?

//2.
function setBasicTodo() {
  event.preventDefault();
  const newBasic = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  NameInput.value = "";
  UrlInput.value = "";
  nList.push(newBasic); 
  saveBasic();
  paintBasic(newBasic); 
  createX();
}

//3.
function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[0].appendChild(xButton);
  xButton.addEventListener("click", deleteBasic);
} 

//4.
function paintBasic(newBasic) {
  BasicForm[0].classList.add("hidden");
  BasicA[0].innerText = newBasic.nickname;
  BasicA[0].href = newBasic.url;
  BasicForm[0].id = newBasic.id;
} 

sButton.addEventListener("click", setBasicTodo);

const getBasic = localStorage.getItem(NEWLIST);

if ((getBasic !== null) && (getBasic !== '[]')) {
  const parsedList = JSON.parse(getBasic);
  nList = parsedList; 
  parsedList.forEach(paintBasic); 
  createX();
}
