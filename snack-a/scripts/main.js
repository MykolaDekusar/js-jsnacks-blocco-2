'use strict';
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array
const arrayClean = [];
const contatore = contaElementi();

//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(`Lunghezza:${contatore}, elementi presenti ${arrayClean}`);

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contaElementi() {
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