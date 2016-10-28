
// JavaScript Road Trip Part 3
// Continue building intermediate skills within the JavaScript web programming language. Master function expressions, closures, hoisting, objects, and the use of prototypes.


//Section 1 - Function Expressions

//building functions within code execution rather than at program load setTimeout(function() {}, 10);



function diffOfSquares(a,b){
	return a*a - b*b;
}

//function expression, only runs when the program reaches this line of code, not when it loads
var diff = function diffOfSquares(a,b){
	return a*a - b*b;
};//since this is an assignment statement (taking a function and assigning it to a variable, it needs a semicolon at the end)

diff(9,5); //use the variable's name to call it, not the function name.
//=> 56 (81-25)

//anonymous function (no need to name it a second time because it's assigned to a variable that will hold the contents of that function)

var diff = function /*diffOfSquares*/(a,b){
	return a*a - b*b;
};
diff(4,2);
//=>12 (16-4)

console.log(diff);
=> function(a,b){
	return a*a - b*b;
} //console.log the variable name will display the entire function it contains

//variables that hold functions can be passed into other functions
var greeting = function(){
	alert('Hi Shawn');
};


var greeting;
if(newPax){
	greeting = function(){
		alert("Welcome!");
	};
} else {
	greeting = function(){
		alert("Welcome back!");
	};
}

closeTerminal(greeting);

function closeTerminal(message){
	...
	message();
	...
}


// 1.2 Changing Declarations to Expressions

// Developers have created a function declaration named forestFright, but they’ve decided not to keep the function in memory.

// Convert the function from a named function declaration to an anonymous function expression and assign it to a variable called runAway.


//function forestFright(){
var runAway = function() {
  var toAlert = "";
  for (var i = 0; i < 5; i++) {
    toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
  }
  alert(toAlert);
};

// 1.3 Using Function Expressions with Parameters

// The devs at the Death-Defying Dogwoods have determined a specific formula for the quantifiable amount of fear generated at the theme park. Their formula is based on the amount of people, the amount of rain, and the amount of sharks. Yes. Sharks.

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

// Analyze the fearGenerated formula.
// Assign appropriate values to the people, rain, and sharks variables so that the amount of fear generated will be no less than 100, but no more than 400.

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

fearGenerated(10,10,6);
//=> 316 (10 people, 10 inches of rain, 6 sharks).

var fear = fearGenerated(people,rain,sharks);

// 1.4 Displaying Function Contents
// Periodically, the devs at the Haunted Hickory House need to be reminded of their formula. They would like to view the contents of the function, rather than executing it.

// Write one line of code to alert the contents of the variable that stores the function to the screen. Here is the fearGenerated function expression assignment for reference:

var fearGenerated = function(numPeeps, rainInInches, numSharks) {
  var rainFear = numPeeps * rainInInches;
  var sharkFear = numSharks * numSharks * numSharks;
  var totalFear = sharkFear + rainFear;
  return totalFear;
};

alert(fearGenerated);

// 1.5 Functions as Parameters, Arguments and Return Values
//Well, it stands to reason that some people might not want to experience the Haunted Hickory House if the fear is significantly elevated on that day.

// Inside the fearMessage function expression, use conditional statements (e.g., if, else if) to check the integer value of the fear variable, assigned on line 1, and decide whether its value is LOW or MEDIUM.

// For each fear range below we want to display a confirmation message with the corresponding message. We can return a call to the confirm function that has a single string argument containing the correct message.

var fear = fearGenerated(numPeeps, rainInInches, numSharks);

var fearMessage = function() {
  // Insert conditional statements here
  if(fear < 200){
    return ("Fear Level: LOW Still wanna ride?");
  } else if(fear >= 200 && fear <= 300){
    return ("Fear Level: MEDIUM Think you'll make it?");
  }
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);


//1.6 Section 2 - Passing Function Expressions As Parameters

//Using function expressions with arrays and map() (map method)

var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var result = numbers.maps(/* function goes here */);
// map() takes in a function as a parameter then returns an array, applying the function to each cell in an array. Works like a loop.


