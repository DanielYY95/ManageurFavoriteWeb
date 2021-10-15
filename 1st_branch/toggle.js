function showMeInput(){
    const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
    const FORM = document.body.querySelectorAll('#asd');
    for (i = 0; i < A.length; i++) {
        (function(idx) {
            A[idx].onclick = function(){
              if (!(FORM[idx].id > 0  )) // 값이 설정되어도 toggle되는 현상 방지 // id가 숫자일때만
              {FORM[idx].classList.toggle('hidden');} // 오오 좋았다!! 잘 응용. 몇번째 form 태그

            } 
            })(i);
    }
}

showMeInput();


//form에 id 부여하려고 하는데, 숫자일때만 조건 설정하게끔

/* const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
for (i = 0; i < A.length; i++) {
    (function(idx) {
        A[idx].onclick = function() { 
            alert(idx); 
        }
    })(i);
}
 const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
    function handlerFn(idx) {
      A[idx].onclick = function () {
        alert(idx);
      };
    }

    for (i = 0; i < A.length; i++) {
      handlerFn(i);
    } 와 같다 */
// 계속 반복문!!! 지속적으로 사용할 수 있으려면 이러한 for문같은 걸로 진행해야한다.
// 태그를 불러오고 나면, 태그 배열이 생기는 것 같다.. 
//idx 가 argument이니까, 해당 argument를 a태그의 인덱스로 하고 onclick이벤트에 따른 함수를 실행
// 근데 클릭했을 때 어떻게 해당하는 index가 되는가?? 그리고 (i)는 뭐지??


// for (초기화;조건식;증감식){참인 경우 계속 반복하는 함수}
// .onclick = function(){} 은 클릭 이벤트리스너와 같다.
//### 저 for 반복문을 통해 모든 A의 현재 인덱스에 위치한 태그에 클릭이벤트를 부착한 것이다!!!!
// (i)가 idx 로 들어간다??? 
// IIFE 이다. 즉시실행함수. 그냥 간편하게 작성하기위해 저렇게 한 것 같다. for문 안에 다 작성해놓고, function 선언하고나서 그 선언한 함수에 들어갈 argument를 반복하는 것
//https://blog.naver.com/leeba37/221802546747 참고
/*
근데,,, a태그를 불러왔는데, nth-child 같은 걸 쓰지않더라도 바로 A태그[index] 를 사용할 수 있는 이유:  MDN 문서를 읽어보면 이런내용이 있습니다. A태그에 인덱스를 사용할 수 있는건 getElementsByTagName 함수가 HTMLCollection 을 반환하기 때문입니다.
elements is a live HTMLCollection of elements with a matching tag name, in the order they appear. If no elements are found, the HTMLCollection is empty.

https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName 



*/
