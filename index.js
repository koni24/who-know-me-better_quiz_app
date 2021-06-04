const chalk = require('chalk');
var readlineSync=require("readline-sync");
var score=0;
// welcome
function welcome(){
  console.log(chalk.green("Hii! Whats your name? "))
  var userName=chalk.green(readlineSync.question());
  console.log(chalk.green("Welcome "+userName +" Lets start the quiz:"));
//    console.log(chalk.green("Instructions:"));
//    console.log(chalk.green("1.you will have two lives."));
//    console.log(chalk.green("2.For answering the next level you have to score the required point."));
//    console.log(chalk.green("So are you ready for the quiz? Lets start:"));
}
  // array of objects
  var questions=[{
    question:"What is my full name? ",
    answer:"konisha kar"
  },{
    question:"What is my favourite cartoon? ",
    answer:"Doreamon"
  },
  {
    question:"When is my birthday?(use dd/mm/yyyy format) ",
    answer:"24/09/2001"
  },
  {
    question:"Do I like beach or mountain? ",
    answer:"beach"
  },{
    question:"What is my dream to become in future? ",
    answer:"travel vlogger"
  },
  {
    question:"What is my dream destination to visit when I will have lots of money? ",
    answer:"Maldives"
  },
  {
    question:"What is my dream religious place to visit? ",
    answer:"Kedarnath"
  }];

   
   function play(question,answer){
     var userAnswer=readlineSync.question(question);

     if(userAnswer.toUpperCase() == answer.toUpperCase()){
       console.log("you are correct");
       score=score+1;
     }
     else{
       console.log("oops! you are wrong");
       console.log("The correct answer is: ",answer);
       score=score-1;
     }
     console.log("current score: ",score);
     console.log("--------------");

   }
   function game(){
     for(var i=0; i<questions.length;i++){
       var currentQuestion=questions[i];
       play(currentQuestion.question,currentQuestion.answer);
     }
   }
   function final_score(){
     console.log("Congratulation you scored: "+score);
   }

welcome();
game();
final_score();

