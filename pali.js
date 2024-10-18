// //Chiedere all’utente di inserire una parola Creare una 
// //funzione per capire se la parola inserita è palindroma

// //Inverto la parola
// function invertiStringa(str) {
//  return str.split('').reverse().join('')

// }

// //Chiedo all'utente di scegliere una parola
// let testo = prompt('Scegli una parola')

// //Trasformo la parola in maiuscolo
// testo = testo.toUpperCase()

// const invertita = invertiStringa(testo)

// //Metodo per far inserire solo caratteri validi
// if (!/^[a-zA-Z]+$/.test(testo)) {
//     console.log("Non hai inserito una parola valida.");
// }

// //Risposta a schermo
// else if(invertita === testo){
//     console.log(`${testo} - ${invertita} ==> QUESTA PAROLA É PALINDROMA`)
// }
//  else 
//     console.log(`${testo} - ${invertita} ==> QUESTA PAROLA NON É PALINDROMA`)



//VERSIONE 2
function invertiStringa(str) {
    let invertita = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertita += str[i];
    }
    return invertita;
}

// Chiedo all'utente di scegliere una parola
let testo = prompt('Scegli una parola');

// Trasformo la parola in maiuscolo
testo = testo.toUpperCase();

// Metodo per far inserire solo caratteri validi
if (!/^[A-Z]+$/.test(testo)) {
    console.log("Non hai inserito una parola valida.");
} else {
    const invertita = invertiStringa(testo);

    // Risposta a schermo
    if (invertita === testo) {
        console.log(`${testo} - ${invertita} ==> QUESTA PAROLA È PALINDROMA`);
    } else {
        console.log(`${testo} - ${invertita} ==> QUESTA PAROLA NON È PALINDROMA`);
    }
}
