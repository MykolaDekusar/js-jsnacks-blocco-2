'use strict';
'use strict';
//snack - d
// scrivere una funzione rimuoviDallaCoda() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne l'ultimo
const array = [];
const useArray = [];
const contatore = contatoreArray();
const contatore2 = contatoreArrayUpd(contatore);
//richiamo la funzione che ha eliminato l'esci
console.log(contatore2);
console.log(rimuoviDallaCoda(contatore2, useArray));

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

//FUNZIONE RIMUOVI DALLA CODA 
function rimuoviDallaCoda(nElementiArray, array) {
    const arrayTagliato = [];
    for (let i = 0; i < nElementiArray - 1; i++) {
        arrayTagliato[i] = array[i];
    }
    return arrayTagliato;
}