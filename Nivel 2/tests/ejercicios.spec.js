describe('Ejercicios', () => {

  it('La funcion miPrimeraFuncion deberia devolver el string "Esta es mi primera funcion"', () => {
    const result = miPrimeraFuncion()
    expect(result).toBe('Esta es mi primera funcion')
  })

  it('una función que se llame esVerdadero que devuelva true', () => {
    const result = esVerdadero()
    expect(result).toBe(true)
  })
  
  it('una función que se llame noEsVerdadero que devuelva false', () => {
    const result = noEsVerdadero()
    expect(result).toBe(false)
  })
  
  it('una función que se llame malditoArray que devuelva array vacio', () => {
    const result = malditoArray()
    expect(result).toEqual([])
  })
  it('una función que se llame malditoObjeto que devuelva objeto vacio', () => {
    const result = malditoObjeto()
    expect(result).toEqual({})
  })
  it('una función que se llame elNumerito que devuelva el numero 5', () => {
    const result = elNumerito()
    expect(result).toBe(5)
  })
  
  it('Funcion mayorQueCinco, devuelve true si es mayor que 5', () => {
    const result = mayorQueCinco(6)
    expect(result).toBe(true)
  })
  it('Funcion mayorQueCinco, devuelve false si es menor que 5', () => {
    const result = mayorQueCinco(4)
    expect(result).toBe(false)
  })
  it('Funcion menorQueDiez, devuelve true si es menor que 10', () => {
    const result = menorQueDiez(6)
    expect(result).toBe(true)
  })
  it('Funcion menorQueDiez, devuelve false si es mayor que 10', () => {
    const result = menorQueDiez(11)
    expect(result).toBe(false)
  })
  it('Funcion comprobarTexto, devuelve true si el texto tiene mas de 50 caracters', () => {
    const result = comprobarTexto('123123412341234123412341234123412341234123412341234123412341234q234q234')
    expect(result).toBe(true)
  })
  it('Funcion comprobarTexto, devuelve false si el texto tiene menos de 50 caracters', () => {
    const result = comprobarTexto('lol')
    expect(result).toBe(false)
  })
  it('función comprobandoDosParametros que recibira 2 parametros que seran 2 numeros, devuelve true si ambos son mayor que 10', () => {
    const result = comprobandoDosParametros(12, 14)
    expect(result).toBe(true)
  })
  it('función comprobandoDosParametros que recibira 2 parametros que seran 2 numeros, devuelve false si ambos son menores que 10', () => {
    const result = comprobandoDosParametros(7, 3)
    expect(result).toBe(false)
  })
  it('función comprobandoTextos, devuelve "Tienen la misma longitud" si ambos textos tienen la misma longitud', () => {
    const result = comprobandoTextos('LOL', 'LOL')
    expect(result).toBe('Tienen la misma longitud')
  })
  it('función comprobandoTextos, devuelve false si ambos textos NO tienen la misma longitud', () => {
    const result = comprobandoTextos('LOL', 'LOLASO')
    expect(result).toBe(false)
  })
  it('Función alMenosUno recibe 2 parametros y devuelve true si almenos uno de ellos es mayor que 5', () => {
    const result = alMenosUno(1, 6)
    expect(result).toBe(true)
  })
  it('Función alMenosUno recibe 2 parametros y devuelve false ninguno de ellos es mayor que 5', () => {
    const result = alMenosUno(1, 1)
    expect(result).toBe(false)
  })
  it('Función algunTextoValido recibe 2 parametros y devuelve true si almenos uno de ellos tiene una longitud mayor de 50', () => {
    const result = algunTextoValido('123123412341234123412341234123412341234123412341234123412341234q234q234', 'ME')
    expect(result).toBe(true)
  })
  it('Función algunTextoValido recibe 2 parametros y devuelve false si ninguno de ellos tiene una longitud de 50', () => {
    const result = algunTextoValido('1', '1')
    expect(result).toBe(false)
  })
  it('Funcion reciboPeroQue que recibe un numero y lo multiplica por 2', () => {
    const result = reciboPeroQue(1)
    expect(result).toBe(undefined)
  })
  it('Funcion nadaDeNada que recibe un texto y añadimos nuestro nombre', () => {
    const result = nadaDeNada('LOL')
    expect(result).toBe(undefined)
  })
  
})

