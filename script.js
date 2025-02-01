//your JS code here. If required.
let btn=document.getElementById("incrementBtn");
btn.addEventListener("click", function(){
	alert(counter.innerText.toString());
	counter.innerText=parseInt(counter.innerText)+1;
})
