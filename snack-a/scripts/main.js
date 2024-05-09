'use strict';
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array
const useArray = [];
const contatore = contaElementi();

//richiamo la funzione che ha eliminato l'esci
console.log(contatore);
console.log(`Lunghezza:${contatore}, elementi presenti ${useArray}`);

//ciclo gli elementi che l'utente vuole inserire e all'esci esce
function contaElementi() {
    const array = [];
    let contatore = 0;
    let contatore2 = 0;
    while (array[contatore - 1] !== 'esci') {
        array[contatore] = prompt("Inserisci dati, scrivi esci se vuoi uscire");
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