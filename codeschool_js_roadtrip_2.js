
/*

JavaScript Road Trip Part 2
A continued introduction to the very basics of the JavaScript language. Learn common programming mechanisms like loops, conditionals, functions, and arrays.

https://www.codeschool.com/courses/javascript-road-trip-part-2

*/

/*
LEVEL 1
The Labyrinth of Loops
Understand and build loops for repeated code with 'while' and 'for' syntax.
*/

/*
write a basic loop that prints to the console all the numbers from 10 to 1 in descending order. 
*/

//While
var num = 10;

while(num >=1){
  console.log(num);
  num--;
}

//For
for(var num = 10; num>0;num--){
  console.log(num);
}


//2, Conditions



/*
Problem Solving with Loop Operations

In the Death Valley National Park, a group of environmentalists have begun a project that will grow the population of Bighorn Sheep. Every month, the population will multiply by four! To stay on top of this explosive growth, the scientists would like a printout of how many sheep will make a new home in Death Valley.

build a while loop that prints a message for one year’s worth of time. Here’s what the first two lines of output should look like:

There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!
*/

//While
var numSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;


while(monthNumber <= monthsToPrint){
  numSheep = numSheep * 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!")
  monthNumber++;
}

//For
var numSheep = 4;
var monthsToPrint = 12;

for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++){ 
numSheep = numSheep * 4
console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}



/*
=>
There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!
There will be 256 sheep after 3 month(s)!
There will be 1024 sheep after 4 month(s)!
There will be 4096 sheep after 5 month(s)!
There will be 16384 sheep after 6 month(s)!
There will be 65536 sheep after 7 month(s)!
There will be 262144 sheep after 8 month(s)!
There will be 1048576 sheep after 9 month(s)!
There will be 4194304 sheep after 10 month(s)!
There will be 16777216 sheep after 11 month(s)!
There will be 67108864 sheep after 12 month(s)!
*/



///For loop

for(/*variable counter; condition; increment/decrement*/){
//code to be executed;
}

for(var trainNumber = 1; trainNumber <= trainsOperational; trainNumber++){
	console.log("Train #" + trainNumber + " is running.");
}

//print 1-5 in decending order
for(var num = 5; num > 0; num--){
	console.log(num);
}


//Which planes are grounded?

var trainsOperational = 8;
var totalTrains = 12;

for (var stoppedTrain = trainsOperational + 1; stoppedTrain <= totalTrains; stoppedTrain++){
  console.log("Train #" + stoppedTrain + " is not operational.");
}

/*
Train #9 is not operational.
Train #10 is not operational.
Train #11 is not operational.
Train #12 is not operational.
*/

var planesFlying = 8;
var totalPlanes = 12;

for(var planesGrounded = planesFlying + 1; planesGrounded <= totalPlanes; planesGrounded++){
	console.log("Plane " + planesGrounded + " is grounded.");
}
/*
Plane 9 is grounded.
Plane 10 is grounded.
Plane 11 is grounded.
Plane 12 is grounded.
*/

/*
The Hoover Dam has 19 generators of multiple types. For simplicity, let’s say that the first 4 of these generators output 62 megawatts, and the other 15 output 124 megawatts. In hooverDam.js, the Dam Rangers have asked you to design a system of two loops that turns each generator on in progression, and prints the new total of megawatts generated.

They’d like the first loop to be a while loop handling the first 4 generators. Then, they’d like the second loop to be a for loop that handles the other 15 generators. Each output line should resemble the following lines, with adjusted values for the currentGen and totalMW:

Generator #1 is on, adding 62 MW, for a total of 62 MW!
Generator #2 is on, adding 62 MW, for a total of 124 MW!
*/

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

while(currentGen<5){
totalMW += 62;
console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
currentGen++;
}

for(currentGen>4;currentGen<=totalGen;currentGen++){
  totalMW += 124;
  console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
}


/*
LEVEL 2
Conditional Canyon
Use conditions to execute different branches of code with if-else blocks.
*/


