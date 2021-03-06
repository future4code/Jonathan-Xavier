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
  const funcaoFilmeFavorito = filmeFavorito()
  return (`Venha assistir ao filme ${funcaoFilmeFavorito.nome}, de ${funcaoFilmeFavorito.ano}, dirigido por ${funcaoFilmeFavorito.diretor} e estrelado por ${funcaoFilmeFavorito.atores.join(', ')}.`)
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const medidasRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: (lado1 + lado2) * 2,
    area: lado1 * lado2
  }
    return  medidasRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const dadosDaPessoa = {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
  return dadosDaPessoa
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const adultosMais18 = arrayDePessoas.filter((maiorDeIdade) => {
    return maiorDeIdade.idade >= 18
  })
  return adultosMais18

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const criancasMenos18 = arrayDePessoas.filter((menorDeIdade) => {
    return menorDeIdade.idade < 18
  })
  return criancasMenos18
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const arrayMultiplicacao = array.map((numeros) => {
    return numeros * 2
  })
  return arrayMultiplicacao
  }

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const arrayMultiplicacao = multiplicaArrayPor2(array)
  const arrayMultiplicacao2 = arrayMultiplicacao.map((numeros) => {
    return numeros.toString()
    })
    return arrayMultiplicacao2

}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const parImpar = array.map((paridade) => {
    if (paridade % 2 === 0) {
      return `${paridade} é par`
    } else {
      return `${paridade} é ímpar`
    }
  })
  return parImpar
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const permitirPessoas = pessoas.filter((requisitos) => {
    if ((requisitos.altura >= 1.5) && (requisitos.idade > 14) && (requisitos.idade < 60)) {
      return requisitos
    }
  })
  return permitirPessoas
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoPermitirPessoas = pessoas.filter((requisitos) => {
    if (!((requisitos.altura >= 1.5) && (requisitos.idade > 14) && (requisitos.idade < 60))) {
      return requisitos
    }
  })
  return naoPermitirPessoas
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let verificarVerdade = false;
  while (!verificarVerdade) {
    verificarVerdade = true;
    for (let i = 0; i < consultasNome.length - 1; i++) {
      let proximoNome = consultasNome[i + 1].nome
      let comparaInicial = (consultasNome[i].nome).localeCompare(proximoNome)
      if (comparaInicial === 1) {
        verificarVerdade = false;
        let aux = consultasNome[i + 1];
        consultasNome[i + 1] = consultasNome[i];
        consultasNome[i] = aux;
      }
    }
  }
  return consultasNome;

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  function mudaData (inputData) {
    const quebraPalavra = inputData.split(`/`)
    let dia = quebraPalavra[0]
    let mes = quebraPalavra[1]
    let ano = quebraPalavra[2]
    let final = [ano, mes, dia]
    return final
  }

  let verificarVerdade = false;
  while (!verificarVerdade) {
    verificarVerdade = true;
    for (let i = 0; i < consultasData.length - 1; i++) {
      let dataAntes = new Date(mudaData(consultasData[i].dataDaConsulta))
      let dataSeguinte = new Date(mudaData(consultasData[i + 1].dataDaConsulta))
      if (dataSeguinte < dataAntes) {
        verificarVerdade = false;
        let aux = consultasData[i + 1];
        consultasData[i + 1] = consultasData[i];
        consultasData[i] = aux;
      }
    }
  }
  return consultasData;
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
for (let i = 0; i < contas.length; i++){
    let somaContas
    somaContas = 0
    for (creditos of contas[i].compras){
      somaContas += Number(creditos)
    }
    contas[i].saldoTotal = contas[i].saldoTotal - somaContas
  }
  return contas
}
