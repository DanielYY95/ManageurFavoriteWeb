
const A = document.body.getElementsByTagName('a');
const LI = document.body.getElementsByTagName('li');
const FORM = document.body.querySelectorAll("#asd");
const SBUTTON = FORM.querySelectorAll("#setbutton");

const NEWLIST = "nList";

let nList = [];

function saveData() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
}

function SETCONST(x){
  const NameInput = FORM[x].querySelector("input:first-child");
  const UrlInput = FORM[x].querySelector("input:nth-child(2)");
}

function DELETESHIT(x) {
  const newData = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  localStorage.removeItem(NEWLIST);
  nList = nList.filter((toBye) => toBye.id !== parseInt(FORM[x].id)); //필터한 새로운 array 설정 
  saveData();
  paintData(newData);
  alert("해당 즐겨찾기를 삭제하였습니다.");
}

function CREATESHIT(x) {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  LI[x].appendChild(xButton);
  xButton.addEventListener("click", deleteData);
}

function PAINTSHIT(newData) {
  FORM[x].classList.add("hidden");
  A[x].innerText = newData.nickname;
  A[x].href = newData.url;
  FORM[x].id = newData.id;
}

function TOP(){
  const x=1;
  SETCONST(x);
  CREATESHIT(x);
  PAINTSHIT(newData);

}

function SETSHIT() {
  event.preventDefault();
  const x=1;
  SETCONST(x);
  const newData = { nickname: NameInput.value, url: UrlInput.value, id: Date.now() };
  NameInput.value = "";
  UrlInput.value = "";
  nList.push(newData); 
  saveData();
  PAINTSHIT(newData);
  CREATESHIT(x);

}

SBUTTON.addEventListener("click", SETSHIT);


const getData = localStorage.getItem(NEWLIST);

if ((getData !== null) && (getData !== '[]')) {
  const parsedList = JSON.parse(getData); // 각 값에 인덱스 부여
  nList = parsedList; // 인덱스가 부여된 상태 유지 
  parsedList.forEach(paintData); // 위 과정들을 유지한 상태에서 각 값에 paintData 적용
  createX();
}

/* 에러
TypeError: SBUTTON.addEventListener is not a function
    at /TEST.js:65:9    
- button 을 id를 통해 querySelectorAll로 불렀더니 이런 에러가....

TypeError: Cannot read property 'querySelector' of undefined
    at noEnter (/time%20and%20etc.js:29:26)
    at /time%20and%20etc.js:37:1

*/


// 에러 천국...... 이것저것 막 꼬이네...
