

const Clock = document.getElementById("clock");

function GetTime() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  Clock.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

GetTime();
setInterval(GetTime, 1000);

//-- 시간

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

// 키 다운이 발생했을 때, 함수. 해당 event의 keycode가 13이라면 발생하는 기본 이벤트를 멈춰라. true 는 무슨 뜻이지?? true 이면 작동하라는 소리인가??? event는 어떤 사건이라고 생각하면 된다. 뒤에 true 가 없어도 작동하긴 하는데,,, ==> Option true 이면, Capturing 방식으로 이벤트가 전달되며, false 이며, Bubling 방식으로 이벤트가 전달된다. 기본값은 false이다.


//키보드 이벤트(Keyboard Event)는 사용자가 키를 누르거나 키를 놓을 때 발생합니다. 키를 누를 때는 keydown 타입 이벤트가 발생하고, 키를 놓을 때는 keyup 타입 이벤트가 발생합니다. 


/* 이벤트 감지
element.addEventListener("event", listener[, options]);
element는 대상 DOM 요소, event는 노드에 바인딩될 이벤트, listener는 호출할 함수와 옵션. 옵션은 Option true 이면, Capturing 방식으로 이벤트가 전달되며, false 이며, Bubling 방식으로 이벤트가 전달된다. 기본값은 false이다. */ 


/*이벤트 종류
cached : 애플리케이션이 캐시될 때
load : 웹 페이지의 로드가 완료되었을 때
unload : 웹 페이지가 unload 될 때 (새로운 페이지를 요청한 경우)
error : 브라우저가 자바스크립트 오류를 만났거나 리소스 로드를 실패했을 때
resize : 브라우저 창의 크기를 조정했을 때
scroll : 사용자가 페이지를 위아래로 스크롤 할 때
focus : 엘리먼트가 포커스를 받았을 때(버블링하지 않음)
click : 엘리먼트를 클릭 할 때

*/
