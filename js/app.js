'use strict';
var questions = ['Is it true that my name is Scott?',
                'Do I have any kids?',
                'My favorite hobby is rock climbing, correct?',
                'Do I prefer pizza over tacos?',
                'Do you recognize me from my appearance on Law & Order?'
                ];

//  For now responses are in a single array with correct answer first and incorrect
//  answers following. This should make it easy to change them later
var responses = [
                ['y', 'Yes, that was an easy one to start with.', 'No, sorry. Are you taking this seriously?'],
                ['y', 'Yes, that\'s correct. My boys are 10 and 15.', 'No, I a actually do. Surprised?'],
                ['n', 'That\'s right. I\'m interested in rock climbing, but haven\'t really done it yet.', 'No, not really. I\'m interested in trying it out, though.'],
                ['n', 'That\'s right. Tacos are clearly better than pizza.', 'No, not at all. Pizza is pretty good, but tacos are far superior.'],
                ['n', 'You saw right through me. I\'ve never been on TV.', 'Haha! No, that was a trick question. I\'ve never been on TV.']
              ];

var invalidResponse = 'Sorry. I couldn\'t understand your response.';

var correct = 0;
var answer = '';
var responseData = [];
var response = '';
// Loop through all the questions
for (var i = 0; i < questions.length; i++) {
  answer = prompt(question[i]);
  answer = answer.toLowerCase()
  // Turn user's answer into a 'y', 'n', or 'q'
  if ((answer === 'y') || (answer == 'yes')) {
    answer = 'y';
  } else if ((answer === 'n') || (answer === 'no')) {
      answer = 'n';
  } 
  else {
    answer = 'q';
  }
  responseData = responses[i];
  // find out if answer is 'q'. That means we know our response already.
  if (answer === 'q') {
    response = invalidResponse;
  }
  // do the following if answer was not 'q'
  else {
    // If answer equals key answer at responseData[0], this is a correct answer. Give responseData[1] as response.
    if (answer === responseData[0]) {
      response = responseData[1];
    }
    // if it wasn't q and wasn't the key, then response is responseData[2]
    else {
      response = responseData[2];
    }
  }
  alert(response);
}



// if ((answer1.toLowerCase() === 'yes') || (answer1.toLowerCase() === 'y')) {

//   correct = 1;
// } else if ((answer1.toLowerCase() === 'no') || (answer1.toLowerCase() === 'n')) {

//   correct = 0;
// } else {
//   response = invalidResponse;
//   correct = -1;
// }
// writeConsole(question1, answer1, correct);
// alert(response);
// var answer2 = prompt(question2);
// if ((answer2.toLowerCase() === 'yes') || (answer2.toLowerCase() === 'y')) {
 
//   correct = 1;
// } else if ((answer2.toLowerCase() === 'no') || (answer2.toLowerCase() === 'n')) {
//   // response = 'No, I a actually do. Surprised?';
//   correct = 0;
// } else {
//   response = invalidResponse;
//   correct = -1;
// }
// writeConsole(question2, answer2, correct);
// alert(response);
// var answer3 = prompt(question3);
// if ((answer3.toLowerCase() === 'yes') || (answer3.toLowerCase() === 'y')) {
//   correct = 0;
// } else if ((answer3.toLowerCase() === 'no') || (answer3.toLowerCase() === 'n')) {

//   correct = 1;
// } else {
//   response = invalidResponse;
//   correct = -1;
// }
// writeConsole(question3, answer3, correct);
// alert(response);
// var answer4 = prompt(question4);
// if ((answer4.toLowerCase() === 'yes') || (answer4.toLowerCase() === 'y')) {

//   correct = 0;
// } else if ((answer4.toLowerCase() === 'no') || (answer4.toLowerCase() === 'n')) {

//   correct = 1;
// } else {
//   response = invalidResponse;
//   correct = -1;
// }
// writeConsole(question4, answer4, correct);
// alert(response);
// var answer5 = prompt(question5);
// if ((answer5.toLowerCase() === 'yes') || (answer5.toLowerCase() === 'y')) {

//   correct = 0;
// } else if ((answer5.toLowerCase() === 'no') || (answer5.toLowerCase() === 'n')) {

//   correct = 1;
// } else {
//   response = invalidResponse;
//   correct = -1;
// }
// writeConsole(question5, answer5, correct);
// alert(response);
