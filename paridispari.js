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

function gioca() {
    // Ottieni i valori dall'input
    const choice = document.getElementById('choice').value;
    const userNum = parseInt(document.getElementById('userNum').value);
    const resultDiv = document.getElementById('result');

    // ERROR IN CASO DI NUMERI NON VALIDI
    if (userNum < 1 || userNum > 5 || isNaN(userNum)) {
        resultDiv.innerHTML = 'Scegli un numero valido da 1 a 5';
        return;
    }

    // NUMERO RANDOM GENERATO DAL SISTEMA 
    const pcNum = Math.floor(Math.random() * 5) + 1;
    const somma = sommaNumber(userNum, pcNum);

    // DICHIARAZIONE SE È PARI O DISPARI
    const sommaTesto = isEven(somma) ? 'pari' : 'dispari';
    resultDiv.innerHTML = `Il tuo numero: ${userNum}<br>Numero del computer: ${pcNum}<br>TOTALE: ${somma} (${sommaTesto})<br>`;

    // DICHIARAZIONE DEL VINCITORE
    if ((choice === 'pari' && isEven(somma)) || (choice === 'dispari' && !isEven(somma))) {
        resultDiv.innerHTML += 'Hai vinto!';
    } else {
        resultDiv.innerHTML += 'Hai perso!';
    }
}

