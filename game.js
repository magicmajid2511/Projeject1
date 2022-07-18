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
    }
  
    start = () =>{
    //   this.interval = setInterval(this.updateGame, 1000/60) 
     this.selectQuestion()
    }
  
    selectQuestion(){
      if(this.difficulty === 0){
       let easyQuestions = this.questions.filter((question) => question.difficulty === 'easy')
       let randomIndex = Math.floor(Math.random() * easyQuestions.length)
    
       this.currentQuestion =  easyQuestions[randomIndex]
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
  
  
  
    printResult (ans){
   if(ans=="A" && this.currentQuestion.a[0].isCorrect == true)  {
    console.log("here")
               game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are correct",100, 300)
     } else   if(ans=="B" && this.currentQuestion.a[1].isCorrect == true)  {
        console.log("here2")
               game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are correct",100, 300)
     } else   if(ans=="C" && this.currentQuestion.a[2].isCorrect == true)  {
        console.log("here3")
               game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are correct",100, 300)
     }  else   if(ans=="D" && this.currentQuestion.a[3].isCorrect == true)  {
        console.log("here4")
               game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are correct",100, 300)
     }
      else   {
      
        console.log("here5")
               game.ctx.clearRect(0, 0, game.width, game.height)
  
      this.ctx.fillText("You are Wrong", 100, 300)
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