// // element selector
// console.log(document.querySelector('.message').textContent);

// // assign new element (DOM manipulation)
// document.querySelector('.message').textContent = '🎈 correct number';

// console.log(document.querySelector('.message').textContent);

// // (DOM manipulation)
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);




// random number display
secretnumber =Math.trunc(Math.random() *20) +1;
let score = 20;
let highscore = 0;

const DisplayMessage =function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

// click events
document.querySelector('.check').addEventListener('click',
    function() {
        const guess = Number(document.querySelector('.guess').value);
        
        // when is not guess
        if(!guess){
            DisplayMessage('🚫 no number');

        }


        // when guess is correct
        else if(guess === secretnumber){

            DisplayMessage('🎉 correct number');
            document.querySelector("body").style.backgroundColor ="#60b347";
            document.querySelector('.number').style.width = "30rem";
            document.querySelector('.number').textContent = secretnumber;
        
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        // when guess is wrong
        else if(guess !== secretnumber){
            if(score > 1){
                
                score--;
                DisplayMessage(guess > secretnumber ? '📉 too high': '📈To low')
                document.querySelector('.score').textContent = score;
            }else{
                
                DisplayMessage('You lost the game');
                document.querySelector('.score').textContent = 0;
            }
        }
    
    }

);

// again btn
console.log(document.querySelector('.again').addEventListener('click',
    function() {
        score = 20;
        secretnumber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        DisplayMessage('Start guessing');
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        }

));