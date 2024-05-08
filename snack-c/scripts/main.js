'use strict';
// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
const array = [];
const useArray = [];
const contatore = contatoreArray();
const contatore2 = contatoreArrayUpd(contatore);
//richiamo la funzione che ha eliminato l'esci
console.log(contatore2);
console.log(stampa(contatore2, useArray));

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contatoreArray() {
    let contatore = 0;
    while (array[contatore - 1] !== 'esci') {
        array[contatore] = prompt("Inserisci dati");
        contatore++;
    }
    return contatore;
}

//rimuovo l'esci al fondo dell'array
function contatoreArrayUpd(contatore) {
    let contatore2 = 0;
    for (let i = 0; i < contatore; i++) {
        if (array[i] !== 'esci') {
            useArray[i] = array[i];
            contatore2++;
        }
    }
    console.log(useArray);
    if (!(contatore2 === 0)) return contatore2;
    //se è vuoto restituisco falso
    return false;
}
//funzione di stampa
function stampa(lunghezzaArray, array) {
    let stringaArrayBrutta = '';
    let stringaArrayBella = '';
    let i = 0;
    let contatore = 0;
    while (i < lunghezzaArray) {
        stringaArrayBrutta += `${array[i]},`;
        i++;
    }
    while (stringaArrayBrutta[contatore] !== undefined) {
        contatore++;
    }
    for (let i = 0; i < contatore - 1; i++) {
        stringaArrayBella += stringaArrayBrutta[i];
    }
    return stringaArrayBella;
}