/*
modify the while loop with a conditional that will only allow a number to be printed if it is even. Your results should be the even numbers from 10 to 2 in descending order.
*/

var num = 10;

while (num > 0) {
  if(num%2===0){
    console.log(num);
  }
  num--;
}

/*
10
8
6
4
2
*/


/*
The Badlands National Park would like to print specific messages depending on whether the park is open or closed.

print one of the following messages depending on the boolean value (true or false) of the variable parkIsOpen. We’ve already established for you the status of the variable for today.

Add a pair of conditional statements to print one of the following messages to the console based on the parkIsOpen variable:

Welcome to the Badlands National Park! Try to enjoy your stay.
OR

Sorry, the Badlands are particularly bad today. We're closed!
*/

var parkIsOpen = true;

if(parkIsOpen){
  console.log("Welcome to the Badlands National Park! Try to enjoy your stay.");
} else {
  console.log("Sorry, the Badlands are particularly bad today. We're closed!");
}


/*
Back at Death Valley, scientists could see that the Sheep Situation would quickly get out of control. They have decided that, for any month the population climbs above 10000, half of the sheep will be sent away to other regions.

Inside our for loop, insert an if statement that:

Removes half of the sheep population if the number of sheep rises above 10000.
Prints the number of sheep being removed to the console in the following format:
Removing <number> sheep from the population.
*/

