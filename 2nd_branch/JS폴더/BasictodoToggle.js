const A = document.querySelectorAll('fourthBox a'); 
const FORM = document.body.querySelectorAll('#Basictodo');
for (i = 0; i < A.length; i++) {
  (function(idx) {
    A[idx].onclick = function(){
      if (!(FORM[idx].id > 0  )) 
        {FORM[idx].classList.toggle('hidden');} 
            } 
                })(i);
}
