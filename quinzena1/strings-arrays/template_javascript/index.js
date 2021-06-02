//Exercícios de interpretação de código

// Exercício 1

//a.  undefined
//b.  null
//c.  11
//d.  3
//e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f.  9


//----------------------------------------------------

//Exercício 2

//SUBI NUM ÔNIBUS EM MIRROCOS 27

//-----------------------------------------------------
//-----------------------------------------------------

//Exercícios de escrita de código

//Exercício 1 

//const nomeUsuario = prompt("Digite seu nome")
//const email = prompt("Digite seu email")

//console.log("O email", email,"foi cadastrado com sucesso. Seja bem-vinda(o),",nomeUsuario + "!")

//-------------------------------------------------------

//Exercício 2

const comidas = "Carnes, Saladas, Frutas, Barra de Proteina, Doces Fit"
const comidaUsuario = prompt("Qual sua comida preferida?")

console.log(comidas)
console.log("Essas são as minhas comidas preferidas: ",comidas.replaceAll(",", "\n"))
console.log("Carnes,", comidaUsuario,",Frutas, Barra de Proteina, Doces Fit")

//---------------------------------------------------------

//Exercício 3

let listaDeTarefas = []
const listaDeTarefas1 = prompt("Digite a primeira tarefa a ser realizada") 
const listaDeTarefas2 = prompt("Digite a segunda tarefa a ser realizada") 
const listaDeTarefas3 = prompt("Digite a terceira tarefa a ser realizada") 
listaDeTarefas.push(listaDeTarefas1, listaDeTarefas2, listaDeTarefas3)

console.log(listaDeTarefas)

const indice = prompt("Digite a tarefa que foi realizada")
listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas)

//------------------------------------------------------------

//Desafio

//Desafio 1

// const frase = prompt("Digite uma frase")
// Array[frase.length] 

// console.log(frase)

// //Desafio 2

// Array["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
// const Array[2]

// console.log(Array.length)

const tamanhoBase = prompt("Digite o tamnho da base do triangulo")
const alturaTriangulo = prompt("Digite a altura do triangulo")

const areaTriangulo = (tamanhoBase * alturaTriangulo) / 2

console.log("A area do triangulo:", areaTriangulo)