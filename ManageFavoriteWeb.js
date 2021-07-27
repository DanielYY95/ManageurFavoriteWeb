const first_1=document.body.querySelector(".first_first")
const first1_Form=first_1.querySelector("#first_1_Form")
const first1_NameInput=first_1.querySelector(".first_1_Name")
const first1_UrlInput=first_1.querySelector(".first_1_Url")
const firfir=document.body.querySelector("#firfir")

function aa(){
   return false; /* a href를 작동하지 않게 하는 것 */
}

function setWeb(event){
  event.preventDefault();
  const first1_Name= first1_NameInput.value; 
  const first1_Url= first1_UrlInput.value;
  firfir.innertext=`${first1_Name}`;

/* input에 value를 넣었는데, 반영이 안되네.....*/

}

first_1.addEventListener("click", function(){
  first1_Form.classList.remove('hidden');
});
/* 매우 중요!! 클릭 시, 토글을 통해 클래스 부여, 제거.
function(){} 은 어떻게 작동하는지 이해하자!!! 
그리고 toggle을 사용하면 input, button 까지 적용되기 때문에 일단은 remove로 적용해놨다. 다른 대안은 없나...
*/


first1_Form.addEventListener("submit", setWeb);


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

});

*/

/*


*/
