class Contestant
{
    constructor()
    {
        this.index = null //index refers to the location number of the player in the array of allContestants
        this.answer = 0 
        this.name = null 
    }

    getCount()
    {
        var contestantCountRef = database.ref("playerCount")
        contestantCountRef.on("value", function(data)
        {
            playerCount = data.val()
        })
        
    }

    updateCount(count)
    {
        database.ref("/").update({
            playerCount: count
        })
    }

    update()
    {
        //Create a variable called contestant index and store the contestants such as player1, player2, player3... inside the node players in the database
        //use the concept of concatination like "name" + 1 = name1
        var contestantIndex = "players/player" + this.index
        //go to the database to the node contestant index, and set the value of name and answer

        database.ref(contestantIndex).set({
            name:this.name,
            answer:this.answer
        })
    }

   static getPlayerInfo()
    {
        var contestantInfoRef = database.ref("players")
        contestantInfoRef.on("value", function(data)
        {
            allContestants = data.val() 
        }
        )
    }

    display()
    {
        
    }
}