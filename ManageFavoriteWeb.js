// 클래스 이름: nth-child(N));
// const N = 눌렀을 때 해당되는 index, onclick 이벤트했을 때 findindex
// 그리고 그 index를 확인했으면 nth-child(index)에 해당하는 태그에 ㄱㄱ

// x button의 경우, id같은 걸 따로 부여해줘야할 듯... 아닌가... 뭔가 좀 애매하네... button[]가 아니라 해당되는 form 안에 있는 두번째 button을 지우는 방식 같은 걸로 해야할 듯...

// 문제
// 1. input에 값을 입력했는데 storage에는 "" 가 들어가는 문제...


function main(){
  const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
  const FORM = document.body.getElementsByTagName('form');
  const LI = document.body.getElementsByTagName('li');
    for (i = 0; i < A.length; i++) {
      function aa(idx){
        FORM[idx].submit = function bb(event){
          event.preventDefault();
          function setWeb(idx){
              const newData= {nickname: NameInput.value, url: UrlInput.value, id:Date.now()};
              NameInput.value = "";
              UrlInput.value = "";
              nList.push(newData); // array에 저장
              saveData();
              paintData(newData, idx);
        }

          function createX(idx){
              const xButton = document.createElement('button');
              xButton.innerHTML = "❌";
              LI[idx].appendChild(xButton); 
              xButton.addEventListener("click", deleteData); 
        }
          function paintData(newdata, idx){
              FORM[idx].classList.add("hidden");
              A[idx].innerText = newData.nickname;
              A[idx].href = newData.url;
              FORM[idx].id = newData.id; 
              li[idx].onclick = ""; 
              A[idx].onclick = "";
            } 
          }

        }
      }(i);
}


main();







const firfir = document.body.querySelector(".firfir");
const first_1 = firfir.querySelector(".first_first");
const first1_Form = document.body.querySelector("#first_1_Form");
const first1_NameInput = first1_Form.querySelector("input:first-child");
const first1_UrlInput = first1_Form.querySelector("input:nth-child(2)");
const sButton = first1_Form.querySelector("button:first-of-type");
const NEWLIST="nList";

let nList=[]; //array 형태로 초기화 시작

function saveData() {
  localStorage.setItem(NEWLIST, JSON.stringify(nList));
} // {name: ---- , url: ----, id:----}}이 하나의 요소인 형태로 + 각 값을 string 형태로 저장!
//웹 스토리지를 사용할 때 주의할 점은 오직 문자형 데이터 타입만 지원한다는 것이다. 
// url 의 경우, JSON.stringify 화 되면 원래 url가 아니게 되버린다.

function deleteData() {
  const newData= {nickname: first1_NameInput.value, url: first1_UrlInput.value, id:Date.now()};
  // x버튼을 누를 때 form에 해당하는 게 X. 그리고 이의 id를 조회하여 이를 localStorage에서만 삭제할 수 있으면 좋은데.... // 각 요소를 지우는 것이 아니라 이렇게 배열 변수를 호출해서
  localStorage.removeItem(NEWLIST); //array를 통쨰로 지웠다가 
  
  // function deletedData(element)  {if(element.id === 'apple') return true;}
  //nList.findindexof();
  nList=nList.filter((toBye)=>toBye.id !==parseInt(first1_Form.id)); //필터한 새로운 array 설정 // nList=nList.filter(function(toBye) {if toBye.id !==parseInt(first1_Form.id)return true;}
  saveData(); // 그 array를 저장
  paintData(newData);
  alert("해당 즐겨찾기를 삭제하였습니다.");
} // 노마드의 경우, 새로 생성된 객체를 없애면 되는 거지만, 여기는 localStorage에서 없애야....
// 누른 것에 해당되는 localStorage만 없애기는 어떻게???

/*
function paintData(newData) {
  first1_Form.classList.add("hidden");
  first_1.innerText = newData.nickname;
  first_1.href = newData.url;
  first1_Form.id = newData.id; // 가능한가??
  firfir.onclick = "";  // 이것덕분에 li태그의 onclick 이벤트를 없애는 
  first_1.onclick = ""; // a태그의 onclick 이벤트를 없애는 이렇게 간단한 걸.... 
} 


function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  firfir.appendChild(xButton); 
  xButton.addEventListener("click", deleteData); 
} 
///firfir 대신 li[idx]


function setWeb(event) {
  event.preventDefault();
  const newData= {nickname: first1_NameInput.value, url: first1_UrlInput.value, id:Date.now()};
  first1_NameInput.value = "";
  first1_UrlInput.value = "";
  nList.push(newData); // array에 저장
  saveData();
  paintData(newData);
  createX();
}  // 값 저장, 공백, array 저장, 폼 가리고, 결과 나타내고,      x버튼 생성



/* -------------------------------------------

const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
const FORM = document.body.getElementsByTagName('form');
const li = document.body.getElementsByTagName('li');

function paintData(newData, idx){
  FORM[idx].classList.add("hidden");
  A[idx].innerText = newData.nickname;
  A[idx].href = newData.url;
  FORM[idx].id = newData.id; 
  li[idx].onclick = ""; 
  A[idx].onclick = "";
}

function createX(idx) {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌";
  li[idx].appendChild(xButton); 
  xButton.addEventListener("click", deleteData); 
} 

function SET(){
    for (i = 0; i < FORM.length; i++) {
        (function setWeb(idx) {
            sButton.onclick = function(event){
              event.preventDefault();
              const NameInput = FORM[idx].querySelector("input:first-child");
              const UrlInput = FORM[idx].querySelector("input:nth-child(2)");
              const newData= {nickname:  NameInput.value, url: UrlInput.value, id:Date.now()};
              NameInput.value = "";
              UrlInput.value = "";
              nList.push(newData); 
              saveData();
              paintData(newData, idx);
              createX();
            } 
            })(i);
    }
}

SET();

------------------------------------------------

 function handlerFn(idx) {
      A[idx].onclick = function () {
        alert(idx);
      };
    }

    for (i = 0; i < A.length; i++) {
      handlerFn(i);
    }
*/

