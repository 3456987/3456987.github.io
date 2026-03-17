const canvas = document.getElementById("myCanvas");
const ctx = canva.getContext("2d");

let x = 0;
let y = 0;
function animate(){
	x = x + 1;
	y = y + 2;
	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}


animate();
