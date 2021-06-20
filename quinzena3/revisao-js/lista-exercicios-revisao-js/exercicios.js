// EXERCÍCIO 01
function inverteArray(array) {
   const inverteArray = array.map((valor, i) => array[array.length - 1 - i]);
    return inverteArray
  }
// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numPares = []
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numPares.push(array[i] ** 2)
    }
  }
  return numPares
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numPares = []
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numPares.push(array[i])
    }
  }
  return numPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNum = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorNum) {
      maiorNum = array[i]
    }
  }
  return maiorNum
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  
  return [false, false, true, true, true]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numPares = []
    for (let i = 0; i < n; i++) {
      numPares.push(i * 2)
    }
    return numPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  if (a === b && b === c && c === a) {
  return `Equilátero`
} else if (a === b && a !== c){
  return "Isósceles"
} else {
  return 'Escaleno'
}
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  const comparacaoDosNumeros = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: false,
    diferenca: Math.abs(num1 - num2)
}
  if (num1 >= num2) {
    comparacaoDosNumeros.maiorNumero
    comparacaoDosNumeros.maiorDivisivelPorMenor = (num1 % num2 === 0)
    comparacaoDosNumeros.diferenca
  } else if (num2 > num1) {
    comparacaoDosNumeros.maiorNumero
    comparacaoDosNumeros.maiorDivisivelPorMenor = (num2 % num1 === 0)
    comparacaoDosNumeros.diferenca
  }

  return comparacaoDosNumeros
}
// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  maior = array[0]
  menor = array[0] * array[1]
  segundoMaior = array[0]
  segundoMenor = array[0]
  for (numeros of array) {
    if (numeros > maior) {
      segundoMaior = maior
      maior = numeros
    } else if (numeros < menor) {
      segundoMenor = menor
      menor = numeros
    }
  }
  if (array.length === 2) {
    segundoMaior = menor
    segundoMenor = maior
  } else if (array.length === 3) {
    let media = 0
    for (numeros2 of array) {
      if ((numeros2 > menor) && (numeros2 < maior)) {
        media = numbers2
      }
      segundoMaior = media
      segundoMenor = media
    }
  }
  return [segundoMaior, segundoMenor]
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let ordenaTroca = true
  while (ordenaTroca === true) {
    ordenaTroca = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i]
        array[i] = array[i + 1]
        array[i + 1] = aux
        ordenaTroca = true
      }
    }
  }
  return array
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filmeFavoritoAstrodev = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: [`Meryl Streep`, `Anne Hathaway`, `Emily Blunt`, `Stanley Tucci`]
  }
  return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
