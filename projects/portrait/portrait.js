const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


// ===== BACKGROUND ======
ctx.fillStyle = "grey";
ctx.fillRect(0, 0, 800, 800);

ctx.fillStyle = "grey";
ctx.fillRect(0, 60, 800, 10);
ctx.fillRect(0, 115, 800, 10);
ctx.fillRect(0, 170, 800, 10);
ctx.fillRect(0, 230, 800, 10);


// ======= HEAD ==========
ctx.fillStyle = "#C68642";
ctx.beginPath();
ctx.arc(400, 285, 125,0, Math.PI * 2);
ctx.fill();


//======== EARS ========
ctx.beginPath();
ctx.arc(250, 300, 30, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(545, 300, 30, 0, Math.PI * 2);
ctx.fill();


//=========== HAIR BASE =========
ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(400, 230, 137, Math.PI, 0);
ctx.fill();


//========= HAIR SPIKES ========
function spike(x, y) {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 30, y - 40);
	ctx.lineTo(x + 50, y);
	ctx.fill();
}

spike(290, 195);
spike(350, 180);
spike(400, 170);
spike(450, 180);
spike(510, 200);
