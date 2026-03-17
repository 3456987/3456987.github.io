const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let vx = 1;
let vy = 2;

function animate(){
	//First, clear the screen
	ctx.clearRect(0,0,800,800);


	//decide where the box should be
	x = x + vx;
	y = y + vy;

	if (x > 750 || y < 0){
		vx = vx * -1;
	}
	if(y > 750 || y < 0){
		vy = vy * -1;

	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}


animate();
