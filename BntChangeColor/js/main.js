const block = document.querySelector('.js-block'),
color = document.querySelector('.js-color'),
btn = document.querySelector('.js-btn'),
hex = '0123456789ABCDEF';

let randomColor = '#'

const getRandomColor = () => {
    randomColor = '#'
   
    for (let i = 0; i < 6; i++) {
       randomColor += hex[Math.floor(Math.random()*hex.length)]
    }
    
}

btn.addEventListener('click' , () => {
    getRandomColor()
    block.style.backgroundColor = randomColor
    color.innerHTML = randomColor;
})