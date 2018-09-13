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
var msg = '';
var correctAnswers = 0;

// Loop through all the questions
for (var i = 0; i < questions.length; i++) {
  answer = prompt(questions[i]);
  console.log('Question: ' + i + ', user answer: ' + answer);
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
    msg = 'Invalid answer. Correct answers so far: ';
  }
  // do the following if answer was not 'q'
  else {
    // If answer equals key answer at responseData[0], this is a correct answer. Give responseData[1] as response.
    if (answer === responseData[0]) {
      response = responseData[1];
      correctAnswers++;
      msg = 'Correct answer. Correct answers so far: ';
      // console.log('Correct answer. Correct answers so far: ' + correctAnswers);
    }
    // if it wasn't q and wasn't the key, then response is responseData[2]
    else {
      response = responseData[2];
      // console.log('Incorrect answer. Correct answers so far: ' + correctAnswers);
      msg = 'Incorrect answer. Correct answers so far: ';
    }
  }
  console.log(msg + correctAnswers);
  alert(response);
}
// Number guessing logic
alert('Let\'s play a guessing game. I\'ll think of a number between 1 and 10, and you\'ll try to guess it.');
var targetNum = Math.random() * 10;
// This part is not great, but it works to keep the numbers in range without having to learn the right way or copypasta some code 
if (targetNum >= 0 && targetNum < 1.0) {
  targetNum = 1;
} else if (targetNum >= 9.5) {
  targetNum = 10;
}
else {
  targetNum = Math.floor(targetNum);
}
console.log('Number to guess: ' + targetNum);
var tries = 4;
// var msg = '';
while (tries > 0) {
  var guess = prompt('What\'s your guess?');
  console.log('User guess: ' + guess);
  if (parseInt(guess) === targetNum) {
    alert('Nice! You guessed it.');
    correctAnswers++;
    console.log('Number guessing game won. Correct answers so far: ' + correctAnswers);
    break;
  } else if (guess < targetNum) {
    // alert('No. Your guess was too low. Try again.');
    msg = 'No. Your guess was too low.';
  } else if (guess > targetNum) {
    // alert('No. Your guess was too high. Try again.');
    msg = 'No. Your gess was too high.';
  }
  else {
    // alert('Are you sure that was even a number? Try again.');
    msg = 'No. Was that even a number?';
  }
  tries--;
  if (tries === 0) {
    console.log('Number guessing game failed. Correct answers so far: ' + correctAnswers);
    alert(msg + '\nSorry. You\'re out of tries. My number was ' + targetNum);
  }
  else {
    console.log('Incorrect guess. Tries remaining: ' + tries);
    alert(msg + ' Try again.');
  }
}


