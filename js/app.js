'use strict';
// If any of these questions get changed, change the item in responses at the same index to reflect that
var questions = ['Is it true that my name is Scott?',
                'Do I have any kids?',
                'My favorite hobby is rock climbing, correct?',
                'Do I prefer pizza over tacos?',
                'Do you recognize me from my appearance on Law & Order?'
                ];

// Each array in responses contains the correct answer, the response for correct answers, then the response for incorrect answers
var responses = [
                ['y', 'Yes, that was an easy one to start with.', 'No, sorry. Are you taking this seriously?'],
                ['y', 'Yes, that\'s correct. My boys are 10 and 15.', 'No, I a actually do. Surprised?'],
                ['n', 'That\'s right. I\'m interested in rock climbing, but haven\'t really done it yet.', 'No, not really. I\'m interested in trying it out, though.'],
                ['n', 'That\'s right. Tacos are clearly better than pizza.', 'No, not at all. Pizza is pretty good, but tacos are far superior.'],
                ['n', 'You saw right through me. I\'ve never been on TV.', 'Haha! No, that was a trick question. I\'ve never been on TV.']
              ];

var invalidResponse = 'Sorry. I couldn\'t understand your response.';

var answer = '';
var responseData = [];
var response = '';
// Loop through all the questions
for (var i = 0; i < questions.length; i++) {
  answer = prompt(questions[i]);
  answer = answer.toLowerCase();
  // Turn user's answer into a 'y', 'n', or 'q'
  if ((answer === 'y') || (answer === 'yes')) {
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
