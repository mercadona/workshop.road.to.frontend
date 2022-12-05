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