describe('Arrays:', () => {
it('Crea una funcion devuelveArray que devuelva un array con el numero 1 como primera elemento', () => {
  const result = devuelveArray()
  expect(result).toEqual([1])
  
})

it('Crea una funcion arrayConCosas que devuelva un array con el string "Perro" y el numero 5', () => {
  const result = arrayConCosas()
  expect(result).toEqual(['Perro', 5])
  })
  
it('Crea una funcion seleccionArray que recibe un array y devolvemos el segundo elemento de ese array', () => {
  const result = seleccionArray(['Perro', 'Gato'])
  expect(result).toEqual('Gato')
})
  
  
it('Crea una funcion longitudDelArray que recibe un array y devolvemos su longitud', () => {
  const result = longitudDelArray(['Perro', 'Gato'])
  expect(result).toEqual(2)
})

it('Crea una funcion llenamosArray que recibe un array...', () => {
  const result = llenamosArray(['Perro', 'Gato'])
  expect(result).toEqual(['Perro', 'Gato', 4])
})

it('Crea una funcion vaciamosArray que recibe un array...', () => {
  const result = vaciamosArray(['Perro', 'Gato'])
  expect(result).toEqual(['Perro'])
})

it('Crea una funcion seleccionPrimerArray que recibe un array y devolvemos el primer elemento de ese array', () => {
  const result = seleccionPrimerArray(['Perro', 'Gato'])
  expect(result).toEqual('Perro')
})

it('Crea una funcion ultimoDelArray que recibe un array y devolvemos el ultimo elemento de ese array', () => {
  const result = ultimoDelArray(['Perro', 'Gato'])
  expect(result).toEqual('Gato')
})


it('Crea una funcion elElementoSeleccionado que recibe 2 parametros...', () => {
  const result = elElementoSeleccionado(['Menta', 'Chocolate'], 1)
  expect(result).toEqual('Chocolate')
})

it('Crea una funcion otroElementoSeleccionado que recibe 2 parametros...', () => {
  const result = otroElementoSeleccionado(['Menta', 'Chocolate', 'Crema', 'Nata'], 1)
  expect(result).toEqual('Crema')
})

it('Crea una funcion elPenultimo que recibe un array...', () => {
  const result = elPenultimo(['Menta', 'Chocolate', 'Crema', 'Nata', 'Fresa'])
  expect(result).toEqual('Nata')
})
})

describe('Bucles y Arrays', () => {

it('ArrayDeNumeros devuelve un array con X numeros', () => {
  const result = arrayDeNumeros(5)
  expect(result).toEqual([1, 2, 3, 4, 5])
})


it('sumaDeArrayDeNumeros devuelve la suma de numeros', () => {
  const result = sumaDeArrayDeNumeros([1, 2, 4])
  expect(result).toEqual(7)
})



it('restantoDelTotal devuelve la resta del total', () => {
  const result = restantoDelTotal(100, [1, 2, 4])
  expect(result).toEqual(93)
})


it('arrayDePalabras devuelve un array palabras', () => {
  const result = arrayDePalabras('patata', 5)
  expect(result).toEqual(['patata','patata','patata','patata','patata'])
})

})



describe('Objetos', () => {

// Crea una funcion que se llame miPrimerObjeto que recibira un parametro que sera un objeto
// Devolveremos el valor de la key nombre: (Ej objeto: { nombre: 'David' })

it('miPrimerObjeto devuelve nombre', () => {
  const result = miPrimerObjeto({ nombre: 'Modric' })
  expect(result).toEqual('Modric')
})

// Crea una funcion que se llame sumaDeCosasConObjetos que recibira un parametro que sera un objeto.
// Este objeto tendra las keys numero1 y numero2. Devolveremos la suma de esos 2 numeros

it('sumaDeCosasConObjetos devuelve suma', () => {
  const result = sumaDeCosasConObjetos({ numero1: 5, numero2: 10})
  expect(result).toEqual(15)
})

// Crear una funcion que se llame masObjetos que recibira 2 parametros. Ambos seran objetos.
// Si la key nombre de ambos objetos es igual devolveremos true
// Si no son iguales devolveremos false

it('masObjetos devuelve true/false', () => {
  const result = masObjetos({ nombre: 'David'}, { nombre: 'David'})
  expect(result).toEqual(true)
})

// Crea una funcion que se llame objetosYTextos que recibira 1 objeto con una key nombre que sera un text.
// Si el nombre tiene mas de 5 letras devolveremos true, sino, devolveremos false

it('objetosYTextos devuelve true/false', () => {
  const result = objetosYTextos({ nombre: 'Militao' })
  expect(result).toEqual(true)
})

// Crea una funcion arraysYObjetos que recibira un parametro que sera un array y en su primera 
// posicion habra un objeto con una key total. Devolvemos el valor de total

it('arraysYObjetos devuelve total', () => {
  const result = arraysYObjetos([{ total: 10 }])
  expect(result).toEqual(10)
})

// Crea una funcion arrayConObjetos que recibir un array lleno de objetos tal que asi: { numero: 1 }
// Devuelve la suma de todos los numeros de todos los objetos que existan en el array
  
it('arrayConObjetos devuelve total', () => {
  const result = arrayConObjetos([{numero: 10},{numero: 5},{ numero: 10}])
  expect(result).toEqual(25)
})

})

