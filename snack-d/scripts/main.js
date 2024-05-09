'use strict';
//snack - d
// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo
const useArray = [];
const contatore = contatoreArray();
//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(rimuoviDallaCoda(contatore, useArray));

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
            useArray[i] = array[i];
        }
    }
    if (!(contatore === 0)) return contatore;
    //se è vuoto restituisco falso
    return false;
}

//FUNZIONE RIMUOVI DALLA CODA 
function rimuoviDallaCoda(contatore, useArray) {
    const arrayTagliato = [];
    for (let i = 0; i < contatore - 1; i++) {
        arrayTagliato[i] = useArray[i];
    }
    return arrayTagliato;
}