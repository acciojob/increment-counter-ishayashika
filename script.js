//your JS code here. If required.
let btn=document.getElementById("incrementBtn");
let count=document.getElementById("counter");
btn.addEventListener("click", function(){
	count=parseInt(counter.innerText);
	alert(count);
	count+=1;
	counter.innerText=count;
})
