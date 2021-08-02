const first_1=document.body.querySelector(".first_first");
const first1_Form=document.body.querySelector("#first_1_Form");
const first1_NameInput=document.body.querySelector("input:first-child");
const first1_UrlInput=document.body.querySelector("input:nth-child(2)");
const firfir=document.body.querySelector(".firfir");
const sButton= document.body.querySelector("button:first-of-type");
const cButton= document.body.querySelector("button:nth-of-type(2)");

/* querySelector와 getElementById, getElemenByClassName 같은거 사용하는 차이 구별!!*/
/*:first-child 의 경우 div 하위 엘리멘트중에 p 엘리먼트가 가장 첫번째에 위치해야  :first-child 가상클래스를 통해 선택할 수 있기 때문입니다.
위 마크업은 div 하위 요소중에 가장 첫번째는 div 엘리먼트이기 때문에 선택할 수 없었던 것입니다. 
반면에, :firt-of-type 은 실제 p 엘리먼트만을 기준으로 카운트를 하기 때문에 선택할 수 있는 것입니다.*/

function saveName(nickname) {
  localStorage.setItem("nickname", nickname);
}

function saveUrl(url) {
  localStorage.setItem("url", url); //이걸 하는 이유가 무엇인지 다시한번 알아보자
}

/* 이제 삭제 버튼을 만들고 단체로 적용하면 될듯 싶다!!!*/
function deleteData(){  
  localStorage.removeItem("nickname");
  localStorage.removeItem("url"); // 이걸로 키와 값을 없앴으나 바로 반영되지는 않는듯함. localStorage.clear();은 아예 초기화//

  
}

function createX(){
  const xButton = document.createElement("button");
  xButton.innerText="❌";
  xButton.addEventListener("click", deleteData);
  document.body.getElementsByClassName("firfir").appendChild("xButton");
} /* 여기서 막힘....... * /

const dButton= document.body.querySelector("#deleteButton");
dButton.innerText="❌";
dButton.addEventListener("click", deleteData);

//* 일단 만들어져있는걸 없애야... */

function aa(){
   return false; /* a href를 작동하지 않게 하는 것 */
}

function setWeb(event){
  event.preventDefault();
  const nickname = first1_NameInput.value; 
  const url = first1_UrlInput.value;
  first1_NameInput.value= ""; 
  first1_UrlInput.value= "";
  showMeInput();
  saveName(nickname);
  saveUrl(url);
  createX();
}

function showMeInput(){
  first1_Form.classList.remove('hidden');
}

function closeInput(){
  first1_Form.classList.add('hidden');
}

/* 매우 중요!! 클릭 시, 토글을 통해 클래스 부여, 제거.
function(){} 은 어떻게 작동하는지 이해하자!!! 
그리고 toggle을 사용하면 input, button 까지 적용되기 때문에 일단은 remove로 적용해놨다. 다른 대안은 없나... ===> 닫기 버튼을 따로 만든다???
*/

first1_Form.addEventListener("submit", setWeb);
sButton.addEventListener("click", setWeb);
cButton.addEventListener("click", closeInput);

/* first_1.setAttribute("href",`${first1_Url}`); /* 태그의 속성을 바꾸는 방법 */

const getNickName = localStorage.getItem("nickname");
const getUrl = localStorage.getItem("url");

if (getNickName != null && getUrl != null) {
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
  first_1.onclick=""; /* 이렇게 간단한 걸.... */
  deleteData();
} 

/** 
if (getNickName === null || getUrl === null) {
  first1_Form.classList.remove("hidden");
} else {
  first1_Form.classList.add("hidden");
  first_1.innerText = getNickName;
  first_1.href = getUrl;
} 
*/


/*
1. TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'.
    at /script.js:19:9
==> 잘,,,,

2. 클릭 시 hidden 클래스를 없애고 form이 나와야하는데,,,, 일단 문제는 form 설정을 제대로 하지 않았고,,,

3. 계속 Cannot read property 'preventDefault' of undefined 에러가 있는데,
function argument에 event 넣어주고, addEventListener에 있는 function에 ()를 적지 않았더니 에러가 해결되었다???

4. 새로운 문제. a 태그에 대한 토글을 설정했더니 그 아래 있는 것들도 토글이 되어버렸네....

5. 토글 활용: first_1.addEventListener("click", function(){
  first1_Form.classList.toggle('hidden');
===>> 그냥 function 토글 하나 만들고 onclick="toggle()" 이런식으로 해놓으면 된다. 

6. 클릭하면 input창이 열려있는 것과 localStorage에 null 값인 경우 열려있는 것이 서로 상충하네.... 그냥 null 조건을 없애버려야하나... 

====>>> 일단 이름과 url 모두 null인 아닌 경우에 설정하게 해놨다... 이걸 삭제했을 때 문제를 생각해보기도 해야겠다. 

7. 즉시 반영되야하지만 새로고침해야 반영되는 부분을 어떻게 고칠까???


8. TypeError: Cannot read property 'addEventListener' of null
HTML이 모두 로드되기전에 자바스크립트 영역에서 HTML을 참조하는데 addEventListener에서 HTML태그를 참조하지 못해서 계속 에러가 발생했다.

첫번째 방법, script 영역(아래 코드에서 노랑부분)을 body 태그 아래에 위치시킵니다.

head 태그 내부에 script 영역(노랑부분)이 있죠.
<!DOCTYPE html> <html> <head> <script src="myscript.js"></script> </head> <body> <input type="button" id="hw" value="Hello world" /> </body> </html>
script 영역(노랑 부분)을 body 태그 아래로 이동시켜요!

<!DOCTYPE html> <html> <head> // body태그 아래로 이동 </head> <body> <input type="button" id="hw" value="Hello world" /> </body> <script src="myscript.js"></script> </html>
즉, script 영역을 페이지의 하단에 위치시켜서 HTML의 로드가 모두 완료된 후, script 영역을 부르는 거죠!
가장 일반적인 방법입니다.

두번째 방법, 문제가 되는 함수를 window.onload 함수 내부에 넣습니다.

window.onload = function(){} 함수는 웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수로,
해당 부분에 넣으면 HTML을 모두 로드한 뒤에 함수를 호출합니다. 

head태그 내부에 script 영역을 참조하는 부분이 있지만, window.onload 함수 내부에 문제가 되는 함수를 넣어줌으로써 해결됩니다.

<!DOCTYPE html> <html> <head> <script src="script2.js"></script> </head> <body> <input type="button" id="hw" value="Hello world" /> </body> </html>

window.onload = function(){ var hw = document.getElementById('hw'); hw.addEventListener('click', function(){ alert('Hello world'); }) }

9. function page(){
  location.href= first1_UrlInput.value;
location.href 같은 경우는 href 에 있는 링크를 기본 페이지로 설정하겠다는 의미로, page() 함수가 호출되는 즉시 href에 설정된 링크로 이동하게 될 것

10. 닫기 버튼
- onclick="first_1_Form.style.display= 'none'" 로 닫을 수는 있으나, 한번 닫히나 새로고침할 때까지 못 여네.....

+ 보이기 버튼
onclick="first_1_Form.style.display='block'" 으로도 가능!!

11. TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'. 에러



});

*/

/*


*/
