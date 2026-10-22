const password = document.getElementById('password');
const length = document.getElementById('length');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');


generateBtn.addEventListener('click', () => {
    let combinedCharacters = [];
    let passwordLength = 0;
    let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    let numberCharacters = '0123456789';
    let symbolCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    passwordLength = parseInt(length.value);
    for (let i = 0; i < passwordLength; i++){
        if (includeUppercase.checked) {
            combinedCharacters.push(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
        }
        if (includeLowercase.checked) {
            combinedCharacters.push(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
        }
        if (includeNumbers.checked) {
            combinedCharacters.push(numberCharacters[Math.floor(Math.random() * numberCharacters.length)]);
        }
        if (includeSymbols.checked) {
            combinedCharacters.push(symbolCharacters[Math.floor(Math.random() * symbolCharacters.length)]);
        }
        
    }

    let realAnswer = '';

    for(let i = 0; i < passwordLength; i++){
        realAnswer += combinedCharacters[Math.floor(Math.random() * combinedCharacters.length)];
    }
    password.value = realAnswer;
})