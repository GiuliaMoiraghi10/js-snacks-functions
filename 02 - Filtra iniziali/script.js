/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filterByLetter(array, letter){
    console.log(array)
    console.log(letter)

    const result = []

    for (let i = 0; i < array.length; i++){
        const element = array[i]
        console.log(element)
    
        if (element [0] === letter()) {
            result.push(element)
        }

    }
    return result
}

// Invoca la funzione qui e stampa il risultato in console

filterByLetter (names, "A")

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]