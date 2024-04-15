let btn= document.querySelector("button");
btn.addEventListener("click", function(){
	let h= document.querySelector("h3");
	let randomColor= getRandomColor();
	h.innerText= randomColor;
	
   console.log("color updated")
	let div = document.querySelector("div");
	div.style.backgroundColor=randomColor;
	// h.style.backgroundColor=randomColor;

});



function getRandomColor(){
	let red= Math.floor(Math.random()*255);
	let green= Math.floor(Math.random()*255);
	let blue= Math.floor(Math.random()*255);

	let color=`RGB(${red},${green},${blue})`;
	return color;
}