´´´
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let numSomado = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      numeroEscolhido === arrayDeNumeros[i] ? numSomado += 1: false
    }
    return numSomado === 0 ? `Número não encontrado` : `Número ${numeroEscolhido} aparece ${numSomado} vezes`
}
´´´
