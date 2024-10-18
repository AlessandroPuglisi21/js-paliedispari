// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri e stabilire se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

function sommaNumber(userNum, pcNum) {
    return userNum + pcNum;
}

function isEven(num) {
    return num % 2 === 0;
}

// SCEGLI PARI O DISPARI
const choice = prompt('Scegli "pari" o "dispari"');
console.log(`La tua scelta: ${choice}`);

// CHIEDO ALL'UTENTE DI INSERIRE UN NUMERO
let userNum = parseFloat(prompt('Scegli un numero da 1 a 5'));

// ERROR IN CASO DI NUMERI NON VALIDI
if (userNum > 5 || userNum < 1 || isNaN(userNum)) {
    console.error('Scegli un numero valido da 1 a 5');
} else {
    console.log(`Il tuo numero: ${userNum}`);

    // NUMERO RANDOM GENERATO DAL SISTEMA 
    let pcNum = Math.floor(Math.random() * 5) + 1;
    console.log(`Il numero del tuo avversario: ${pcNum}`);

    // SOMMA DEI NUMERI
    let somma = sommaNumber(userNum, pcNum);
    console.log(`TOTALE: ${somma}`);

    // DICHIARAZIONE SE È PARI O DISPARI
    if (isEven(somma)) {
        console.log('La somma è pari.');
    } else {
        console.log('La somma è dispari.');
    }

    // DICHIARAZIONE DEL VINCITORE
    if ((choice.toLowerCase() === 'pari' && isEven(somma)) || 
        (choice.toLowerCase() === 'dispari' && !isEven(somma))) {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
}