var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(numSheep > 10000) {
    numSheep *= .5;
    console.log("Removing " + numSheep + " sheep from the population.");
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

/*
We’ve made a significant difference, but there are still too many sheep for the fragile Death Valley ecosystem. The Rangers would like you to implement the following new plan for population reduction:

If the month is a multiple of 4, then find 75% of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.
Otherwise, if the population is above 10000, find half of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.
Use this format for logging sheep reduction:

Removing <number> sheep from the population.
*/



var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {
  if(monthNumber%4===0){
    var sheepToRemove = numSheep * .75;
    console.log("Removing " + sheepToRemove + " sheep from the population.");
    numSheep = numSheep - sheepToRemove;
  } else if(numSheep > 10000){
    numSheep *= .5;
    console.log("Removing " + numSheep + " sheep from the population.");
  }
  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}

/*

The people at the Hoover Dam have called you back, and would like a program that shows what happens when only the even numbered turbines are turned on. And they want it all in just one for loop.

With a set of complex conditional statements inside the loop, construct a way to only turn on even numbered turbines. Remember our power output situation:

Generators 1 through 4 produce 62 MW.
Generators 5 through 19 produce 124 MW.
The output should follow this format:

Generator #1 is off.
Generator #2 is on, adding 62 MW, for a total of 62 MW!
*/

var totalGen = 19;
var totalMW = 0;

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {
  if (currentGen % 2 === 0 && currentGen <= 4) {
    totalMW += 62;
    console.log("Generator #" + currentGen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else if (currentGen % 2 === 0 && currentGen >= 5) {
    totalMW += 124;
    console.log("Generator #" + currentGen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}


/*
LEVEL 3
Built-In's Bluff
Learn to use the basic JavaScript dialog box functions 'prompt', 'alert', and 'confirm'.
*/


alert("This is an alert popup window");

confirm("Did you see this alert? Click Cancel or OK");

prompt("Enter your name in the field");
//e.g. 
var userName = prompt("What's your name?");

confirm("Did you see this alert? Click Cancel or OK");
//e.g. 
confirm("If your name" + userName + "?");

//Typeof
//identifies the type of value inside a variable or expression, e.g. 

Typeof true
//=> boolean

Typeof undefined

//=> undefined

Typeof null
//=> object

/* 
if user clicked cancel instead of completing the field in a prompt window,
you could check "typeof userName" and if it comes back "null" it will not be a string,
but instead a generic object.
*/



/*
In userProfile.js below, ask the user for their age with a pop-up window function, and store the user’s response in a variable called userAge. Use the following question in the dialog box:

"What's your age, user?"
When the correct dialog box pops up, enter your age to complete the challenge.
*/

var userAge = prompt("What's your age, user?");

/*
With the userAge variable, we can ensure that the user has entered their age correctly. Use a pop-up window function to confirm the user entry with the following message:

"You entered <age>. Is this correct?"
Then store the result of the confirmation in a variable called ageIsCorrect. When you submit your code, enter your age in the prompt window, and then use the confirmation to select whether the entry is correct or incorrect.
*/


var ageIsCorrect = confirm("You entered " + userAge + ". Is this correct?");

/*
We’ve learned to prompt the user for their age, and then confirm that their age has been entered correctly. Now we can use a while loop to improve the way this works.

Create a while loop that will continue to execute as long as the user has not entered the correct age. Inside the loop, provide a confirmation that the age has been entered correctly:

"You entered <age>. Is this correct?"
If that confirmation statement is correct, then set ageIsCorrect to true and alert the following message:

"Great! Your age is logged as <age>."
Otherwise, the loop should continue to prompt a user to enter their age and assign that value to the userAge variable:

"What's your age, user?"
*/


var userAge = prompt("What's your age, user?");
var ageIsCorrect = false;

while(!ageIsCorrect){
  if(confirm("You entered " + userAge + ". Is this correct?")){
    ageIsCorrect === true;
    alert("Great! Your age is logged as " + userAge + ".");
  } else {
    userAge = prompt("What's your age, user?");
  }
}

/*
LEVEL 4
The Desert of Declarations
Understand functions and building custom functionality.
*/
//Declarations, Functions
/*
Give a function input, it will do work on it, then give an output as a result
Does something step-by-step that we need to do repeatedly


e.g. Sum of two cubes
1. Get two numbers, e.g. 4, 9
2. Cube each number, e.g. 4^3=64, 9^3=729
3. Sum the cubes, e.g. 64+729=793

var a = 4;
var b = 9;
var aCubed = a*a*a;
var bCubes = b*b*b;

functionkeyword functionName (parameters, passed in){
  *do something*
  returnkeyword *something (or nothing) from the process* (can be anywhere)
}

*/

function sumOfCubes(a,b){
  var aCubed = a*a*a;
  var bCubes = b*b*b;
  var sum = aCubed + bCubed;
  return sum;
}

sumofCubes(4,9);
//=> 793

/*
In the uniqueMath.js file, build a function declaration called multiplyTrio that takes in three parameters. Inside the function, multiply the numbers together into one product, and return the result.
*/

function multiplyTrio(a, b, c){
  var multiplyTrio = a*b*c;
  return multiplyTrio;
}

/*Call your multiplyTrio function from the console using the numbers 8, 4, and 10.*/

multiplyTrio(8,4,10);

/*
Build a function declaration called maxOf2 that takes in two numbers and returns the greater value. Be careful to think about the possibility of equality as well and return one of the numbers.
*/

function maxOf2(a,b){
  if(a>b){
    return a;
  } else if(b>a){
    return b;
  } else if(a===b){
    return a,b;
  }
}

/*
In uniqueMath.js, you’ll see a function called mystery. Refactor the code in the function to include only one line that returns a value.
*/

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
}

function mystery(x, y) {
  return (4*x*y) + (3*y+5);
}

/*
Design a function that counts the "e"'s in a user-entered phrase
*/

function countE(){
  var phrase = prompt('Which phrase would you like to examine?');
  if (typeof(phrase) != 'string'){
    alert('That\'\s not a valid entry');
    return false;
  } else {
    var eCount = 0;
    for(var index = 0; index < phrase.length; index++){
      if(phrase.charAt(index)==='e' || phrase.charAt(index)==='E'){
        eCount++;
      }
    }
  alert('There are ' + eCount + ' E\'\s in \"' + phrase + '\".');
  return true;
  }
}

countE();

// Local and global scope

var n = 6;
function add(a,b){
  var n = a+b;
  return n
}
add(9,2);
//=>11

console.log(n);
//=>6

var n = 6;
function add(a,b){
  n = a+b;
  return n;
}
add(9,2);
//=>11

console.log(n);
//=>11

/*
The Park Rangers in Death Valley National Park divide up the feed responsibilities daily for the Bighorn Sheep population. Each sheep needs 2 lbs of ranger-provided food per day.

Build a function called feedPerRanger that takes in:

The current population of sheep.
The number of Park Rangers available during the day.
The function should alert the amount of feed that each Park Ranger should be responsible for on that day. The output should match the following format:

Each Park Ranger should load <number> lbs of feed today.
*/

function feedPerRanger(sheepPop,availRangers) {
  var feedNum = (sheepPop*2)/availRangers;
  alert('Each Park Ranger should load ' + feedNum + ' lbs of feed today.');
}

feedPerRanger(3289,5);
//alert(Each Park Ranger should load 1315.6 lbs of feed today.

/*
Problem Solving with Functions II

Back at the Hoover Dam, the technicians have decided they want more control of which generators are on and off. So, they’ve asked you to develop a way to adjust the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.

Build a function named changePowerTotal that takes in four parameters:

The total power generated (a number)
The generator ID for the current generator (a number)
The generator status (a string that says "on" or "off")
The amount of power produced by the current generator (a number)
Your function should:

If the current generator is set to "on", then add to the total power generated.
Or if the current generator is set to "off", then remove from the total power generated.
return the total power generated.
alert the technician in the following formats:
For switching on:

Generator #2 is now on, adding 62 MW, for a total of 62 MW!
For switching off:

Generator #2 is now off, removing 62 MW, for a total of 0 MW!
*/

function changePowerTotal(totalMW,currentGen,genStatus,currentMW){
  if(genStatus==='on'){
    totalMW += currentMW;
    alert('Generator #' + currentGen + ' is now on, adding ' + currentMW + ' MW, for a total of ' + totalMW + ' MW!');
  } else if (genStatus==='off'){
    totalMW -= currentMW;
    alert('Generator #' + currentGen + ' is now off, removing ' + currentMW + ' MW, for a total of ' + totalMW + ' MW!');
  }
      return totalMW;
}

/*
LEVEL 5
The Array Archipelago
Learn to build and manipulate the array data structure.
*/

//Arrays
/*
What if we want a passenger list?

function paxList(){
  var pax1 = 'Shawn';
  var pax1 = 'Morgan';
  // too many
}
find way to accesss entire list through one variable...

array: data structure with 0 index,
e.g. array of strings containing names
*/

var pax = ['Shawn','Morgan'];
pax[1];
//=>'Morgan'

/*
You can reference or change the value of a cell
*/
//replace string for new pax
pax[1] = 'Abigail'

//count cells in the arry
pax.length;
//=> 2

/*
remove a cell from the back (deletes last one)
then returns it as a string

pop() function, 
pax.pop()
//=>'Abigail'

pax();
//=>'Shawn'

call the push() method on the pax array:
pax.push('John');
//adds 'John' to the end of the array, increasing the cell count
*/

var comboArray1 = ['One', 'fish', 2, 'blue'];

var haiku = 'love';
var comboArray2 = ['Red', haiku, 'white', haiku];
// ['Red', 'love', 'white', 'love';



var arrayOfArrays = [comboArray1, comboArray2];
console.log(arrayOfArrays);
//=>[Array[4], Array[4]]

var arrayOfArrays = [comboArray1, comboArray2];
console.log(arrayOfArrays[1]);
//=> ['Red', haiku, 'white', haiku];

console.log(arrayOfArrays[1][2]);
//=> white

console.log(arrayOfArrays[0][1]);
//=> fish


/*
Adjusting Array Contents I
In the following array, set one value of the array so that it will be a list of numbers in order.
*/
var list = [1, 2, 3, 7, 5, 6, 7, 8, 9];
list[3] = 4;

/*
Array Functions I
Using the specific array function that adds data to the back end of the array, add the next number to your newly corrected list.
*/
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
list.push(10);


/*
Building Arrays
Create an array called values that contains the following contents in order:

a String
a Number
a Boolean
*/
var values = ['I love Shawn', 4, true];

/*
Array Functions II
Now using the specific array function that takes a piece of data off the back of an array, remove the last entry from your values array and store the result in a variable called bool.
*/

var bool = values.pop(values[2]);


/*
2D Arrays I
Check out the following setup. Enter a line of code that declares a variable called infant and accesses the word "Baby" from eightiesMovies without making any changes to either element inside the array.

var movie1 = [16, "Candles"];
var movie2 = [3, "Men", "and", "a", "Baby"];
var eightiesMovies = [movie1, movie2];
*/

var infant = eightiesMovies[1][4];

/*
2D Arrays II
Now alert a string with the full title of the first movie in the eightiesMovies array, but only using the eightiesMovies variable to access the correct values. Use the concatenation operator to unite the words into one string, and remember to be attentive to necessary whitespace!
*/

alert(eightiesMovies[0][0] + ' ' + eightiesMovies[0][1]);

//Searching arrays
//using loops with arrays

var nList = [2,5,8,4,7,12,6,9,3,11];

for (var i = 0; i < nList.length; i++){
  console.log('The value in cell ' + i + ' is ' + nList[i]);
}

//don't confuse index (position) with content (value)
/*
Empty cell in arrays
use undefined to create 'empty' cells
*/
pax[5] = undefined;

//count even numbers and erase odd numbers in the array

var nList = [2,5,8,4,7,12,6,9,3,11];
var evenCount = 0;
for(var i = 0; i < nList.length; i++){
  if(nList[i]%2===0){
    evenCount++;
  } else {
    nList[i] = undefined;
  }
}
console.log(evenCount);
//=>5
console.log(nList);
/*
[ 2,
  undefined,
  8,
  4,
  undefined,
  12,
  6,
  undefined,
  undefined,
  undefined ]
  */
console.log(nList.length);
//=>10

/*
Built a function that solves problem of adding a pax list

function addPax('passenger's name','array of passengers'){
  if list is empty
  add pax to list
} else {
  for all pax in a list
  if a spot is empty, add pax there,
  return & exit the function
} else if the list is reached{
  add pax to the end
}
*/

function addPax(name,list){
  if(list.length===0){
    list.push(name);
  } else {
    for(var i=0; i<list.length; i++){
      if(list[i]===undefined){
      list[i] = name;
      return list;
    } else if (i===list.length - 1){
      list.push(name);
      return list;
    }
  }
}

var paxList = [];
paxList = addPax('Shawn Christopher', paxList);
//=>['Shawn Christopher']
paxList = addPax('Morgan Simpson', paxList);
//=>['Shawn Christopher', 'Morgan Simpson']
paxList = addPax('Black Jack', paxList);
//=>['Shawn Christopher', 'Morgan Simpson', 'Black Jack']

function deletePax(name,list){
  if(list.length===0){
    console.log('List is empty');
  } else {
    for(var i=0; i<list.length; i++){
      if(list[i]===name){
        list[i] = undefined;
        return list;
      } else if (i === list.length-1){
        console.log('passenger not found.');
      }
    }
  }
  return list;
}

paxList = deletePax('Morgan Simpson', paxList);
//=>['Shawn Christopher',undefined,'Black Jack']

paxList = addPax('Jane Morgan', paxList);
//=>['Shawn Christpher','Jane Morgan','Black Jack']
paxList = deletePax('Morgan Simpson', paxList);
//=> passenger not found (already deleted)

/*
Iteration over Array Contents
Build out the numStrings function using a for loop that counts all of the strings in the array parameter called list.

Inside the function, set up a count variable and initialize it to a value of 0. We can use this variable to keep track of the number of strings.
Use a for loop to loop through the list array.
If the typeof the current array index value is equal to "string", then increment the count variable.
Outside the for loop, return the count variable with the total amount of strings found.
*/

function numStrings(list) {
  var count = 0;
  for(var i = 0; i<list.length; i++){
    if(typeof(list[i]) ==='string'){
      count++;
    }
  }
  return count;
}


/*
Congratulations!
You've completed JavaScript Road Trip Part 2
*/






























