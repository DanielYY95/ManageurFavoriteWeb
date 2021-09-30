const Button = document.querySelectorAll("fourthBox>button");
const startPause = Button[0];
const reset = Button[1];

let second = 0;
let minute = 0;
let hour = 0;

const appendHours = document.getElementById("hours");
const appendMinutes = document.getElementById("minutes");
const appendSeconds = document.getElementById("seconds");


function stopWatch(){
  second++;
  appendSeconds.textContent = second > 9 ? second : '0'+second;
  if(second > 59){
    minute++;
    appendMinutes.textContent = minute > 9 ? minute : '0' + minute;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
  if(minute > 59){
    hour++; 
    appendHours.textContent = hour > 9 ? hour : '0' + hour;
    minute = 0;
    appendMinutes.textContent = "00";  

}
}

startPause.onclick = function(){
  clearInterval(stopWatch);
  setInterval(stopWatch,1000);
}

reset.onclick = function(){
  clearInterval(stopWatch);
}


/*

second += 1초
=> setInterval(함수, 1000)으로

classList.add(ing)

++ if --.class = ing
     classList.add(stop)
     함수 멈추기 //clearInterval(함수);

else
classList.add(ing)

초기화는      
date = new Date(0);

참고
https://im-developer.tistory.com/53 => 더해지는 시간-처음시간, 더해지는 시간-일시정지눌렀을 때의 시간
https://penguingoon.tistory.com/266 => 조건식을 적절히 활용하여 증가연산자 
====> 왜 처음에 시간에 대해 선언을 안하는가 싶었는데, 애초에 setinterval 함수 자체의 시간단위가 milliseconds(1/1000 초)이기 떄문에 증산하는 함수를 setInterval(숫자) 안 숫자를 통해 ++ 하면 되네

// padStart 는 String을 해야하기 때문에 귀찮아....

----------------------------

function InComing() {
  const date = new Date();
  const Christmas = new Date(2021, 11, 25, 0, 0, 0, 0); //지정월은 -1
  
  const Hours = String(
    Math.ceil((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0"); ///시간: 날짜의 나머지 부분의 몫을 구한다.
  const MINUTES = String(
    Math.ceil((date % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0"); ///분: 시간의 나머지 부분의 몫을 구한다.
  const SECONDS = String(Math.ceil((date % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  ); ///초: 분의 나머지 부분을 구한다.

  clockTitle.innerText = `${DATES}d ${Hours}h ${MINUTES}m ${SECONDS}s`;
}

InComing();
setInterval(InComing, 1000);

*/