var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var results = [];
for(var i=0;i<numbers.length;i++){
	results[i] = someFunction(numbers[i]);
}

var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

var results = numbers.map(function(arrayCell){ return arrayCell * 2;}); //close map method with parens + semicolon so it executes the function
console.log(results);
//=>[ 0, 2, 2, 4, 6, 10, 16, 26, 42, 68, 110, 178, 288 ]


// 1.7 Using Map With Arrays

// Over at Maple Mountain, the dev team has received some name data from the customer terminal that they want to use to customize greetings for each of their passengers. But the data consists of an array with many subarrays where the first and last names of each passenger are split up.

// They want to take the passengers array and convert those subarrays into strings that contain the first and last name for each passenger.

// Create a modifiedNames variable to store our new data.
// Assign passengers.map() to the modifiedNames variable. This will allow us to pass in a function to be used on every element in the array.
// Pass an anonymous function to map().
// The anonymous function should take in arrayCell as a parameter and use that to return a string with the first and last name for a passenger. In other words, if you were to pass in a ["Jason", "Millhouse"] array, the function should return a "Jason Millhouse" string.


var passengers = [ ["Thomas", "Meeks"],
                   ["Gregg", "Pollack"],
                   ["Christine", "Wong"],
                   ["Dan", "McGaw"] ];

var modifiedNames = passengers.map(function(arrayCell){
  return arrayCell[0] + ' ' + arrayCell[1];
});


//1.8 Using Map With Arrays II
// The passengers have arrived at Maple Mountain! Take the modifiedNames array that you produced in the last challenge, and map a new anonymous function on it.

// The function should alert the following message to the screen for each passenger in turn:

// Yo, <name>!

var modifiedNames = [ "Thomas Meeks",
                      "Gregg Pollack",
                      "Christine Wong",
                      "Dan McGaw" ];

modifiedNames.map(function(name){
  alert("Yo, " + name + "!");
});

// 1.9 Expressions Inside Arrays

// The folks over at Poplar Puzzlers need an array of functions for one of their puzzles. They’ve requested your help in making the array, which they would like to be called puzzlers. The cells of the array should each contain a function, and these functions–well, what they return–are listed here in order. Each function has one parameter. Note input below represents the parameter, and you will need to convert the math formulas to JavaScript:

// Returns 3 * input - 8
// Returns (input + 2)3
// Returns input2 - 9
// Returns input % 4
// Use your knowledge of arrays and anonymous function expressions to build this array of functions.

var puzzlers = [ 
function(input){ return (3 * input) - 8; },
function(input){ return (input + 2)*(input + 2)*(input + 2); },
function(input){ return (input * input) - 9; },
function(input){ return input % 4; } 
];

// 1.10 Section 3 - Returning Functions and Immediate Invocation

//recent exercise: built function expressions, assigned them to variables, then called the new variables...

var sweetAnnouncement = function(){alert("Attention!\n CUPCAKES.\n\n. . . That is all.")};
sweetAnnouncement();

var fruits = ['apple','pear','grape'];
var fruitJuce = fruits.map(function(fruit){return "Delicious " + fruit + " juice.";});
// create an array full of values, built a function expression itself as a parameter for the map() method. 
// when we applied that function to the map() method, the map() method applied the function 
// to every cell of the array, then built a new array as a result.


function(mystery){
	//some code
	//return some expression
}

queue.shift(); // shift() method removes and returns the first cell in the array
//=>"First"   ["Premium, economy, business"]


var firstTicketQueue = ticketQueue.shift();
console.log(firstTicketQueue);

var rides = [['birch',40],['pine',55],['cedar',20],['ferris',90]];
var queue = ['cedar','pine','birch','pine'];


queue.push('pine'); // adds it to the back of the array

queue.shift(); // shift() method removes and returns the first cell in the array
//=>'cedar'

queue.length();
//=3

var firstQueue = queue.shift();
console.log(queue);
//=>'pines'

var wantsRide = 'pines';
var newTicket = ticket(parkRides, queue, wantsRide)();
ticket(); 

