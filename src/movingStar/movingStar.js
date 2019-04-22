 var styleTag = document.getElementById ("myStyle");

function generateMovingStar(indice){
	let movingStar = document.createElement("div");
	movingStar.classList.add("moving-star");
	movingStar.classList.add("moving-star"+indice);

	let startPosition = generatePosition();
	let endPosition = generatePosition();

	setMovingSize(movingStar);
	setStartPosition(movingStar, startPosition);

	sky.appendChild(movingStar);

	moveMovingStar(movingStar, endPosition, indice);
}

function setMovingSize(movingStar){
	let size = Math.random() * 3;

	movingStar.style.height = size + "px";
	movingStar.style.width = size + "px";
}

function generatePosition(){
	let bottomDistance = Math.random() * 100;
	let leftDistance = Math.random() * 100;

	let position = [bottomDistance, leftDistance];
	return position;
}

function setStartPosition(movingStar, startPosition){
	movingStar.style.bottom = startPosition[0] + "vh";
	movingStar.style.left = startPosition[1] + "vw";
}

function moveMovingStar(movingStar, endPosition, indice){

	var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;

	let duration = (Math.random() * (10 - 3)) + 1;
	let delay = Math.random() * 5;

	movingStar.style.animationDuration = duration + "s";
	movingStar.style.animationDelay = delay + "s";

    if (sheet.insertRule) {   // all browsers, except IE before version 9
    	sheet.insertRule (".moving-star"+indice+"{ animation: MOVESTAR"+indice+" infinite ease-in-out, DISAPPEAR infinite alternate ease-in-out;}", 0);
        sheet.insertRule ("@keyframes MOVESTAR"+indice+"{100%{left:"+ endPosition[0] +"vw; bottom:"+ endPosition[1] +"vh;}}", 1);
    }
}

