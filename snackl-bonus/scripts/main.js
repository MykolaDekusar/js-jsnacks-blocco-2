'use strict';
'use strict';
// snack-bonus
// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A
const array = [];
const useArray = [];
const elementoInput = [prompt("Inserisci cosa mettere all'inizio")];
const contatore = contatoreArray();
const contatore2 = contatoreArrayUpd(contatore);

//richiamo la funzione che ha eliminato l'esci
console.log(inserisciInTesta(elementoInput, useArray));

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
    if (!(contatore2 === 0)) return contatore2;
    //se è vuoto restituisco falso
    return false;
}
//FUNZIONE INSERISCI IN TESTA 
function inserisciInTesta(elementoInput, array) {
    for (let i = 0; i < contatore2; i++) {
        elementoInput[i + 1] = array[i];
    }
    return elementoInput;
}