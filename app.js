//Complete guessing game app referenced from index.html

function myGame() {
  var userName = prompt('What\'s your name?');
  alert('Hello ' + userName + '. Let\'s begin!');

  // We want to ask the user a question.
  // Take their answer as input stored in a variable.
  // Validate that their answer matches my answer.
  // Depending on True or False, provide feedback.

  var userAnswerOne = prompt('Was I born in Washington (y/n)?');

  if (userAnswerOne.toLowerCase() === 'n' || userAnswerOne.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I was born in Massachusetts.');
  } else {
    // Do something else
    alert('Incorrect, I was born in Massachusetts.');
  }

  var userAnswerTwo = prompt('Did I study computer science in college (y/n)?');

  if (userAnswerTwo.toLowerCase() === 'n' || userAnswerTwo.toLowerCase() === 'no') {
    // Do something
     alert('Correct, I studied Biology.');
  } else {
    // Do something else
    alert('Incorrect, I studied Biology.');
  }

  var userAnswerThree = prompt('Have I lived in California (y/n)?');

  if (userAnswerThree.toLowerCase() === 'y' || userAnswerThree.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I lived in California from 2007 through 2015.');
  } else {
    // Do something else
    alert('Incorrect, I lived in California from 2007 through 2015.');
  }

  var userAnswerFour = prompt('Do I have children (y/n)?');

  if (userAnswerFour.toLowerCase() === 'y' || userAnswerFour.toLowerCase() === 'yes') {
    // Do something
     alert('Correct, I have two children, Liam (5) and Darcie (2).');
  } else {
    // Do something else
    alert('Incorrect, I have two children, Liam (5) and Darcie (2).');
  }
}
