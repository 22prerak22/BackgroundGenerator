var CssPrint = document.querySelector("h3");
var Color1 = document.querySelector("#color1");
var Color2 = document.querySelector("#color2");
var body = document.querySelector("#gradient");
var button1 =document.querySelector("#button1");
var button2 =document.querySelector("#button2");

function randomNumber256() {
	return Math.floor(Math.random()*256);	
}
function randomNumber1() {	
	return Math.floor(Math.random() * 10) + 1;
}
function setcolor1() {
	body.style.background = 
	`linear-gradient(to right, rgba(${randomNumber256()}, ${randomNumber256()}, ${randomNumber256()}, ${randomNumber1()/10}) , ${Color2.value})`;
	CssPrint.innerHTML = body.style.background;
}
function setcolor2() {
	body.style.background = 
	`linear-gradient(to right, ${Color1.value},rgba(${randomNumber256()}, ${randomNumber256()}, ${randomNumber256()}, ${randomNumber1()/10})`;
	CssPrint.innerHTML = body.style.background;
}

function backgroundGenerator() {
	body.style.background = `linear-gradient(to right, ${Color1.value} , ${Color2.value})`;
	CssPrint.innerHTML = `linear-gradient(to right, ${Color1.value} , ${Color2.value})`;
	// CssPrint.textContent = body.style.background + ";"
}
Color1.addEventListener("input",backgroundGenerator);
Color2.addEventListener("input",backgroundGenerator);
button1.addEventListener("click",setcolor1);
button2.addEventListener("click",setcolor2);

