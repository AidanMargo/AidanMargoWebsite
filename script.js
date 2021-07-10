const rock = document.getElementById('rock');
const dino = document.getElementById('dino');
const score = document.getElementById('score');
const game = document.getElementById('game');



document.addEventListener('keydown', function() {
    if(!dino.classList.contains('jump-animation')){
       jump(); 
    }
});

setInterval(() => {
    score.innerText++;

    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));

    if (rockLeft < -410) {
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

if (rockLeft< -360 && rockLeft > -410 && dinoTop > 150){
    alert('Game Over! You scored ' + (score.innerText - 1) + '! \n\nPlay again?')
    location.reload();

}

}, 50);

