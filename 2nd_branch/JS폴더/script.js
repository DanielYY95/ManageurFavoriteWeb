const inv= document.body.querySelector("#Form");
const inv2= document.body.querySelector("#Input");
const inv3 = document.body.querySelector("#Input2");
const LIST=document.body.querySelector("#list");
const COINLIST="CList";
const setButton = document.body.querySelector("button:first-of-type");

let CList=[]; 

function paintCoin(newCoin){
  const li = document.createElement("li");
  li.id=newCoin.id;
  const a = document.createElement("a");
  a.innerText = newCoin.Name+"          "; 
  a.href = newCoin.Url;
  const button = document.createElement("button");
  button.innerText="❌"; 
  button.addEventListener("click", deleteCoin);
  li.appendChild(a); 
  li.appendChild(button);
  
const Category = document.getElementById("category");
const Group = ["개인체크", "개발자공부정리", "개발공부", "개발참고", "동기부여", "취미"];

const list_1= document.getElementById("check_list");
const list_2= document.getElementById("summary_list");
const list_3= document.getElementById("study_list");
const list_4= document.getElementById("refer_list");
const list_5= document.getElementById("motivation_list");
const list_6= document.getElementById("hobby_list");  

const X = Category.value;

function selected(X){
 if (X === Group[0]){
   list_1.appendChild(li);
 }

 if (X === Group[1]){
   list_2.appendChild(li);
 }

 if (X === Group[2]){
   list_3.appendChild(li);
 }


 if (X === Group[3]){
   list_4.appendChild(li);
 }


 if (X === Group[4]){
   list_5.appendChild(li);
 }

 else {
   list_6.appendChild(li);
 }
 
} 
  
  
  
  //selected(Category.value); // 매개변수를 어떻게 해야할지 요게 문제
  
}

function saveCoin(){
  localStorage.setItem(COINLIST,JSON.stringify(CList));
} 

function coinInvest(){
  event.preventDefault();
  if ((inv2.value !=="") && (inv3.value!==""))  { 
    const newCoin={ Name:inv2.value, Url: inv3.value, id:Date.now()  
  };
    inv2.value=""; inv3.value="";
    CList.push(newCoin); 
    paintCoin(newCoin);
    saveCoin(); 
} 
  else{
    alert("값을 제대로 작성해주세요.");
  }
}

setButton.addEventListener("click", coinInvest);

const savedData=localStorage.getItem(COINLIST);

if (savedData !==null){ 
	const parsedList = JSON.parse(savedData); 
	CList= parsedList; 
	parsedList.forEach(paintCoin);
}

