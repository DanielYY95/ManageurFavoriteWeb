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
  for (i=0; i<6; i++)
{ if (X === Group[i])
    {
      const LIST = document.getElementById(List[i]);
      LIST.appendChild(li);
    }
  }
}

function saveCoin(){
  localStorage.setItem(COINLIST,JSON.stringify(CList));
} 

function coinInvest(){
  event.preventDefault();
  if ((inv2.value !=="") && (inv3.value!=="") && (Category.value !==""))  { 
    const newCoin={ Name:inv2.value, Url: inv3.value, Category: Category.value, id:Date.now()  
  };
    inv2.value=""; 
    inv3.value="";
    Category.value="";
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

