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

    }
});
// Set start
/* let start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName('result');
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

let selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
          document.getElementsByClassName('next')[0].style.display="none"
         document.getElementsByClassName('evaluate')[0].innerHTML="GAME OVER"
         document.getElementsByClassName("evaluate")[0].style.background='#F00'
         document.getElementsByClassName("result")[0].style.display="none"
         document.getElementsByClassName('reset')[0].style.display="block"
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
const reset = document.getElementsByClassName('reset')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})

reset.addEventListener("click",() => {
    window.location.reload();
}) */