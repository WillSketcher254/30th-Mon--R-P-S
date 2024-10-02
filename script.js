let popup = document.getElementById('popup');
function openPopup(){
    popup.classList.add('open-popup');
};
function closePopup(){
    popup.classList.remove('open-popup');
};

//Rounds
let rounds = document.querySelector('.popupRounds');
let roundNo = document.getElementById('round-No');
let roundWinner = document.getElementById('roundWinner');
let int_roundNo = 1;

function openPopup_rd(){
    int_roundNo++
    roundWinner.textContent = `${rdWinner} won the round !, UP NEXT:`
    roundNo.textContent = `ROUND: ${int_roundNo}`
    rounds.classList.add('open-popupRounds');
    usertotal = 0;
    comptotal = 0;
}
function closePopup_rd(){
    rounds.classList.remove('open-popupRounds');
}

// fetch images
const imagePc = document.querySelector('#comp-img');
const imageUser = document.querySelector('#user-img');


//change pc image at random times
let randImg = ['images/rock.png', 'images/scissor1.png', 'images/paper.png'];

let randImg1 = ['images/rock.png', 'images/scissor.png', 'images/paper.png', 'images/start.JPG'];
let started = false;

function compChoice(){
    if (started === true){
        return
    }
    let x = Math.floor(Math.random()*3);
    let chosenImg = randImg[x];
    imagePc.setAttribute('src', chosenImg);
    let timeX = Math.floor(Math.random()*3)*1000 + 500;
    setTimeout(compChoice, timeX);
};


//My displays
let compDisplay = document.getElementById('compDisplay');
let userDisplay = document.getElementById('userDisplay');

let Myresults = document.getElementById('Myresults');
let compChoices = ['rock','paper','scissors'];
let comptotal = 0;
let usertotal = 0;

let rdWinner = 'no-One';

document.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        startComp = false;
        started = true;
        console.log(playerChoice);
        let x = Math.floor(Math.random()*3);
        let compChoice1 = compChoices[x];
        console.log(compChoice1);
        if(compChoice1 === 'rock'){
            imagePc.setAttribute('src', randImg[0]);
        }else if(compChoice1 === 'paper'){
            imagePc.setAttribute('src', randImg[2]);
        }else if(compChoice1 === 'scissors'){
            imagePc.setAttribute('src', randImg[1]);
        };
        
        let myScore = 0;

        if (playerChoice === 'rock' && compChoice1 === 'scissors'){
            myScore = 1;
        }else if(playerChoice === 'scissors' && compChoice1 === 'paper'){
            myScore = 1;
        }else if(playerChoice === 'paper' && compChoice1 === 'rock'){
            myScore = 1;
        }else if(playerChoice === compChoice1){
            myScore = 2;
        }
        else{
            myScore = 0;
        }

        if(myScore === 0){
            comptotal++
            Myresults.innerHTML = 'YOU LOSE !!';
            if(comptotal === 3){
                rdWinner = 'Computer';
                openPopup_rd();
            }
        }else if(myScore === 1){
            usertotal++
            Myresults.innerHTML = 'YOU WIN !!';
            if(usertotal === 3){
                rdWinner = 'You';
                openPopup_rd();
            }
        }else if(myScore === 2){
            Myresults.innerHTML = 'ITS A TIE !'
        }

        userDisplay.textContent = `User Score: ${usertotal}`;
        compDisplay.textContent = `PC Score: ${comptotal}`;

    }
});

let startComp = false;
//Pressing Q
document.addEventListener('keydown', function(event){
    if (event.key === 'q' || event.key === 'Q'){
        started = false;
        if (startComp === false){
            compChoice();
            startComp = true;
        }
        //else if(started === false){
        //     started = true;
        // }
        userChoice();
        
    }
});

let playerChoice = 'blank'
function userChoice(){
    let rockImg = randImg1[0];
    let paperImg = randImg1[2];
    let scissorImg = randImg1[1];
    let startImg = randImg1[3];

    // Extracting the file name only
    let currentSrc = imageUser.src.split('/').pop();
    
    if(currentSrc === startImg.split('/').pop()){
        imageUser.setAttribute('src',rockImg);
        playerChoice = 'rock';
    }
    else if(currentSrc === rockImg.split('/').pop()){
        imageUser.setAttribute('src', paperImg);
        playerChoice = 'paper';
    }
    else if(currentSrc === paperImg.split('/').pop()){
        imageUser.setAttribute('src', scissorImg);
        playerChoice = 'scissors';
    }
    else if(currentSrc === scissorImg.split('/').pop()){
        imageUser.setAttribute('src', rockImg);
        playerChoice = 'rock';
    }
};


function refreshing(){
    location.reload()
}