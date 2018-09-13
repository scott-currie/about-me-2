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
var logMsg = '';
var correctAnswers = 0;
var visitorName = prompt('Before we get started, please tell me your name.');

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
    logMsg = 'Invalid answer. Correct answers so far: ';
  }
  // do the following if answer was not 'q'
  else {
    // If answer equals key answer at responseData[0], this is a correct answer. Give responseData[1] as response.
    if (answer === responseData[0]) {
      response = responseData[1];
      correctAnswers++;
      logMsg = 'Correct answer. Correct answers so far: ';
    }
    // if it wasn't q and wasn't the key, then response is responseData[2]
    else {
      response = responseData[2];
      logMsg = 'Incorrect answer. Correct answers so far: ';
    }
  }
  console.log(logMsg + correctAnswers);
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
while (tries > 0) {
  var guess = prompt('What\'s your guess?');
  var alertResponse = '';
  console.log('User guess: ' + guess);
  if (parseInt(guess) === targetNum) {
    alert('Nice! You guessed it.');
    correctAnswers++;
    console.log('Number guessing game won. Correct answers so far: ' + correctAnswers);
    break;
  } else if (guess < targetNum) {
    alertResponse = 'No. Your guess was too low.';
  } else if (guess > targetNum) {
    alertResponse = 'No. Your gess was too high.';
  }
  else {
    alertResponse = 'No. Was that even a number?';
  }
  tries--;
  if (tries === 0) {
    console.log('Number guessing game failed. Correct answers so far: ' + correctAnswers);
    alert(alertResponse + '\nSorry. You\'re out of tries. My number was ' + targetNum);
  }
  else {
    console.log('Incorrect guess. Tries remaining: ' + tries);
    alert(alertResponse + ' Try again. You have ' + tries + ' guesses remaining.');
  }
}

// Multiple choice question
var countries = ['brazil', 'japan', 'india', 'thailand', 'italy'];
alert('One more game. I\'ll give you 6 tries to guess one of the top 5 countries I want to visit. Here\'s a hint: I\'ve only been to Canada so far.');
tries = 6;
while (tries > 0) {
  guess = prompt('Guess a country: ');
  console.log('User guess: ' + guess);
  tries--;
  if (countries.includes(guess.toLowerCase())) {
    alert('Yes! That is one of the countries I\'d like to visit.\n\nAll correct answers were: ' + countries.join(', '));
    console.log('User guess was correct.');
    break;
  }
  else {
    alert('No. That sounds good, but it\'s not in my top 5. You have ' + tries + ' tries remaining.');
    console.log('User guess was incorrect. Tries remaining: ' + tries);
  }
  if (tries === 0) {
    alert('Sorry, but you didn\'t get any guesses correct. My answers were:\n\n' + countries.join(', '));
    console.log('User failed multiple choice guessing game. Correct answers so far: ' + correctAnswers);
  }
}
console.log('Quiz completed. User score: ' + correctAnswers);
alert('Thanks for playing my quiz, ' + visitorName + '. You got ' + correctAnswers + ' out of 7 correct.');


