//Chiedere all’utente di inserire una parola Creare una 
//funzione per capire se la parola inserita è palindroma

//Inverto la parola
function invertiStringa(str) {
 return str.split('').reverse().join('')

}

//Chiedo all'utente di scegliere una parola
let testo = prompt('Scegli una parola')

//Trasformo la parola in maiuscolo
testo = testo.toUpperCase()

const invertita = invertiStringa(testo)

//Metodo per far inserire solo caratteri validi
if (!/^[a-zA-Z]+$/.test(testo)) {
    console.log("Non hai inserito una parola valida.");
}

//Risposta a schermo
else if(invertita === testo){
    console.log(`${testo} - ${invertita} ==> QUESTA PAROLA É PALINDROMA`)
}
 else 
    console.log(`${testo} - ${invertita} ==> QUESTA PAROLA NON É PALINDROMA`)

