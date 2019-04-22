let sky = document.querySelector(".sky");

function generateStar(){
	let star = document.createElement("div");
	star.classList.add("star");

	setSize(star);
	setPosition(star);
	setAnimation(star);

	sky.appendChild(star);
}

function setPosition(star){
	let topDistance = Math.random() * 100;
	let leftDistance = Math.random() * 100;

	star.style.top = topDistance + "vh";
	star.style.left = leftDistance + "vw";
}

function setSize(star){
	let size = Math.random() * 5;

	star.style.height = size + "px";
	star.style.width = size + "px";
}

function setAnimation(star){
	let duration = (Math.random() * (4 - 1)) + 1;
	let delay = Math.random() * 5;

	star.style.animationDuration = duration + "s"
	star.style.animationDelay = delay + "s"
}