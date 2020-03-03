let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let count = 0;
let type = "Even";
document.getElementById("count").innerHTML = count;
document.getElementById("type").innerHTML = type;

// EVENT LISTENERS/FUNCTIONS FOR COUNT
increaseButton.addEventListener("click",() => {
	count += 1;
	document.getElementById("count").innerHTML = count;
	countType(count);
})

decreaseButton.addEventListener("click",() => {
	count -= 1;
	document.getElementById("count").innerHTML = count;
	countType(count);
})

resetButton.addEventListener("click",() => {
	count = 0;
	document.getElementById("count").innerHTML = count;
	countType(count);
})

//  FUNCTION FOR ODD/EVEN

countType = (count) =>{
	if(count % 2 === 0){
		type = "Even";
	}else{
		type = "Odd";
	}
	document.getElementById("type").innerHTML = type;
}

