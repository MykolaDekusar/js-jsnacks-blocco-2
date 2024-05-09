'use strict';
'use strict';
// snack-bonus
// scrivere una funzione inserisciInTesta() che, dati un array A e un elemento E in input, resituisca un nuovo array B, con E in prima posizione e a seguire tutti gli elementi di A
const arrayClean = [];
const elementoInput = [prompt("Inserisci cosa mettere all'inizio")];
const contatore = contatoreArray();
//richiamo la funzione 
console.log(inserisciInTesta());

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
            arrayClean[i] = array[i];
        }
    }
    if (!(contatore === 0)) return contatore;
    //se è vuoto restituisco falso
    return false;
}

//FUNZIONE INSERISCI IN TESTA 
function inserisciInTesta() {
    for (let i = 0; i < contatore; i++) {
        //aggiungo gli elementi array dalla posizione 1
        elementoInput[i + 1] = arrayClean[i];
    }
    return elementoInput;
}