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
	ctx.lineTo(x + 27, y - 40);
	ctx.lineTo(x + 53, y);
	ctx.fill();
}

spike(293, 194);
spike(347, 177);
spike(400, 171);
spike(453, 182);
spike(507, 200);


//============ EYES ===============
ctx.fillStyle = "white";

//right eye
ctx.beginPath();
ctx.arc(455, 275, 25, 0, Math.PI * 2);
ctx.fill();

//left eye
ctx.beginPath();
ctx.arc(350, 275, 25, 0, Math.PI * 2);
ctx.fill();

//============ PUPILS ==========
ctx.fillStyle = "black";

ctx.beginPath();
ctx.arc(455, 275, 10, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(350, 275, 10, 0, Math.PI * 2);
ctx.fill();

//=========== EYEBROWS =======
ctx.fillRect(315, 235, 67, 9)
ctx.fillRect(420, 235, 67, 9)

//=========== NOSE ==========
ctx.fillStyle = "#A0522D";
ctx.beginPath();
ctx.moveTo(400, 300);
ctx.lineTo(380, 340);
ctx.lineTo(420, 340);
ctx.fill();

//========== CHEEKS ===========
ctx.strokeStyle = "#a05a2c";

ctx.beginPath();
ctx.arc(310, 320, 25, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
cotx.arc(495, 320, 25, 0, Math.PI);
ctx.stroke();

//============ MOUTH ====================
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(400, 360, 40, 0, Math.PI);
ctx.stroke();

//============ NECK ==========







