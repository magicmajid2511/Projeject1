class Game {
    constructor(ctx, width, height, questions){
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.questions = questions;
      this.interval = null;
      this.difficulty = 0
      this.selectedOption = null
      this.currentQuestionAns = null;
      this.count = 1;
    }
  
    start = () =>{
      /* this.interval = setInterval(this.updateGame, 1000/60) */
     this.selectQuestion()
    }
  
    selectQuestion(){
      if(this.difficulty === 0){
       let easyQuestions = this.questions.filter((question) => question.difficulty === 'easy')
       let randomIndex = Math.floor(Math.random() * easyQuestions.length)
    
       this.currentQuestion =  easyQuestions[randomIndex]
           this.ctx.font = '24px mono'
      this.ctx.fillStyle = 'black'
                   this.ctx.fillText("Question No " + this.count  ,  this.width/2 - 150, 50)
  
  this.printQuestion()
               this.printAnswers()
      }
    }
  
    printQuestion(){
      this.ctx.font = '24px mono'
      this.ctx.fillStyle = 'black'
      this.ctx.fillText(this.currentQuestion.q, 500, 100)
    }
  
    printAnswers(){
      this.ctx.fillText(`A: ${this.currentQuestion.a[0].text}`, 100, 300)
      this.ctx.fillText(`B: ${this.currentQuestion.a[1].text}`, 600, 300)
      this.ctx.fillText(`C: ${this.currentQuestion.a[2].text}`, 100, 500)
      this.ctx.fillText(`D: ${this.currentQuestion.a[3].text}`, 600, 500)
    }
  
   sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
  
    printResult (ans){
    console.log(this.count)
    
    this.count+=1;
    
   if(ans=="A" && this.currentQuestion.a[0].isCorrect == true)  {
     console.log("here")
    game.ctx.clearRect(0, 0, game.width, game.height)
      this.ctx.fillText("You are correct",100, 300)
  
      this.ctx.fillText("Press N to continue to the next question", 100, 500)
  
     } else   if(ans=="B" && this.currentQuestion.a[1].isCorrect == true)  {
        console.log("here2")
         game.ctx.clearRect(0, 0, game.width, game.height)
      this.ctx.fillText("You are correct",100, 300)
      this.ctx.fillText("Press N to continue to the next question", 100, 500)
  
     } else   if(ans=="C" && this.currentQuestion.a[2].isCorrect == true)  {
        console.log("here3")
        game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are correct",100, 300)
      this.ctx.fillText("Press N to continue to the next question", 100, 500)
  
     }  else   if(ans=="D" && this.currentQuestion.a[3].isCorrect == true)  {
        console.log("here4")
       game.ctx.clearRect(0, 0, game.width, game.height)
      this.ctx.fillText("You are correct",100, 300)
      this.ctx.fillText("Press N to continue to the next question", 100, 500)
  
     }
      else   {
        console.log("here5")
         game.ctx.clearRect(0, 0, game.width, game.height)
      this.ctx.fillText("You are Wrong,  Game Over", 100, 300)
      this.ctx.fillText("Press S to Start Again", 100, 500)
      this.count = 1;
  
  
         /* this.ctx.clearRect(0, 0, game.width, game.height) */
      /* this.selectQuestion() */
     }
     
     if(this.count==11) {
            game.ctx.clearRect(0, 0, game.width, game.height)
      this.ctx.fillText("You Have Won The Game", 100, 300)
          this.ctx.fillText("Press S to Start Again", 100, 500)
      this.count = 1;
  
  
     }
    }
  
  
  
  
  
    updateGame = () =>{
      this.ctx.clearRect(0, 0, this.width, this.height)
      this.printQuestion()
      this.printAnswers()
  
  }
  }

// Keyboard event listeners - console.log()
// if/else
/* if(this.currentQuestion.a[3].isCorrect){
this.selectQuestion()
} */