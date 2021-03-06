// Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;


const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    
    playerActive0.classList.toggle('player--active');
    playerActive1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;
        console.log(dice);
        
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        if(dice !== 1){
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }
        else{
            switchPlayer();
        }
    }
  
});

btnHold.addEventListener('click', function(){
    if(playing){
        scores[activePlayer] += currentScore;

         document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >=30){
        playing = false;
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
         else{
            switchPlayer();
        }
   }
});
btnNew.addEventListener('click',function(){
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    playerActive0.classList.remove('player--winner');
    playerActive1.classList.remove('player--winner');
    playerActive0.classList.add('player--active');
    playerActive1.classList.remove('player--active');

});


