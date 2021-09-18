function paintObj(newDataObj){
  const li = document.createElement("li");
  li.id=newDataObj.id;
  const a = document.createElement("a");
  a.innerText = newDataObj.Name+"          "; 
  a.href = newDataObj.Url;
  a.target = "_blank";
  const button = document.createElement("button");
  button.innerText="❌"; 
  button.addEventListener("click", deleteObj);
  li.appendChild(a); 
  li.appendChild(button);
  for (i=0; i<6; i++) {
     if (newDataObj.Category === Group[i])
      {
        const LIST = document.querySelector("."+List[i]); //"." 센스....
        LIST.appendChild(li);
      }
  }
}

