//Exercícios de interpretação de código

//1.

//a.
//O código pede ao usuário que digite um numero para verificar no teste, a paridade entre eles. 
//A linha de comando verifica que se o numero for igual a 0 é par, se não é ímpar


//b.
//Imprime o passou no teste para numeros que forem pares, numero dividido por 2 com resto igual a zero

//c.
//Imprime o não passou no teste para numeros que forem impares, numero dividido por 2 com resto diferente a zero

//---------------------------------------------------------------------------------------------------------------

//2.

//a.
//O código serve para saber o valor da fruta, buscando pelo sue nome

//b. 
//O preço da fruta  Maçã  é  R$  2.25

//c.
// A resposta será que o valor da Pêra é R$5, que é o último valor antes do último break.
//O mesmo acontece se digitar a fruta sem inicial maiúscula ou acentos, somente dará o valor certo se digitado conforme está no código.

//---------------------------------------------------------------------------------------------------------------------------------------

//3.

//a.
//A primeira linha está solicitando que o usuário digite um número para testar no programa

//b.
//Digitando 10: Esse número passou no teste, digitando -10: não vai aparecer nada, pois, não foi implementado condicão (else) para outra situacão que não seja o número ser positivo

//c.
//Existe um erro da variável mensagem não declarada, pois foi declarada dentro do escopo do if, o console.log não tem acesso, somente no escopo global

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

//1.

// const idadeUsuario = Number(prompt("Digite sua idade"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }

//2. 
//  let turnoAula = prompt("Em que turno você estuda? (Digite M para matutino, V para vespertino ou N para noturno)")

//  if (turnoAula = "M") {
//      console.log("Bom dia!")
//  }else if (turnoAula = "V") {
//      console.log("Boa tarde!")
//  }else{
//      console.log("Boa noite!")
//  }
 

//3.

// let turnoAula = prompt("Em que turno você estuda? (Digite M para matutino, V para vespertino ou N para noturno)")
// let periodo

//  switch (turnoAula) {
//      case "M":
//          periodo = console.log("Bom dia")
//          break
//      case "V":
//          periodo = console.log("Boa tarde!")
//          break
//      default:
//          periodo = console.log("Boa noite!")
//          break  
//  }


//4.

// let generoFilme = prompt("Qual o genero do filme que vamos assistir?")
// let precoIngresso = Number(prompt("Qual o valor do ingresso desse filme?"))
// let filme

// switch (generoFilme) {
//       case "Fantasia":
//           filme = console.log("Bom filme!")
//           break
//       default:
//           filme = console.log("Escolha outro filme :(")
// }
// switch (precoIngresso) {
//       case (precoIngresso <= 15):
//           filme = console.log("Bom filme!")
//           break
//       default:
//           filme = console.log("Escolha outro filme :(")
//           break
// }
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------

//DESAFIOS

let generoFilme = prompt("Qual o genero do filme que vamos assistir?")
let precoIngresso = Number(prompt("Qual o valor do ingresso desse filme?"))
let snack = prompt("Qual snack quer compar para ver o filme?")

function pelicula(teste) {
    if (generoFilme = "Fantasia")
    console.log("Bom filme!")
}else if (precoIngresso < 15) {
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
 console.log(pelicula)