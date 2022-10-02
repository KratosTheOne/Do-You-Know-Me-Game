var readLineSync = require('readline-sync');

var user = readLineSync.question("What's your name? ");
var score  = 0;

console.log();
console.log("Hi " + user + "! welcome to the game DO YOU KNOW Kaustubh?");
console.log();

//Play function
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score++;
  } else {
    console.log("You are wrong!");
    score--;
  }

  console.log("Your score is: " + score);
}

//Array of questions
var questions = [
  {
    question : "Where do I Live? ",
    answer : "Faridabad"
  },
  {
    question : "What is my current age? ",
    answer : "21"
  },
  {
    question : "What do I like to eat? ",
    answer : "Chicken"
  },
  {
    question : "Where do I study? ",
    answer : "Geu"
  },
  {
    question : "What is my fav sport? ",
    answer : "Football"
  }
];

//Looping
for(var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  console.log();
}

if(score <= 0) {
  console.log("Your Score is: " + score + ", Shame! do you even know me? ");
} else {
  console.log("Yay! you scored : " + score);
}