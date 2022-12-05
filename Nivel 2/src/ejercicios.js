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

const devuelveArray = () => [1]

const arrayConCosas = () => ['Perro', 5]

const seleccionArray = (array) => array[1]

const longitudDelArray = (array) => array.length

const llenamosArray = (array) => {
    array.push(4)
    return array
}

const vaciamosArray = (array) => {
    array.pop()
    return array
}

const seleccionPrimerArray = (array) => array[0]

const ultimoDelArray = (array) => array[array.length - 1]

const elElementoSeleccionado = (array, itemIndex) => array[itemIndex]

const otroElementoSeleccionado = (array, index) => array[index + 1]

const elPenultimo = (array) => {
    penultimateIndex = array.length - 2
    return array[penultimateIndex]
}


// Bucles y Arrays

const arrayDeNumeros = (numberOfElements) => {
    const newArray = []
    for (let index = 1; index <= numberOfElements; index++) {
        newArray.push(index)
    }

    return newArray
}

const sumaDeArrayDeNumeros = (array) => {
    const sum = (total, element) => total + element

    return array.reduce(sum)
}

const restantoDelTotal = (total, elements) => total - sumaDeArrayDeNumeros(elements)

const arrayDePalabras = (word, times) => {
    let words = []
    for (let index = 0; index < times; index++) {
        words.push(word)
    }

    return words
}


// Objetos

const miPrimerObjeto = objectWithName => objectWithName.nombre

const sumaDeCosasConObjetos = operands => operands.numero1 + operands.numero2

const masObjetos = (person, otherPerson) => person.nombre == otherPerson.nombre

const objetosYTextos = person => person.nombre.length > 5

const arraysYObjetos = results => results[0].total

const arrayConObjetos = operands => {
    const sum = (total, operand) => total + operand.numero
    return operands.reduce(sum, initialValue=0)
}


// Par o impar

const gestionandoNumeros = number => {
    if (number == 0) {
        return 'Es cero, no quiero gestionar esto'
    }

    if (number < 0) {
        return 'Es negativo, no me interesa'
    }

    if (number % 2 == 0) {
        return 'Es par'
    }

    return 'Es impar'
}
