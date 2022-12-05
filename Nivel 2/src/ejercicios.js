// Ejercicios

function miPrimeraFuncion() {
    return 'Esta es mi primera funcion'
}

function esVerdadero() {
    return true
}

function noEsVerdadero() {
    return false
}

function malditoArray() {
    return []
}

function malditoObjeto() {
    return {}
}

function elNumerito() {
    return 5
}

function mayorQueCinco(x) {
    return x > 5
}

function menorQueDiez(x) {
    return x < 10
}

function comprobarTexto(text) {
    return text.length > 50
}

function comprobandoDosParametros(x, y) {
    return x > 10 && y > 10
}

function comprobandoTextos(text, otherText) {
    if (text.length !== otherText.length) {
        return false
    }

    return 'Tienen la misma longitud'
}

function alMenosUno(x, y) {
    return x > 5 || y > 5
}

function algunTextoValido(text, otherText) {
    return text.length > 50 || otherText.length > 50
}

function reciboPeroQue(number) {
    number * 2
}

function nadaDeNada(text) {
    `${text} Dani`
}


// Arrays

var devuelveArray = () => [1]

var arrayConCosas = () => ['Perro', 5]

var seleccionArray = (array) => array[1]

var longitudDelArray = (array) => array.length

var llenamosArray = (array) => {
    array.push(4)
    return array
}

var vaciamosArray = (array) => {
    array.pop()
    return array
}

var seleccionPrimerArray = (array) => array[0]

var ultimoDelArray = (array) => array[array.length - 1]

var elElementoSeleccionado = (array, itemIndex) => array[itemIndex]

var otroElementoSeleccionado = (array, index) => array[index + 1]

var elPenultimo = (array) => {
    penultimateIndex = array.length - 2
    return array[penultimateIndex]
}


// Bucles y Arrays

var arrayDeNumeros = (numberOfElements) => {
    var newArray = []
    for (let index = 1; index <= numberOfElements; index++) {
        newArray.push(index)
    }

    return newArray
}

var sumaDeArrayDeNumeros = (array) => {
    var sum = (total, element) => total + element

    return array.reduce(sum)
}

var restantoDelTotal = (total, elements) => total - sumaDeArrayDeNumeros(elements)

var arrayDePalabras = (word, times) => {
    let words = []
    for (let index = 0; index < times; index++) {
        words.push(word)
    }

    return words
}
