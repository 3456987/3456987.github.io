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
ctx.arc(400, 229, 137, Math.PI, 0);
ctx.fill();

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

//============= CHEEK SHADING ==========
ctx.strokeStyle = "#a05a2c";

ctx.beginPath();
ctx.arc(310, 320, 25, 0, Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(494, 320, 25, 0, Math.PI);
ctx.stroke();

//============ MOUTH ====================
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(400, 360, 40, 0, Math.PI);
ctx.stroke();

//============ NECK ==========
ctx.fillStyle = "#C68642";
ctx.fillRect(367, 400, 67, 80);

//=========== SHIRT ============
ctx.fillStyle = "red";
ctx.fillRect(267, 485, 267, 183);

//========= SHOULDERS ==============
ctx.beginPath();
ctx.moveTo(267, 485);
ctx.lineTo(200, 571);
ctx.lineTo(267, 571);
ctx.fill();

ctx.beginPath();
ctx.moveTo(534, 485);
ctx.lineTo(600, 571);
ctx.lineTo(534, 571);
ctx.fill();

//======== COLLAR ========
ctx.strokeStyle = "black"
ctx.beginPath();
ctx.arc(400, 485, 53, 0, Math.PI);
ctx.stroke();

//========= ARMS ============
ctx.fillStyle = "#C68642";

//left arm
ctx.beginPath();
ctx.moveTo(200, 571);
ctx.lineTo(150, 680);
ctx.lineTo(210, 680);
ctx.lineTo(267, 571);
ctx.fill();

//Right arm
ctx.beginPath();
ctx.moveTo(600, 571);
ctx.lineTo(650, 680);
ctx.lineTo(590, 680);
ctx.lineTo(534, 571);
ctx.fill();


