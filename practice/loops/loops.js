let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//fill in code for canvas1 here
for(let y = 0; y <= 300; y += 100){
	for(let x = 25; x < 800; x += 100){
		ctx.fillRect(x, y, 50, 20);
	}
}
canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for(let y = 150; y <= 800; y += 150){
	ctx.fillRect(0, y, 50, 20)
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here

