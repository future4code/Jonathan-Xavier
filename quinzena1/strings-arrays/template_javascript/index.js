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

const listaDeTarefas = []
listaDeTarefas[0] = prompt("Digite a primeira tarefa a ser realizada") 
listaDeTarefas[1] = prompt("Digite a segunda tarefa a ser realizada") 
listaDeTarefas[2] = prompt("Digite a terceira tarefa a ser realizada") 

console.log(listaDeTarefas)

const tarefaRealizada = Number(prompt("Digite a tarefa que foi realizada"))
const removerDaLista = (listaDeTarefas[tarefaRealizada -1])
listaDeTarefas.splice(0,1,2)
console.log(listaDeTarefas)


