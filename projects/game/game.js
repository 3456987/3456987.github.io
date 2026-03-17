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

	waitForInput(processInput)
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
	
	function processInput(input){

		input = input.toLowerCase();
		
		if(input === "guard room"){
			passTime();
			guardRoom();
		}
		else if(input === "cafeteria"){
			passTime();
			cafeteria();
		}
		else if(input === "bathroom"){
			passTime();
			cafeteria();
		}
		else if(input === "storage"){
			passTime();
			cafeteria();
		}
		else if(input === "cell"){
			passTime();
			prisoCell();
		}
		else{
			stayHere();
			waitThenCall(hallway);
		}
	}

	waitForInput(processInput);
}

//Storage Room
function storage(){
	clear();
	print("\nYou enter the storage room.");

	if(!screwdriver){
		print("\nYou find a screwdriver on a shelf.");
		screwdriver = true;
	}

	print("\nType 'hallway' to go back.");

	function processInput(input){
	
		if(input.toLowerCase() === "hallway"){
			passTime();
			hallway();
		}else{
			stayHere();
			waitThenCall(storage);
		}
	}

	waitForInput(processInput);
}



