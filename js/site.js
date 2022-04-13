 //Step ONE (GET = controller, accepts a request)
 function getMessage() {
     let msg = document.getElementById("txtMessage").value;

     //"Just reverse the string and if it is the same as before, it's a palindrome"
     if (msg != '') {

         msg = msg.toUpperCase();

         const regex = /[^a-z0-9]/gi;
         msg = msg.replace(regex, "");

         let palinObj = palinMessageB(msg);
         displayMessage(palinObj);

     } else {
         alert("You must enter a string");
     }
 }

 //business logic - 

 function palinMessageA(msg) {
     msg = msg.replace(/[^A-Z0-9]/ig, "");
     let revMessage = "";
     let palinMessage = "";
     revMessage = msg.split("").reverse().join("");

     if (msg == revMessage) {
         palinMessage = "That's a palindrome!"
     } else {
         palinMessage = "uh-oh, not a palindrome!"

     }

     return palinMessage
 }

 function palinMessageB(originalWord) {
     let revWord = "";
     let returnObj = {};

     revWord = originalWord.split("").reverse().join("");

     if (originalWord == revWord) {
         returnObj.message = `the word/phrase is a palindrome!`;
         returnObj.IsPalindrome = true;

     } else {
         returnObj.message = `uh-oh, the word/phrase is not a palindrome!`;
         returnObj.IsPalindrome = false;
     }

     returnObj.originalWord = originalWord;
     returnObj.IsPalindrome = revWord;

     // these are the four properties below
     //// Is it a Palindrome
     /// original word
     // reverse word
     // message
     return returnObj
 }


 //Final Step (DISPLAY = view)
 function displayMessage(palinObj) {

     //first get the ol element from the page
     element = document.getElementById("results");
     element.innerHTML = `${palinObj.message} - ${palinObj.originalWord}`;
 }