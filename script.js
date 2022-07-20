const canvas = document.getElementById('example');
const ctx = canvas.getContext('2d');



let game = new Game(ctx, canvas.width, canvas.height, questions)
game.start()

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'KeyA':
            game.currentQuestionAns  = "A";
            game.printResult("A");
            break;
        case 'KeyB':
            game.currentQuestionAns = "B";
             game.printResult("B");
            break;
        case 'KeyC':
            game.currentQuestionAns  = "C";
            game.printResult("C");

            break;
        case 'KeyD':
            game.currentQuestionAns = "D";
            game.printResult("D");
            break;
   case 'KeyN':
            game.currentQuestionAns = "";
            game.ctx.clearRect(0, 0, game.width, game.height)
            game.start2();
            break;
       case 'KeyS':
            game.currentQuestionAns = "";
                this.count = 0;
            game.ctx.clearRect(0, 0, game.width, game.height)
            game.start2();
            break;
    }
});