const pikachu = document.querySelector('.pikachu')
const gengar = document.querySelector('.gengar')

const jump = () => {
    pikachu.classList.add('jump')

    setTimeout(() => {
            pikachu.classList.remove('jump')
        },
        500)
}

const loop = setInterval(() => {

    const gengarPosition = gengar.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if (gengarPosition <= 70 && gengarPosition > 0 && pikachuPosition < 62) {

        gengar.style.animation = 'none';
        gengar.style.left = `${gengarPosition}px`

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`

        pikachu.src = '../img/pikachu-gameOver.png'

        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)