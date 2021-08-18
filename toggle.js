function showMeInput(){
    const A = document.body.getElementsByTagName('a'); // 태그 이름으로 불러온다.
    const FORM = document.body.getElementsByTagName('form');
    for (i = 0; i < A.length; i++) {
        (function(idx) {
            A[idx].onclick = function(){
              FORM[idx].classList.toggle('hidden'); // 오오 좋았다!! 잘 응용. 몇번째 form 태그
            } 
            })(i);
    }
}

showMeInput();

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
