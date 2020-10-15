function myLoopExample() {

// same as before
// choose a random number from 1 to 3:

var myNumber = Math.floor(Math.random() * 4);

// show the random number chosen in the console (must have DevTools open):
console.log('The number selected @ random is: '+myNumber);





/////////////////////////////////////////////////////////////////






// NEW Week 7 //

// Here, we will create a counter function called "count_my_items"

// It is different from the previous functions we wrote: it has an optional "argument" being passed to it.

// In this case the value of "myValue" is being sent to this function so its number can be counted.

// Based on that number your code can iterate through a single section of code as many times as you need.

// So, where does that value ("myValue") come from?

// When we call the function, as we do below in the IF/ELSE statement, we attach the value as its "argument"

// Remember: we *create* a function, then we *call* the function when needed.

// For example, think of an image gallery web page that lets you choose how many images to see at once, say, 25, 50 or 100.

// If you write a section of code to show an image, its description and a link, for example, that code will execute again and again, up to whatever number you selected (25, 50 or 100). Then it will stop.

// Also new in this function is something to make such an iteration happen, what we call a "loop". A loop is a block of JS code executed as many times as needed, iterating through until it is done.

// The syntax can be daunting, but it is always the same: once you learn it you can use it in numerous other programming languages too

// The first thing we do inside our new function is to create a "FOR" statement to create a loop.

function count_my_items(myValue) // only writes the value to the console
{
	for (var i = 0; i < myValue; i++) {
		console.log('This is number: '+i);
	}
}

// Remember: A loop is a series of instructions, run over and over again

// Each time the code runs, it increments the default value to keep track of where it is.

// Let's take a closer look at the for() loop syntax, turned off/commented out here so it will not run:

1. //for (let i = 0; i < 10; i++)
2. // {
3. //	MyOtherFunction();
4. //}

// line 1 begins with our JS "for()" loop

// inside this loop it says: let i = 0; i < 10; i++

// in pseudocode, that says, create a temporary var called "i" (think: "i" for increment) and set its default value to zero

// then, as long as the value of i is LESS THAN 10, it will run whatever code you tell it to

// next, it will increment the value of i, for example, from 1 to 2 to 3 etc., up until it hits the limit (less than 10, or whatever value you tell it to be)

// line 2 (the { ) starts our function's instructions

// line 3 holds the code or function(s) we want to run each iteration of the loop

// line 4 (the } ) ends our function's instructions

// So, look at this line from our "count_my_items" function above:

// console.log('This is number: '+i);

// that's saying, Add the following phrase to the console: 'This is number X' for each iteration, where the value of X = the current value of i

// Notice the concatenation.




// here is a subtle variation where we can show a list of photos in an /images/ folder

// first, we'll create an empty array called "myArray". 

// then we'll loop through the following code, which creates a list of images as HTML List Items

// each image will have a class name so we can style it with CSS

// note the concatenation when the current "i" value is added to the HTML string

// then I assemble those parts using concatenation

// NOTE: this example assumes the images are stored on my server, and are named thusly: IMG_1.jpg, IMG_2.jpg, etc

function show_my_images(myValue)
{
var myArray = []; // our empty array

for (var i = 0; i < myValue; i++) {

	var myImageStart = '<li>';
	var myImageSourceStart = '<img src="';
	var myImagePath = 'https://johncarmody.com/school/mc/files/intro-to-loops-and-arrays/images/IMG_'+i+'.jpg"';
	var myImageSourceEnd = ' class="myImageClass" />';
	var myImageEnd = '</li>';

	var myFinalImagePath = myImageStart+myImageSourceStart+myImagePath+myImageSourceEnd+myImageEnd;

	// add the new value to the array ("myArray"):
	myArray.push(myFinalImagePath);

	//confirm this is working via the console.log:
	console.log(myFinalImagePath);
}

	// by default, arrays are separated by commas. Below, we'll use the JS JOIN method to convert the array values into a string to remove the commas.

	// FYI: technically, with JOIN we are *replacing* the comma with nothing (''), that is, joining the array values with nothing between them.

	// In sum, here I create a new var, "myFinalList", to hold the value of "myArray" once it is converted to a string with commas removed:

	var myFinalList = myArray.join('');

	// check it in the console to make sue it is what I expect:
	console.log(myFinalList);

	// create vars for the beginning and ending of an HTML Unordered List
	var myListStart = '<ul class="image-list">';
	var myListEnd = '</ul>';

	// create a var holding the name of the empty HTML DIV into which we'll add the list with JS
	var theImageList = document.getElementById('image-holder');

	// take that var, and inject the following concatenated vars into it (UL start, LI values from array, UL close):
	theImageList.innerHTML = myListStart+myFinalList+myListEnd;
}






/////////////////////////////////////////////////////////////////








// NEW Week 7 //

// in JS, we open an alert() window when we want to stop the action on the page, and display a message.

// if you want to put a string in an alert it would look like this:

// alert('this is a string');

// if you want to put a var in an alert it would look like this:

// alert(myVar);




// next, we'll use Alert() as we test the value of a variable's contents, in this case, "myNumber"

// if it matches a condition, we'll open an alert() with a message, and run a function

// if it does not match the condition, we'll open an alert() with a different message, and run a different function, which in this example shows photographs in an unordered list

// FYI: if these alert windows get annoying, you can also comment them out as I do here and just show the value in the console screen, as described above

if (myNumber < '2') {
	alert('Your number is less than 2.');
	count_my_items('12'); // run counter function
}

else // that is, myNumber is NOT < '2'
{
	alert('Your number is equal to or greater than 2.');
	console.log('Your number is equal to or greater than 2.');
	show_my_images('8'); // run image function
}


// close your creation of the "myLoopExample" function (the "}" ):
}

// now, call this function (run it when the page loads):
myLoopExample();






/////////////////////////////////////////////////////////////////








// NEW Week 7 //
// Intro To Error Messages in JS

// This simple code creates an array with 5 values; then prints the 4th value in the array to the console.

// Note that when we create the array variable, the items inside the array (its values) must be enclosed in square brackets ([ ]) and separated by a comma. If any are strings, they must be enclosed in double quotes.

function myGreetingsList()
{
	var greetings = ["Hi", "Hello", "Howdy", "How Are You", "Greetings"];
	console.log(greetings[4]); // NOTE the hard-coded value (see below)
}

myGreetingsList();

// Want to generate an error? Change the 4 below to 6, save and reload. What happens?

// The console shows the word "undefined".

// Remember how I said JS is really hard to debug? That's an example: an error message with no real info as to what is causing it. "undefined" is not helpful.

// In this case, the error is caused when I changed the value in this line from 4 to 6:

// console.log(greetings[6]);

// In it, I am now asking it to print to the console the *6th* item in the array, whereas there are only *5* items in the array. Therefore, the value is "undefined", as it does not exist.



// Next, we can combine what we've learned and instead of hard-coding a value such as "4", above, we can use our random number generator:
function myRandomGreeting() {
	var myNumber = Math.floor(Math.random() * 5);
	var greetings = ["Hi", "Hello", "Howdy", "How Are You", "Greetings"];
	console.log('Here is my random greeting: '+greetings[myNumber]);
}

myRandomGreeting();

// That should print to the console a phrase much like "Here is my random greeting: Howdy".

// NOTE, if you see 2 greetings printed, it is because we are printing the hard-coded value as well, with our myGreetingsList() function.

// You can comment it, to turn it off.
