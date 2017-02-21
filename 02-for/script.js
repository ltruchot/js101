// STEP 1: USE ARRAY AND LOOP
/* Instructions:
 * - put your favorite animals (3 at least) in that animals array (it can be imaginary beast, like unicorns)
 * - say in console 'I have <number> animals: <animal>, <animal>, <animal>, <etc>'
 * - feed each animal in a loop: console should say 'I've just fed my <animal>' each time
 * - push 2 more animals an see if it work
 */


var test = 'dodo';
var animals = ['lion', 'elephant', test, 'dragon', 'coucou', 'pingouin', 'koala'];
// console.log('I have ' + animals.length + ' animals:');
// console.log(animals.join('!'));

// console.log(animals[2] + ' et son ami ' + animals[0])
for (i = 0; i < animals.length; i = i + 1) {
  if (i === 3) {
    console.log("I've just fed enormously my " + animals[i] + ".");
  } else {
    console.log("I've just fed my " + animals[i] + ".");
  }
}





document.getElementById('titre').innerHTML = "bonjour, je suis un " + animals[5];

// STEP 2: COMBINE FOR AND IF
/* instructions:
 * - add 2 animals (dog or cat) with their names & species in the collection of namedAnimals
 * - only cats are authorized in the boat: for each animal, say if it can come aboard or not in the console (with a fun message)
 * - add a "hasTicket" in each animal object: true if he can comme aboard, false if he can't
 * - add 4 paws to each animals
 */
var namedAnimals = [{
    name: 'Queequeg',
    species: 'cat'
}, {
    name: 'Asaliah',
    species: 'cat'
}, {
    name: 'Tina',
    species: 'dog'
}]

// STEP 3: LOOP OF LOOPS
/* Instructions:
 * - there is some cat blood at the entrance of the ship. During the travel, the vet decide to check each paw of each cat: help him
 */
