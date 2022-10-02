import readlineSync from "readline-sync";
import chalk from "chalk";

var score = 0;
var called = true;

function play(question, answer){

    if(score >= 5 && called){
    console.log(chalk.blue("Congratulations you are moved to the level 2"));
      called = false;
    }
  
  var userAnswer = readlineSync.question(question);
  
  if(answer === "greet"){
    console.log(chalk.cyanBright("Welcome, " + userAnswer + "! Have a great day!"));
    if(score >= 5)
      score = score + 2;
    else
      score = score + 1;
  } else if(userAnswer.toLowerCase() === answer.toLowerCase()){
      console.log(chalk.green("Great!"));
    if(score >= 5)
      score = score + 2;
    else
      score = score + 1;
  } else if(answer.toLowerCase() === "good"){
      console.log(chalk.cyan("Great! You are amazing"));
    if(score >= 5)
      score = score + 2;
    else
      score = score + 1;
  }else{
    console.log(chalk.red("wrong"));
  }

  console.log("Current score: ", score);
  console.log("--------------------");
}

var questions = [
  {
  question : "What is you name? ",
  answer: "greet"
  },
  {
  question : "Do you watch anime? ",
  answer: "Yes"
  },
  {
  question : "Your favorite anime character! ",
  answer: "good"
  },
  {
    question : "What is Ash (Pokemon) buddy pokemon name? ",
    answer: "Pikachu"
  },
  {
    question : "What is Goku older son's name? ",
    answer: "Gohan"
  },
  {
    question: "How many eposide are there in Death Note? ",
    answer: "37"
  },
  {
    question: "Did One Piece has more than 1000 eposide? ",
    answer: "yes"
  },
  {
    question: "Do you read manga? ",
    answer: "yes"
  },
]

console.log(chalk.blue("Welcome to Anime Quiz"));

for(var i = 0; i < questions.length; i++)
  play(questions[i].question, questions[i].answer);

console.log(chalk.greenBright("Final Score is: ", score));