function ticket(allRides, queueRides, pick){
	if(passRides[0] === pick){
		var pass = queueRides.shift();
		return function(){
			alert("You have a " + pass + "."); //closure
	};
	} else {
		for(var i=0;i<allRides.length;i++){
			if(allRides[i][0] === pick){
				return function(){
					alert("You have a " + pick + ". Wait time " + allRides[i][1] + "mins.");
				};
			}
		}
	}
}



//Ash Adventures has three different “adventures” to choose from, and customers are prompted for a number at a terminal. The number is stored as userChoice and then passed into a function called adventureSelector.

// Inside the function, you need to return an anonymous function based on the number that the user selected. Each of your three anonymous functions should contain a boarding alert message:

// If the user selects 1: You selected the Vines of Doom!
// If the user selects 2: Looks like you want the Lake of Despair!
// If the user selects 3: The Caves of Catastrophe!

// Assume the user’s choice has already been stored as 1, 2, or 3, and is passed in as the userChoice parameter. Make sure that you return all message functions as anonymous functions, instead of stored in variables. You do not need to call the function at the end.


function adventureSelector(userChoice){
	if(userChoice==1){
		return function(){
			alert("You selected the Vines of Doom!");
		};
	} else if(userChoice==2){
		return function(){
			alert("Looks like you want the Lake of Despair!");
		};
	} else if(userChoice==3){
		return function(){
			alert("The Caves of Catastrophe!");
		};
	}
}

// 1.12 Immediately-Invoked Adventure!

// Write one line of code that calls adventureSelector, passes it 3 as an argument, and that immediately invokes the function that gets returned. Here’s adventureSelector for your reference:

function adventureSelector(userChoice) {
  if (userChoice == 1) {
    return function() {
      alert("You selected the Vines of Doom!");
    };
  } else if (userChoice == 2) {
    return function() {
      alert("Looks like you want the Lake of Despair!");
    };
  } else if (userChoice == 3) {
    return function() {
      alert("The Caves of Catastrophe!");
    };
  }
}

adventureSelector(3)();


// Treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty.

// 1.13 Queue Builder

// The devs at Poplar Puzzles would like you to treat an array of functions like a Queue, passing the result of each function into the next until the Queue is empty. They’ve sent you the puzzlers Queue of functions, and the following instructions:

// Build a function and assign it to a variable named applyAndEmpty.
// The function should take in an input number and a queue of functions as parameters.
// Using a for loop, call the functions in the queue in order with the input number, where the results of each function becomes the next function’s input.
// Once done this loop, return from applyAndEmpty the final function’s result. Additionally, the queue should be empty at this point.
// Lastly, call the applyAndEmpty function using the provided start variable and the puzzlers Queue as arguments, and alert the result.



var puzzlers = [
  function (a) { return 8*a - 10; },
  function (a) { return (a-3) * (a-3) * (a-3); },
  function (a) { return a * a + 4; },
  function (a) { return a % 5; }
];
var start = 2;

// build applyAndEmpty function expression here
var applyAndEmpty = function (input, queue) {
  var length = queue.length;
  for (var i = 0; i < length; i++) {
    input = queue.shift()(input);
    		//loop through functions in order
		//call the functions and empty the queue
  }
  return input;
};

alert(applyAndEmpty(start, puzzlers));



//solution without using shift()
var applyAndEmpty  = function(input, queue) {
  
  for (var i = 0; i < queue.length; i++) {
    var result = queue[i](input);
    input = result;
  }
  // don't think this is covered in-course.
  // also not certain if this is an accepted way
  // of emptying an array 
  queue.length = 0;
  return result;
};


alert(applyAndEmpty(start, puzzlers));



// Immediately-Invoked Puzzler

// Now the Poplar Puzzle-makers have sent you a puzzle with a new set of functions to use on that puzzle. To display your overwhelming array and function expression mastery, alert the answer to the following question:

// “What is obtained when the result of passing 9 into the fourth function of the puzzlers array is then passed into the function whose array index matches the result of passing 3 into the second function of the puzzlers array?”

var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4; },
  function(a) { return a % 5; }
];

alert(puzzlers[puzzlers[1](3)](puzzlers[3](9)));










