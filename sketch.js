var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants; //an array of players
var answer;
var database;
var quiz;

var question, contestant, quiz;
var firebase;
var database;
var playerCount;


function setup(){
  canvas = createCanvas(1000,400);
  database = firebase.database()
  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
  
  if(contestantCount==2)
  {
    quiz.update(1)
  }

  if(gameState==1)
  {
    quiz.play()
  }
}
