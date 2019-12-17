var canvas;
var ctx;
var w = 1500;
var h = 530;
var time = setInterval(myTimer, 1000);
var background = setInterval(setColor, 300);
var color = ["black", "blue", "yellow", "orange", "purple", "red"]

setUpCanvas();

function myTimer(){
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("demo").innerHTML = t;
	if (d < 10)  {
		console.log("Good Morning");
	} else if (d < 20) {
		console.log("Good Afternoon");
	} else {
		console.log("Good Evening" );
	};
}
 

var txt = document.getElementById("txt");
setInterval(changeColor, 1000);
function changeColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	txt.style.color = "RGB("+r+","+g+","+b+")";
}
changeColor();


function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "lightblue" ? "red" : "lightblue";
}

setInterval(animationLoop,100);

function animationLoop(){
	clear();
	for(var i =0; i < 180; i++){
	square(rand(w), rand(h), rand(40), color[randi(6)]); 
	square(rand(w), rand(h), rand(40), color[i%6]); 
	}
}



function clear(){
	ctx.clearRect(0,0,w,h);
}

function square(x,y,s,c){
	ctx.beginPath(); 
	ctx.moveTo(x   ,  y    );
	ctx.lineTo(x + s, y    ); 
	ctx.lineTo(x + s, y + s); 
	ctx.lineTo(x    , y + s); 
	ctx.lineTo(x    , y); 
	ctx.fillStyle = c; 
	ctx.fill(); 
}


function rand(range){
	var r = Math.random()*range; 
	return r 
}

function randi(range){
	var r = Math.floor(Math.random()*range); 
	return r 
}


function setUpCanvas(){
	canvas = document.querySelector("#myCanvas"); 
	ctx = canvas.getContext("2d"); 
	canvas.width = w; 
	canvas.height = h; 
	canvas.style.border = "5px dotted black"; 
}

console.log("assignment 3")

