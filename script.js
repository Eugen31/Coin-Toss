// get references
const startFlipBtn = document.getElementById('coin');
const resetScoreBtn = document.getElementById('refresh')

let heads = 0;
let tails = 0;
let coinFace;
const coinSound = new Audio('./assets/coin.mp3')


// create flip coin func
function startFlip() {
    let result;
    result = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';
    messages.textContent = `Coin flipping...`
    coinSound.play();

    if (result) {
        setTimeout(() => {
            coin.style.animation = 'spin-heads 3s forwards';
            isRunning = true;
            coinFace = 'heads'
            heads++;
        }, 1);

    } else {
        setTimeout(() => {
            coin.style.animation = 'spin-tails 3s forwards';
            isRunning = true;
            coinFace = 'tails'
            tails++;
        }, 1);
    }

    setTimeout(update, 2800)
    disableClick();
}


// update scores and status
function update() {
    let headsPoints = document.querySelectorAll('h4')[0]
    let tailsPoints = document.querySelectorAll('h4')[1]
    headsPoints.textContent = `Heads: ${heads}`;
    tailsPoints.textContent = `Tails: ${tails}`;
    messages.textContent = `It's a ${coinFace}`
}


// disable click flipping coin again until func is finish.
function disableClick() {
    startFlipBtn.style.pointerEvents = 'none';
    setTimeout(() => startFlipBtn.style.pointerEvents = 'auto', 2800)
}


// ev.list
startFlipBtn.addEventListener('click', startFlip);
resetScoreBtn.addEventListener('click', () => {
    coin.style.animation = 'none';
    heads = 0;
    tails = 0;
    update()
    messages.textContent = 'click the coin to start flipping';
})