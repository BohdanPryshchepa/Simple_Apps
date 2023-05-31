const number = document.querySelector('.js-number'),
    minNumber = document.querySelector('.js-min-number'),
    maxNumber = document.querySelector('.js-max-number'),
    listNumbers = document.querySelector('.js-list-numbers'),
    btn = document.querySelector('.js-btn'),
    parametrs = document.querySelector('.js-parametrs'),
    rangeInput = document.querySelector('.js-range-input'),
    listInput = document.querySelector('.js-list-input');


    parametrs.addEventListener('change', () => {
        if(listInput.checked){
            listNumbers.style.opacity = '1';
        } else {
            listNumbers.style.opacity = '0';

    }
    })

    listNumbers.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\s\d]/g, '');
    })
    btn.addEventListener('click', () => {
        if(rangeInput.checked){
            number.innerHTML = Math.floor(Number(minNumber.value) + Math.random() *( Number(maxNumber.value) +1 - Number(minNumber.value)))
        }
        if(listInput.checked){
            let arrListNumbers = listNumbers.value.trim().split(/\s+/)

            number.innerHTML = arrListNumbers[Math.floor(Math.random()*arrListNumbers.length)]
        }
    })