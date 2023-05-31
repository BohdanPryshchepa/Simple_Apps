const passwirdField = document.querySelector('.js-password-field'),
lengthItem = document.querySelector('.js-length-item'),
lengthRange = document.querySelector('.js-length-range'),
number = document.querySelector('.js-number'),
symbols = document.querySelector('.js-symbols'),
btnGenerate = document.querySelector('.js-btn-generate'),
charsNumbers = '0123456789',
charsSymbols = '@#$%^&*([]'


lengthRange.addEventListener('input', function(){
    lengthItem.value = lengthRange.value;
})
lengthItem.addEventListener('input', function(){
    lengthRange.value = lengthItem.value;
})


btnGenerate.addEventListener('click', ()=>{
    let password = ''

    let charsLetters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

    if(number.checked){
        charsLetters += charsNumbers
    }
    if(symbols.checked){
        charsLetters += charsSymbols
    }

    for (let i = 0; i < lengthItem.value; i++) {
       password += charsLetters[Math.floor(Math.random()*charsLetters.length)]
        console.log(Math.floor(Math.random()*charsLetters.length));
    }

    passwirdField.innerHTML = password
})