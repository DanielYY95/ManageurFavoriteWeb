const LI = document.body.querySelectorAll('div>li');
const BasicA = document.body.querySelectorAll('li>a');
const BasicForm = document.body.querySelectorAll("#Basictodo");
const BasicDiv = document.querySelectorAll("fourthBox>div");
const SBUTTON = document.querySelectorAll("#setbutton");
// 공통

const NameInput = BasicForm[0].querySelector("input:first-child");
const UrlInput = BasicForm[0].querySelector("input:nth-child(2)");
const sButton = BasicForm[0].querySelector("button:first-of-type");
const NEWLIST = "nList";
let nList = []; 

// FROM의 인덱스에 따라 
// 아예 처음부터 nList = [{},{},{}]를 만들까?


function saveBasic() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
}
// 인덱스를 변수로


// X버튼 누를 때 div를 target으로 가리키게하고, 이것의 하위 태그인 Form과 Li를 불러온다. 허나, x버튼이 Li의 하위태그인디..... 
//1. Form 인덱스와 LI 인덱스. 현재 Form 과 Li는 div 소속 형제 태그들
function deleteBasic() {
  const newBasic = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  localStorage.removeItem(NEWLIST);
  nList = nList.filter((toBye) => toBye.id !== parseInt(BasicForm[0].id));
  saveBasic();
  paintBasic(newBasic);
  LI[0].querySelector("button").remove();
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

//2. NameInput, UrlInput, nList 인덱스 부여 필요,
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

//3. Li인덱스 부여
function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[0].appendChild(xButton);
  xButton.addEventListener("click", deleteBasic);
} 

//4. Form 과 A 태그의 인덱스 부여
function paintBasic(newBasic) {
  BasicForm[0].classList.add("hidden");
  BasicA[0].innerText = newBasic.nickname;
  BasicA[0].href = newBasic.url;
  BasicForm[0].id = newBasic.id;
} 

// sButton의 인덱스 부여 필요
sButton.addEventListener("click", setBasicTodo);

// 불러오는 매개변수의 인덱스 필요
const getBasic = localStorage.getItem(NEWLIST);

// nList 인덱스 필요
if ((getBasic !== null) && (getBasic !== '[]')) {
  const parsedList = JSON.parse(getBasic);
  nList = parsedList; 
  parsedList.forEach(paintBasic); 
  createX();
}
