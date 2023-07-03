class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/audio/bg-music.mp3');
        this.flipSound = new Audio('assets/audio/flip.wav');
        this.matchSound = new Audio('assets/audio/match.wav');
        this.successSound = new Audio('assets/audio/success.mp3');
        this.gameOverSound = new Audio('assets/audio/failure.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 1;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    success() {
        this.stopMusic();
        this.successSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MuscleMemory {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.matches = document.getElementById('matches');
        this.audioController = new AudioController();
    }
    
    startGame() {

    }

    startCountDown() {

    }

    gameOver() {

    }

    success() {

    }

    hideCards(){
        
    }

    flipCard() {
        
    }

    checkForCardMatch() {
        
    }

    cardMatch() {
        
    }

    cardMismatch() {
        
    }
    
//Help from Port EXE for shuffle function derived from Fisher-Yates Algorithm
    shuffleCards() {

    }

	getCardType() {
        
    }

    canFlipCard() {
            
    }
}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            //game.startGame();

        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            //game.flipCard(card);
        });
    });
}

if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

let audioController = new AudioController();