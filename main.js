window.addEventListener('load',init);


const levels={
    easy:5,
    medium:3,
    hard:2
}

const currentlevel= levels.medium;
let time=currentlevel;
let score=0;
let isplaying;

 const wordInput = document.querySelector('#word-input');
 const currentWord = document.querySelector('#current-word')
 const scoreDisplay = document.querySelector('#score')
 const timeDipslay = document.querySelector('#time')
 const message = document.querySelector('#message')
 const message1 = document.querySelector('#message1')
 const seconds = document.querySelector('#seconds') 

 const words=[
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  

 ]

 function init() {

}
function startgame(){
    document.querySelector('#score').textContent='0';
  
    seconds.innerHTML = currentlevel;
    showword(words);
    
     wordInput.addEventListener('input', startmatch);
     
    setInterval(countdown,1000);

    setInterval(checkstatus,50);
}

function startmatch(){
    if(matchWords()){
         isplaying=true;
         time=currentlevel + 1;
         showword(words);
         wordInput.value='';
         score++;
    }

    if(score === -1){
           scoreDisplay.innerHTML =0;
    }
    else{
        scoreDisplay.innerHTML=score;
    }
    
    }


function matchWords(){
        if(wordInput.value === currentWord.innerHTML){
            message1.style.display='block';
            message1.innerHTML='Correct!!';
            return true;
        }
        else {
            message1.innerHTML = '';
            return false;
        }
}

function showword(words){
    const randindex= Math.floor(Math.random() * words.length);
    currentWord.innerHTML=words[randindex];
}
function countdown(){

    if(time > 0){
        time--;
    }
    else if(time===0){
        isplaying=false;
    }

    timeDipslay.innerHTML=time;
}
function checkstatus(){
    if(!isplaying && time === 0){
        message.innerHTML='GameOver!!'
        message1.innerHTML='';
        score = -1 ;
    }
    else {
        message.innerHTML = '';
        return false;
    }
}
document.querySelector('.btn-start').addEventListener('click',startgame);




