var pets = ['cat','dog','fish','monkey']

var so_team = ['Anais','Thomas','Marine','Bo','Guillaume','Aurélien','Eliot']

var special_sentence = "You're the best!"


/**
* A function has the keyword function
* A function has a name & () after the name
* A function can take a parameter or multiple parameters
* A function ca return something
* A function can call another function
*/

// STEP 1: Create your first function
/* Instructions: 
 * - create a function to show all the pets'name inside your console
 */
console.log('Script is loaded !');



function getPets() {
	for(var i = 0; i < pets.length; i++) {
		console.log('animal : ', pets[i]);
	}
}


// STEP 2: Call a function
/* Instructions: 
 * - call your function to see on the console all the pets'name
 */

//  getPets();


 // STEP 2: Create a new function with parameter
/* Instructions: 
 * - Create a function you can use with pets or so_team
 * - Call the method
 */

function getData(data) {
	for(var i = 0; i < data.length; i++) {
		console.log('Data : ', data[i]);
	}
}

// getData(so_team);

 // STEP 3: Create 2 functions
/* Instructions: 
 * - Create a function which print every member of the SO TEAM
 * - Create a function which print the special sentences 
 * - Print on the screen every name of the SO_team
 * - After every name you have to print the special sentence
 */

function getNames(array_names) {
	for(var i = 0; i < array_names.length; i++) {
		console.log('Data : ', array_names[i]);
		printSentence();
	}
}

function printSentence() {
	console.log(special_sentence)
}

// getNames(so_team);


 // STEP 4: Create a return function
/* Instructions: 
 * - Create a function who return a result of a calculation a + b
 * - Print the data of the result
 */

 function getSum(a, b) {
 	return a+b;
 }

 var result = getSum(2,3);
 console.log('result : ', result);