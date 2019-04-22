function generateFallingStar(){
	let fallingStar = document.createElement("div");
	fallingStar.classList.add("falling-star");

	let startPosition = generatePosition();
	let endPosition = generatePosition();

	setShootingSize(fallingStar);
	setFallingStartPosition(fallingStar, startPosition);

	sky.appendChild(fallingStar);

	moveFallingStar(fallingStar, endPosition);
}

function setFallingSize(fallingStar){
	let size = Math.random() * 3;

	fallingStar.style.height = size + "px";
	fallingStar.style.width = size + "px";
}

function generatePosition(){
	let topDistance = Math.random() * 100;
	let leftDistance = Math.random() * 100;

	let position = [topDistance, leftDistance];
	return position;
}

function setFallingStartPosition(fallingStar, startPosition){
	fallingStar.style.top = startPosition[0] + "vh";
	fallingStar.style.left = startPosition[1] + "vw";
}


function moveFallingStar(fallingStar, endPosition){
	let duration = (Math.random() * (4 - 1)) + 1;
	let delay = Math.random() * 5;

	fallingStar.style.animationDuration = duration + "s";
	fallingStar.style.animationDelay = delay + "s";
}