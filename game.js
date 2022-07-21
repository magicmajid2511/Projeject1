class Game {
    constructor(ctx, width, height, questions) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.questions = questions;
        this.interval = null;
        this.difficulty = 1
        this.selectedOption = null
        this.currentQuestionAns = null;
        this.count = 1;
        this.score = 0;
    }

    start = () => {
        /* this.interval = setInterval(this.updateGame, 1000/60) */
        this.ctx.font = '50px mono'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText("Who wants to be a Satoshionaire ? " ,450, 50)


        this.ctx.font = '40px mono'

        this.ctx.fillText("Rules to play the game: " ,100,150)

                this.ctx.font = '30px mono'

        this.ctx.fillText("Press A to select Option A " ,100, 250)
        this.ctx.fillText("Press B to select Option B " ,100, 300)
        this.ctx.fillText("Press C to select Option C " ,100, 350)
        this.ctx.fillText("Press D to select Option D " ,100, 400)

        this.ctx.fillText("Press S to Start the Game " ,480, 600)

    }

    start2 = () => {
        /* this.interval = setInterval(this.updateGame, 1000/60) */

        this.selectQuestion()
    }
    selectQuestion() {
        if (this.count <=5) {
            let easyQuestions = this.questions.filter((question) => question.difficulty === 'easy')
            let randomIndex = Math.floor(Math.random() * easyQuestions.length)

            this.currentQuestion = easyQuestions[randomIndex]
            this.questions.splice(this.questions.indexOf(this.currentQuestion), 1)
            
            this.ctx.font = '30px mono'
            this.ctx.fillStyle = 'white'
            this.ctx.fillText("Question No " + this.count, 50  , 50)

            this.printQuestion()
            this.printAnswers()
        } else if (this.count >5 && this.count <= 11) {
            let mediumQuestions = this.questions.filter((question) => question.difficulty === 'medium')
            let randomIndex = Math.floor(Math.random() * mediumQuestions.length)

            this.currentQuestion = mediumQuestions[randomIndex]
            this.questions.splice(this.questions.indexOf(this.currentQuestion), 1)

            this.ctx.font = '30px mono'
            this.ctx.fillStyle = 'white'
            this.ctx.fillText("Question No " + this.count, 50 , 50)

            this.printQuestion()
            this.printAnswers()
        } else  if(this.count >11) {
            let hardQuestions = this.questions.filter((question) => question.difficulty === 'hard')
            let randomIndex = Math.floor(Math.random() * hardQuestions.length)
            
            this.currentQuestion = hardQuestions[randomIndex]
            this.questions.splice(this.questions.indexOf(this.currentQuestion), 1)
            this.ctx.font = '30px mono'
            this.ctx.fillStyle = 'white'
            this.ctx.fillText("Question No " + this.count, 50 , 50)

            this.printQuestion()
            this.printAnswers()
        }
    }

    printQuestion() {
        this.ctx.font = '30px mono'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(this.currentQuestion.q, 500, 100)
    }

    printAnswers() {
        this.ctx.fillText(`A: ${this.currentQuestion.a[0].text}`, 100, 300)
        this.ctx.fillText(`B: ${this.currentQuestion.a[1].text}`, 1000, 300)
        this.ctx.fillText(`C: ${this.currentQuestion.a[2].text}`, 100, 500)
        this.ctx.fillText(`D: ${this.currentQuestion.a[3].text}`, 1000, 500)
    }


    printResult(ans) {
        

        this.count += 1;

        if (ans == "A" && this.currentQuestion.a[0].isCorrect == true) {
            console.log("here")
                    this.score +=1;

            game.ctx.clearRect(0, 0, game.width, game.height)
            this.ctx.fillText("You are correct", 100, 300)
                        this.ctx.fillText("You have won " + this.score*50000 + " Satoshis ", 100, 400)

            this.ctx.fillText("Press N to continue to the next question", 100, 500)

        } else if (ans == "B" && this.currentQuestion.a[1].isCorrect == true) {
                    this.score +=1;

            
            game.ctx.clearRect(0, 0, game.width, game.height)
            this.ctx.fillText("You are correct", 100, 300)
                                    this.ctx.fillText("You have won " + this.score*50000 + " Satoshis ", 100, 400)

            this.ctx.fillText("Press N to continue to the next question", 100, 500)

        } else if (ans == "C" && this.currentQuestion.a[2].isCorrect == true) {
                    this.score +=1;

            
            game.ctx.clearRect(0, 0, game.width, game.height)

            this.ctx.fillText("You are correct", 100, 300)
                                    this.ctx.fillText("You have won " + this.score*50000 + " Satoshis ", 100, 400)

            this.ctx.fillText("Press N to continue to the next question", 100, 500)

        } else if (ans == "D" && this.currentQuestion.a[3].isCorrect == true) {
                    this.score +=1;

            
            game.ctx.clearRect(0, 0, game.width, game.height)
            this.ctx.fillText("You are correct", 100, 300)
                        this.ctx.fillText("You have won " + this.score*50000 + " Satoshis ", 100, 400)

            this.ctx.fillText("Press N to continue to the next question", 100, 500)

        } else {

            
            game.ctx.clearRect(0, 0, game.width, game.height)
            this.ctx.fillText("You are Wrong,  Game Over", 100, 300)
            this.ctx.fillText("Press S to Start Again", 100, 500)
            this.count = 1;
                    this.score = 0;

            /* this.ctx.clearRect(0, 0, game.width, game.height) */
            /* this.selectQuestion() */
        }

        if (this.count == 21) {
            game.ctx.clearRect(0, 0, game.width, game.height)
                    this.ctx.font = '50px mono'
        this.ctx.fillStyle = 'white'
            this.ctx.fillText("Congratulations!!! You Are Now A  Satoshionaire ", 100, 200)
            this.ctx.fillText("Press S to Start Again", 100, 500)
            this.score = 0;
            this.count = 1;


        }
    }

    updateGame = () => {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.printQuestion()
        this.printAnswers()

    }
}