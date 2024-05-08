'use strict';

// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

const array1 = ["ciao", "come", "va"];
const array2 = ["bene", "grazie", "ciao", "come", "va", "tutto", "bene"];
let lArray1 = array1.length;
let lArray2 = array2.length;

if (lArray1 > lArray2) {
    while (lArray1 > lArray2) {
        const parola = prompt("Inserisci elemento nell'array minore");
        array2.push(parola);
        lArray2++;
    }
} else
    if (lArray2 > lArray1) {
        while (lArray2 > lArray1) {
            const parola = prompt("Inserisci elemento nell'array minore");
            array1.push(parola);
            lArray1++;
        }
    } else {
        alert("Gli array hanno le stesse dimensioni");
    }
console.log("Fine");
console.log(array1);
console.log(array2);
