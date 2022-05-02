
class Quiz
{
    constructor()
    {

    }


    //going from the game to the firebase database to read and collect the value of the "gameState" node created under the firebase database
    getState()
    {
         var gameStateRef = database.ref("gameState")
         gameStateRef.on("value", function(data)
         {
            gameState = data.val()
         })
    }


    //
    update(state)
    {
        database.ref("/").update({
            gameState: state//updating the value of gameState with state
        })
    }



    //make the start function an async function
    async start()
    {
        if(gameState==0)
        {
            contestant = new Contestant()
            var contestantCountRef = await database.ref("playerCount").once("value")
            if(contestantCountRef.exists())
            {
                contestantCount = contestantCountRef.val()
                contestant.getCount()
            }
        }
        //follow the same steps done for quiz file under sketch.js for question.js under quiz.js
        question = new Question()
        question.display()
         
    }



    //
    play()
    {
        question.hide()
        background("yellow")
        fill("black")
        textSize(20)
        text("The Result Of The Quiz", 340, 50)
        Contestant.getPlayerInfo() 
        //check the condition if no player are there in the array
        if(allContestants!= undefined)//if the array allContestants is not undefined(empty)
        {
            debugger
            var displayAnswers = 230
            fill("blue")
            textSize(20)
            text("Contestants who answered correctly are highlighted in green color.",130,230)
            //create a for loop with a variable plr that traverses/going//going one by one through each element in the array called all contestants    
            for(var plr in allContestants)
            {
                debugger
                var correctAnswer = "2"
                
                if(correctAnswer==allContestants[plr].answer)
                {
                    fill("green")
                }
                else
                {
                    fill("red")
                }

                displayAnswers+=30
                textSize(20)
                //Name of the player in an array: answer of the player in the array, 250, displayAnswers
                //John: 5 (this is printed at location 250, displayAnswers)

                text(allContestants[plr].name + ":" + allContestants[plr].answer, 250, displayAnswers)
            }
        }
    }
}