describe('Par o impar', () => {

  it('Gestionando numeros mandando un Cero', () => {
    const result = gestionandoNumeros(0)
    expect(result).toEqual('Es cero, no quiero gestionar esto')
  })
  
  it('Gestionando numeros mandando un Negativo', () => {
    const result = gestionandoNumeros(-5)
    expect(result).toEqual('Es negativo, no me interesa')
  })
  
  it('Gestionando numeros mandando un Par', () => {
    const result = gestionandoNumeros(2)
    expect(result).toEqual('Es par')
  })
  
  it('Gestionando numeros mandando un Impar', () => {
    const result = gestionandoNumeros(3)
    expect(result).toEqual('Es impar')
  })

})

describe('El mas pequeño', () => {

  it('El mas chiquito devuelve el mas corto', () => {
    const result = elMasChiquito(['Perro', 'Gato', 'Miura', 'Raton', 'Pez'])
    expect(result).toEqual('Pez')
  })
  
  it('El mas chiquito devuelve el mas corto', () => {
    const result = elMasChiquito(['Perro', 'Gato', 'Miura', 'Comodin', 'Pez'])
    expect(result).toEqual('Tenemos comodin')
  })
  
  it('El mas chiquito devuelve el mas corto', () => {
    const result = elMasChiquito(['Perro', 'Gato', 'Miura', 'Raton', 'Pez', 'Tortuga'])
    expect(result).toEqual('Demasiado largo, paso de buscar')
  })

})

describe('creandoTipos', () => {

  it('creandoTipos devuelve longitud', () => {
    const result = elMasChiquito(['Perro'])
    expect(result).toEqual(5)
  })
  
  it('creandoTipos devuelve numero', () => {
    const result = elMasChiquito([3])
    expect(result).toEqual(3)
  })
  
  it('creandoTipos devuelve numero', () => {
    const result = elMasChiquito([{ nombre: 'Perro'}])
    expect(result).toEqual('Perro')
  })


  describe("Find the longest word", () => {
    it("should create a function named findLongestWord", () => {
      expect(typeof findLongestWord).toBe("function");
    });
  
    it("should return null when called with an empty array", () => {
      expect(findLongestWord([])).toBe(null);
    });
  
    it("should return the word when called with a single-word array", () => {
      expect(findLongestWord(["foo"])).toBe("foo");
    });
  
    it("should return the first occurrence of the word when longest have multiple occurrences ", () => {
      expect(findLongestWord(["foo", "bar"])).toBe("foo");
      expect(findLongestWord(["bar", "foo"])).toBe("bar");
    });
  
    it("should return the longest occurrence when it has multiple words", () => {
      let words = ["a", "zab", "12abc", "$$abcd", "abcde", "mercadona"];
      for (let i = 0; i < 10; i++) {
        words = shuffle(words);
        expect(findLongestWord(words)).toBe("mercadona");
      }
    });
  });
})


describe("Calculate the sum of array of numbers", () => {
  it("should create a function named sumNumbers", () => {
    expect(typeof sumNumbers).toBe("function");
  });

  it("should return zero if receives an empty array when called", () => {
    expect(sumNumbers([])).toBe(0);
  });

  it("should return the sum with one number array", () => {
    expect(sumNumbers([4])).toBe(4);
  });

  it("should return zero if all elements are zero", () => {
    expect(sumNumbers([0, 0, 0, 0, 0])).toBe(0);
  });

  it("should return the sum when passed array of numbers", () => {
    expect(sumNumbers([10, 5, 4, 32, 8])).toBe(59);
  });
});