/* Scrivi una funzione che accetti una stringa e 
restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalNumbers (string){

    string = string.toLowerCase

    let count = 0

    for (let i = 0; i < string.length; i++)
        // console.log (string[i])
        const letter = string [i]

        if (letter === "a") {
            count = count + 1
        } else if (letter === "e"){
            count = count + 1
        } else if (letter === "i"){
            count = count + 1
        } else if (letter === "o"){
            count = count + 1
        } else (letter === "u"){
            count = count + 1
        }

    return count


}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)