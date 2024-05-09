'use strict';
// scrivere una funzione stampa() che, dato un array in input, restituisca una stringa contenente tutti gli elementi dell'array, separati da una virgola
const array = [];
const useArray = [];
const contatore = contatoreArray();
//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(stampa(contatore, useArray));

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contatoreArray() {
    let contatore = 0;
    let contatore2 = 0;
    while (array[contatore - 1] !== 'esci') {
        array[contatore] = prompt("Inserisci dati");
        contatore++;
    }
    //rimuovo l'esci al fondo dell'array
    for (let i = 0; i < contatore; i++) {
        if (array[i] !== 'esci') {
            useArray[i] = array[i];
            contatore2++;
        }
    }
    if (!(contatore2 === 0)) return contatore2;
    //se è vuoto restituisco falso
    return false;
}
//funzione di stampa
function stampa(lunghezzaArray, array) {
    let stringaArrayBrutta = '';
    let i = 0;
    while (i < lunghezzaArray) {
        if (i === 0) {
            stringaArrayBrutta += `${array[i]}`;
        } else {
            stringaArrayBrutta += `,${array[i]}`;
        }

        i++;
    }
    return stringaArrayBrutta;
}