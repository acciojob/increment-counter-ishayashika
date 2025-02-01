//your JS code here. If required.
let btn=document.getElementById("incrementBtn");
btn.addEventListener("click", function(){
	alert(counter.innerText);
	counter.innerText=parseInt(counter.innerText)+1;
})
