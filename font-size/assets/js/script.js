// FUNCTION THAT CHANGES FONT SIZE

let letter = document.getElementById("letter");
let doubleBtn = document.getElementById("double-btn");
let fontSize = 2;

letter.style.fontSize = fontSize + "em";

doubleBtn.addEventListener("click",() => {
	fontSize *= 2;
	letter.style.fontSize = fontSize + "em";
})