//first1_Form.addEventListener("submit", setWeb); 설정을 클릭할 때만
//sButton.addEventListener("click", setWeb);

const getData = localStorage.getItem(NEWLIST); // array에 저장된 각 값 불러오기

if ((getData !== null) &&  (getData !== '[]')) {
  const parsedList = JSON.parse(getData); // 각 값에 인덱스 부여
  nList = parsedList; // 인덱스가 부여된 상태 유지 
  parsedList.forEach(paintData); // 위 과정들을 유지한 상태에서 각 값에 paintData 적용
  createX();
} 


/// x가 삭제되지 않았던 문제... getData 로 바꾸고나서 단순히 null 이 아니라 '[]'로 해야하는 거였다!!!! 


/*
현재 상황

- 전체로 적용될 수 있으려면,,,,  // 느낌상 function(x) 으로 argument를 미지수로 설정한다음,
전체 함수를 main 함수로 포괄하는 것이 좋을듯. 다만 html로부터 js로 다 불러와야하는 건....
=> class 통일하라고 하는디...
- x에 id를 부여해야하나... 사라졌을 때 해당 값이 몇 번째 요소였는지??? 흠,,,, 나중에 리스트끼리 순서 바꾸고 그러고 싶은데, 막 꼬이잖아.....

---------------------------------------완료
- 아래 x버튼을 누르면 바로 적용되진 않음 => 해결. 삭제하는 function 안에 화면 출력 유지 함수를 넣어야한다. 그러고나니 삭제하고나서 바로 적용되고 x버튼이 대신 자리를 차지하게되는.... 나쁘지 않은데??? 새로고침하면 다시 생성된다.
- x버튼을 링크 옆에 생성했으나 아래 x버튼처럼 작동하진 않음 => 해결 => 이제는 전체 localStorage가 아니라 해당하는 것만 지우게끔해야.
- 링크와 x버튼 사이의 간격을 벌려줘야 ==> 대충 해결함. but 이쁘지가....
- 이제 localStorage에서 id를 부여하는 등.... ==> 해결
- ##가 아니라 같은 줄의 여백을 눌러도 toggle이 되는 문제를 어떻게 해결할까? ==>> li 태그 대신 a태그에 토글함수를 부여했더니 되었다!!! li가 display: block; 이었기에 쫙 이어진 것이었다. display: inline; 같은 걸로 했다간 세로가 아니라 가로 배열이 되어버리는 문제..
li vs a 태그의 크기가 다르다.

/* querySelector와 getElementById, getElemenByClassName 같은거 사용하는 차이 구별!!*/
/*:first-child 의 경우 div 하위 엘리멘트중에 p 엘리먼트가 가장 첫번째에 위치해야  :first-child 가상클래스를 통해 선택할 수 있기 때문입니다.
위 마크업은 div 하위 요소중에 가장 첫번째는 div 엘리먼트이기 때문에 선택할 수 없었던 것입니다. 
반면에, :firt-of-type 은 실제 p 엘리먼트만을 기준으로 카운트를 하기 때문에 선택할 수 있는 것입니다.*/

/* 이제 삭제 버튼을 만들고 단체로 적용하면 될듯 싶다!!!*/
/**##
function createX() {
  const xButton = document.createElement('button');
  xButton.innerHTML = "❌"; //innertext 왜 안 되지.... 그래도 innerHTML 은 되네!! 
  // 링크와 x 버튼 사이의 공백은 css에서 건들여줘야할 듯....
  //const x = document.createTextNode("❌"); // innerText 대신 사용...
  //xButton.appendChild(x);
  firfir.appendChild(xButton); // 안 되었던 게 아니라 파묻혀있었던 거네...
  //first1_Form.insertBefore(xButton, null); // 이것도 되긴하다. null은 삽입시점

  // 생성이 되지 않았던 이유. appendChild() 안에 ""가 들어가지 않는다!!
  //xButton.addEventListener("click", deleteData);
  xButton.addEventListener("click", deleteData); // x버튼을 눌러도 작동하지 않았던 이유가 내가 바깥에다가 xbutton을 만들어놓고 addEventListener 이벤트를 바깥에다가 만들었기에... 어떻게든 setWeb(값을 저장, 화면 출력)과 paint(화면출력 유지) 같은 function에 설정해야한다.
}

/* first_1.setAttribute("href",`${first1_Url}`); /* 태그의 속성을 바꾸는 방법 */

/**##
const getNickName = localStorage.getItem("nickname");
const getUrl = localStorage.getItem("url");

if (getNickName != null && getUrl != null) {
  paintData();
  createX();
  // 일단 x버튼도 이렇게 두긴 했다....
}  // 정확히 왜 있는지???? 아, 이게 없으니 계속 유지가 안된다. 이는 값이 없어질 때까지 계속 유지하라는 소리다.


*/

/* else{
  showMeInput();
  first_1.innerText = "##";
  first_1.href = "";
  firfir.onclick = "showMeInput()"; 
  first_1.onclick = "return aa();"; 
} // 삭제를 진행한 이후로 해야한다. 안 그러면 초기 값과 충돌되는 문제...


/** 
if (getNickName === null || getUrl === null) {
  first1_Form.classList.remove("hidden");
} else {
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
} 
*/

