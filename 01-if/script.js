// STEP 1: LOAD A SCRIPT
/* Instructions: 
 * - call this script in index.html
 */
console.log('Test');


// STEP 2: CREATE BRANCH, COMMIT & PUSH
/* instructions: 
 * - use git command to create a branch: git checkout -b work-of-<my initials>
 * - use git command to commit your changes: git commit -m "<my message>""
 * - use git command to push on your branch: git push origin work-of-<my initials>
 */

// STEP 3: IF & ELSE STATEMENTS
/* Instructions: 
 * - create variable currentUser, constaining a string: <a name>
 * - check if currentUser is connected with the function "isConnected"
 * - if he is, log 'welcome <currentUser>'
 * - else, log 'ERROR: user is not connected'
 */
var isConnected = function() {
    return true
};

// STEP 4: IF & ELSE IN FUNCTIONS
/* Instructions: 
 * - for now, function isConnected always return true
 * - transform the new function isReallyConnected , to check if user is named 'Paul': return true in this case, else return false
 * - create a variable named otherUser, with the value 'Paul'
 * - then, check if currentUser and otherUser are really connected or not
 */
var isReallyConnected = function(user) {};

// STEP 5: CONDITIONS, OR, AND, true or truly ?
/* Instructions: 
 * - check if currentUser and otherUser are really connected, with one sentence.
 * - isReallyConnect should return 'not connected' or 'connected', so the conditions has to change with '==='
 * - if user is Admin, he is automatically connected
 */
var userIsAdmin = true;
