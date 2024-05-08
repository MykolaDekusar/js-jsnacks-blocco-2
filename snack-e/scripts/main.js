'use strict';
'use strict';
// snack-e
// scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione
const array = [];
const useArray = [];
const contatore = contatoreArray();
//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(rimuoviDallaTesta(contatore, useArray));

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

//FUNZIONE RIMUOVI DALLA TESTA
function rimuoviDallaTesta(nElementiArray, array) {
    const arrayTagliato = [];
    for (let i = 0; i < nElementiArray - 1; i++) {
        arrayTagliato[i] = array[i + 1];
    }
    return arrayTagliato;
}