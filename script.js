/*ASSIGNMENT 2 - PART 1
//STEP 1
var name = prompt("What is your name?");
alert(name.length);


//STEP 2
var name = prompt("What is your name?");
var numValue = prompt("Input a number between 0 and a number less than the amount of letters in your name; IE Paul can have 0-3");
alert(name.charAt(numValue));


//STEP 3
var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name? (Start with a space)");
alert("Your name is: " + firstName.concat(lastName));


//STEP 4
var text = "The quick brown fox jumps over the lazy dog.";
alert(text.indexOf("fox"));


//STEP 5
var text = "The quick brown fox jumps over the lazy fox.";
alert(text.lastIndexOf("fox"));


//STEP 6
var text = "The quick brown fox jumped over the lazy dog.";
var name = prompt("What is your full name?");
alert(text.replace("the lazy dog", name));  // make sure that "name" is not a string!


//STEP 7
var text = "The quick brown fox jumped over the lazy dog.";
var chooseWord = prompt("pick a word from \"The quick brown fox jumped over the lazy dog.\"");
alert(text.search(chooseWord)); //when I put in the word "the", it gave me the LAST instance of it...interesting!


//STEP 8  NOT UNDERSTANDING THIS FULLY
var old_string = "The quick brown fox jumps over the lazy dog.";
var new_string = old_string.slice(31, 43);
alert(new_string.toUpperCase());
var old_string = "The quick brown fox jumps over the lazy dog.";
var new_string = old_string.substr(31, 43);
alert(new_string.toUpperCase());
var old_string = "The quick brown fox jumps over the lazy dog.";
var new_string = old_string.substring(31, 43);
alert(new_string.toUpperCase());


//STEP 9
var old_string = "     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ";
alert((old_string.trim()).toLowerCase());

//STEP 10
var text = "the quick brown fox jumps over the lazy dog";
alert(text.replace("t", "T"));

//OR

var text = "the quick brown fox jumps over the lazy dog";
var capitalT = text.charAt(0).toUpperCase();
alert(text.replace("t", new_string));
*/





/*ASSIGNMENT 2 - PART 2*/
//PART 1.1
/*
var x = prompt("Pick a number with a negative value.");
console.log(Math.abs(x));

//PART 1.2
var x = prompt("Pick a floating point value (decimal).  The result will round up.");
console.log(Math.ceil(x));

//PART 1.3
var x = prompt("Pick a floating point value (decimal).  The result will round down.");
console.log(Math.floor(x));

//PART 1.4  !!!!!!!!!!!!!!COME BACK!!!!!!!!!!!!
var x = prompt("Pick 5 numbers and separate them with a comma.");
console.log("The lowest number is: " + Math.min(x) + ", and the highest number is: " + Math.max(x) + ".");

//PART 1.5
var x = prompt("Pick a number, we're going to find the squareroot of it.");
console.log("The squareroot of your number is: " + Math.sqrt(x) + ".");
*/



/*
//PART 2.6
var x = new Date();
console.log("The date is: " + x.toDateString());
*/
 /*
//PART 2.7 //inspired from http://stackoverflow.com/questions/4881938/javascript-calculate-number-of-days-in-month-for-a-given-year
var year = prompt("Put in a year");
var month = prompt("Put in a month, 0 for January");
var monthStart = new Date(year, month, 1);
var monthEnd = new Date(year, month + 1, 1);
var monthLength = (Math.round((monthEnd - monthStart)) / (1000 * 60 * 60 * 24));
console.log(monthLength);



//PART 2.8
var d = new Date();
var n = d.getMonth();
if (n = 8) {
    console.log("September");
} else if (n = 9) {
    console.log("October");
} else if (n = 10) {
    console.log("November");
} else if (n = 11) {
    console.log("December");
} else if (n = 0) {
    console.log("January");
} else if (n = 1) {
    console.log("February");
} else if (n = 2) {
    console.log("March");
} else if (n = 3) {
    console.log("April");
} else if (n = 4) {
    console.log("May");
} else if (n = 5) {
    console.log("June");
} else if (n = 6) {
    console.log("July");
} else if (n = 7) {
    console.log("August");
*/

