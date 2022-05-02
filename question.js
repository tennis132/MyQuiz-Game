class Question
{
    constructor()
    {
        this.title = createElement("h1")
        this.question = createElement("h2")
        this.option = createElement("h3")
        this.option2 = createElement("h3")
        this.option3 = createElement("h3")
        this.option4 = createElement("h3")
        this.inputBox = createInput("Enter you name here")
        this.inputBox2 = createInput("Enter the correct option number")
        this.submitButton = createButton("Submit")
        this.answerSubmitted = createElement("h1")
    }

    hide()
    {
        this.title.hide()
        this.inputBox.hide()
        this.inputBox2.hide()
        this.submitButton.hide()
    }

    display()
    {
        this.title.html("My Quiz")
        this.title.position(350,0)
        this.question.html("Question: What starts and ends with the letter 'E', but only has one letter?")
        this.question.position(150,65)
        this.option.html("1: Everyone")
        this.option.position(150,100)
        this.option2.html("2: Envelope")
        this.option2.position(150,120)
        this.option3.html("3: Estimate")
        this.option3.position(150,140)
        this.option4.html("4: Example")
        this.option4.position(150,160)
        this.inputBox.position(150,230)
        this.inputBox2.position(330,230)
        this.submitButton.position(250,280)
       

        this.submitButton.mousePressed(
            () => {
                this.title.hide()
                this.inputBox.hide()
                this.inputBox2.hide()
                this.submitButton.hide()

                contestant.name = this.inputBox.value()
                contestant.answer = this.inputBox2.value()
                playerCount += 1
                contestant.index = playerCount
                contestant.update()
                contestant.updateCount(playerCount)
            }
        )






    }
}