
// Higher order functions

function makeAdjectifier(adjective){
	return function (string){
		return adjective + "" + string;
	};
}

var coolifier  = makeAdjectifier("cool");
coolifier("conference");
// "cool conference"

map, reduce, filter




var needCoffee = true;
if (needCoffee) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}


	// .	If the variable needCoffee is true, JavaScript will run one code block, and if a variable is false, it will run another.
	// .	needCoffee is the condition we are checking inside the if's parentheses. Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace} (line 4). It will completely ignore theelse { ... } part. In this case, we'd see'Finding coffee' log to the console. Note: Code between curly braces are called blocks.if/else statements have two code blocks. 
	// .	If we adjusted needCoffee to be false, only theelse's console.log will run.
	// .	if/else statements are how we can process yes/no questions programmatically.



// Switch statements
/*
To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

Note: To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. Part of being a good developer is writing code that both computers and other humans can read. 
switch statements look like this:
*/
var groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
/*
The switch keyword initiates the statement, and is followed by ( ... ), which contains the condition that each case will compare to. In the example, the condition is groceryItem.
Inside the block, { ... }, there are cases. case is like the else if part of an if/else if/else statement. The word following the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log would run.
groceryItem equals 'papaya', so the first and second case statements are skipped. The third case runs since the case is 'papaya' matches groceryItem's value. This particular program will log out: 'Papayas are $1.29'.
Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code.
At the end of each switch statement, there is a default condition. If none of the cases are true, then this code will run.
*/
switch (moonPhase) {
	case "full":
	console.log("");
	break;
	case "mostly full":
}


/*
An important function is the ability to generate a random number and we can do that with this code: 
Math.random(). This code will return a random number between 0 and 1.
*/
Math.random() * 50

var randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

/*
Way to go! We just learned a lot of control flow concepts:

if/else statements and how to add extra conditions with else if.
switch statements, for making readable decision trees.
Comparison operators, like <, >, <=, and >=.
Logical Operators like &&, ||, and !.
How to generate a random number with Math.random(), and Math.floor().

*/

// Let's break down the code we just ran:

function sayHello() {
  console.log('Hello, my name is Jon');
}

sayHello();


function sayHello(firstName) {
  console.log('Hello, my name is ' + firstName);
}
sayHello('Jon');


function sayHello(firstName, lastName) {
  console.log('Hello, my name is ' + firstName + " " + lastName);
}
sayHello('Jon', 'Snow');
//=>Hello, my name is Jon Snow



var timesFive = function (number) {
  return number * 5;
};

console.log(timesFive(3));
// Output: 15


var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[0];
console.log(listItem);
// Output: 'Rappel into a cave'

var bucketList = ['Rappel into a cave', 'Take a falconry class', 'Learn to juggle'];
var listItem = bucketList[1];
console.log(listItem);
// Output: 'Take a falconry class'


var bucketList = ['item 0', 'item 1', 'item 2'];

bucketList.push('item 3', 'item 4');

['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


var animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Output:
// Grizzly Bear
// Sloth
// Sea Lion


var myPlaces = ["Peru", "Japan", "Russia"];
var friendPlaces = ["Turkey", "Japan", "Colombia"];
for(var i = 0; i < myPlaces.length; i++){
  console.log(myPlaces[i]);
  for(var j = 0; j <friendPlaces.length; j++){
    console.log(friendPlaces[j]);
    if (myPlaces[i] === friendPlaces[j]){
      console.log(myPlaces[i]);
    }
  }
}



// Functions with two parameters

var areaBox = function(length, width) {
    return length * width;
};

// a. A more efficient way to code to increment up by 1 is to write i++.
// b. We decrement down by 1 by writing i--.
// c. We can increment up by any value by writing i += x, 
// where x is how much we want to increment up by. e.g., i += 3 counts up by 3s.
// d. We can decrement down by any value by writing i -= x. (See the Hint for more.)
// e. Be very careful with your syntax—if you write a loop that can't properly end, it's called an infinite loop. It will crash your browser!

var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


var count = 0;
var loop = function(){
	while(count < 3){
		console.log("I'm looping!");
		count++;
	}
};

loop();
// I'm looping!
// I'm looping!
// I'm looping!

// You use a for loop when you know how many times it'll run or when it'll end, 
// and a while to keep it open. a do while loop ensures it will run at least once.


var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);



// Remember your loop syntax!

// For:
for (var i = 1; i < 11; i++) {
    // Prints numbers 1 - 10
    console.log(i);
}



// While:
var condition = true;
while(condition) {
    console.log("Hello!");
    // Avoid infinite loops!
    condition = false;
}


// Do/while example:

// Can be false from the start, since do/while runs at least one time
var condition = false;
do {
    console.log("I'm printed once!");
} while(condition);

if (/* Some condition */) {
    // Do something
} else if (/* Some other condition */) {
    // Do something else
} else {    // Otherwise
    // Do a third thing
}

isNaN("unicorns");


var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

// The switch statement is put together like this:

switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
 case 'yellow':
     console.log("coldplay");
     break;
  
  default:
    console.log("I don't think that's a primary color!");
}


// what if we want to check more than one variable?
// logical operators: and (&&), or (||), and not (!).

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}

for (var i = 0; i < languages.length; i++) {
    // console.log the 'i'th element
    // of the languages array
}

//Arrays

var twoDimensional = [[1, 1], [1, 1]];

var jagged = [[1,2],[1],[2,2,2]];



var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();
//=>Calling Oxnard Montalvo at (555) 555-5555...


var myObject = {
    key: value,
    key: value,
    key: value
};

// Objects: FizzBuzz

  for(var i = 1; i<=20; i++){
      if(i%5===0 && i%3===0){
          console.log('FizzBuzz');
      } else if(i%5===0){
          console.log('Buzz');
      } else if(i%3===0){
          console.log('Fizz');
      } else {
          console.log(i);
      }
  }