//PART 2.9
/*
var d = new Date();
var n = d.getDay();
if (n == (0 || 6)) {
    console.log("It's a weekend");
} else {
    console.log("It's not a weekend. :(");
}


//PART 2.10
var d = new Date();
var n = d.getDay();
if (n == 0) {
    console.log("Yesterday was Saturday");
} else if (n == 1) {
    console.log("Yesterday was Sunday");
} else if (n == 2) {
    console.log("Yesterday was Monday");
} else if (n == 3) {
    console.log("Yesterady was Tuesday");
} else if (n == 4) {
    console.log("Yesterday was Wednesday");
} else if (n == 5) {
    console.log("Yesterday was Thursday");
} else if (n == 6) {
    console.log("Yesterday was Friday");
}


//PART 2.11
var d = new Date();
var n = d.getDay()
if (n == 0) {
    console.log("The first letter of today is S");
} else if (n==1) {
    console.log("The first letter of today is M");
} else if (n==2) {
    console.log("The first letter of today is T");
} else if (n==3) {
    console.log("The first letter of today is W");
} else if (n==4) {
    console.log("The first letter of today is T");
} else if (n==5) {
    console.log("The first letter of today is F");
} else if (n==6) {
    console.log("The first letter of today is S");
}
*/


/*
//PART 3.12
var x = prompt("Type the first number.");
var y = prompt("The the second number.");
if (x<=y) {
    console.log("The larger number is: " + y + ".");
} else {
    console.log("The larger number is: " + x + ".");
}
*/

/*
//PART 3.13 - COME BACK!

var Ursula = 80;
var Paul = 77;
var Henry = 88;
var Tabitha = 95;
var Lucy = 68;

var 
*/
/*
//PART 3.14
for (var i = 1; i<15; i++) {
    if (i==1) {
        console.log(i + " is an odd number");
    } else if (i==3) {
        console.log(i + " is an even number"); 
    }
}
*/

/*
//PARTS 4.1 - 4.6 Taken from Javascript homework last year
var ready = confirm("Are you ready to play our game?");
		if (ready) {
			alert("Awesome, our hero is waiting!");
		} else {
			alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
		}
		
		alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.  \nYou are dioriented, lost, hungry and extremely thirsty.  \nYou see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.  \nYour back is against the wall.");
		var direction = prompt("Which direction would you like to head (please enter forward, left, or right)."); //In doing this on my own I forgot to put the "var direction ="!!!
		
		switch (direction) {
			case "left":
			  alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
			  break;
			case "right":
			  alert("You found the gold!  You walk into a small room and see thousands of gold coins, jewels, chalices, and more.  You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
			  break;
			case "forward":
			  alert("You walk about 100 yards and safely make your way out of the cave.");
			  break;
			default:
			  alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser.");
		} 
		
		var rate = prompt("Please rate our game from a scale of 1-10");
		if (rate > 5 && rate <= 10) {
                alert("Thank you, we will continue to make improvements to the game!");
            } else if (rate > 0 && rate <= 5) {
                alert("Whatever, you weren't very good at this game anyway!");
            } else if (rate == 0) {  //not sure why one "=" isn't valid here.
				alert("What?  A zero rating doesn't even exist, get out of here!");
			} else {
                alert("You didn't enter a valid number.");
            }  
*/
/*
//PARTS 5.1 - 5.7 With help from Javascript homework last year
		var coinFlip = Math.round(Math.random());
		var choice = prompt("Would you like heads or tails?").toLowerCase();
		
		if (coinFlip = 1) {
			if (choice == "heads") {
				alert("The flip was heads and you chose heads...you win!");
			} else {
				alert("The flip was heads but you chose tails...you lose!");
			}
		} else {
			if (choice == "heads") {
				alert("The flip was tails but you chose heads...you lose!");
			} else {
				alert("The flip was tails and you chose tails...you win!");
			}
		} 
*/

/*
//PARTS 6.1 - 6.4 With help from Javascript homework last year
		var coinFlip;
	       for (var i = 1; i <= 10; i++) {
		coinflip = Math.round(Math.random());  //Capitalize the Math object!
		if (coinflip) {  					//or "if (!coinflip) console.log("Heads")"
			console.log("Tails");
		} else { 							//implies "else if (!coinflip)"
			console.log("Heads");
		}
	}
*/

//PARTS 7.1 - 7.5 With help from Javascript homework last year
        var coinFlip;								
		do {  										
			coinFlip = Math.round(Math.random());  	
			if (!coinFlip) { 
				console.log("Heads");
			} else {
				console.log("Tails.  End of Script");
			}
		} while (!coinFlip); 



































