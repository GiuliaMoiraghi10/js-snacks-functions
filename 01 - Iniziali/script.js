/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetterName (array){
    const result = []

    for (let i = 0; i < array.length; i++){
        console.log (array[i].chart(0))
        console.log (array[i] [0])

        const element = array[i]
        const firstLetter = element[0]

        result.push(firstLetter)
    }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(firstLetterName(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]