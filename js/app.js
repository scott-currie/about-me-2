'use strict';
var questions = ['Is it true that my name is Scott?',
                'Do I have any kids?',
                'My favorite hobby is rock climbing, correct?',
                'Do I prefer pizza over tacos?',
                'Do you recognize me from my appearance on Law & Order?'
                ];

//  For now responses are in a single array with correct answer first and incorrect
//  answers following. This should make it easy to change them later
var responses = ['Yes, that was an easy one to start with.',
                'No, sorry. Are you taking this seriously?',
                'Yes, that\'s correct. My boys are 10 and 15.',
                'No, I a actually do. Surprised?',
                'That\'s right. I\'m interested in rock climbing, but haven\'t really done it yet.',
                'No, not really. I\'m interested in trying it out, though.',
                'That\'s right. Tacos are clearly better than pizza.',
                'No, not at all. Pizza is pretty good, but tacos are far superior.',
                'You saw right through me. I\'ve never been on TV.',
                'Haha! No, that was a trick question. I\'ve never been on TV.'
              ];

var invalidResponse = 'Sorry. I couldn\'t understand your response.';

var writeConsole = function (question, answer, answerStatus) {
  // Accepts question, answer, and the answer's status as parameters.
  var correct = '';
  switch (answerStatus) {
    case 0:
      correct = 'incorrect';
      break;
    case 1:
      correct = 'correct';
      break;
    default:
      correct = 'invalid response';
      break;
  }
  console.log('Q: ' + question);
  console.log('A: ' + answer + ' (' + correct + ')');
};
var correct = 0;
var response = '';
var answer1 = prompt(question1);
if ((answer1.toLowerCase() === 'yes') || (answer1.toLowerCase() === 'y')) {
  // response = 'Yes, that was an easy one to start with.';
  correct = 1;
} else if ((answer1.toLowerCase() === 'no') || (answer1.toLowerCase() === 'n')) {
  // response = 'No, sorry. Are you taking this seriously?';
  correct = 0;
} else {
  response = invalidResponse;
  correct = -1;
}
writeConsole(question1, answer1, correct);
alert(response);
var answer2 = prompt(question2);
if ((answer2.toLowerCase() === 'yes') || (answer2.toLowerCase() === 'y')) {
  // response = 'Yes, that\'s correct. My boys are 10 and 15.';
  correct = 1;
} else if ((answer2.toLowerCase() === 'no') || (answer2.toLowerCase() === 'n')) {
  // response = 'No, I a actually do. Surprised?';
  correct = 0;
} else {
  response = invalidResponse;
  correct = -1;
}
writeConsole(question2, answer2, correct);
alert(response);
var answer3 = prompt(question3);
if ((answer3.toLowerCase() === 'yes') || (answer3.toLowerCase() === 'y')) {
  // response = 'No, not really. I\'m interested in trying it out, though.';
  correct = 0;
} else if ((answer3.toLowerCase() === 'no') || (answer3.toLowerCase() === 'n')) {
  // response = 'That\'s right. I\'m interested in rock climbing, but haven\'t really done it yet.';
  correct = 1;
} else {
  response = invalidResponse;
  correct = -1;
}
writeConsole(question3, answer3, correct);
alert(response);
var answer4 = prompt(question4);
if ((answer4.toLowerCase() === 'yes') || (answer4.toLowerCase() === 'y')) {
  // response = 'No, not at all. Pizza is pretty good, but tacos are far superior.';
  correct = 0;
} else if ((answer4.toLowerCase() === 'no') || (answer4.toLowerCase() === 'n')) {
  // response = 'That\'s right. Tacos are clearly better than pizza.';
  correct = 1;
} else {
  response = invalidResponse;
  correct = -1;
}
writeConsole(question4, answer4, correct);
alert(response);
var answer5 = prompt(question5);
if ((answer5.toLowerCase() === 'yes') || (answer5.toLowerCase() === 'y')) {
  // response = 'Haha! No, that was a trick question. I\'ve never been on TV.';
  correct = 0;
} else if ((answer5.toLowerCase() === 'no') || (answer5.toLowerCase() === 'n')) {
  // response = 'You saw right through me. I\'ve never been on TV.';
  correct = 1;
} else {
  response = invalidResponse;
  correct = -1;
}
writeConsole(question5, answer5, correct);
alert(response);
