'use strict';
// snack-e
// scrivere una funzione rimuoviDallaTesta() che, dato un array A in input, restituisca un nuovo array B, con tutti gli elementi dell'array A, tranne quello in prima posizione
const useArray = [];
const contatore = contatoreArray(useArray);
//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(rimuoviDallaTesta(contatore, useArray));

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contatoreArray(useArray) {
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

//FUNZIONE RIMUOVI DALLA TESTA
function rimuoviDallaTesta(contatore, useArray) {
    const arrayTagliato = [];
    for (let i = 1; i < contatore; i++) {
        arrayTagliato[i - 1] = useArray[i];
    }
    return arrayTagliato;
}