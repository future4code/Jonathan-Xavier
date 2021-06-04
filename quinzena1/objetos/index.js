//OBJETOS

//Exercícios de interpretação de código

//1.

//a.

//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"

//---------------------------------------------------

//2.

//a.

//nome: "Juca", idade: 3, raca: "SRD"
//nome: "Juba", idade: 3, raca: "SRD"
//nome: "Jubo", idade: 3, raca: "SRD"


//b.

//A sintaxe dos tres pontos copia tudo o que está no objeto nomeado após o "..."

//-----------------------------------------------------

//3.

//a.

//false e undefined


//b.

/*false: O primeiro console.log mostra false, por que invoca a propriedade backender, que tem valor definido false
undefined: Imprime isso devido a propriedade altura não ter sido declarada, fica com valor indefinido*/


/*-------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------*/

//Exercícios de escrita de código

//1.

// //a.

// const pessoa = {
//     nome: "Jonathan",
//     apelidos: ["Dino"," Jho Jho "," Jhon"],
// }

// function dadosPessoais(inputPessoa){
//     const novaFuncao = {
//         ...inputPessoa,
//     }
//     return novaFuncao
//     }

// //b.

// const novosApelidos = {
//     ...pessoa,
//     apelidos: ["Dinera", "Jhony", "Jhou"]
// }

// const frase = dadosPessoais(novosApelidos)

// console.log(`Eu sou o ${frase.nome}, mas pode me chamar de: ${frase.apelidos}`)

// -----------------------------------------------------------------------------------

// //2.

// //a.

// const pessoa1 = {
//     nome: "Fernanda",
//     idade: 26,
//     profissao: "Médica"
// }

// const pessoa2 = {
//     nome: "Yasmin",
//     idade: 22,
//     profissao: "Estudante"
// }

// //b.

// function informacoesPessoais(dados1, dados2){
//     const objetos = pessoa1 + pessoa2

//     return objetos
// }
// informacoesPessoais(pessoa1, pessoa2)    
// console.log(["objetos.nome", "objetos.nome".length, "objetos.idade", "objetos.profissao", "objetos.profissao".length])

// ------------------------------------------------------------------------------------------------------------------------

// //3.

//a.

// const carrinho = []


// //b.

// const fruta1 = {
//     nome: "Morango",
//     disponibilidade: true,
// }

// const fruta2 = {
//     nome: "Melancia",
//     disponibilidade: true,
// }

// const fruta3 = {
//     nome: "Melão",
//     disponibilidade: true,
// }

// //c

// function frutas(f1, f2, f3){
// const fruteira = (fruta1, fruta2, fruta3)

// return fruteira

// }

// frutas(fruta1, fruta2, fruta3)
// carrinho.push(fruta1, fruta2, fruta3)
// console.log(carrinho)


//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------

//DESAFIO

//1.
// const nomePessoa = prompt("Qual seu nome?")
// const idadePessoa = prompt("Qual sua idade?")
// const profissaoPessoa = prompt("Qual sua profissão?")

// const dadosPessoa = {
//     nome: nomePessoa,
//     idade: idadePessoa,
//     profissao: profissaoPessoa,
// }
// function dados(information) {
//     const informacao = {
//     ...dadosPessoa,
//     }
//     return informacao
// }
// const dadosFinais = dados(dadosPessoa)
// console.log(${dadosPessoa.nome}, ${dados.idade}, {dados.profissao})
//----------------------------------------------------------------------------

//2. 
// const filme1 = {
//     nome: "Velozes e Furiosos",
//     anoLancamento: 2000
// }
// const filme2 = {
//     nome: "Velozes e Furiosos, desafio em Tokyo",
//     anoLancamento: 1998
// }
// function comparaFilmes(){
//     const filmes1 = filme1.anoLancamento < filme2.anoLancamento
//     console.log("O primeiro filme foi lancado antes do segundo?", false)
//     return  (filmes1)

// }
// function comparaFilmes2(){
//     const filmes2 = filme1.anoLancamento == filme2.anoLancamento
//     console.log("O primeiro filme foi lançado no mesmo ano do segundo?", true)
//     return (filmes2)
// }

// comparaFilmes()
// comparaFilmes2()
