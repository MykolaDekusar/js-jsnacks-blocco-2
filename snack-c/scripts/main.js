'use strict';
// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
const arrayClean = [];
const contatore = contatoreArray();
//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(stampa());

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contatoreArray() {
    const array = [];
    let contatore = 0;
    do {
        array[contatore] = prompt("Inserisci dati, scrivi esci se vuoi uscire");
        if (array[contatore] === 'esci') { break }
        contatore++;
    }
    while (true)
    //rimuovo l'esci al fondo dell'array
    for (let i = 0; i < contatore; i++) {
        if (array[i] !== 'esci') {
            arrayClean[i] = array[i];
        }
    }
    if (!(contatore === 0)) return contatore;
    //se è vuoto restituisco falso
    return false;
}
//funzione di stampa
function stampa() {
    let stringaArray = '';
    let i = 0;
    while (i < contatore) {
        if (i === 0) {
            stringaArray += `${arrayClean[i]}`;
        } else {
            stringaArray += `,${arrayClean[i]}`;
        }
        i++;
    }
    return stringaArray;
}