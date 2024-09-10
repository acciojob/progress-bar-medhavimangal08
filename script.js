//your JS code here. If required.

const circles = document.querySelectorAll('.circle');
const btn=document.querySelectorAll("button");
const nextbtn=document.querySelector("#next");
const prevbtn=document.querySelector("#prev");

prevbtn.disabled=true;
let classactive=0;
for(let i of btn){
	i.addEventListener("click", classmodify)
}

function classmodify(e) {
	if(e.target==nextbtn){
		classactive++
		circles[classactive].classList.add("active")
                prevbtn.disabled=false;

	}
	if(classactive==circles.length-1){
		nextbtn.disabled=true;
	}
	if(e.target==prevbtn){
		classactive--
		circles[classactive+1].classList.remove("active")
	}
	if(classactive==0){
		prevbtn.disabled=true
	}
	
}

