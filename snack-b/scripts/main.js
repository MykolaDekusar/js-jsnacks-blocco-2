'use strict';
// scrivere una funzione contaElementi() che, dato un array in input, restituisca il numero di elementi presenti nell'array
const richiestaUtente = prompt("Inserisci l'elemento da cercare");
richiestaUtente.toLowerCase();
const lista = ["vodka", "soda", "wiskey", "birra", "malibu"];

console.log(richiestaUtente);

console.log(trovaIndice(richiestaUtente, lista));

function trovaIndice(richiestaUtente, lista) {
    let contatore = 0;
    //ciclo gli indici della lista fino alla fine
    while (lista[contatore] !== undefined) {
        //se trovo lo stesso elemento dell'utente ritorno la sua posizione
        if (lista[contatore] === richiestaUtente) {
            return console.log(`Si trova in posizione ${contatore}`);
        }//se non trovo l'elemento dell'utente aumento il contatore
        else {
            contatore++;
        }
    }
    //se arrivo alla fine quindi undefined restituisco -1
    return -1;
}