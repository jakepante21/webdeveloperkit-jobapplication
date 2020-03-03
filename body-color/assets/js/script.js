// FUNCTION TO CHANGE THE BODY COLOR

let button = document.getElementById("color");
let body = document.getElementsByTagName("BODY")[0];
let color = "#FFFFFF";

button.addEventListener("click", () => {
	let colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
	let color = "#";
	for(a=1;a<=6;a++){
		color += colors[Math.floor(Math.random() * 15)];
	}
	body.style.backgroundColor = color;
})