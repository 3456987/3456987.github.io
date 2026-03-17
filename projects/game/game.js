let gameActive = true;
// Global Varibales
let time = 22; //10pm
let screwdriver = false;
let guardKey = false;

//Function for time
function passtime(){
	time++;

	if(time ===24){
		time = 0;
	}

	if(time >= 7 && time <12){
		print("\nIt is now 7 Am. The guards wake up and catch you.")
		print("\nGAME OVER.")
		gameActive = false;
	}
}


//Starting Room (Prison Cell)
function prisonCell(){
	clear();
	print("\nYou wake up in your prison cell.");
	print("\nIt is 10 PM. You must escape before 7 AM.");
	print("\nWhere do you go?");
	print("\n\tHallway");
	function processInput(input){

		if (input.toLowerCase() === "hallway"){
			passTime();
			hallway();
		}else{
			stayHere();
			waitThenCall(prisonCell);
		}
	}	

//Hallway
function hallway(){
	clear();
	print("\nYou are in the prison hallway.");
	print("\nWhere do you go?");
	print("\n\tGuard Room");
	print("\n\tCafeteria");
	print("\n\tBathroom");
	print("\n\tStorage");
	print("\n\tCell");



