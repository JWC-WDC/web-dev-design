function randomQuote() {

// choose a random number from 1 to 3:

var myNumber = Math.floor(Math.random() * 4);

//create vars based on random number:

switch (myNumber) {				
	case 1:
	var randomPhrase = 'Loose Lips Sink Ships!';
	var authorName = 'WWII Slogan';
	var myImage = 'https://johncarmody.com/school/mc/files/mrs-meyers/typography/victorian/4a307421f5da63d17110d11db6fa0623.jpg';
	break;

	case 2:
	var randomPhrase = 'I believe the best definition of man is: The Ungrateful Biped.';
	var authorName = 'Fyodor Dostoevsky';
	var myImage = 'https://johncarmody.com/school/mc/files/mrs-meyers/typography/victorian/970f8352b34a10b280a8aa5aea827b17.jpg';
	break;

	case 3:
	var randomPhrase = 'Nature Abhors A Vacuum.';
	var authorName = 'Aristotle';
	var myImage = 'https://johncarmody.com/school/mc/files/mrs-meyers/typography/victorian/e549f2bc527fce6f977ed0432c0bd760.jpg';
	break;

	default:
	var randomPhrase = 'The Future Is Now';
	var authorName = 'George Allen';
	var myImage = 'https://johncarmody.com/school/mc/files/mrs-meyers/typography/dada/00dd3063f6dc15566235d8405910771d.jpg';
}





// show the random number chosen in the console (must have DevTools open):
console.log('The number selected @ random is: '+myNumber);


// NEW //

// Here, we will create a counter function called "count_my_items"
// It is different form the previous functions we wrote: it has an optional "argument" being passed to it.

// In this case the value of "myValue" is being sent to the function so its number can be counted.
// Based on that number your code can reiterate through a single section of code as many times as you need.

// So, where does that value ("myValue") come from?
// When we call the function, as we do below in the IF/ELSE statement, we attach the value as the "argument"
// Remember: we *create* a function, then we *call* the function when needed.

// For example, think of an image gallery web page that lets you choose how many images to see at once, say, 25, 50 or 100.
// If you write a section of code to show an image, its description and a link, for example, that code will execute again and again, up to whatever number you selected (25, 50 or 100). Then it will stop.
 
// Also new in this function is something to make such an iteration happen, what we call a "loop". A loop is a block of JS code executed as many times as needed, iterating through a list until it is done.
// The syntax can be daunting, but it is always the same: once you learn it you can use it in numerous programming languages too

// The first thing we do inside our new function is to create a "for" statement to create a loop.

function count_my_items(myValue)
{
	for (var i = 0; i < myValue; i++) {
		console.log('This is number: '+i);
		console.log('image_'+i+'.jpg');
	}
}

// Remember: A loop is a series of instructions, run over and over again

// OK, a closer look at the for() loop syntax, turned off/commented here so it will not run:

1. //for (let i = 0; i < 10; i++)
2. // {
3. //	MyOtherFunction();
4. //}

// line 1 begins with our "for()" loop
// inside this loop it says: let i = 0; i < 10; i++
// in pseudocode, that says, create a temporary var called "i" and set its default value to zero
// then, as long as the value of i is LESS THAN 10, it will run whatever code you write
// then, it will increment the value of i, for example, from 1 to 2 to 3 etc., up until it hits the limt (less than 10)












// NEW // 
// test the value of a variable's contents
// if it matches a condition, open an alert with a message
// if it does not match the condition, open an alert with a different message
// if these alert windows get annoying, you can also show the value in the console screen

if (myNumber < '3') {
	alert('Your number is less than 3.');
	count_my_items('17');
}

else
{
	alert('Your number is equal to or greater than 3.');
	console.log('Your number is equal to or greater than 3.');
}






 





// take vars from above and populate HTML content with matching ID:
var mainHeadline = document.getElementById('main_headline');
mainHeadline.innerHTML = '"'+randomPhrase+'"';	

var theAuthor = document.getElementById('subHeadline');
theAuthor.innerHTML = authorName;	

var theImage = document.getElementById('image-container');
theImage.innerHTML = '<img src="'+myImage+'" class="main-image"/>';//alert(img_text);
}



// call this function (run it when the page loads):
randomQuote();







// using ALERT





// when the window loads, run this function. It says, look in the HTML for an HTML ELEMENT with a class named called "formelement"

window.onload=function(){
	var el1 = document.getElementsByName('formelement')[0]; ;

	if (el1.value = 'yes') {
  	//alert(el1.value)
  }

  else
  {
  	alert('xxx')
  }




  var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

  for (var i = 0; i < checkboxes.length; i++) {
  	array.push(checkboxes[i].value)
  }



  var el2 = document.getElementsByName('formelement')[1];  //alert(el2.value);

  el1.onchange=function(){
  	var show=el1.value;
  	var hide=el2.value;
  	document.getElementById(show).style.display='block';
  	document.getElementById(hide).style.display='none';
  	console.log(el1.value);
  }

  el2.onchange=function(){
  	var show=el2.value;
  	var hide=el1.value;
  	document.getElementById(show).style.display='block';
  	document.getElementById(hide).style.display='none';
  }  
}





