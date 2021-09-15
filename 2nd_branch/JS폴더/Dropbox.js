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

