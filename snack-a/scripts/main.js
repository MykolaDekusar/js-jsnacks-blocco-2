'use strict';
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array
const array = [];
let contatore = 0;
const useArray = [];
//ciclo gli elementi che l'utente vuole inserire e all'esci esce
while (array[contatore - 1] !== 'esci') {
    array[contatore] = prompt("Inserisci dati");
    contatore++;
}
console.log(array);
console.log(useArray);
//richiamo la funzione che ha eliminato l'esci
console.log(contaElementi(contatore));


//creo una funzione che mi misura la lunghezza dell'array settato senza l'esci
function contaElementi(contatore) {
    //verifico che l'array non sia vuoto e se non lo è restituisco la sua lunghezza
    if (!(contatore === 0)) return contatore - 1;
    //se è vuoto restituisco falso
    return false;
}